import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useConfig } from '@/context/ConfigContext';
import { Button } from '@/components/common/Button';
import { Badge } from '@/components/common/Badge';
import {
  Menu,
  X,
  ChevronDown,
  Code2,
  Sparkles,
  GraduationCap,
  Briefcase,
  Layers,
  ArrowRight,
} from 'lucide-react';

export const Header: React.FC = () => {
  const { config } = useConfig();
  const { header, branding, navigation } = config;
  const location = useLocation();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>({});
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard navigation: Escape key closes menus
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!header.enabled) return null;

  const toggleDropdown = (id: string) => {
    setActiveDropdown((prev) => (prev === id ? null : id));
  };

  const toggleMobileSubmenu = (id: string) => {
    setMobileExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const renderPillarIcon = (pillar?: string) => {
    switch (pillar) {
      case 'education':
        return <GraduationCap className="w-4 h-4 text-emerald-600 flex-shrink-0" />;
      case 'software':
        return <Code2 className="w-4 h-4 text-blue-600 flex-shrink-0" />;
      case 'ai':
        return <Sparkles className="w-4 h-4 text-purple-600 flex-shrink-0" />;
      default:
        return <Layers className="w-4 h-4 text-slate-500 flex-shrink-0" />;
    }
  };

  return (
    <>
      {/* Skip to Main Content Link for WCAG 2.2 AA Keyboard Navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
      >
        Skip to main content
      </a>

      {/* Announcement Bar */}
      {header.announcementBar?.enabled && (
        <aside
          aria-label="Announcement"
          className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800 transition-colors"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 flex-wrap">
              {header.announcementBar.badge && (
                <span className="bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded text-[11px] font-semibold tracking-wide uppercase">
                  {header.announcementBar.badge}
                </span>
              )}
              <span className="font-normal text-slate-300">{header.announcementBar.text}</span>
            </div>
            {header.announcementBar.linkUrl && header.announcementBar.linkLabel && (
              <Link
                to={header.announcementBar.linkUrl}
                className="inline-flex items-center gap-1 font-medium text-blue-400 hover:text-blue-300 hover:underline flex-shrink-0"
              >
                {header.announcementBar.linkLabel}
                <ArrowRight className="w-3 h-3" />
              </Link>
            )}
          </div>
        </aside>
      )}

      {/* Main Header */}
      <header
        className={`w-full bg-white/95 backdrop-blur-md border-b border-slate-200 z-40 transition-shadow ${
          header.sticky ? 'sticky top-0' : 'relative'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo */}
            <div className="flex items-center gap-3">
              <Link
                to="/"
                className="flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg p-1"
                aria-label={`${branding.companyName} Home`}
              >
                {branding.logo.showIcon && (
                  <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-sm flex-shrink-0">
                    <Code2 className="w-5 h-5" aria-hidden="true" />
                  </div>
                )}
                <div className="flex flex-col">
                  {header.showCompanyName && (
                    <span className="font-bold text-xl tracking-tight text-slate-900 leading-none">
                      {branding.logo.text}
                    </span>
                  )}
                  {branding.logo.badgeText && (
                    <span className="text-[10px] font-semibold tracking-widest text-blue-600 uppercase mt-0.5">
                      {branding.logo.badgeText}
                    </span>
                  )}
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav
              ref={dropdownRef}
              aria-label="Main Navigation"
              className="hidden lg:flex items-center gap-1 xl:gap-2"
            >
              {navigation.mainNav
                .filter((item) => item.enabled)
                .map((item) => {
                  const hasChildren = item.children && item.children.length > 0;
                  const isDropdownActive = activeDropdown === item.id;
                  const isCurrent = location.pathname === item.href;

                  if (!hasChildren) {
                    return (
                      <Link
                        key={item.id}
                        to={item.href}
                        className={`min-h-[44px] inline-flex items-center px-3.5 py-2 rounded-md text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-700 ${
                          isCurrent
                            ? 'text-blue-900 bg-blue-50/90 font-bold'
                            : 'text-slate-800 hover:text-slate-950 hover:bg-slate-100'
                        }`}
                        aria-current={isCurrent ? 'page' : undefined}
                      >
                        {item.label}
                      </Link>
                    );
                  }

                  return (
                    <div key={item.id} className="relative">
                      <button
                        type="button"
                        onClick={() => toggleDropdown(item.id)}
                        onKeyDown={(e) => {
                          if (e.key === 'ArrowDown') {
                            e.preventDefault();
                            setActiveDropdown(item.id);
                          }
                        }}
                        aria-expanded={isDropdownActive}
                        aria-haspopup="true"
                        aria-label={`${item.label} submenu`}
                        className={`min-h-[44px] inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-700 ${
                          isDropdownActive || location.pathname.startsWith(item.href)
                            ? 'text-blue-900 bg-blue-50/90 font-bold'
                            : 'text-slate-800 hover:text-slate-950 hover:bg-slate-100'
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isDropdownActive ? 'rotate-180 text-blue-800' : 'text-slate-600'
                          }`}
                          aria-hidden="true"
                        />
                      </button>

                      {/* Dropdown Menu */}
                      {isDropdownActive && (
                        <div
                          role="menu"
                          aria-label={`${item.label} links`}
                          className="absolute left-0 mt-2 w-80 sm:w-96 rounded-xl bg-white shadow-elevated border border-slate-200/90 py-2.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                        >
                          <div className="px-3 py-1.5 mb-1 border-b border-slate-100">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700">
                              {item.label} Services & Pathways
                            </span>
                          </div>
                          <div className="max-h-[70vh] overflow-y-auto px-1 py-1">
                            {item.children
                              ?.filter((child) => child.enabled)
                              .map((child) => (
                                <Link
                                  key={child.id}
                                  to={child.href}
                                  role="menuitem"
                                  onClick={() => setActiveDropdown(null)}
                                  className="flex items-start gap-3 p-2.5 rounded-lg min-h-[44px] hover:bg-slate-50 transition-colors focus:outline-none focus:bg-slate-100 group"
                                >
                                  <div className="mt-0.5 p-1 rounded bg-slate-100 group-hover:bg-white group-hover:shadow-xs transition-colors">
                                    {renderPillarIcon(child.pillar)}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2">
                                      <span className="text-sm font-bold text-slate-900 group-hover:text-blue-800 transition-colors">
                                        {child.label}
                                      </span>
                                      {child.badge && (
                                        <span className="px-1.5 py-0.2 text-[10px] font-bold bg-blue-50 text-blue-900 rounded border border-blue-300">
                                          {child.badge}
                                        </span>
                                      )}
                                    </div>
                                    {child.description && (
                                      <p className="text-xs text-slate-700 mt-0.5 line-clamp-2 leading-relaxed font-medium">
                                        {child.description}
                                      </p>
                                    )}
                                  </div>
                                </Link>
                              ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              {header.secondaryCta?.enabled && (
                <Button
                  variant="outline"
                  size="sm"
                  href={header.secondaryCta.href}
                  className="hidden xl:inline-flex"
                >
                  <GraduationCap className="w-4 h-4 mr-1.5 text-emerald-700" />
                  {header.secondaryCta.label}
                </Button>
              )}
              {header.primaryCta?.enabled && (
                <Button variant="primary" size="sm" href={header.primaryCta.href}>
                  <Briefcase className="w-4 h-4 mr-1.5" />
                  {header.primaryCta.label}
                </Button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              {header.primaryCta?.enabled && (
                <Button
                  variant="primary"
                  size="sm"
                  href={header.primaryCta.href}
                  className="text-xs px-3 py-1.5"
                >
                  Enquire
                </Button>
              )}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation"
                aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
                className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center p-2 rounded-lg text-slate-800 hover:text-slate-950 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-700"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="lg:hidden border-t border-slate-200 bg-white shadow-xl max-h-[calc(100vh-5rem)] overflow-y-auto animate-in slide-in-from-top-2 duration-200"
          >
            <div className="px-4 py-4 space-y-2">
              {navigation.mainNav
                .filter((item) => item.enabled)
                .map((item) => {
                  const hasChildren = item.children && item.children.length > 0;
                  const isExpanded = !!mobileExpanded[item.id];

                  if (!hasChildren) {
                    return (
                      <Link
                        key={item.id}
                        to={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
                          location.pathname === item.href
                            ? 'bg-blue-50 text-blue-600 font-semibold'
                            : 'text-slate-800 hover:bg-slate-100'
                        }`}
                      >
                        {item.label}
                      </Link>
                    );
                  }

                  return (
                    <div key={item.id} className="border-b border-slate-100 pb-2">
                      <button
                        type="button"
                        onClick={() => toggleMobileSubmenu(item.id)}
                        aria-expanded={isExpanded}
                        className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-100 text-left"
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-slate-500 transition-transform ${
                            isExpanded ? 'rotate-180 text-blue-600' : ''
                          }`}
                        />
                      </button>

                      {isExpanded && (
                        <div className="pl-3 pr-1 py-1 space-y-1">
                          {item.children
                            ?.filter((c) => c.enabled)
                            .map((child) => (
                              <Link
                                key={child.id}
                                to={child.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-start gap-2.5 px-3 py-2 rounded-md hover:bg-slate-100 text-sm"
                              >
                                <span className="mt-0.5">{renderPillarIcon(child.pillar)}</span>
                                <div>
                                  <div className="font-medium text-slate-900">{child.label}</div>
                                  {child.description && (
                                    <div className="text-xs text-slate-500 line-clamp-1">
                                      {child.description}
                                    </div>
                                  )}
                                </div>
                              </Link>
                            ))}
                        </div>
                      )}
                    </div>
                  );
                })}

              {/* Mobile CTAs */}
              <div className="pt-4 space-y-2 border-t border-slate-200">
                {header.secondaryCta?.enabled && (
                  <Button
                    variant="outline"
                    fullWidth
                    href={header.secondaryCta.href}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <GraduationCap className="w-4 h-4 mr-2 text-emerald-700" />
                    {header.secondaryCta.label}
                  </Button>
                )}
                {header.primaryCta?.enabled && (
                  <Button
                    variant="primary"
                    fullWidth
                    href={header.primaryCta.href}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Briefcase className="w-4 h-4 mr-2" />
                    {header.primaryCta.label}
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

