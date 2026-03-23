"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import herobg from "../../assets/heroImage.png";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${herobg.src})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/20 to-black/20" />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="flex flex-col items-center text-center">
          <div className="text-white space-y-6 max-w-6xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
             Real Estate Sign Installation Management Platform
            </h1>
            <p className="text-lg md:text-xl text-white/80">
         The most scalable, universal, and powerful sign installation platform built for real-world operations.
            </p>
            <div className="pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/20 text-white px-8 py-6 text-lg rounded-md"
                asChild
              >
                <Link href="/signup" className="flex items-center gap-2">
                  Get Started
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
