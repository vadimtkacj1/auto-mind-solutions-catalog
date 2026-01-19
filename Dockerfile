# --- STAGE 1: Build ---
FROM node:20-alpine AS builder
WORKDIR /app

# Установка зависимостей
COPY package*.json ./
RUN npm install

# Переменные сборки (Build Arguments)
ARG VITE_BASE_URL
ENV VITE_BASE_URL=${VITE_BASE_URL}

# Копируем исходный код
COPY . .

# Увеличиваем лимит памяти для стабильной сборки Vite
ENV NODE_OPTIONS="--max-old-space-size=4096"
RUN npm run build

# --- STAGE 2: Runner (Nginx) ---
FROM nginx:stable-alpine AS runner

# Копируем статику из Vite (папка dist) в стандартную папку Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Настройка Nginx для поддержки SPA (Single Page Application)
# Это предотвратит 404 ошибки при обновлении страниц
RUN echo 'server { \
    listen 80; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html; \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]