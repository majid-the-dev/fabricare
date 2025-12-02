"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import HeroBg from "@/public/assets/hero-background.jpg";
import ProductImage from "@/public/assets/products.png";
import { gsap } from "gsap";

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const productRef = useRef<HTMLImageElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const product = productRef.current;
    const overlay = overlayRef.current;

    if (!hero || !product || !overlay) return;

    // Create timeline for hero animations
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Animate overlay fade
    tl.fromTo(
      overlay,
      { opacity: 0.7 },
      { opacity: 0.5, duration: 1.5 }
    );

    // Animate product image
    tl.fromTo(
      product,
      {
        opacity: 0,
        y: 50,
        scale: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
      },
      "-=0.8"
    );

    // Add floating animation to product
    gsap.to(product, {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      delay: 1.5,
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-[70vh] sm:h-[80vh] md:h-[90vh] min-h-[500px] overflow-hidden"
    >
      <div ref={overlayRef} className="absolute inset-0 bg-white/70 z-10" />
      <Image
        src={HeroBg}
        alt="Hero background"
        fill
        className="object-cover"
        priority
      />
      <Image
        ref={productRef}
        src={ProductImage}
        alt="Product image"
        width={500}
        height={500}
        className="absolute bottom-0 right-0 z-10 w-[200px] h-auto sm:w-[300px] md:w-[400px] lg:w-[500px]"
      />
    </section>
  );
};

export default Hero;