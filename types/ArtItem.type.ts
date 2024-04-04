export type ArtItem = {
  id: number;
  created_at: string;
  file_url: string;
  content_type: "photo";
  title: string;
  description?: string;
  likes: 0;
  location?: string;
  price: 0;
  user_id: number;
};
