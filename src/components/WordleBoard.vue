<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  wordOfTheDay: string
}>()

const guessInProgress = ref('')
const guessSubmitted = ref('')
</script>

<template>
  <input
    type="text"
    maxlength="30"
    v-model="guessInProgress"
    @keydown.enter="guessSubmitted = guessInProgress"
  />
  <p class="green">{{ wordOfTheDay }}</p>
  <p
    v-if="guessSubmitted.length > 0"
    v-text="guessSubmitted === wordOfTheDay ? 'You Won!' : 'Best luck next time!'"
  />
</template>

<style scoped></style>
