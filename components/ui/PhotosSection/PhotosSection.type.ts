import type { ArtItem } from "@/types/ArtItem.type";
import type { PostgrestError } from "@supabase/supabase-js";

export type PhotosSectionProps = {
  data: ArtItem[] | PostgrestError;
};
