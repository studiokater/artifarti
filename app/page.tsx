// Components
import { PhotosSection } from "@/components/ui/";

// Lib
import { unsplashApi } from "@/lib";

async function getData() {
  const req = await unsplashApi.photos.getRandom({ count: 20 });

  if (req.errors) {
    throw new Error("Failed to fetch data");
  }

  return req.response as ArtItem[];
}

export default async function Home() {
  const data = await getData();

  return (
    <main className="w-full">
      <PhotosSection data={data} />
    </main>
  );
}
