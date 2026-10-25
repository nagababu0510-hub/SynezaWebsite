import React from 'react';
import { Link } from 'react-router-dom';
import { useConfig } from '@/context/ConfigContext';
import { Code2, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const { config } = useConfig();
  const { footer, site, branding, socialLinks } = config;

  if (!footer.enabled) return null;

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Brand & Link Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info & Contact Block */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-lg p-1 -ml-1"
              aria-label={`${branding.companyName} Home`}
            >
              {footer.showLogo && (
                <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white flex-shrink-0">
                  <Code2 className="w-5 h-5" aria-hidden="true" />
                </div>
              )}
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tight text-white leading-none">
                  {branding.logo.text}
                </span>
                {branding.logo.badgeText && (
                  <span className="text-[10px] font-semibold tracking-widest text-blue-400 uppercase mt-0.5">
                    {branding.logo.badgeText}
                  </span>
                )}
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {footer.companyDescription}
            </p>

            {/* Direct Contact info */}
            {footer.contactDetails.enabled && (
              <address className="not-italic space-y-2 pt-2 text-xs text-slate-400">
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <a
                    href={`mailto:${footer.contactDetails.email}`}
                    className="hover:text-white transition-colors focus:outline-none focus:underline"
                  >
                    {footer.contactDetails.email}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <a
                    href={`tel:${footer.contactDetails.phone.replace(/[^0-9+]/g, '')}`}
                    className="hover:text-white transition-colors focus:outline-none focus:underline"
                  >
                    {footer.contactDetails.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>{footer.contactDetails.location}</span>
                </div>
              </address>
            )}
          </div>

          {/* Dynamic Configurable Link Columns */}
          {footer.columns
            .filter((col) => col.enabled)
            .map((col) => (
              <div key={col.id} className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                  {col.heading}
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm">
                  {col.links.map((link, idx) => (
                    <li key={idx}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1 focus:outline-none focus:underline"
                        >
                          {link.label}
                          <ExternalLink className="w-3 h-3 text-slate-500" />
                        </a>
                      ) : (
                        <Link
                          to={link.href}
                          className="text-slate-400 hover:text-white transition-colors focus:outline-none focus:underline"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>

        {/* Bottom Section: Copyright, Socials, & Legal Links */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <p>{footer.copyrightText || site.copyrightText}</p>
          </div>

          {/* Social Links */}
          {footer.socialLinksEnabled && (
            <div className="flex items-center gap-4">
              {socialLinks.links
                .filter((s) => s.enabled)
                .map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors focus:outline-none focus:underline"
                    aria-label={`Syneza Technologies on ${social.platform}`}
                  >
                    {social.platform}
                  </a>
                ))}
            </div>
          )}

          {/* Legal Links */}
          <div className="flex items-center gap-6">
            {footer.legalLinks.map((link, idx) => (
              <Link
                key={idx}
                to={link.href}
                className="text-slate-400 hover:text-white transition-colors focus:outline-none focus:underline"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

