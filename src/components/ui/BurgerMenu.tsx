import { Menu, X } from 'lucide-react';
import { useState, ReactNode } from 'react';

interface BurgerMenuProps {
  /** Navigation items to display */
  children: ReactNode;
  /** Additional class names for styling */
  className?: string;
  /** Custom button class names */
  buttonClassName?: string;
  /** Custom menu class names */
  menuClassName?: string;
}

export function BurgerMenu({ 
  children, 
  className = '', 
  buttonClassName = '',
  menuClassName = ''
}: BurgerMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={className}>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`lg:hidden p-2 rounded-md hover:bg-slate-100 transition-colors ${buttonClassName}`}
        aria-label={isOpen ? 'סגור תפריט' : 'פתח תפריט'}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`lg:hidden border-t border-slate-200 ${menuClassName}`}>
          <div className="space-y-1 px-4 py-4">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

interface BurgerMenuItemProps {
  /** Link URL */
  href?: string;
  /** Item content */
  children: ReactNode;
  /** Custom class names */
  className?: string;
  /** Click handler */
  onClick?: () => void;
}

export function BurgerMenuItem({ 
  href = '#', 
  children, 
  className = '',
  onClick 
}: BurgerMenuItemProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`hover:bg-slate-100 block rounded px-3 py-2 text-base font-medium ${className}`}
    >
      {children}
    </a>
  );
}

interface BurgerMenuButtonProps {
  /** Button content */
  children: ReactNode;
  /** Custom class names */
  className?: string;
  /** Click handler */
  onClick?: () => void;
  /** Button variant */
  variant?: 'primary' | 'secondary' | 'outline';
}

export function BurgerMenuButton({ 
  children, 
  className = '',
  onClick,
  variant = 'primary'
}: BurgerMenuButtonProps) {
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-slate-200 text-slate-700 hover:bg-slate-300',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
  };

  return (
    <button
      onClick={onClick}
      className={`w-full rounded-lg px-5 py-2 text-sm font-medium transition-all duration-200 ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
