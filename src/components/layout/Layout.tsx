import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans antialiased selection:bg-blue-600 selection:text-white">
      <Header />
      <main id="main-content" className="flex-1 focus:outline-none" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

