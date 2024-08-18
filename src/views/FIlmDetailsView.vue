<script setup lang="ts">
import FilmItems from '@/components/FilmItems.vue'
import { useFilmsStore } from '@/stores/films'
import type { FilmInterface } from '@/types/FilmInterface'
import { computed, onMounted, ref, type PropType } from 'vue'

const filmsStore = useFilmsStore()

const props = defineProps({
  id: String as PropType<string>
})

const filmDetails = ref<FilmInterface>()

const urlDetailsInfo = `https://mashroom-movies-api.netlify.app/api/movie/${props.id}`

async function getFilmDetails() {
  const response = await fetch(
    `https://mashroom-movies-api.netlify.app/api/movie/${urlDetailsInfo}`
  )
  const result = await response.json()
  return result
}

onMounted(async () => {
  filmDetails.value =
    filmsStore.films?.find((film) => film.id === Number(props.id)) || (await getFilmDetails())
})

const filmDuration = computed(() => {
  if (filmDetails.value?.collapse.duration) return filmDetails.value?.collapse.duration[0]
  return null
})
</script>

<template>
  <div class="films__container">
    <div class="film-details__header">
      <RouterLink class="link-to-back" to="/"
        ><img src="../assets/img/back_icon.png" alt="" /> Вернуться к списку</RouterLink
      >
    </div>

    <FilmItems
      v-if="filmDetails"
      class="films-item"
      :id="filmDetails?.id"
      :title="filmDetails?.title"
      :year="filmDetails?.year"
      :genres="filmDetails?.genres"
      :actors="filmDetails?.actors"
      :description="filmDetails?.description"
      :poster="filmDetails?.poster"
      :directors="filmDetails?.directors"
      :duration="filmDuration"
    ></FilmItems>
    <h3 v-else class="no-content__title">К сожалению по вашему запросу ничего не найдено...</h3>
  </div>
</template>

<style scope lang="scss">
.films__container {
  margin: 40px auto;
  max-width: 1400px;
  width: 100%;
  height: 168px;

  .no-content__title {
    font-size: 32px;
    font-weight: 500;
    line-height: 32px;
  }
  .film-details__header {
    padding: 16px 0;
    display: flex;
    gap: 20px;
    margin-bottom: 40px;
    border-bottom: 1px solid var(--color-text-light-grey);

    .link-to-back {
      display: flex;
      align-items: center;
      color: #ff5252fa;
      font-size: 20px;
      gap: 10px;
      font-weight: 400;
      line-height: 20px;

      text-decoration: none;
    }
  }
}
</style>
