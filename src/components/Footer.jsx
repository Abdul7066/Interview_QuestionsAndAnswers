import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, Terminal } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-dark-800 border-t border-dark-500 mt-auto">
      {/* Top gradient line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-accent-cyan to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Terminal className="w-5 h-5 text-accent-cyan" />
              <span className="font-mono text-lg font-bold text-white">InterviewPrep<span className="text-accent-cyan">.dev</span></span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Your personal interview preparation hub for mastering Frontend & Backend development concepts.
            </p>
          </motion.div>

          {/* Center info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <p className="text-sm text-gray-400 mb-2">
              Designed & Developed with <Heart className="w-4 h-4 inline text-accent-pink fill-accent-pink" /> by
            </p>
            <a href="http://abdul7066.github.io/Portfolio/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <p className="font-bold text-lg text-white group-hover:text-accent-cyan transition-colors">Md Abdul Rahman</p>
            </a>
            <p className="text-xs text-gray-500 mt-1 font-mono">Software Developer</p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center md:justify-end gap-4"
          >
            <a
              href="http://github.com/Abdul7066"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-dark-600 border border-dark-500 flex items-center justify-center text-gray-400 hover:text-accent-cyan hover:border-accent-cyan/50 hover:shadow-[0_0_15px_rgba(0,212,255,0.15)] transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/abdulrahemanmdamjed"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-dark-600 border border-dark-500 flex items-center justify-center text-gray-400 hover:text-accent-purple hover:border-accent-purple/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)] transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:7066abdulrahman@gmail.com"
              className="w-10 h-10 rounded-xl bg-dark-600 border border-dark-500 flex items-center justify-center text-gray-400 hover:text-accent-green hover:border-accent-green/50 hover:shadow-[0_0_15px_rgba(34,197,94,0.15)] transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-8 pt-6 border-t border-dark-500">
          <p className="text-center text-xs text-gray-600 font-mono">
            © {new Date().getFullYear()} InterviewPrep.dev — All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
