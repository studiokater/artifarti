"use client";

// Hooks
import { useState, useEffect } from "react";

// Components
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/shadcn/ui";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

export const ImageSlider = () => {
  const images = [
    "/assets/img/photo-1.avif",
    "/assets/img/photo-2.avif",
    "/assets/img/photo-3.avif",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-full w-full overflow-hidden">
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateY(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            className="h-full min-w-full bg-cover bg-center"
            alt="image"
            src={src}
          />
        ))}
      </div>
    </div>
  );
};
