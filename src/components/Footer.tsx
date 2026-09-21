"use client";

import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Info */}
          <div className="col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              <div className="bg-white p-1 rounded-xl">
                <img src="/logo.jpg" alt="Pempek Betigo Logo" className="h-12 md:h-16 w-auto object-contain" />
              </div>
              <div className="text-3xl font-bold tracking-tighter text-white">
                Pempek <span className="text-gray-300">Betigo</span>
              </div>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Authentic Palembang cuisine right at your doorstep. We use only premium ingredients to serve the best Pempek.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/share/19bfc8iyiP/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://www.instagram.com/pempekbetigo?stkn=MTFxOHQ0Y3hmYTR5dQ==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://www.tiktok.com/@pempek.betigo?_r=1&_t=ZS-99uuYMvYdgC" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v3a3 3 0 0 1-3-3"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-white/20 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Menu', 'About Us', 'Contact', 'Gallery'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '') === 'home' ? '' : item.toLowerCase().replace(' ', '')}`} className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-6 border-b border-white/20 pb-2 inline-block">Contact Us</h4>
            <ul className="space-y-4 text-gray-300">
              <li className="flex gap-3 items-start">
                <MapPin className="text-primary shrink-0 mt-1" size={20} />
                <span>Ruko JSquare No. 6–8, Komplek JCity Medan Johor, Kota Medan</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="text-primary shrink-0" size={20} />
                <span>+62 811-711-475 (Hendi)</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="text-primary shrink-0" size={20} />
                <span>pempekbetigo333@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Pempek Betigo. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
