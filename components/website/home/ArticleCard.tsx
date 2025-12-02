"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { StaticImageData } from "next/image";
import { gsap } from "gsap";

const ArticleCard = ({
  title,
  date,
  image,
}: {
  title: string;
  date: string;
  image: StaticImageData;
}) => {
  const cardRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const img = imageRef.current;

    if (!card || !img) return;

    // Hover animation: only zoom the image, keep card position fixed
    const handleMouseEnter = () => {
      gsap.to(img, {
        scale: 1.1,
        duration: 0,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(img, {
        scale: 1,
        duration: 0,
        ease: "power2.out",
      });
    };

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div>
      <article
        ref={cardRef}
        className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-sm transition-all duration-300 hover:shadow-xl h-full min-h-[300px] sm:min-h-[350px]"
      >
        <Image
          ref={imageRef}
          alt=""
          src={image}
          className="absolute w-full h-full object-cover transition-transform duration-600"
          fill
        />

        <div className="relative bg-linear-to-t from-black/85 via-black/60 to-slate-900/30 pt-24 sm:pt-32 md:pt-40 lg:pt-48 xl:pt-56 h-full flex flex-col justify-end">
          <div className="p-4 sm:p-5 md:p-6">
            <time className="block text-xs sm:text-sm text-white/90">
              {date}
            </time>

            <Link href="/" className="block">
              <h3 className="mt-2 sm:mt-2.5 text-lg sm:text-xl text-white font-semibold line-clamp-2 hover:text-[#fee231] transition-colors">
                {title}
              </h3>
            </Link>

            <Link
              href="/"
              className="text-white text-sm sm:text-base font-semibold inline-block border border-white rounded-full px-3 sm:px-4 py-1 sm:py-1.5 mt-4 sm:mt-6 hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Read Now
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ArticleCard;
