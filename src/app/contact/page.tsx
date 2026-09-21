"use client";

import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Contact Us</h1>
          <p className="text-lg text-gray-600">
            We'd love to hear from you. Whether you have a question about our menu, pricing, or want to make a large order, our team is ready to answer all your questions.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="w-full lg:w-3/5 bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-foreground mb-8">Send us a Message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-gray-50 focus:bg-white" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-gray-50 focus:bg-white" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                <input type="text" id="subject" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-gray-50 focus:bg-white" placeholder="How can we help you?" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-gray-50 focus:bg-white resize-none" placeholder="Your message here..."></textarea>
              </div>
              <button className="w-full bg-primary hover:bg-primary-hover text-white py-4 rounded-xl font-semibold transition-all flex justify-center items-center gap-2">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="w-full lg:w-2/5 space-y-8">
             <div className="bg-secondary text-white p-8 md:p-10 rounded-3xl shadow-sm">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <MapPin className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Our Location</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">Jl. Pempek Asli No. 123<br />Palembang, South Sumatra<br />Indonesia</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Phone className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Phone Number</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">+62 812 3456 7890<br />+62 711 1234 567</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Email Address</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">hello@pempekbetigo.com<br />orders@pempekbetigo.com</p>
                    </div>
                  </li>
                </ul>
             </div>

             <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                   <Clock className="text-primary" size={24} />
                </div>
                <div>
                   <h4 className="font-semibold text-foreground mb-2">Opening Hours</h4>
                   <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Monday - Friday:</span>
                      <span className="font-medium text-foreground">08:00 - 22:00</span>
                   </div>
                   <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Saturday - Sunday:</span>
                      <span className="font-medium text-foreground">07:00 - 23:00</span>
                   </div>
                   <p className="text-primary text-xs mt-3 font-medium">*We are open on public holidays</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
