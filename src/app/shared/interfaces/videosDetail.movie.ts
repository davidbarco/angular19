export interface VideoResponse {
    id: number;
    results: VideoResult[];
  }
  
  export interface VideoResult {
    iso_639_1: string; // Código de idioma
    iso_3166_1: string; // Código de región
    name: string; // Nombre del video
    key: string; // ID del video en YouTube
    site: string; // Sitio donde está alojado (por ejemplo, YouTube)
    size: number; // Tamaño de la resolución (p. ej., 1080)
    type: string; // Tipo de video (Teaser, Featurette, Trailer, etc.)
    official: boolean; // Si es un video oficial
    published_at: string; // Fecha de publicación
    id: string; // ID único del video
  }
  