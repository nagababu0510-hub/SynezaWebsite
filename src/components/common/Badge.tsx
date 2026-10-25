import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'education' | 'software' | 'ai' | 'neutral' | 'success' | 'warning';
  className?: string;
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  className = '',
  size = 'md',
}) => {
  const sizeClasses = size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-2.5 py-1 text-xs font-semibold';

  const variantClasses = {
    education: 'bg-emerald-50 text-emerald-800 border border-emerald-200/80',
    software: 'bg-blue-50 text-blue-800 border border-blue-200/80',
    ai: 'bg-purple-50 text-purple-800 border border-purple-200/80',
    neutral: 'bg-slate-100 text-slate-700 border border-slate-200',
    success: 'bg-green-50 text-green-800 border border-green-200',
    warning: 'bg-amber-50 text-amber-800 border border-amber-200',
  };

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full uppercase tracking-wider ${sizeClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

