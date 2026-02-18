
export interface Member {
  name: string;
  role: string;
  description: string;
  instagram: string;
  imageUrl: string;
}

export interface Show {
  venue: string;
  address: string;
  date: string;
  time: string;
  modality: string;
}

export interface MediaItem {
  type: 'video' | 'image';
  url: string;
  thumbnail: string;
}
