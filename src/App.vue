<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="header">#MOVIENOW</header>
  <RouterView />
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  background-color: var(--color-background-header);
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  font-size: 48px;
  font-family: Roboto;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: 0.21em;
  color: black;
}
</style>
