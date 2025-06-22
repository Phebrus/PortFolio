import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [sending, setSending] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setSending(true);
    try {
      await emailjs.sendForm(
        'service_kdyeinz',
        'template_m6s0qjn',
        formRef.current,
        { publicKey: 'mMMZM-voTjqsCUB94' },
      );
      alert('✅ Message sent! We’ll reply soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      alert('❌ Something went wrong. Please try again later.');
    } finally {
      setSending(false);
    }
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Mail className="h-12 w-12 mx-auto mb-4 text-gray-400" />
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-400 mb-2">
            Have questions about our products or need assistance? We’d love to
            hear from you.
          </p>

        </div>

        <form ref={formRef} onSubmit={sendEmail} className="max-w-2xl mx-auto">
          {/* Hidden title field for subject line */}
          <input type="hidden" name="title" value="Product Inquiry" />

          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-300 mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300"
              placeholder="John Doe"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-300 mb-2"
            >
              Your Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300"
              placeholder="you@example.com"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-300 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={6}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent resize-none transition-all duration-300"
              placeholder="Tell us about the product you’re interested in or any questions you have..."
            />
          </div>

          <button
            type="submit"
            disabled={sending}
            className="w-full bg-white text-gray-900 py-3 px-6 font-semibold hover:bg-gray-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 flex items-center justify-center space-x-2 transform hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <Send className="h-5 w-5" />
            <span>{sending ? 'Sending...' : 'Send Message'}</span>
          </button>
        </form>

        <div className="text-center mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-400">© 2025 STARGRIND. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
