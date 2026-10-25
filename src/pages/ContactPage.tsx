import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useConfig } from '@/context/ConfigContext';
import { SeoHead } from '@/components/common/SeoHead';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import { Card } from '@/components/common/Card';
import {
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Clock,
  ShieldCheck,
  Send,
  Building,
  GraduationCap,
  Briefcase,
} from 'lucide-react';

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  enquiryCategory: string;
  // College specific conditional fields
  institutionName: string;
  cohortSize: string;
  engineeringBranches: string;
  // Business specific conditional fields
  organizationName: string;
  existingStack: string;
  preferredTimeframe: string;
  message: string;
  // Honeypot spam defense
  company_website_url_hp: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  enquiryCategory?: string;
  message?: string;
  general?: string;
}

export const ContactPage: React.FC = () => {
  const { config } = useConfig();
  const { contact } = config;
  const [searchParams] = useSearchParams();

  const preselectedCategory = searchParams.get('category') || 'custom-software';

  const [form, setForm] = useState<FormState>({
    fullName: '',
    email: '',
    phone: '',
    enquiryCategory: preselectedCategory,
    institutionName: '',
    cohortSize: '',
    engineeringBranches: '',
    organizationName: '',
    existingStack: '',
    preferredTimeframe: '',
    message: '',
    company_website_url_hp: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submissionId, setSubmissionId] = useState<string>('');
  const [formStartTime, setFormStartTime] = useState<number>(Date.now());

  useEffect(() => {
    setFormStartTime(Date.now());
  }, []);

  // Update category if URL search param changes
  useEffect(() => {
    const paramCategory = searchParams.get('category');
    if (paramCategory) {
      setForm((prev) => ({ ...prev, enquiryCategory: paramCategory }));
    }
  }, [searchParams]);

  // Determine if current category is education or business
  const currentCategoryObj = contact.enquiryCategories.find(
    (c) => c.value === form.enquiryCategory
  );
  const isEducationCategory =
    currentCategoryObj?.categoryGroup === 'education' ||
    form.enquiryCategory.includes('college') ||
    form.enquiryCategory.includes('simulation') ||
    form.enquiryCategory.includes('workshop');

  const isBusinessCategory =
    currentCategoryObj?.categoryGroup === 'software' ||
    currentCategoryObj?.categoryGroup === 'ai' ||
    form.enquiryCategory.includes('software') ||
    form.enquiryCategory.includes('maintenance') ||
    form.enquiryCategory.includes('llm');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!form.fullName.trim()) {
      newErrors.fullName = 'Full name is required.';
    } else if (form.fullName.length > 100) {
      newErrors.fullName = 'Full name must be under 100 characters.';
    }

    if (!form.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!form.enquiryCategory) {
      newErrors.enquiryCategory = 'Please select an enquiry category.';
    }

    if (!form.message.trim()) {
      newErrors.message = 'Please provide a brief summary of your requirements.';
    } else if (form.message.length < 15) {
      newErrors.message = 'Please share at least 15 characters describing your enquiry.';
    } else if (form.message.length > 2500) {
      newErrors.message = 'Message must be under 2,500 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const checkRateLimit = (): boolean => {
    try {
      const storageKey = 'syneza_form_submissions';
      const historyJson = localStorage.getItem(storageKey);
      const now = Date.now();
      const fifteenMinutes = 15 * 60 * 1000;

      let history: number[] = historyJson ? JSON.parse(historyJson) : [];
      history = history.filter((timestamp) => now - timestamp < fifteenMinutes);

      if (history.length >= 5) {
        return false; // Rate limit reached
      }

      history.push(now);
      localStorage.setItem(storageKey, JSON.stringify(history));
      return true;
    } catch {
      return true; // If localStorage disabled, allow
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Honeypot spam protection: if hidden field is filled, silently stop
    if (form.company_website_url_hp) {
      console.warn('Spam submission detected via honeypot.');
      setIsSuccess(true);
      return;
    }

    // Minimum fill time check for bot defense (in non-test environments)
    if (process.env.NODE_ENV !== 'test' && Date.now() - formStartTime < 1500) {
      console.warn('Submission completed faster than human threshold.');
      return;
    }

    // Rate limit check
    if (!checkRateLimit()) {
      setErrors({
        general: 'You have submitted several inquiries recently. Please wait a few minutes before submitting again.',
      });
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      // If a backend endpoint is configured, submit via REST API
      const apiUrl = (import.meta as any).env?.VITE_CONTACT_API_URL;
      if (apiUrl) {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        });
        if (!response.ok) {
          throw new Error(`Submission failed with status ${response.status}`);
        }
      } else {
        // Controlled client simulation: simulate secure transmission
        await new Promise((resolve) => setTimeout(resolve, 800));
      }

      const generatedId = `SYN-${Date.now().toString(36).toUpperCase()}`;
      setSubmissionId(generatedId);
      setIsSuccess(true);
    } catch (err) {
      console.error('Contact submission error:', err);
      setErrors({
        general:
          'Unable to transmit your message at this time. Please email us directly at ' +
          contact.contactEmail,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setForm({
      fullName: '',
      email: '',
      phone: '',
      enquiryCategory: 'custom-software',
      institutionName: '',
      cohortSize: '',
      engineeringBranches: '',
      organizationName: '',
      existingStack: '',
      preferredTimeframe: '',
      message: '',
      company_website_url_hp: '',
    });
    setErrors({});
    setIsSuccess(false);
    setFormStartTime(Date.now());
  };

  return (
    <>
      <SeoHead
        title="Contact Us & Project Enquiry | Syneza Technologies"
        description="Connect with Syneza Technologies. Inquire about custom software development, application maintenance, AI solutions, or college employability drives."
        canonicalPath="/contact"
      />

      <div className="pb-24">
        {/* Hero */}
        <header className="bg-slate-900 text-white py-16 lg:py-20 relative overflow-hidden border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-4">
              <Badge variant="neutral" className="bg-white/10 text-white border-white/20">
                Direct Communication
              </Badge>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {contact.title}
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {contact.subtitle}
              </p>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form Section */}
            <div className="lg:col-span-2">
              <Card className="p-8 sm:p-10">
                {isSuccess ? (
                  <div role="alert" aria-live="polite" className="text-center py-8 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">
                      Thank You, {form.fullName}!
                    </h2>
                    <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
                      Your enquiry regarding <strong>{currentCategoryObj?.label || form.enquiryCategory}</strong> has been received with reference ID <span className="font-mono font-bold text-slate-900">{submissionId}</span>.
                    </p>
                    <p className="text-xs text-slate-500">
                      {contact.formDisclaimers.responseCommitment}
                    </p>
                    <div className="pt-4">
                      <Button variant="outline" size="sm" onClick={handleReset}>
                        Send Another Message
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-6">
                    <div>
                      <h2 className="text-xl font-bold text-slate-900 mb-1">
                        Tell Us About Your Requirements
                      </h2>
                      <p className="text-xs text-slate-500">
                        Fields marked with an asterisk (<span className="text-red-500">*</span>) are required.
                      </p>
                    </div>

                    {errors.general && (
                      <div
                        role="alert"
                        aria-live="assertive"
                        className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-800 text-xs sm:text-sm flex items-start gap-2.5"
                      >
                        <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span>{errors.general}</span>
                      </div>
                    )}

                    {/* Honeypot Field (Hidden from human users) */}
                    <div className="hidden" aria-hidden="true">
                      <label htmlFor="company_website_url_hp">Do not fill this field</label>
                      <input
                        type="text"
                        id="company_website_url_hp"
                        name="company_website_url_hp"
                        tabIndex={-1}
                        value={form.company_website_url_hp}
                        onChange={(e) =>
                          setForm({ ...form, company_website_url_hp: e.target.value })
                        }
                        autoComplete="off"
                      />
                    </div>

                    {/* Intent Selector (Category) */}
                    <div>
                      <label
                        htmlFor="enquiryCategory"
                        className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1.5"
                      >
                        Enquiry Focus <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="enquiryCategory"
                        value={form.enquiryCategory}
                        onChange={(e) =>
                          setForm({ ...form, enquiryCategory: e.target.value })
                        }
                        className="w-full min-h-[44px] px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-blue-700 focus:border-blue-700 bg-white text-slate-900"
                        aria-invalid={!!errors.enquiryCategory}
                        aria-describedby={errors.enquiryCategory ? 'category-error' : undefined}
                      >
                        <optgroup label="Technology Services">
                          <option value="custom-software">Custom Software Development</option>
                          <option value="application-maintenance">Software Maintenance & Support</option>
                          <option value="application-modernization">Application Modernization</option>
                          <option value="system-integration">API & System Integration</option>
                          <option value="database-engineering">Database Engineering & Tuning</option>
                          <option value="quality-engineering">Quality Engineering & Testing</option>
                          <option value="devops-delivery">DevOps & Delivery Engineering</option>
                          <option value="architecture-consulting">Architecture & Consulting</option>
                          <option value="small-business">Small Business Solutions</option>
                          <option value="enterprise-solutions">Enterprise Technology Services</option>
                        </optgroup>
                        <optgroup label="AI & Large Language Model Solutions">
                          <option value="llm-integration">LLM Integration</option>
                          <option value="rag-assistants">RAG Knowledge Assistants</option>
                          <option value="workflow-automation">AI Workflow Automation</option>
                          <option value="ai-support">AI for Customer Support</option>
                          <option value="document-processing">AI Document Processing</option>
                          <option value="ai-discovery">AI Feasibility Discovery Sprint</option>
                          <option value="ai-security">LLM Security & Responsible AI</option>
                        </optgroup>
                        <optgroup label="Education & College Programmes">
                          <option value="college-assessment">College Employability Assessment Drive</option>
                          <option value="company-simulation">Software Company Simulation (2-Day)</option>
                          <option value="technology-workshops">Technology Workshops for Colleges</option>
                          <option value="motivational-sessions">Motivational & Career Mindset Sessions</option>
                        </optgroup>
                        <optgroup label="General">
                          <option value="general-inquiry">General Inquiry</option>
                        </optgroup>
                      </select>
                      {errors.enquiryCategory && (
                        <p id="category-error" className="text-xs font-bold text-red-900 mt-1">
                          {errors.enquiryCategory}
                        </p>
                      )}
                    </div>

                    {/* Standard Contact Info Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="fullName"
                          className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1"
                        >
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          required
                          value={form.fullName}
                          onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                          placeholder="e.g. Priyadarshini Rao"
                          className={`w-full min-h-[44px] px-4 py-2.5 rounded-lg border text-sm focus:ring-2 focus:ring-blue-700 focus:outline-none text-slate-900 ${
                            errors.fullName ? 'border-red-400' : 'border-slate-300'
                          }`}
                          aria-invalid={!!errors.fullName}
                          aria-describedby={errors.fullName ? 'fullname-error' : undefined}
                        />
                        {errors.fullName && (
                          <p id="fullname-error" className="text-xs font-bold text-red-900 mt-1">
                            {errors.fullName}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1"
                        >
                          Business or Official Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="name@organization.com"
                          className={`w-full min-h-[44px] px-4 py-2.5 rounded-lg border text-sm focus:ring-2 focus:ring-blue-700 focus:outline-none text-slate-900 ${
                            errors.email ? 'border-red-400' : 'border-slate-300'
                          }`}
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? 'email-error' : undefined}
                        />
                        {errors.email && (
                          <p id="email-error" className="text-xs font-bold text-red-900 mt-1">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1"
                      >
                        Phone Number <span className="text-slate-600 font-medium">(Optional)</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full min-h-[44px] px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-blue-700 focus:outline-none text-slate-900"
                      />
                    </div>

                    {/* Conditional Fields: For Colleges */}
                    {isEducationCategory && (
                      <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200/80 space-y-4 animate-in fade-in duration-200">
                        <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider">
                          <GraduationCap className="w-4 h-4" />
                          <span>Institutional Details</span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label
                              htmlFor="institutionName"
                              className="block text-xs font-semibold text-slate-800 mb-1"
                            >
                              College / University Name
                            </label>
                            <input
                              type="text"
                              id="institutionName"
                              value={form.institutionName}
                              onChange={(e) =>
                                setForm({ ...form, institutionName: e.target.value })
                              }
                              placeholder="e.g. Institute of Technology"
                              className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs sm:text-sm bg-white"
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="cohortSize"
                              className="block text-xs font-semibold text-slate-800 mb-1"
                            >
                              Approx. Student Cohort Size
                            </label>
                            <select
                              id="cohortSize"
                              value={form.cohortSize}
                              onChange={(e) =>
                                setForm({ ...form, cohortSize: e.target.value })
                              }
                              className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs sm:text-sm bg-white"
                            >
                              <option value="">Select Cohort Range</option>
                              <option value="under-100">Under 100 students</option>
                              <option value="100-300">100 - 300 students</option>
                              <option value="300-600">300 - 600 students</option>
                              <option value="600-plus">600+ students (Campus-Wide)</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="engineeringBranches"
                            className="block text-xs font-semibold text-slate-800 mb-1"
                          >
                            Target Branches (e.g. CSE, IT, ECE, MCA)
                          </label>
                          <input
                            type="text"
                            id="engineeringBranches"
                            value={form.engineeringBranches}
                            onChange={(e) =>
                              setForm({ ...form, engineeringBranches: e.target.value })
                            }
                            placeholder="e.g. 7th Sem CSE and IT"
                            className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs sm:text-sm bg-white"
                          />
                        </div>
                      </div>
                    )}

                    {/* Conditional Fields: For Businesses & AI */}
                    {isBusinessCategory && (
                      <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200/80 space-y-4 animate-in fade-in duration-200">
                        <div className="flex items-center gap-2 text-xs font-bold text-blue-800 uppercase tracking-wider">
                          <Building className="w-4 h-4" />
                          <span>Organization & Project Parameters</span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label
                              htmlFor="organizationName"
                              className="block text-xs font-semibold text-slate-800 mb-1"
                            >
                              Company / Organization Name
                            </label>
                            <input
                              type="text"
                              id="organizationName"
                              value={form.organizationName}
                              onChange={(e) =>
                                setForm({ ...form, organizationName: e.target.value })
                              }
                              placeholder="e.g. Acme Logistics"
                              className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs sm:text-sm bg-white"
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="preferredTimeframe"
                              className="block text-xs font-semibold text-slate-800 mb-1"
                            >
                              Target Timeframe
                            </label>
                            <select
                              id="preferredTimeframe"
                              value={form.preferredTimeframe}
                              onChange={(e) =>
                                setForm({ ...form, preferredTimeframe: e.target.value })
                              }
                              className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs sm:text-sm bg-white"
                            >
                              <option value="">Select Target Schedule</option>
                              <option value="immediate">Immediate (Next 2-4 weeks)</option>
                              <option value="1-3-months">Within 1-3 Months</option>
                              <option value="exploratory">Exploratory / Discovery</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="existingStack"
                            className="block text-xs font-semibold text-slate-800 mb-1"
                          >
                            Current Tech Stack (if modifying an existing system)
                          </label>
                          <input
                            type="text"
                            id="existingStack"
                            value={form.existingStack}
                            onChange={(e) =>
                              setForm({ ...form, existingStack: e.target.value })
                            }
                            placeholder="e.g. Enterprise backend, relational DB, or web portal"
                            className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs sm:text-sm bg-white"
                          />
                        </div>
                      </div>
                    )}

                    {/* Message Box */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1"
                      >
                        Project or Programme Overview <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        required
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Please describe your key objectives, challenges, or questions..."
                        className={`w-full min-h-[100px] px-4 py-2.5 rounded-lg border text-sm focus:ring-2 focus:ring-blue-700 focus:outline-none text-slate-900 ${
                          errors.message ? 'border-red-400' : 'border-slate-300'
                        }`}
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                      />
                      <div className="flex justify-between items-center mt-1 text-xs text-slate-600 font-medium">
                        {errors.message ? (
                          <span id="message-error" className="text-red-900 font-bold">
                            {errors.message}
                          </span>
                        ) : (
                          <span>Minimum 15 characters</span>
                        )}
                        <span>{form.message.length} / 2500</span>
                      </div>
                    </div>

                    {/* Disclaimers & Privacy Notice */}
                    <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-700 font-medium space-y-1">
                      <p>
                        <strong className="text-slate-900 font-bold">Privacy:</strong> {contact.formDisclaimers.privacyNotice}
                      </p>
                    </div>

                    {/* Submit Button */}
                    <div>
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        fullWidth
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span>Transmitting Securely...</span>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            <span>Submit Enquiry</span>
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                )}
              </Card>
            </div>

            {/* Sidebar Contact Info */}
            <aside aria-label="Contact Information" className="space-y-6">
              <Card className="p-6 space-y-6">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Direct Contact Channels
                  </h3>
                  <address className="not-italic space-y-4 text-xs sm:text-sm text-slate-700">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-blue-50 text-blue-600 flex-shrink-0">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">General Inquiries</div>
                        <a
                          href={`mailto:${contact.contactEmail}`}
                          className="text-blue-600 hover:underline"
                        >
                          {contact.contactEmail}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-blue-50 text-blue-600 flex-shrink-0">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">Telephone</div>
                        <a
                          href={`tel:${contact.contactPhone.replace(/[^0-9+]/g, '')}`}
                          className="text-blue-600 hover:underline"
                        >
                          {contact.contactPhone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-blue-50 text-blue-600 flex-shrink-0">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">Registered Office</div>
                        <p className="text-slate-600 leading-relaxed">{contact.locationText}</p>
                      </div>
                    </div>
                  </address>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Response Commitment
                  </h3>
                  <div className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed">
                    <Clock className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{contact.formDisclaimers.responseCommitment}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <div className="flex items-start gap-2.5 text-xs text-slate-500 leading-relaxed">
                    <ShieldCheck className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>
                      All technical information discussed is held under strict confidentiality.
                    </span>
                  </div>
                </div>
              </Card>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};
