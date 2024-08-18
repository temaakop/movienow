<script setup lang="ts">
import { useFilmsStore } from '@/stores/films.ts'
import FilmItems from '@/components/FilmItems.vue'
import FiltersItem from '@/components/FiltersItem.vue'
import type { FilmInterface } from '@/types/FilmInterface'
import { computed, onMounted, ref } from 'vue'

const films = ref<FilmInterface[]>()
const filmFilter = ref()
const filmsStore = useFilmsStore()

async function getFilms() {
  const response = await fetch('https://mashroom-movies-api.netlify.app/api/movies')
  const result = await response.json()

  return await result.data
}

onMounted(async () => {
  films.value = await getFilms()
  filmsStore.setFilms(films.value)
})

const sortedFilmsByName = (filmsList: Array<FilmInterface>) => {
  return filmsList.toSorted((a: FilmInterface, b: FilmInterface) => {
    if (a.title > b.title) return 1
    return -1
  })
}

const sortedFilmsByYears = (filmsList: Array<FilmInterface>) => {
  return filmsList.toSorted((a: FilmInterface, b: FilmInterface) => {
    if (a.year > b.year) return 1
    return -1
  })
}

const setFilterForYears = (value: boolean) => {
  if (value) {
    filmFilter.value = 'sortByYear'
    return
  }
  filmFilter.value = ''
}

const setFilterForNames = (value: boolean) => {
  if (value) {
    filmFilter.value = 'sortByName'
    return
  }
  filmFilter.value = ''
}

const sortingFilms = computed(() => {
  if (films.value) {
    switch (filmFilter.value) {
      case 'sortByYear':
        return sortedFilmsByYears(films.value)
      case 'sortByName':
        return sortedFilmsByName(films.value)
      default:
        return films.value
    }
  }
  return films.value
})

const checkFilmDuration = (film: FilmInterface) => {
  if (film.collapse.duration) return film.collapse.duration[0]
  return null
}
</script>
<template>
  <div class="films__container">
    <header class="films__header">Фильмы</header>

    <div class="filters">
      <FiltersItem
        checkbox-id="names-filter"
        :disabled="filmFilter === 'sortByYear'"
        @update:checked="setFilterForNames"
      ></FiltersItem>
      <FiltersItem
        checkbox-id="years-filter"
        @update:checked="setFilterForYears"
        :disabled="filmFilter === 'sortByName'"
      ></FiltersItem>
    </div>
    <div class="films">
      <FilmItems
        class="films-item"
        v-for="film of sortingFilms"
        :key="film.id"
        :id="film.id"
        :title="film.title"
        :year="film.year"
        :genres="film.genres"
        :actors="film.actors"
        :description="film.description"
        :poster="film.poster"
        :directors="film.directors"
        :duration="checkFilmDuration(film)"
      ></FilmItems>
    </div>
  </div>
</template>

<style scoped lang="scss">
.films__container {
  margin: 40px auto;
  max-width: 1400px;
  width: 100%;
  height: 168px;

  .films__header {
    color: var(--color-text-white);
    font-size: 32px;
    font-weight: 500;
    line-height: 32px;
    text-align: left;
  }
  .filters {
    padding: 16px 0;
    display: flex;
    gap: 20px;
    margin-bottom: 40px;
    border-bottom: 1px solid var(--color-text-light-grey);
  }

  .films {
    display: flex;
    flex-direction: column;
    gap: 24px;

    .films-item {
      transition: all 0.15s ease-in;
      &:hover {
        transform: translateY(-8px);
        box-shadow: 0px 8px 20px 0px #00000059;
      }
    }
  }
}
</style>
