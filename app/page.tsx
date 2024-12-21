// Components
import { PhotosSection } from "@/components/ui/";

// Supabase
import { createClient as createServerClient } from "@/lib/supabase/server";
import type { PostgrestError } from "@supabase/supabase-js";

// Types
import type { ArtItemProps as ArtItemData } from "@/components/ui/types";

async function getData() {
  const supabase = createServerClient();

  let { data: content, error } = await (await supabase)
    .from("content")
    .select("*");

  if (error) {
    console.log(error);
    return error;
  }

  return content as ArtItemData[];
}

export default async function Home() {
  const data: PostgrestError | ArtItemData[] = await getData();

  return (
    <main className="flex w-full flex-1 flex-col">
      <PhotosSection data={data} />
    </main>
  );
}
