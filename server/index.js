import express from 'express';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS
app.use(cors());
app.use(express.json());

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Configure multer for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    // Use componentId as filename
    const componentId = req.body.componentId || Date.now();
    cb(null, `${componentId}.png`);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit
});

// API Routes

// Upload thumbnail
app.post('/api/thumbnails', upload.single('image'), (req, res) => {
  try {
    console.log('Upload request received');
    console.log('Body:', req.body);
    console.log('File:', req.file);

    if (!req.file) {
      console.error('No file in request');
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const componentId = req.body.componentId;
    if (!componentId) {
      console.error('No componentId in request');
      return res.status(400).json({ error: 'componentId is required' });
    }

    // Rename file to componentId.png
    const oldPath = req.file.path;
    const newPath = path.join(uploadsDir, `${componentId}.png`);

    // Delete old file if exists
    if (fs.existsSync(newPath)) {
      fs.unlinkSync(newPath);
    }

    // Rename uploaded file
    fs.renameSync(oldPath, newPath);

    console.log(`Successfully uploaded thumbnail for ${componentId}`);
    console.log(`File saved as: ${newPath}`);

    res.json({
      success: true,
      componentId,
      url: `/api/thumbnails/${componentId}`
    });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: 'Failed to upload thumbnail' });
  }
});

// Get thumbnail
app.get('/api/thumbnails/:componentId', (req, res) => {
  try {
    const { componentId } = req.params;
    const filePath = path.join(uploadsDir, `${componentId}.png`);

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: 'Thumbnail not found' });
    }

    res.sendFile(filePath);
  } catch (error) {
    console.error('Get thumbnail error:', error);
    res.status(500).json({ error: 'Failed to get thumbnail' });
  }
});

// Delete thumbnail
app.delete('/api/thumbnails/:componentId', (req, res) => {
  try {
    const { componentId } = req.params;
    const filePath = path.join(uploadsDir, `${componentId}.png`);

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    res.json({ success: true });
  } catch (error) {
    console.error('Delete error:', error);
    res.status(500).json({ error: 'Failed to delete thumbnail' });
  }
});

// Check if thumbnail exists
app.head('/api/thumbnails/:componentId', (req, res) => {
  try {
    const { componentId } = req.params;
    const filePath = path.join(uploadsDir, `${componentId}.png`);

    if (fs.existsSync(filePath)) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (error) {
    res.status(500).end();
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Uploads directory: ${uploadsDir}`);
});
