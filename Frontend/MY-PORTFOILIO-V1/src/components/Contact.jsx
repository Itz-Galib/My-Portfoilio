import React, { useState } from "react";
import {
  Mail,
  Send,
  MapPin,
  Phone,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      const response = await fetch("https://formspree.io/f/xnpagkag", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ submitting: false, submitted: true, error: null });
        setFormData({ email: "", subject: "", message: "" }); // ফরম রিসেট করা
      } else {
        setStatus({
          submitting: false,
          submitted: false,
          error: "Failed to send message. Please try again later.",
        });
      }
    } catch (error) {
      setStatus({
        submitting: false,
        submitted: false,
        error: "Network error. Please check your internet connection.",
      });
    }
  };

  return (
    <section
      id="contact"
      className="relative z-10 px-4 py-16 max-w-5xl mx-auto text-left"
    >
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Get In Touch
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Info Card */}
        <div className="md:col-span-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Contact Information
            </h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Feel free to reach out for collaborations, job opportunities, or
              just to say hello!
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-white/5 border border-white/10 rounded-lg text-cyan-400 mt-1">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Email</p>
                  <a
                    href="mailto:luthfulomi@gmail.com"
                    className="text-white text-sm font-medium hover:text-cyan-400 transition-colors"
                  >
                    luthfulomi@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-white/5 border border-white/10 rounded-lg text-purple-400 mt-1">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Phone</p>
                  <p className="text-white text-sm font-medium">
                    +880 1538375527
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-white/5 border border-white/10 rounded-lg text-pink-400 mt-1">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Location</p>
                  <p className="text-white text-sm font-medium">
                    Mirpur-14, Dhaka, Bangladesh[cite: 1]
                  </p>
                </div>
              </div>

              {/* LinkedIn Link Added Here */}
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-white/5 border border-white/10 rounded-lg text-blue-400 mt-1">
                  <svg
                    className="w-[18px] h-[18px]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400">LinkedIn</p>
                  <a
                    href="https://linkedin.com/in/md-luthful-hasan-galib-7673a0340"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white text-sm font-medium hover:text-cyan-400 transition-colors"
                  >
                    Md. Luthful Hasan Galib
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-white/10 text-xs text-gray-500">
            Open for Junior & Trainee Developer roles[cite: 1].
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8">
          <h3 className="text-white font-semibold text-lg mb-4">
            Send Me a Message
          </h3>

          {/* Success Message */}
          {status.submitted && (
            <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center gap-3 text-green-400 text-sm">
              <CheckCircle size={18} />
              <span>Your message has been sent successfully!</span>
            </div>
          )}

          {/* Error Message */}
          {status.error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center gap-3 text-red-400 text-sm">
              <AlertCircle size={18} />
              <span>{status.error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1">
                Your Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project Inquiry / Job Opportunity"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1">
                Message Body
              </label>
              <textarea
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status.submitting}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg text-white font-medium hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-cyan-500/10 cursor-pointer disabled:opacity-50"
            >
              <Send size={18} />{" "}
              {status.submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
