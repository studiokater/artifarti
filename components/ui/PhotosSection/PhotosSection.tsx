"use client";

// Assets
import { NeueMontreal, SpaceGroteskLight } from "@/styles/fonts";

// Animations
import { fadeInWithSlide, fadeInWithSlideChildren } from "@/animations";

// Core
import { motion } from "framer-motion";

// Components
import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/shadcn/ui/card";
import { Button } from "@/components/shadcn/ui/button";
import { BiHeart, BiShareAlt, BiCartAdd } from "react-icons/bi";

// Hooks
import { useIntersectionObserver } from "usehooks-ts";

// Types
import { PhotosSectionProps } from "./PhotosSection.type";

export const PhotosSection = ({ data }: PhotosSectionProps) => {
  return (
    <motion.section
      variants={fadeInWithSlide}
      initial="initial"
      animate="visible"
      className="grid w-full grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-2"
    >
      {(data as ArtItem[]).map((photo) => {
        return (
          // <motion.div
          //   key={photo.id}
          //   variants={fadeInWithSlideChildren}
          //   initial="initial"
          //   animate="visible"
          // >
          <Card
            key={photo.id}
            className="flex flex-col justify-between rounded-none shadow-none"
          >
            <CardHeader>
              <CardTitle className={NeueMontreal.className}>
                {photo.user.name}
              </CardTitle>
              <CardDescription className={SpaceGroteskLight.className}>
                {photo.created_at.substring(0, 10)}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Image
                src={photo.urls.regular}
                alt={photo.description ?? photo.alt_description ?? "Photo"}
                width={1080}
                height={1080}
                loading="lazy"
                className="h-[400px] object-cover object-center md:h-[500px]"
              />
              <h6>{photo.description ?? photo.alt_description}</h6>
            </CardContent>
            <CardFooter
              className={`${SpaceGroteskLight.className} flex justify-between`}
            >
              <div className="space-x-2">
                <Button className="h-12">
                  <BiCartAdd className="mr-2 h-5 w-5" />
                  Add to cart
                </Button>
              </div>

              <div className="space-x-2">
                <Button variant="outline" className="group h-12">
                  <BiShareAlt className="mr-2 h-5 w-5 group-hover:text-green-400" />
                  Share
                </Button>
                <Button variant="outline" className="group h-12">
                  <BiHeart className="mr-2 h-5 w-5 group-hover:text-red-500" />
                  Like - {photo.likes}
                </Button>
              </div>
            </CardFooter>
          </Card>
          // </motion.div>
        );
      })}
    </motion.section>
  );
};
