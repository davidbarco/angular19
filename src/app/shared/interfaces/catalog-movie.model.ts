
export interface MovieResponseModel {
  dates: DatesModel;
  page: number;
  results: MovieModel[];
  total_pages: number;
  total_results: number;
}

export interface MovieModel {
  id: number;
  title: string;
  original_title: string;
  original_language: string;
  overview: string;
  release_date: string;
  genre_ids: number[];
  poster_path: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  vote_average: number;
  adult: boolean;
  video: boolean;
  //menu?: MenuItem[]; // Ejemplo: un menú de acciones para cada película.
}

interface DatesModel {
  maximum: string;
  minimum: string;
}
