import type { ArtItemProps } from "@/components/ui/ArtItem/ArtItem.type";
import type { PostgrestError } from "@supabase/supabase-js";

export type PhotosSectionProps = {
  data: ArtItemProps[] | PostgrestError;
};
