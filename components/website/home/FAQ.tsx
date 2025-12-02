"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import BG from "@/public/assets/laundry-asset-3.jpg";
import Link from "next/link";
// import { ShoppingCartIcon } from "lucide-react";
import ProductImage from "@/public/assets/hero-background.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FAQ = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const image1Ref = useRef<HTMLDivElement>(null);
  const image2Ref = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const contentRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Animate left column
    if (leftColRef.current) {
      gsap.fromTo(
        leftColRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: leftColRef.current,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Animate right column
    if (rightColRef.current) {
      gsap.fromTo(
        rightColRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: rightColRef.current,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Animate images
    if (image1Ref.current) {
      gsap.fromTo(
        image1Ref.current,
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          scrollTrigger: {
            trigger: image1Ref.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    if (image2Ref.current) {
      gsap.fromTo(
        image2Ref.current,
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          scrollTrigger: {
            trigger: image2Ref.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Animate badge
    if (badgeRef.current) {
      gsap.fromTo(
        badgeRef.current,
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: badgeRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Animate heading
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Animate content sections
    contentRefs.current.forEach((ref, index) => {
      if (ref) {
        gsap.fromTo(
          ref,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.3 + index * 0.1,
            scrollTrigger: {
              trigger: ref,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#70960c] py-12 sm:py-16 md:py-24">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20">
          <div ref={leftColRef} className="h-full order-1 md:-order-1">
            <div
              ref={image1Ref}
              className="hidden md:block relative h-[400px] sm:h-[500px] md:h-[600px] bg-white rounded-2xl md:rounded-3xl overflow-hidden"
            >
              <Image
                src={ProductImage}
                alt="FAQ"
                fill
                className="object-cover rounded-2xl"
              />
            </div>

            <div className="hidden md:block text-white text-[13px] sm:text-base font-medium mt-4 sm:mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quos
              inventore veritatis architecto assumenda iure maxime natus eius,
              magnam mollitia odit et aut distinctio debitis fugiat doloremque,
              eveniet sequi molestiae?
            </div>

            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-[#fee231] text-slate-900 text-base md:text-lg font-bold border-white rounded-full px-4 sm:px-6 py-2 sm:py-2 mt-4 sm:mt-6 transition-transform hover:scale-105"
            >
              Shop Now
            </Link>
          </div>
          <div ref={rightColRef}>
            <div
              ref={badgeRef}
              className="w-fit inline-block text-[#fee231] text-sm sm:text-base md:text-lg font-semibold border-2 border-[#fee231] rounded-full px-3 sm:px-4 py-1 sm:py-1.5"
            >
              About Us
            </div>

            <h1
              ref={headingRef}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-6 sm:mt-8"
            >
              Why choose Fabricare?
            </h1>

            <div
              ref={(el) => {
                if (el) contentRefs.current[0] = el;
              }}
            >
              <h4 className="text-lg sm:text-xl font-bold text-white mt-6 sm:mt-8">
                Because some clothes carry memories
              </h4>
              <p className="text-white text-[13px] sm:text-sm font-medium mt-3 sm:mt-4 leading-relaxed">
                our wedding day dresses… that Aso Ebi.....that special birthday
                designers.… that Owambe outfit that made you feel unforgettable.
                These aren&apos;t just garments — they are moments you want to keep
                alive.
              </p>
            </div>

            <div
              ref={(el) => {
                if (el) contentRefs.current[1] = el;
              }}
            >
              <h4 className="text-lg sm:text-xl font-bold text-white mt-6 sm:mt-8">
                Created with this love in mind
              </h4>
              <p className="text-white text-[13px] sm:text-sm font-medium mt-3 sm:mt-4 leading-relaxed">
                Scientifically formulated and NAFDAC-certified, it protects your
                colours, strengthens your fibres, and wraps every outfit in a
                soft, lasting fragrance — so your clothes stay as beautiful as
                the memories they hold.
              </p>
            </div>

            <div
              ref={image2Ref}
              className="w-full relative h-64 sm:h-80 md:h-96 bg-white mt-8 sm:mt-12 md:mt-14 rounded-xl md:rounded-2xl overflow-hidden"
            >
              <Image
                src={BG}
                alt="FAQ"
                fill
                className="object-cover rounded-xl md:rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;