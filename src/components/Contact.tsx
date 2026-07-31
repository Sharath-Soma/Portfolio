import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, Check, AlertCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Reveal } from './Reveal';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [toast, setToast] = useState<{ show: boolean; message: string; isError?: boolean }>({
    show: false,
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const showNotification = (message: string, isError = false) => {
    setToast({ show: true, message, isError });
    setTimeout(() => {
      setToast({ show: false, message: '' });
    }, 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      showNotification('Please fill in all fields before sending.', true);
      return;
    }

    // Create mailto link
    const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;
    showNotification('Opening your default email application...');

    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-28 md:py-36 bg-[#F8F5EF] border-t border-[#E5E0D8] relative z-10 overflow-hidden">
      {/* Toast Notification */}
      {toast.show && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#222222] text-[#F8F5EF] px-5 py-3 rounded-2xl border border-[#333333] shadow-xl flex items-center gap-3 font-mono text-xs animate-in fade-in slide-in-from-bottom-2 duration-200">
          {toast.isError ? (
            <AlertCircle className="w-4 h-4 text-[#D97745]" />
          ) : (
            <Check className="w-4 h-4 text-[#D97745]" />
          )}
          <span>{toast.message}</span>
        </div>
      )}

      <div className="max-w-[1280px] mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <Reveal width="100%" delay={0}>
          <div className="mb-12 md:mb-16">
            <div className="w-12 h-[2px] bg-[#D97745] mb-6" />
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#D97745] font-semibold mb-3">
              <span>08 // CONTACT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#222222] tracking-tight mb-4">
              Let's Build Something Together
            </h2>
            <p className="text-base text-[#6B6660] max-w-2xl font-normal leading-relaxed">
              Whether it's AI, Data Science, or Software Engineering, I'm always open to meaningful conversations and exciting opportunities.
            </p>
          </div>
        </Reveal>

        {/* Outer Container Grid: Desktop 340px + 1fr with 64px gap */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-8 lg:gap-[64px] items-start">
          
          {/* LEFT COLUMN (340px) */}
          <Reveal width="100%" delay={0.1}>
            <div className="w-full flex flex-col gap-[20px]">
              
              {/* Three Info Cards */}
              <div className="w-full flex flex-col gap-[20px]">
                {/* Email Card */}
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="bg-[#FFFFFF] border border-[#E5E0D8] rounded-[20px] p-5 sm:p-6 shadow-premium hover:border-[#D97745]/50 hover:shadow-premium-hover card-hover-effect hover:-translate-y-1.5 flex items-start gap-4 group block w-full"
                >
                  <div className="w-10 h-10 rounded-full bg-[#D97745]/10 border border-[#D97745]/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5 text-[#D97745]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-xs font-mono text-[#6B6660] font-semibold uppercase tracking-wider block mb-0.5">
                      Email
                    </span>
                    <p className="font-heading font-bold text-sm sm:text-base text-[#222222] group-hover:text-[#D97745] transition-colors break-all">
                      {PERSONAL_INFO.email}
                    </p>
                  </div>
                </a>

                {/* Phone Card */}
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="bg-[#FFFFFF] border border-[#E5E0D8] rounded-[20px] p-5 sm:p-6 shadow-premium hover:border-[#D97745]/50 hover:shadow-premium-hover card-hover-effect hover:-translate-y-1.5 flex items-start gap-4 group block w-full"
                >
                  <div className="w-10 h-10 rounded-full bg-[#D97745]/10 border border-[#D97745]/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5 text-[#D97745]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-xs font-mono text-[#6B6660] font-semibold uppercase tracking-wider block mb-0.5">
                      Phone
                    </span>
                    <p className="font-heading font-bold text-sm sm:text-base text-[#222222] group-hover:text-[#D97745] transition-colors truncate">
                      {PERSONAL_INFO.phone}
                    </p>
                  </div>
                </a>

                {/* Location Card */}
                <div className="bg-[#FFFFFF] border border-[#E5E0D8] rounded-[20px] p-5 sm:p-6 shadow-premium flex items-start gap-4 w-full">
                  <div className="w-10 h-10 rounded-full bg-[#D97745]/10 border border-[#D97745]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-[#D97745]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-xs font-mono text-[#6B6660] font-semibold uppercase tracking-wider block mb-0.5">
                      Location
                    </span>
                    <p className="font-heading font-bold text-sm sm:text-base text-[#222222] truncate">
                      {PERSONAL_INFO.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Subtle Divider */}
              <div className="w-full h-[1px] bg-[#E5E0D8] my-1" />

              {/* Social Connect Card */}
              <div className="bg-[#FFFFFF] border border-[#E5E0D8] rounded-[20px] p-5 sm:p-6 shadow-premium w-full">
                <h3 className="font-heading font-bold text-[#222222] text-sm uppercase tracking-wider font-mono mb-4">
                  Connect
                </h3>
                <div className="flex items-center gap-4">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="w-11 h-11 rounded-full bg-[#FFFFFF] border border-[#D97745]/30 flex items-center justify-center text-[#D97745] hover:bg-[#D97745]/10 hover:border-[#D97745] hover:shadow-premium btn-tactile hover:-translate-y-1"
                  >
                    <Linkedin className="w-5 h-5 text-[#D97745]" />
                  </a>

                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="w-11 h-11 rounded-full bg-[#FFFFFF] border border-[#D97745]/30 flex items-center justify-center text-[#D97745] hover:bg-[#D97745]/10 hover:border-[#D97745] hover:shadow-premium btn-tactile hover:-translate-y-1"
                  >
                    <Github className="w-5 h-5 text-[#D97745]" />
                  </a>
                </div>
              </div>

            </div>
          </Reveal>

          {/* RIGHT COLUMN (1fr) */}
          <Reveal width="100%" delay={0.2}>
            <div className="w-full bg-[#FFFFFF] border border-[#E5E0D8] rounded-[20px] p-6 sm:p-8 shadow-premium">
              <form onSubmit={handleSubmit} className="w-full flex flex-col gap-[20px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px] w-full">
                  {/* Name Input */}
                  <div className="w-full">
                    <label className="block text-xs font-mono font-semibold text-[#55524D] uppercase tracking-wider mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-[#F8F5EF] border border-[#E5E0D8] rounded-[18px] px-4 py-3.5 text-sm text-[#222222] placeholder:text-[#A09A90] focus:outline-none focus:border-[#D97745] focus:ring-2 focus:ring-[#D97745]/50 transition-colors font-sans"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="w-full">
                    <label className="block text-xs font-mono font-semibold text-[#55524D] uppercase tracking-wider mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="e.g. alex@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[#F8F5EF] border border-[#E5E0D8] rounded-[18px] px-4 py-3.5 text-sm text-[#222222] placeholder:text-[#A09A90] focus:outline-none focus:border-[#D97745] focus:ring-2 focus:ring-[#D97745]/50 transition-colors font-sans"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="w-full">
                  <label className="block text-xs font-mono font-semibold text-[#55524D] uppercase tracking-wider mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Project Inquiry / Collaboration"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-[#F8F5EF] border border-[#E5E0D8] rounded-[18px] px-4 py-3.5 text-sm text-[#222222] placeholder:text-[#A09A90] focus:outline-none focus:border-[#D97745] focus:ring-2 focus:ring-[#D97745]/50 transition-colors font-sans"
                  />
                </div>

                {/* Message Textarea */}
                <div className="w-full">
                  <label className="block text-xs font-mono font-semibold text-[#55524D] uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={6}
                    placeholder="Tell me about your project, ideas, or opportunity..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-[#F8F5EF] border border-[#E5E0D8] rounded-[18px] px-4 py-3.5 text-sm text-[#222222] placeholder:text-[#A09A90] focus:outline-none focus:border-[#D97745] focus:ring-2 focus:ring-[#D97745]/50 transition-colors font-sans resize-none"
                  />
                </div>

                {/* Send Message Button */}
                <div className="w-full pt-1">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-4 bg-[#D97745] hover:bg-[#C56636] text-white rounded-full font-mono font-bold text-sm flex items-center justify-center gap-2.5 btn-tactile shadow-glow cursor-pointer"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};