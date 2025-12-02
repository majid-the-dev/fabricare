import React from "react";
import Link from "next/link";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
// import ShirtsBg from "@/public/assets/laundry-asset-1.jpg";
// import Image from "next/image";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
// import { FaWhatsappSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <div>
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

      <div className="bg-[#70960c] pt-24 pb-6">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <h4 className="text-white text-3xl font-bold">Fabricare</h4>

              <p className="mt-6 max-w-md leading-relaxed text-white text-sm sm:text-base font-medium sm:max-w-xs text-left">
                FabriCare is proudly a registered brand under Careplus
                Industries International Limited.
              </p>

              <div className="flex items-center gap-4 mt-8">
                <Link href="/">
                  <AiFillInstagram className="text-white text-3xl" />
                </Link>
                <Link href="/">
                  <AiFillFacebook className="text-white text-3xl" />
                </Link>
                <Link href="/">
                  <IoLogoWhatsapp className="text-white text-3xl" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:col-span-2">
              <div className="text-left">
                <p className="text-lg font-semibold text-white">Useful Info</p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <Link
                      className="text-white text-sm sm:text-base font-medium transition"
                      href="/"
                    >
                      Blog
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-white text-sm sm:text-base font-medium transition"
                      href="/"
                    >
                      Tips & Articles
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-white text-sm sm:text-base font-medium transition"
                      href="/"
                    >
                      Become a Distributor
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="text-left">
                <p className="text-lg font-semibold text-white">Explore More</p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <Link
                      className="text-white text-sm sm:text-base font-medium transition"
                      href="/"
                    >
                      Promotions
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-white text-sm sm:text-base font-medium transition"
                      href="/"
                    >
                      Shop
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-white text-sm sm:text-base font-medium transition"
                      href="/"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="text-left">
                <p className="text-lg font-semibold text-white">
                  Subscribe Newsletter
                </p>

                <div className="mt-8">
                  <p className="text-white text-sm sm:text-base font-medium">
                    Sign up for our newsletter to get updates and tips.
                  </p>
                  <div className="mt-4">
                    {/* <Input type="email" placeholder="Enter your email" /> */}
                    <Input
                      placeholder="Enter your email"
                      className="w-full bg-white/20 border-none rounded-lg py-6! focus:ring-0 focus:outline-none placeholder:text-white placeholder:font-medium"
                    />
                    <Button className="w-full bg-[#fee231] text-[#70960c] text-base font-bold rounded-lg py-6! focus:ring-0 focus:outline-none mt-4">
                      Subscribe Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-white/20 pt-6">
            <div className="text-center sm:flex sm:justify-between sm:text-left">
              <p className="text-sm text-white font-medium">
                <span className="block sm:inline mr-2">
                  All rights reserved
                </span>

                <span>|</span>

                <Link
                  className="inline-block text-white font-medium transition mx-2"
                  href="/"
                >
                  Terms &amp; Conditions
                </Link>

                <span className="mr-2">|</span>

                <Link
                  className="inline-block text-white font-medium transition"
                  href="/"
                >
                  Privacy Policy
                </Link>
              </p>

              <p className="mt-4 text-base text-white font-medium sm:order-first sm:mt-0">
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