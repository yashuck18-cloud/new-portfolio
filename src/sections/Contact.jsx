import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, MapPin, Send, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import SectionHeading from '../components/ui/SectionHeading';
import GlowingCard from '../components/ui/GlowingCard';
import Button from '../components/ui/Button';
import LocationMap from '../components/ui/LocationMap';
import { personalInfo } from '../data';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.message.length < 10) {
      setStatusMessage('Message too short (min 10 characters)');
      return;
    }

    setLoading(true);
    setStatusMessage('');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Yashwantha'
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatusMessage('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatusMessage('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-12 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading subtitle="Get in touch" align="center">
          Contact Me
        </SectionHeading>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">Let's Build Something Great</h3>
            <p className="text-gray-400 mb-8 max-w-md">
              I'm currently looking for internship opportunities and freelance projects.
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-5 text-gray-300">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-neon border border-white/5 group-hover:border-neon/40 group-hover:shadow-[0_0_12px_rgba(57,255,20,0.2)] transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium text-white group-hover:text-neon transition-colors">
                    {personalInfo.email}
                  </p>
                </div>
              </a>

              <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-neon border border-white/5 group-hover:border-neon/40 group-hover:shadow-[0_0_12px_rgba(57,255,20,0.2)] transition-all">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="font-medium text-white group-hover:text-neon transition-colors">
                    {personalInfo.phone}
                  </p>
                </div>
              </a>

              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-neon border border-white/5 group-hover:border-neon/40 group-hover:shadow-[0_0_12px_rgba(57,255,20,0.2)] transition-all">
                  <FaGithub size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">GitHub</p>
                  <p className="font-medium text-white group-hover:text-neon transition-colors">
                    yashuck18-cloud
                  </p>
                </div>
              </a>

              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-neon border border-white/5 group-hover:border-neon/40 group-hover:shadow-[0_0_12px_rgba(57,255,20,0.2)] transition-all">
                  <FaLinkedin size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">LinkedIn</p>
                  <p className="font-medium text-white group-hover:text-neon transition-colors">
                    Yashwantha C K
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-neon border border-white/5">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium text-white">Chinnagiripalya, Karnataka, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <GlowingCard>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-dark/50 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-neon/50 focus:shadow-[0_0_10px_rgba(57,255,20,0.2)] transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-dark/50 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-neon/50 focus:shadow-[0_0_10px_rgba(57,255,20,0.2)] transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-dark/50 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-neon/50 focus:shadow-[0_0_10px_rgba(57,255,20,0.2)] transition-all"
                  placeholder="Internship Opportunity"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400">Message</label>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-dark/50 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-neon/50 focus:shadow-[0_0_10px_rgba(57,255,20,0.2)] transition-all resize-none"
                  placeholder="Hello..."
                  required
                />
              </div>

              <Button className="w-full !mt-6" variant="primary" type="submit" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'} <Send size={18} />
              </Button>

              {statusMessage && (
                <p className={`text-sm text-center mt-4 ${
                  statusMessage.includes('successfully') 
                    ? 'text-green-400' 
                    : 'text-red-400'
                }`}>
                  {statusMessage}
                </p>
              )}
            </form>
          </GlowingCard>
        </div>

        <LocationMap />
      </div>
    </section>
  );
};

export default Contact;