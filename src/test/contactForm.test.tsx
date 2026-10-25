import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { ConfigProvider } from '@/context/ConfigContext';
import { ContactPage } from '@/pages/ContactPage';
import { defaultAppConfig } from '@/config/defaults';

const renderContactPage = () => {
  return render(
    <ConfigProvider initialConfig={defaultAppConfig}>
      <BrowserRouter>
        <ContactPage />
      </BrowserRouter>
    </ConfigProvider>
  );
};

describe('Accessible Multi-Intent Contact Form', () => {
  it('renders form inputs with accessible labels and initial category', () => {
    renderContactPage();

    expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Business or Official Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Enquiry Focus/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Project or Programme Overview/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Submit Enquiry/i })).toBeInTheDocument();
  });

  it('validates required fields and shows error messages when submitted empty', async () => {
    renderContactPage();

    const submitBtn = screen.getByRole('button', { name: /Submit Enquiry/i });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText('Full name is required.')).toBeInTheDocument();
      expect(screen.getByText('Email address is required.')).toBeInTheDocument();
      expect(screen.getByText('Please provide a brief summary of your requirements.')).toBeInTheDocument();
    });
  });

  it('validates email format properly', async () => {
    renderContactPage();

    const emailInput = screen.getByLabelText(/Business or Official Email/i);
    fireEvent.change(emailInput, { target: { value: 'not-an-email' } });

    const submitBtn = screen.getByRole('button', { name: /Submit Enquiry/i });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText('Please provide a valid email address.')).toBeInTheDocument();
    });
  });

  it('reveals institutional fields when an education category is selected', async () => {
    renderContactPage();

    const categorySelect = screen.getByLabelText(/Enquiry Focus/i);
    fireEvent.change(categorySelect, { target: { value: 'college-assessment' } });

    await waitFor(() => {
      expect(screen.getByText('Institutional Details')).toBeInTheDocument();
      expect(screen.getByLabelText(/College \/ University Name/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Approx. Student Cohort Size/i)).toBeInTheDocument();
    });
  });

  it('reveals organization & tech stack fields when a software category is selected', async () => {
    renderContactPage();

    const categorySelect = screen.getByLabelText(/Enquiry Focus/i);
    fireEvent.change(categorySelect, { target: { value: 'custom-software' } });

    await waitFor(() => {
      expect(screen.getByText('Organization & Project Parameters')).toBeInTheDocument();
      expect(screen.getByLabelText(/Company \/ Organization Name/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Current Tech Stack/i)).toBeInTheDocument();
    });
  });

  it('successfully submits valid enquiry and displays receipt reference ID', async () => {
    renderContactPage();

    // Fill valid inputs
    fireEvent.change(screen.getByLabelText(/Full Name/i), {
      target: { value: 'Nitya Sharma' },
    });
    fireEvent.change(screen.getByLabelText(/Business or Official Email/i), {
      target: { value: 'nitya.sharma@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/Project or Programme Overview/i), {
      target: {
        value: 'We need custom software development for an internal inventory and order management portal.',
      },
    });

    // Fast-forward submission (simulate user having taken time)
    const submitBtn = screen.getByRole('button', { name: /Submit Enquiry/i });
    fireEvent.click(submitBtn);

    await waitFor(
      () => {
        expect(screen.getByText(/Thank You, Nitya Sharma!/i)).toBeInTheDocument();
        expect(screen.getByText(/has been received with reference ID/i)).toBeInTheDocument();
      },
      { timeout: 3000 }
    );
  });
});
