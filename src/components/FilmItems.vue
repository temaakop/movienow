<script lang="ts" setup>
import { ref, type PropType } from 'vue'

const props = defineProps({
  id: Number as PropType<number>,
  title: String,
  year: Number,
  genres: Array as PropType<string[]>,
  actors: Array as PropType<string[]>,
  description: String as PropType<string | null>,
  poster: String,
  directors: Array as PropType<string[]>,
  duration: String as PropType<string | null>
})
</script>
<template>
  <div class="film-item__container">
    <div class="film-logo__container">
      <img
        src="https://s3-alpha-sig.figma.com/img/d5b9/417a/e33d4519e6e538ec97f4b1db9a9bb67e?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fOo7icjqb~G94R1zEt7thsFnX6SU7FhPrfdRdpzY9UbFaQzYrQDUMR7c0CzEqeM6f5nEFx1pYr5~Y7IzKR14~VaWZ4uoRtmHZbbsAVSc4vtT4rTGYMN~mFPOyYFCdztK3w5qkRlbA1cZ5fMkTawytDnngRjKmkq22CQ1lX2wlfLEcOmz2seXJ-4p1ll1yzS8QqAE9BhEEDsagfv7wRX0B5rhnPF4VjUvd3Zx~HPS2fq1vl0pGs1fHr7MlvvYO3LlzkntfamFrk5pN9VV6W0vo7ebELt42YPKLP270vwHZbS5n92hviSPaf6qaKmk9-jDiaI~boNFPuKxST2qWUtRPg__"
        alt=""
        class="film-logo"
      />
    </div>
    <div class="film-content">
      <h3 class="film-content__title">
        <RouterLink
          class="film-content__title"
          :to="{ name: 'FilmDetail', params: { id: props.id } }"
          >{{ title }}</RouterLink
        >
      </h3>
      <div class="film-content__details">
        <p class="details__year">
          {{ year }},
          <i v-for="genre of genres" :key="genre"> {{ genre }}</i>
        </p>
        <p class="details__director" v-for="director of directors" :key="director">
          {{ director }}
        </p>
        <div class="details__actors">
          <p>Актеры:</p>
          <div class="details__actors-list">
            <p v-for="actor of actors" :key="actor">
              {{ actor }}
            </p>
          </div>
        </div>
      </div>
      <div class="film-content__about-films">
        {{ description }}
      </div>
    </div>
    <div v-if="duration" class="film-duration">
      {{ props.duration }}
      <img src="../assets/img/duration_icon.png" />
    </div>
  </div>
</template>

<style lang="scss">
.film-item__container {
  display: flex;
  background-color: #4d4747;
  gap: 24px;
  position: relative;

  .film-logo__container {
    display: flex;
    align-items: center;
    max-width: 168px;
    width: 100%;
    padding: 0 28px;
    background-color: var(--color-text-light-grey);

    img {
      max-width: 112px;
      width: 100%;
    }
  }

  .film-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 16px;

    padding: 32px 16px 32px 0;
    color: #988f8f;
    font-size: 12px;
    font-weight: 700;
    line-height: 12px;

    .film-content__title {
      text-decoration: none;
      color: white;
      font-size: 36px;
      font-weight: 700;
      line-height: 36px;
    }

    .film-content__details {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 10px;

      .details__actors {
        display: flex;
        align-items: flex-start;
        gap: 10px;

        .details__actors-list {
          display: flex;

          justify-content: stretch;
          align-items: center;
          gap: 10px;
          white-space: nowrap;
          flex-wrap: wrap;

          p {
            font-style: normal;
            color: white;
            font-size: 12px;
            font-weight: 400;
            line-height: 16px;
          }
        }
      }
    }
    .film-content__about-films {
      color: white;
      font-size: 16px;
      font-weight: 400;
      line-height: 20px;
    }
  }

  .film-duration {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    color: black;
    background-color: #c4c4c4;
    top: 32px;
    right: 0;
    position: absolute;
    width: 134px;
    height: 30px;

    font-size: 12px;
    font-weight: 700;
    line-height: 12px;

    clip-path: polygon(0 100%, 5% 0, 100% 0, 100% 100%);
  }
}
</style>
