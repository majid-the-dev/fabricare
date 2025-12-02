"use client";

import React, { useEffect, useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import BG from "@/public/assets/hero-background.jpg";
import { PhoneIcon } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FrequentlyAskedQuestions = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageColRef = useRef<HTMLDivElement>(null);
  const contentColRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);
  const phoneCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Animate image column
    if (imageColRef.current) {
      gsap.fromTo(
        imageColRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: imageColRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Animate phone card
    if (phoneCardRef.current) {
      gsap.fromTo(
        phoneCardRef.current,
        { opacity: 0, scale: 0.8, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          delay: 0.3,
          scrollTrigger: {
            trigger: phoneCardRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Add pulse animation
      gsap.to(phoneCardRef.current, {
        scale: 1.05,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: 1.5,
      });
    }

    // Animate content column
    if (contentColRef.current) {
      gsap.fromTo(
        contentColRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: contentColRef.current,
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

    // Animate accordion items
    if (accordionRef.current) {
      const items = accordionRef.current.querySelectorAll('[data-accordion-item]');
      items.forEach((item, index) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: 0.1 * index,
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#70960c] py-12 sm:py-16 md:py-24">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20">
          <div ref={imageColRef} className="col-span-1 bg-[#70960c] order-2 lg:order-1">
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-full min-h-[400px] rounded-2xl md:rounded-3xl overflow-hidden">
              <div
                ref={phoneCardRef}
                className="bg-[#fee231] bottom-4 right-4 p-3 sm:p-4 z-10 rounded-xl md:rounded-2xl absolute"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="bg-[#70960c] rounded-full p-2">
                    <PhoneIcon className="text-white text-xl sm:text-2xl" />
                  </div>
                  <div>
                    <p className="text-slate-900 text-sm sm:text-base md:text-lg font-bold">
                      (+234) 081 5827 4866
                    </p>
                    <p className="text-slate-900 text-sm sm:text-base md:text-lg font-bold">
                      Call us
                    </p>
                  </div>
                </div>
              </div>
              <Image
                src={BG}
                alt="Frequently Asked Questions"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div ref={contentColRef} className="col-span-1 order-1 lg:order-2">
            <div
              ref={badgeRef}
              className="text-white text-[13px] sm:text-sm font-semibold inline-block border border-white rounded-full px-3 sm:px-4 py-1 sm:py-1.5 mb-6 sm:mb-8"
            >
              Frequently Asked Questions
            </div>
            <h1
              ref={headingRef}
              className="text-2xl sm:text-3xl font-bold text-white"
            >
              How can we help you?
            </h1>

            <div ref={accordionRef} className="mt-6 sm:mt-8">
              <Accordion type="multiple" className="space-y-3 sm:space-y-4">
                <AccordionItem
                  value="item-1"
                  data-accordion-item
                  className="bg-white/10 rounded-xl md:rounded-2xl border-none! shadow-none! outline-none!"
                >
                  <AccordionTrigger className="text-white text-sm sm:text-base font-semibold px-4 sm:px-6 hover:no-underline cursor-pointer">
                    Why do my clothes never feel as soft as they used to?
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70 text-sm sm:text-base font-medium px-4 sm:px-6">
                    Sometimes your fabrics are just tired from harsh washing. A
                    gentler routine brings their softness back to life. Your
                    clothes want to feel good on you again.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-2"
                  data-accordion-item
                  className="bg-white/10 rounded-xl md:rounded-2xl border-none! shadow-none! outline-none!"
                >
                  <AccordionTrigger className="text-white text-sm sm:text-base font-semibold px-4 sm:px-6 hover:no-underline cursor-pointer">
                    How can I keep my favourite clothes looking new for longer?
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70 text-sm sm:text-base font-medium px-4 sm:px-6">
                    Treat them with patience, not pressure. Wash with care, not
                    heat or harsh cycles. Little acts of gentleness keep memories
                    alive in the fabric.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-3"
                  data-accordion-item
                  className="bg-white/10 rounded-xl md:rounded-2xl border-none! shadow-none! outline-none!"
                >
                  <AccordionTrigger className="text-white text-sm sm:text-base font-semibold px-4 sm:px-6 hover:no-underline cursor-pointer">
                    Why does my laundry smell fresh only sometimes?
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70 text-sm sm:text-base font-medium px-4 sm:px-6">
                    Fragrance fades when clothes don&apos;t dry well or get enough
                    air. Sometimes humidity steals the freshness. The right wash
                    routine brings the scent back to stay.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-4"
                  data-accordion-item
                  className="bg-white/10 rounded-xl md:rounded-2xl border-none! shadow-none! outline-none!"
                >
                  <AccordionTrigger className="text-white text-sm sm:text-base font-semibold px-4 sm:px-6 hover:no-underline cursor-pointer">
                    How do I stop my clothes from shrinking
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70 text-sm sm:text-base font-medium px-4 sm:px-6">
                    Most fabrics just need cooler water and softer handling. Heat
                    makes them panic and shrink. Gentle washing helps them stay
                    true to their size.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-5"
                  data-accordion-item
                  className="bg-white/10 rounded-xl md:rounded-2xl border-none! shadow-none! outline-none!"
                >
                  <AccordionTrigger className="text-white text-sm sm:text-base font-semibold px-4 sm:px-6 hover:no-underline cursor-pointer">
                    Why do stains settle faster on the clothes I love most?
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70 text-sm sm:text-base font-medium px-4 sm:px-6">
                    It&apos;s always the favourites life tests the hardest. Quick
                    action saves them before the stain becomes a story. Every
                    fabric deserves a second chance.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestions;