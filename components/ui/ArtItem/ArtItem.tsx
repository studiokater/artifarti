"use client";

// Types
import type { ArtItemProps } from "./ArtItem.type";
import type { FC } from "react";

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

export const ArtItem: FC<ArtItemProps> = ({
  id,
  created_at,
  file_url,
  content_type,
  title,
  description,
  likes,
  location,
  price,
  user_id,
}) => {
  return (
    <motion.div
      key={id}
      variants={fadeIn}
      initial="initial"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <Card className="flex flex-col justify-between rounded-none shadow-none">
        <CardHeader>
          <CardTitle className={`${NeueMontreal.className}`}>{title}</CardTitle>
          <CardDescription className={SpaceGroteskLight.className}>
            {created_at.substring(0, 10)}
            <br />
            {location}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <Image
            src={file_url}
            alt={description ?? "Photo description"}
            width={1080}
            height={1080}
            loading="lazy"
            className="h-[400px] object-cover object-center"
          />
          <h6>{description ?? ""}</h6>
        </CardContent>
        <CardFooter
          className={`${SpaceGroteskLight.className} flex justify-between`}
        >
          <div className="space-x-2">
            <Button className="h-12">
              <BiCartAdd className="mr-2 h-5 w-5" />
              Add to cart - {`€${price}0`}
            </Button>
          </div>

          <div className="space-x-2">
            <Button variant="outline" className="group h-12">
              <BiShareAlt className="mr-2 h-5 w-5 group-hover:text-green-400" />
              Share
            </Button>
            <Button variant="outline" className="group h-12">
              <BiHeart className="mr-2 h-5 w-5 group-hover:text-red-500" />
              {likes}
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
