export interface FilmInterface {
  id: number
  id_kinopoisk: number
  url: string
  type: string
  title: string
  title_alternative: string
  tagline: string | null
  description: string | null
  year: number
  poster: string
  trailer: string
  age: string | null
  actors: string[]
  countries: string[]
  genres: string[]
  directors: string[]
  screenwriters: string[]
  producers: string[]
  operators: string | null
  composers: string[]
  painters: string[]
  editors: string | null
  budget: string | null
  rating_kinopoisk: string
  rating_imdb: string | null
  kinopoisk_votes: string
  imdb_votes: string | null
  fees_world: string | null
  fees_russia: string | null
  premiere_world: string
  premiere_russia: string | null
  frames: string[]
  screenshots: string | null
  videocdn: {
    url: string | null
    quality: string | null
    duration: string | null
    voice: string | null
  }
  hdvb: {
    url: string | null
    quality: string | null
    duration: string | null
    voice: string | null
  }
  collapse: {
    url: string | null
    quality: string | null
    duration: Array<string> | null
    voice: string | null
  }
  kodik: {
    url: string | null
    quality: string | null
    duration: string | null
    voice: string | null
  }
}
