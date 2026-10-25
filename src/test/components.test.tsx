import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { ConfigProvider } from '@/context/ConfigContext';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { defaultAppConfig } from '@/config/defaults';

const renderWithProviders = (ui: React.ReactElement, customConfig = defaultAppConfig) => {
  return render(
    <ConfigProvider initialConfig={customConfig}>
      <BrowserRouter>{ui}</BrowserRouter>
    </ConfigProvider>
  );
};

describe('Core Layout & Navigation Components', () => {
  it('renders Header with company logo and configured navigation items', () => {
    renderWithProviders(<Header />);

    // Check company name / logo
    expect(screen.getByText('SYNEZA')).toBeInTheDocument();
    expect(screen.getByText('TECHNOLOGIES')).toBeInTheDocument();

    // Check main navigation links
    expect(screen.getByRole('link', { name: /About Us/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Education & Employability/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Technology Services/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /AI & LLM Solutions/i })).toBeInTheDocument();

    // Check dual CTAs
    expect(screen.getByRole('link', { name: /Discuss Your Project/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /College Programmes/i })).toBeInTheDocument();
  });

  it('renders skip to main content link for keyboard accessibility', () => {
    renderWithProviders(<Header />);
    const skipLink = screen.getByText(/Skip to main content/i);
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute('href', '#main-content');
  });

  it('opens and closes navigation dropdowns on user interaction', () => {
    renderWithProviders(<Header />);
    const dropdownBtn = screen.getByRole('button', { name: /Education & Employability/i });

    // Initially dropdown items are not in document
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();

    // Click to open dropdown
    fireEvent.click(dropdownBtn);
    expect(screen.getByRole('menu')).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: /Employability Assessment/i })).toBeInTheDocument();

    // Click again to close dropdown
    fireEvent.click(dropdownBtn);
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });

  it('renders Footer with multiple columns, contact information, and legal links', () => {
    renderWithProviders(<Footer />);

    // Columns
    expect(screen.getByText('Technology Services')).toBeInTheDocument();
    expect(screen.getByText('AI & LLM Solutions')).toBeInTheDocument();
    expect(screen.getByText('Education & Employability')).toBeInTheDocument();

    // Contact details
    expect(screen.getByText('contact@syneza.com')).toBeInTheDocument();
    expect(screen.getByText('Bengaluru, Karnataka, India')).toBeInTheDocument();

    // Legal links
    expect(screen.getByRole('link', { name: /Privacy Policy/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Terms of Service/i })).toBeInTheDocument();
  });
});
