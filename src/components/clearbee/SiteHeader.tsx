"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useBookModal } from "./BookModalContext";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();
  const { openModal } = useBookModal();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <header
      className={`site-header ${isScrolled ? "is-solid" : "is-over-hero"} ${
        isMobileMenuOpen ? "is-menu-open" : ""
      }`}
    >
      {/* Brand Wordmark / Logo */}
      <Link
        href="/"
        className="wordmark flex items-center gap-2 group"
        aria-label="CLEARNYX Aligner Home"
        onClick={closeMenu}
      >
        <div className="relative w-8 h-8 flex-shrink-0">
          <Image
            src="/brand/logo-symbol.png"
            alt="CLEARNYX Symbol"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="flex flex-col">
          <span className="font-extrabold tracking-tight text-xl text-navy-deep leading-none">
            CLEARNYX
          </span>
          <span className="text-[8px] font-semibold tracking-[0.22em] text-brand-cyan uppercase leading-tight mt-0.5">
            ALIGNER
          </span>
        </div>
      </Link>

      {/* Mobile Hamburger Button */}
      <button
        className={`menu-button ${isMobileMenuOpen ? "is-open" : ""}`}
        aria-expanded={isMobileMenuOpen}
        aria-label={isMobileMenuOpen ? "Close navigation" : "Open navigation"}
        type="button"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <span />
        <span />
      </button>

      {/* Navigation Links */}
      <nav
        className={`nav-links ${isMobileMenuOpen ? "is-open" : ""}`}
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className={pathname === "/" ? "is-active" : ""}
          onClick={closeMenu}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={pathname === "/about" ? "is-active" : ""}
          onClick={closeMenu}
        >
          About
        </Link>
        <Link
          href="/solutions"
          className={pathname.startsWith("/solutions") ? "is-active" : ""}
          onClick={closeMenu}
        >
          Aligners
        </Link>

        {/* Conditions Dropdown */}
        <div
          className="nav-dropdown relative"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <button
            type="button"
            className="nav-dropdown-trigger flex items-center gap-1"
            aria-expanded={isDropdownOpen}
            aria-haspopup="true"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span>Conditions</span>
            <svg
              className={`nav-dropdown-chevron transition-transform duration-200 ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
              viewBox="0 0 12 12"
              width="12"
              height="12"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M2.5 4.2 6 7.8l3.5-3.6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {isDropdownOpen && (
            <div className="nav-dropdown-menu" role="menu">
              <div className="nav-dropdown-menu-inner">
                <Link
                  role="menuitem"
                  href="/#conditions"
                  onClick={closeMenu}
                >
                  Crowding
                </Link>
                <Link
                  role="menuitem"
                  href="/#conditions"
                  onClick={closeMenu}
                >
                  Spacing
                </Link>
                <Link
                  role="menuitem"
                  href="/#conditions"
                  onClick={closeMenu}
                >
                  Open Bite
                </Link>
                <Link
                  role="menuitem"
                  href="/#conditions"
                  onClick={closeMenu}
                >
                  Deep Bite
                </Link>
                <Link
                  role="menuitem"
                  href="/#conditions"
                  onClick={closeMenu}
                >
                  Cross Bite
                </Link>
                <Link
                  role="menuitem"
                  href="/#conditions"
                  onClick={closeMenu}
                >
                  Under Bite
                </Link>
              </div>
            </div>
          )}
        </div>

        <Link
          href="/contact"
          className={pathname === "/contact" ? "is-active" : ""}
          onClick={closeMenu}
        >
          Contact
        </Link>

        {/* Mobile inside CTA */}
        <button
          type="button"
          className="book-link nav-mobile-cta"
          onClick={() => {
            closeMenu();
            openModal("consultation");
          }}
        >
          Book Consultation{" "}
          <span aria-hidden="true" className="arrow diagonal">
            <svg viewBox="0 0 16 16" width="14" height="14" fill="none" focusable="false">
              <path
                d="M3 8h9.2M8.5 3.8 12.7 8l-4.2 4.2"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </nav>

      {/* Desktop Header CTA */}
      <button
        type="button"
        className="book-link header-cta"
        onClick={() => openModal("consultation")}
      >
        Book Consultation{" "}
        <span aria-hidden="true" className="arrow diagonal">
          <svg viewBox="0 0 16 16" width="14" height="14" fill="none" focusable="false">
            <path
              d="M3 8h9.2M8.5 3.8 12.7 8l-4.2 4.2"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
    </header>
  );
}

