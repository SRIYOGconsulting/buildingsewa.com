'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

type MobileDrawerProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
type SocialIconProps = {
  href: string;
  label: string;
  icon: string;
};
type NavItemProps = {
  to: string;
  label: string;
  onClick?: () => void;
};

// Reusable Social Icon Component
const SocialIcon: React.FC<SocialIconProps> = ({ href, label, icon }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
    aria-label={label}
  >
    <img 
      src={icon} 
      alt={label}
      className="w-5 h-5"
      aria-hidden="true"
    />
  </a>
);

const NavItem: React.FC<NavItemProps> = ({ to, label, onClick }) => (
  <Link
    href={to}
    onClick={onClick}
    className="group flex items-center space-x-3 p-2 rounded-lg transition-all duration-200 hover:bg-opacity-10 hover:bg-gray-300"
  >
    <span className="font-medium">{label}</span>
    <span className="flex-1"></span>
    <span className="opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-200">
      →
    </span>
  </Link>
);

const MobileDrawer:React.FC<MobileDrawerProps> = ({isOpen,setIsOpen}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
  const checkMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  checkMobile(); // run once on mount
  window.addEventListener('resize', checkMobile);

  return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Navigation data without paths/icons
  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/feedback', label: 'Feedback' },
    { to: '/team', label: 'Team' },
    { to: '/contact', label: 'Contact' },
  ];

  // Social media data
  const socialLinks = [
    { href: 'https://www.facebook.com/', label: 'Facebook', path: '/icons/facebook.svg' },
    { href: 'https://www.youtube.com/', label: 'YouTube', path: '/icons/youtube.svg' },
    { href: 'https://www.x.com/', label: 'Instagram', path: '/icons/x.svg' },
    { href: 'https://www.linkedin.com/company/', label: 'LinkedIn', path: '/icons/linkedin.svg' }
  ];

  // Handle window resize and mobile detection
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 1024;
      setIsMobile(mobile);
      if (!mobile) setIsOpen(false);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? '' : 'hidden';
  };

  const closeDrawer = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  if (!isMobile) return null;

  return (
    <>
      {/* HAMBURGER BUTTON */}
      <div className="relative w-full">
        <button
          onClick={toggleDrawer}
          className=" lg:hidden block z-50 p-2 rounded"
          style={{ background: 'var(--header)', color: 'var(--text)' }}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? "" : <img src="/icons/hamburger.svg" alt="" className='w-10 h-10' /> }
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed -inset-10  bg-opacity-50 z-40"
          onClick={closeDrawer}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 sidekick left-0 h-full w-72 z-50 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}

      >
        <div className="p-6 overflow-y-auto h-full">
          <div className="flex justify-between items-center mb-4 pb-4 border-b border-opacity-10 border-gray-300">
            <Link href="/" onClick={closeDrawer} className="block">
              <img
                src="/images/Logo/sriyoglogo.svg"
                alt="Sriyog Logo"
                className="w-36 h-auto"
              />
            </Link>
            <button
              onClick={closeDrawer}
              className="text-2xl p-1 -mr-2"
              style={{ color: 'var(--text)' }}
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          <nav className="flex flex-col space-y-2 pb-2">
            {navItems.map((item) => (
              <NavItem
                key={item.to}
                to={item.to}
                label={item.label}
                onClick={closeDrawer}
              />
            ))}

            <div className="pt-4 space-y-2">
              <Link href="/career" onClick={closeDrawer} className="block">
                <button
                  className="w-full border rounded-lg px-6 py-2.5 hover:bg-opacity-10 hover:bg-gray-300 transition-colors duration-200"
                  style={{ borderColor: 'var(--text)', color: 'var(--text)' }}
                >
                  Career
                </button>
              </Link>

              <Link href="/notice" onClick={closeDrawer} className="block">
                <button 
                  className="w-full bg-teal-900 text-white px-6 py-2.5 rounded-lg hover:bg-teal-800 transition-colors duration-200"
                >
                  Notice
                </button>
              </Link>
            </div>

            <div className="mt-4 pt-3 border-t border-opacity-10 border-gray-300">
              <p className="text-xs font-medium text-gray-500 mb-3 text-center">
                Connect With Us
              </p>
              <div className="flex flex-wrap justify-center gap-3 px-2">
                {socialLinks.map((social) => (
                  <SocialIcon
                    key={social.label}
                    href={social.href}
                    label={social.label}
                    icon={social.path}
                  />
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>

    </>
  );
};

export default MobileDrawer;
