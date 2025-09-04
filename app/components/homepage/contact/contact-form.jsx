"use client";
// @flow strict
import { isValidEmail } from "@/utils/check-email";
import axios from "axios";
import { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";

function ContactForm() {
  const [error, setError] = useState({ email: false, required: false });
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const checkRequired = () => {
    if (userInput.email && userInput.message && userInput.name) {
      setError({ ...error, required: false });
    }
  };

  const handleSendMail = async (e) => {
    e.preventDefault();

    if (!userInput.email || !userInput.message || !userInput.name) {
      setError({ ...error, required: true });
      return;
    } else if (error.email) {
      return;
    } else {
      setError({ ...error, required: false });
    };

    try {
      setIsLoading(true);
      const res = await axios.post("/api/contact", userInput);

      toast.success("Message sent successfully!");
      setUserInput({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast.error(error?.response?.data?.message);
    } finally {
      setIsLoading(false);
    };
  };

  return (
    <div className="w-full">
      <div className="mb-8">
        <h3 className="font-bold mb-4 gradient-text text-2xl lg:text-3xl">Let&apos;s Work Together</h3>
        <div className="w-16 h-1 bg-gradient-to-r from-[#16f2b3] to-[#8228ec] mb-4"></div>
      </div>
      <div className="modern-card p-6 lg:p-8 group hover:scale-[1.02] transition-all duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
        <div className="relative z-10">
          <p className="text-base text-gray-300 leading-relaxed mb-8">{"Ready to bring your ideas to life? I'm always excited to work on new projects and collaborate with amazing people. Let's create something extraordinary together!"}</p>
        <div className="mt-6 flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <label className="text-base font-medium text-gray-300">Your Name</label>
            <input
              className="glass-effect w-full border-2 rounded-xl border-gray-600/50 focus:border-[#16f2b3] focus:shadow-lg focus:shadow-[#16f2b3]/20 ring-0 outline-0 transition-all duration-300 px-4 py-3 text-white placeholder-gray-400 hover:border-gray-500/70"
              type="text"
              placeholder="Enter your full name"
              maxLength="100"
              required={true}
              onChange={(e) => setUserInput({ ...userInput, name: e.target.value })}
              onBlur={checkRequired}
              value={userInput.name}
            />
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-base font-medium text-gray-300">Your Email</label>
            <input
              className="glass-effect w-full border-2 rounded-xl border-gray-600/50 focus:border-[#16f2b3] focus:shadow-lg focus:shadow-[#16f2b3]/20 ring-0 outline-0 transition-all duration-300 px-4 py-3 text-white placeholder-gray-400 hover:border-gray-500/70"
              type="email"
              placeholder="your.email@example.com"
              maxLength="100"
              required={true}
              value={userInput.email}
              onChange={(e) => setUserInput({ ...userInput, email: e.target.value })}
              onBlur={() => {
                checkRequired();
                setError({ ...error, email: !isValidEmail(userInput.email) });
              }}
            />
            {error.email && <p className="text-sm text-red-400 flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-red-400/20 flex items-center justify-center">!</span>
              Please provide a valid email address
            </p>}
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-base font-medium text-gray-300">Your Message</label>
            <textarea
              className="glass-effect w-full border-2 rounded-xl border-gray-600/50 focus:border-[#16f2b3] focus:shadow-lg focus:shadow-[#16f2b3]/20 ring-0 outline-0 transition-all duration-300 px-4 py-3 text-white placeholder-gray-400 hover:border-gray-500/70 resize-none"
              maxLength="500"
              placeholder="Tell me about your project, ideas, or just say hello..."
              name="message"
              required={true}
              onChange={(e) => setUserInput({ ...userInput, message: e.target.value })}
              onBlur={checkRequired}
              rows="5"
              value={userInput.message}
            />
            <div className="text-right">
              <span className="text-xs text-gray-500">{userInput.message.length}/500</span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 mt-8">
            {error.required && <div className="flex items-center gap-2 text-sm text-red-400 bg-red-400/10 px-4 py-2 rounded-lg border border-red-400/20">
              <span className="w-4 h-4 rounded-full bg-red-400/20 flex items-center justify-center text-xs">!</span>
              All fields are required to send your message
            </div>}
            <button
              className="modern-button flex items-center gap-3 hover:gap-4 rounded-2xl bg-gradient-to-r from-pink-500 to-violet-600 px-8 md:px-12 py-4 md:py-5 text-center text-sm md:text-base font-semibold tracking-wide text-white no-underline transition-all duration-300 ease-out hover:text-white hover:no-underline hover:shadow-2xl hover:shadow-pink-500/25 hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 group"
              role="button"
              onClick={handleSendMail}
              disabled={isLoading}
            >
              {
                isLoading ? (
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Sending Message...</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <span>Send Message</span>
                    <TbMailForward size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </div>
                )
              }
            </button>
            <p className="text-xs text-gray-500 text-center max-w-md">
              I typically respond within 24 hours. Looking forward to hearing from you!
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;