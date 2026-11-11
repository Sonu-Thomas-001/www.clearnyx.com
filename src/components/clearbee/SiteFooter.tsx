"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useBookModal } from "./BookModalContext";

export function SiteFooter() {
  const { openModal } = useBookModal();

  return (
    <footer className="footer">
      <div className="footer-main">
        {/* Brand Column */}
        <div className="footer-brand">
          <Link
            className="flex items-center shrink-0 mb-3 group focus-visible:outline-none"
            aria-label="CLEARNYX Home"
            href="/"
          >
            <Image
              src="/brand/logo-primary.png"
              alt="CLEARNYX — Premium Clear Aligner Solutions"
              width={175}
              height={36}
              className="h-8 sm:h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
            />
          </Link>
          <p>Virtually invisible aligners for a remarkably confident you.</p>

          <div className="footer-social" aria-label="Social links">
            <a
              href="https://www.instagram.com/clearnyx"
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="footer-social-icon">
                <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/clearnyx"
              aria-label="Facebook"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="footer-social-icon">
                <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h3.1l.9-3H13v-2c0-.6.4-1 1-1Z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/clearnyx"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="footer-social-icon">
                <path d="M6.5 8.5H2.7V21h3.8V8.5zM4.6 3C3.3 3 2.2 4.1 2.2 5.4c0 1.3 1.1 2.4 2.4 2.4s2.4-1.1 2.4-2.4C7 4.1 5.9 3 4.6 3zM21.3 13.7c0-3.5-1.9-5.2-4.4-5.2-2 0-2.9 1.1-3.4 1.9V8.5H9.7c0 1 0 12.5 0 12.5h3.8v-7c0-.4 0-.7.1-1 .3-.7.9-1.5 2-1.5 1.4 0 2 1.1 2 2.6V21h3.8c-.1-7.4-.1-7.3-.1-7.3z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Company Column */}
        <div>
          <h3>Company</h3>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/solutions">Aligners</Link>
          <Link href="/#conditions">Conditions</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Resources Column */}
        <div>
          <h3>Resources</h3>
          <Link href="/#how-it-works">How it works</Link>
          <Link href="/#faq">FAQ</Link>
          <Link href="/solutions">Aligners</Link>
          <button
            type="button"
            className="book-link text-left"
            onClick={() => openModal("consultation")}
          >
            Book
          </button>
        </div>

        {/* Contact Column */}
        <div>
          <h3>Contact us</h3>
          <a href="tel:+919072334032">+91 9072334032</a>
          <a href="mailto:info@clearnyx.com">info@clearnyx.com</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 CLEARNYX Aligner</span>
        <div className="footer-legal">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>
        </div>
      </div>
    </footer>
  );
}

