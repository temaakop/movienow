import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { FilmInterface } from '@/types/FilmInterface'

export const useFilmsStore = defineStore('films', () => {
  const films = ref<FilmInterface[]>()

  function setFilms(payload: FilmInterface[]) {
    films.value = payload
  }

  return { films, setFilms }
})
