'use client';

import { ReactNode } from 'react';
import Link from 'next/link';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <Link href="/" className="flex items-center group">
              <span className="text-2xl font-medium text-gray-900 group-hover:text-gray-700 transition-colors">
                BetterPapers
              </span>
            </Link>
            <div className="flex items-center space-x-8">
              <Link 
                href="/" 
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gray-900 after:transition-all hover:after:w-full"
              >
                Shop
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        {children}
      </main>

      <footer className="bg-white border-t border-gray-100 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} BetterPapers. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 