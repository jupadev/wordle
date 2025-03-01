<script setup lang="ts">
defineProps<{
  wordOfTheDay: string
}>()
</script>

<template>
  <input type="text" maxlength="30" />
  <p class="green">{{ wordOfTheDay }}</p>
  <p>You Won!</p>
</template>

<style scoped></style>
