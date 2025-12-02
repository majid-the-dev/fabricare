"use client";

import React, { useEffect, useRef } from "react";
import ArticleCard from "./ArticleCard";
import ArticleImage1 from "@/public/assets/shirts-laundry.jpg";
import ArticleImage2 from "@/public/assets/laundry-asset-1.jpg";
import ArticleImage3 from "@/public/assets/hero-background.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TipsArticles = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Animate badge
    if (badgeRef.current) {
      gsap.fromTo(
        badgeRef.current,
        { opacity: 0, y: -20, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: badgeRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }

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
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Animate article cards
    if (gridRef.current) {
      const cards = gridRef.current.children;
      Array.from(cards).forEach((card, index) => {
        gsap.fromTo(
          card as HTMLElement,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.15,
            scrollTrigger: {
              trigger: card as HTMLElement,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }
  }, []);

  const articles = [
    {
      title: "How can I prolong the life of my favorite clothes?",
      image: ArticleImage1,
      date: "1st Dec 2025",
    },
    {
      title: "Why do some Nigerians prefer buying used clothes from Europe?.",
      image: ArticleImage2,
      date: "1st Dec 2025",
    },
    {
      title: "Benefits of Using Fabric Conditioner/Softener",
      image: ArticleImage3,
      date: "1st Dec 2025",
    },
  ];

  return (
    <section ref={sectionRef} className="bg-slate-100/70 py-12 sm:py-16 md:py-24">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-6 sm:mb-8">
          <div
            ref={badgeRef}
            className="text-[#70960c] text-sm sm:text-base font-semibold inline-block border border-[#70960c] rounded-full px-3 sm:px-4 py-1 sm:py-1.5 mx-auto"
          >
            Read our articles
          </div>
        </div>
        <h2
          ref={headingRef}
          className="text-center text-3xl sm:text-4xl font-bold"
        >
          Tips & Articles
        </h2>
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-12 md:mt-14"
        >
          {articles.map((article, index) => (
            <ArticleCard
              key={index}
              title={article.title}
              date={article.date}
              image={article.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TipsArticles;