import React from 'react';
import { Link } from 'react-router-dom';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'teal' | 'ghost' | 'navy';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  external = false,
  fullWidth = false,
  children,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]';

  const sizeStyles = {
    sm: 'min-h-[44px] min-w-[44px] px-4 py-2 text-xs sm:text-sm',
    md: 'min-h-[44px] min-w-[44px] px-5 py-2.5 text-sm sm:text-base',
    lg: 'min-h-[48px] min-w-[48px] px-6 py-3.5 text-base sm:text-lg font-semibold',
  };

  const variantStyles = {
    primary:
      'bg-blue-800 text-white hover:bg-blue-900 focus:ring-blue-700 shadow-sm border border-transparent',
    secondary:
      'bg-slate-100 text-slate-900 hover:bg-slate-200 focus:ring-slate-500 border border-slate-300',
    outline:
      'bg-transparent text-slate-900 hover:bg-slate-100 focus:ring-blue-700 border-2 border-slate-400',
    teal:
      'bg-teal-800 text-white hover:bg-teal-900 focus:ring-teal-700 shadow-sm border border-transparent',
    navy:
      'bg-slate-950 text-white hover:bg-slate-900 focus:ring-slate-700 shadow-sm border border-slate-800',
    ghost:
      'bg-transparent text-slate-800 hover:text-slate-950 hover:bg-slate-100 focus:ring-slate-500',
  };

  const widthStyle = fullWidth ? 'w-full' : '';
  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyle} ${className}`;

  if (href) {
    if (external || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
      return (
        <a
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }
    return (
      <Link to={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

