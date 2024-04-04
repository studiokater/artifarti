// Components
import { PhotosSection } from "@/components/ui/";
import { AuthForm } from "@/components/ui/";

// Supabase
import { createClient as createServerClient } from "@/lib/supabase/server";
import type { PostgrestError } from "@supabase/supabase-js";

// Types
import type { ArtItem } from "@/types";

async function getData() {
  const supabase = createServerClient();

  let { data: content, error } = await supabase.from("content").select("*");

  if (error) {
    console.log(error);
    return error;
  }

  return content as ArtItem[];
}

export default async function Home() {
  const data: PostgrestError | ArtItem[] = await getData();

  return (
    <main className="flex w-full flex-1 flex-col">
      <PhotosSection data={data} />
    </main>
  );
}
