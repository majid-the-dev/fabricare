"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
// import ShirtsBg from "@/public/assets/laundry-asset-1.jpg";
// import Image from "next/image";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
// import { FaWhatsappSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const brandColRef = useRef<HTMLDivElement>(null);
  const linksColRef = useRef<HTMLDivElement>(null);
  const newsletterRef = useRef<HTMLDivElement>(null);
  const socialLinksRef = useRef<HTMLDivElement>(null);
  const copyrightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    // Animate brand section
    if (brandColRef.current) {
      gsap.fromTo(
        brandColRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: brandColRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Animate social links
    if (socialLinksRef.current) {
      const links = socialLinksRef.current.children;
      Array.from(links).forEach((link, index) => {
        gsap.fromTo(
          link as HTMLElement,
          { opacity: 0, scale: 0, rotation: -180 },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.6,
            delay: index * 0.1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: socialLinksRef.current,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }

    // Animate links columns
    if (linksColRef.current) {
      const columns = linksColRef.current.children;
      Array.from(columns).forEach((column, index) => {
        gsap.fromTo(
          column as HTMLElement,
          { opacity: 0, x: 30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            delay: index * 0.15,
            scrollTrigger: {
              trigger: column as HTMLElement,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }

    // Animate newsletter section
    if (newsletterRef.current) {
      gsap.fromTo(
        newsletterRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: newsletterRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Animate copyright section
    if (copyrightRef.current) {
      gsap.fromTo(
        copyrightRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: copyrightRef.current,
            start: "top 95%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <div ref={footerRef}>
      {/* <div className="relative py-14">
            <Image src={ShirtsBg} alt="Shirts Laundry" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/40 z-10" />
            <div className="relative z-20 w-full max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div>
                        <h4 className="text-white text-3xl font-bold">Phone No</h4>
                    </div>
                </div>
            </div>
        </div> */}

      <div className="bg-[#70960c] py-12 sm:py-16 md:py-24 pb-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div ref={brandColRef}>
              <h4 className="text-white text-xl sm:text-2xl md:text-3xl font-bold">
                Fabricare
              </h4>

              <p className="mt-4 sm:mt-6 max-w-md leading-relaxed text-white text-sm sm:text-base font-medium sm:max-w-xs text-left">
                FabriCare is proudly a registered brand under Careplus
                Industries International Limited.
              </p>

              <div ref={socialLinksRef} className="flex items-center gap-4 mt-6 sm:mt-8">
                <Link
                  href="/"
                  className="hover:scale-110 transition-transform duration-300"
                >
                  <AiFillInstagram className="text-white text-2xl sm:text-3xl" />
                </Link>
                <Link
                  href="/"
                  className="hover:scale-110 transition-transform duration-300"
                >
                  <AiFillFacebook className="text-white text-2xl sm:text-3xl" />
                </Link>
                <Link
                  href="/"
                  className="hover:scale-110 transition-transform duration-300"
                >
                  <IoLogoWhatsapp className="text-white text-2xl sm:text-3xl" />
                </Link>
              </div>
            </div>

            <div
              ref={linksColRef}
              className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:col-span-2"
            >
              <div className="text-left">
                <p className="text-base sm:text-lg font-semibold text-white">
                  Useful Info
                </p>

                <ul className="mt-4 sm:mt-8 space-y-3 sm:space-y-4 text-sm">
                  <li>
                    <Link
                      className="text-white text-sm sm:text-base font-medium transition hover:text-[#fee231] hover:translate-x-1 inline-block"
                      href="/"
                    >
                      Blog
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-white text-sm sm:text-base font-medium transition hover:text-[#fee231] hover:translate-x-1 inline-block"
                      href="/"
                    >
                      Tips & Articles
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-white text-sm sm:text-base font-medium transition hover:text-[#fee231] hover:translate-x-1 inline-block"
                      href="/"
                    >
                      Become a Distributor
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="text-left">
                <p className="text-base sm:text-lg font-semibold text-white">
                  Explore More
                </p>

                <ul className="mt-4 sm:mt-8 space-y-3 sm:space-y-4 text-sm">
                  <li>
                    <Link
                      className="text-white text-sm sm:text-base font-medium transition hover:text-[#fee231] hover:translate-x-1 inline-block"
                      href="/"
                    >
                      Promotions
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-white text-sm sm:text-base font-medium transition hover:text-[#fee231] hover:translate-x-1 inline-block"
                      href="/"
                    >
                      Shop
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-white text-sm sm:text-base font-medium transition hover:text-[#fee231] hover:translate-x-1 inline-block"
                      href="/"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div ref={newsletterRef} className="text-left">
                <p className="text-base sm:text-lg font-semibold text-white">
                  Subscribe Newsletter
                </p>

                <div className="mt-4 sm:mt-8">
                  <p className="text-white text-sm sm:text-base font-medium">
                    Sign up for our newsletter to get updates and tips.
                  </p>
                  <div className="mt-4">
                    {/* <Input type="email" placeholder="Enter your email" /> */}
                    <Input
                      placeholder="Enter your email"
                      className="w-full bg-white/20 border-none rounded-lg py-6! focus:ring-0 focus:outline-none placeholder:text-white placeholder:font-medium"
                    />
                    <Button className="w-full bg-[#fee231] text-[#70960c] text-base font-bold rounded-lg py-6! focus:ring-0 focus:outline-none mt-4 hover:bg-[#fee231]/90 transition-colors">
                      Subscribe Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div ref={copyrightRef} className="mt-10 sm:mt-12 border-t border-white/20 pt-6">
            <div className="text-center sm:flex sm:justify-between sm:text-left">
              <p className="text-sm text-white font-medium">
                <span className="block sm:inline mr-2">
                  All rights reserved
                </span>

                <span>|</span>

                <Link
                  className="inline-block text-white font-medium transition hover:text-[#fee231] mx-2"
                  href="/"
                >
                  Terms &amp; Conditions
                </Link>

                <span className="mr-2">|</span>

                <Link
                  className="inline-block text-white font-medium transition hover:text-[#fee231]"
                  href="/"
                >
                  Privacy Policy
                </Link>
              </p>

              <p className="mt-4 text-sm sm:text-base text-white font-medium sm:order-first sm:mt-0">
                © 2025 Careplus Industries International Limited.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;