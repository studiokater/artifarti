"use client";

// Assets
import { NeueMontreal, SpaceGroteskLight } from "@/styles/fonts";

// Animations
import { fadeIn } from "@/animations";

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

// Types
import type { PhotosSectionProps } from "./PhotosSection.type";
import type { ArtItem } from "@/types";

/**
 * Renders a section with a grid of photos, each photo displayed in a card with a header, content, and footer.
 * @param {PhotosSectionProps} data - An array of ArtItem objects containing the data for each photo to be displayed.
 * @returns {JSX.Element} - The rendered section with the grid of photos.
 */
export const PhotosSection = ({ data }: PhotosSectionProps) => {
  return (
    <section className="grid w-full grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-2">
      {(data as ArtItem[]).map((photo) => {
        return (
          <motion.div
            key={photo.id}
            variants={fadeIn}
            initial="initial"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <Card
              key={photo.id}
              className="flex flex-col justify-between rounded-none shadow-none"
            >
              <CardHeader>
                <CardTitle className={NeueMontreal.className}>
                  {photo.title}
                </CardTitle>
                <CardDescription className={SpaceGroteskLight.className}>
                  {photo.created_at.substring(0, 10)}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Image
                  src={photo.file_url}
                  alt={photo.description ?? photo.description ?? "Photo"}
                  width={1080}
                  height={1080}
                  loading="lazy"
                  className="h-[400px] object-cover object-center"
                />
                <h6>{photo.description ?? photo.description}</h6>
              </CardContent>
              <CardFooter
                className={`${SpaceGroteskLight.className} flex justify-between`}
              >
                <div className="space-x-2">
                  <Button className="h-12">
                    <BiCartAdd className="mr-2 h-5 w-5" />
                    Add to cart - {`€${photo.price}0`}
                  </Button>
                </div>

                <div className="space-x-2">
                  <Button variant="outline" className="group h-12">
                    <BiShareAlt className="mr-2 h-5 w-5 group-hover:text-green-400" />
                    Share
                  </Button>
                  <Button variant="outline" className="group h-12">
                    <BiHeart className="mr-2 h-5 w-5 group-hover:text-red-500" />
                    {photo.likes}
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        );
      })}
    </section>
  );
};
