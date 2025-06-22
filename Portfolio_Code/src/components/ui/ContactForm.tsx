import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';          // ← NEW
import Button from './Button';
import { Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  /* ---------- state ---------- */
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  /* ---------- form ref for EmailJS ---------- */
  const formRef = useRef<HTMLFormElement>(null);

  /* ---------- helpers ---------- */
  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateForm = () => {
    const newErrors = { name: '', email: '', message: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  /* ---------- handlers ---------- */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm() || !formRef.current) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.sendForm(
        'service_kdyeinz',          // ← your Service ID
        'template_m6s0qjn',        // ← your Template ID
        formRef.current,
        { publicKey: 'mMMZM-voTjqsCUB94' }, // ← your Public Key
      );
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ---------- ui ---------- */
  return (
    <form ref={formRef} onSubmit={handleSubmit} className="max-w-lg mx-auto">
      {/* hidden field so EmailJS can use it in the subject */}
      <input type="hidden" name="title" value={formData.subject || 'Website Inquiry'} />

      {submitStatus === 'success' && (
        <div className="bg-success/10 border border-success text-success p-4 rounded-lg mb-6 animate-fade-in">
          Thank you for your message! I'll get back to you as soon as possible.
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="bg-error/10 border border-error text-error p-4 rounded-lg mb-6 animate-fade-in">
          There was an error sending your message. Please try again later.
        </div>
      )}

      {/* Name */}
      <div className="mb-6">
        <label htmlFor="name" className="block mb-2 text-gray-800 dark:text-white">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border ${
            errors.name ? 'border-error' : 'border-gray-200 dark:border-gray-700'
          } focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-800 dark:text-white`}
          placeholder="Your name"
        />
        {errors.name && <p className="mt-1 text-error text-sm">{errors.name}</p>}
      </div>

      {/* Email */}
      <div className="mb-6">
        <label htmlFor="email" className="block mb-2 text-gray-800 dark:text-white">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border ${
            errors.email ? 'border-error' : 'border-gray-200 dark:border-gray-700'
          } focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-800 dark:text-white`}
          placeholder="your.email@example.com"
        />
        {errors.email && <p className="mt-1 text-error text-sm">{errors.email}</p>}
      </div>

      {/* Subject (optional) */}
      <div className="mb-6">
        <label htmlFor="subject" className="block mb-2 text-gray-800 dark:text-white">
          Subject (Optional)
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-800 dark:text-white"
          placeholder="What is this about?"
        />
      </div>

      {/* Message */}
      <div className="mb-6">
        <label htmlFor="message" className="block mb-2 text-gray-800 dark:text-white">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={`w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border ${
            errors.message ? 'border-error' : 'border-gray-200 dark:border-gray-700'
          } focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-800 dark:text-white resize-none`}
          placeholder="Your message here..."
        />
        {errors.message && <p className="mt-1 text-error text-sm">{errors.message}</p>}
      </div>

      {/* Submit */}
      <Button
        type="submit"
        variant="primary"
        fullWidth
        icon={<Send size={18} />}
        disabled={isSubmitting}
        className="mt-2"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
};

export default ContactForm;
