"use client";

// Types
import type { PhotosSectionProps } from "./PhotosSection.type";
import type { ArtItemProps } from "@/components/ui/types";

// Components
import { ArtItem } from "@/components/ui";

/**
 * Renders a section with a grid of photos, each photo displayed in a card with a header, content, and footer.
 * @param {PhotosSectionProps} data - An array of ArtItem objects containing the data for each photo to be displayed.
 * @returns {JSX.Element} - The rendered section with the grid of photos.
 */
export const PhotosSection = ({
  data = [],
}: PhotosSectionProps): JSX.Element => {
  return (
    <section className="grid w-full grid-flow-row grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-2">
      {(data as ArtItemProps[])?.map((photo) => {
        return <ArtItem key={photo.id} {...photo} />;
      })}
    </section>
  );
};
