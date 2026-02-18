
import { Member, Show } from './types';

export const COLORS = {
  BORDO: '#8A1A30',
  WHITE: '#FFFFFF',
  DEEP_BLACK: '#0B0B0D',
  SOFT_GRAY: '#CFCFD4',
};

export const SPOTIFY_LINKS = {
  // Playlist requested: https://open.spotify.com/playlist/37i9dQZF1DXbITWG1ZJKYt
  PLAYLIST_URL: "https://open.spotify.com/embed/playlist/37i9dQZF1DXbITWG1ZJKYt?utm_source=generator", 
  TRACK_URL: "https://open.spotify.com/embed/track/2TpxZ7JUBv3176XqUEA27v", // Featured track
  OFFICIAL_PROFILE: "https://open.spotify.com/artist/simonimo" // Band profile
};

export const BAND_MEMBERS: Member[] = [
  {
    name: "Alejandra Leoz",
    role: "Piano y voz",
    description: "Piano, voz y sensibilidad en el centro del sonido.",
    instagram: "alevika_music",
    imageUrl: "https://images.unsplash.com/photo-1552422535-c45813c61732?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "José Gomez",
    role: "Guitarra",
    description: "Guitarra con carácter, dinámica y presencia.",
    instagram: "josegomez.musico",
    imageUrl: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Simón Gatica",
    role: "Bajo y voz",
    description: "Bajo sólido y voz: base rítmica y energía.",
    instagram: "simon_gatica",
    imageUrl: "https://images.unsplash.com/photo-1598387181032-a3103a2db5b3?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Alessandro Juárez",
    role: "Batería",
    description: "Batería precisa y musical: empuje y groove.",
    instagram: "alessandro_juarez",
    imageUrl: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?q=80&w=800&auto=format&fit=crop"
  }
];

export const UPCOMING_SHOWS: Show[] = [
  {
    venue: "KIF Bar Club",
    address: "Av. Córdoba 5600, CABA",
    date: "Sábado 24 de Agosto",
    time: "21:30 hs",
    modality: "Show al sobre"
  }
];

export const CONTACT_EMAIL = "contacto@simonimo.com";
export const INSTAGRAM_URL = "https://instagram.com/simonimo.musica";
