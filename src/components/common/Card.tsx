import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  borderTopColor?: 'primary' | 'teal' | 'ai' | 'none';
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverable = false,
  borderTopColor = 'none',
}) => {
  const topBorderClasses = {
    primary: 'border-t-4 border-t-blue-600',
    teal: 'border-t-4 border-t-teal-600',
    ai: 'border-t-4 border-t-purple-600',
    none: '',
  };

  const hoverClasses = hoverable
    ? 'transition-all duration-200 hover:-translate-y-1 hover:shadow-elevated'
    : '';

  return (
    <div
      className={`bg-white rounded-xl border border-slate-200/90 shadow-card overflow-hidden ${topBorderClasses[borderTopColor]} ${hoverClasses} ${className}`}
    >
      {children}
    </div>
  );
};

