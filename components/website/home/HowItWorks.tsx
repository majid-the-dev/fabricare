"use client";

import React, { useEffect, useRef } from "react";
import BG from "@/public/assets/products.png";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Washing Machine (Top Loader)",
    description:
      "Add one cupful of your concentrated FabriCare to the final rinse water of upto 10kg of clothes (5 pieces approx) Spread and allow to dry",
  },
  {
    number: "02",
    title: "Washing Machine (Front Loader) Automatic",
    description:
      "Add one cupful of your concentrated FabriCare to the final rinse water of upto 10kg of clothes (5 pieces approx) Spread and allow to dry",
  },
  {
    number: "03",
    title: "Hand Wash",
    description:
      "Add 1 to 2 cupful of your concentrated FabriCare to the final rinse water of up to 10kg of clothes (approx 5 pieces). Spread and allow to dry. For best outcomes do not use excessive final rinse water or ignore the recommended FabriCare dosage.",
  },
];

const StepItem = ({
  step,
  isLast,
}: {
  step: Step;
  isLast: boolean;
}) => {
  const stepRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const step = stepRef.current;
    const number = numberRef.current;
    const content = contentRef.current;

    if (!step || !number || !content) return;

    gsap.fromTo(
      number,
      { opacity: 0, scale: 0, rotation: -180 },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: step,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      content,
      { opacity: 0, x: 30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: step,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div ref={stepRef} className="flex gap-4 sm:gap-6">
      <div className="flex flex-col items-center">
        <div
          ref={numberRef}
          className="text-[#70960c] text-2xl sm:text-3xl font-bold leading-none"
        >
          {step.number}
        </div>
        {!isLast && (
          <div className="w-0.5 h-full min-h-12 sm:min-h-16 bg-slate-200 mt-3 sm:mt-4"></div>
        )}
      </div>
      <div ref={contentRef} className="flex-1 pb-8 sm:pb-12">
        <h3 className="text-slate-900 text-base sm:text-xl font-semibold mb-3 sm:mb-4">
          {step.title}
        </h3>
        <p className="text-slate-500 text-[13px] sm:text-sm leading-relaxed">
          {step.description}
        </p>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Animate heading
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Animate image
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.9, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.2,
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Animate description
    if (descriptionRef.current) {
      gsap.fromTo(
        descriptionRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: descriptionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 md:py-24">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 md:items-stretch">
          <div ref={leftColRef} className="flex flex-col">
            <h1
              ref={headingRef}
              className="text-slate-900 text-2xl sm:text-3xl md:text-4xl font-bold"
            >
              How does Fabricare work?
            </h1>
            <div
              ref={imageRef}
              className="relative mt-8 sm:mt-12 md:mt-14 w-full flex-1 min-h-[300px] sm:min-h-[350px] md:min-h-[400px] bg-slate-200 rounded-xl md:rounded-2xl overflow-hidden"
            >
              <Image
                src={BG}
                alt="How It Works"
                fill
                className="object-cover rounded-xl md:rounded-2xl"
              />
            </div>
          </div>

          <div ref={rightColRef} className="flex flex-col">
            <p
              ref={descriptionRef}
              className="text-slate-600  text-[13px] sm:text-base leading-relaxed"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              iste numquam distinctio voluptas consectetur assumenda expedita
              quo, at alias dolorum vitae quibusdam facere cumque a, illo quae
              ab provident quam.
            </p>

            <div className="mt-10 sm:mt-12 md:mt-16">
              {steps.map((step, index) => (
                <StepItem
                  key={step.number}
                  step={step}
                  isLast={index === steps.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;