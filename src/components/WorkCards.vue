<script setup>
import Button from 'primevue/button'
import { ref } from 'vue'

defineProps({
  label: {
    type: String,
    required: true,
  },
  widthClass: {
    type: String,
    default: 'w-full',
  },
  techstack: {
    type: Array,
    default: () => [],
  },
  duration: {
    type: String,
    default: '',
  },
})

const isExpanded = ref(false)
</script>

<template>
  <div
    class="m-1 mt-4 rounded-xl border-dashed border-zinc-600 hover:border-zinc-800 dark:border-zinc-400 dark:hover:border-zinc-200 p-4 card md:flex-row gap-6 w-full cursor-pointer @container min-w-[300px] m-2"
    @click="isExpanded = !isExpanded" :class="[widthClass]">
    <div class="flex flex-row">
      <!-- Left Column: Image -->
      <div v-if="$slots.image" class="md:w-1/4 flex justify-center items-center shrink-0">
        <div
          class="w-32 h-32 md:w-full md:h-auto max-w-[150px] @max-sm:w-24 @max-sm:h-24 p-2 aspect-square flex justify-center items-center">
          <slot name="image" />
        </div>
      </div>

      <!-- Right Column: Content -->
      <div class="flex flex-row justify-between w-full gap-4">
        <div class="flex flex-col flex-grow justify-between">
          <div>
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-2 gap-2">
              <div v-if="$slots.title" class="text-zinc-700 dark:text-zinc-300 font-bold text-xl @max-sm:text-base">
                <slot name="title" />
              </div>
              <span v-if="duration"
                class="text-sm font-medium text-zinc-700 dark:text-zinc-200 whitespace-nowrap bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded @max-sm:text-xs font-light">
                {{ duration }}
              </span>
            </div>

            <div v-if="$slots.techstack || techstack.length" class="mb-4 flex flex-wrap gap-2 w-full">
              <slot name="techstack">
                <span v-for="tech in techstack" :key="tech"
                  class="px-2 py-1 text-xs rounded bg-zinc-200 dark:bg-zinc-700 whitespace-nowrap">
                  {{ tech }}
                </span>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Toggle Button Column -->
    <div class="shrink-0 pt-1 flex justify-center items-center">
      <Button @click.stop="isExpanded = !isExpanded"
        class="p-button-text p-button-rounded p-button-sm !p-0 !w-8 !h-8 flex justify-center items-center hover:bg-zinc-100 dark:hover:bg-zinc-800"
        :icon="isExpanded ? 'pi pi-chevron-up' : 'pi pi-chevron-down'" aria-label="Toggle Description" />
    </div>
    <div v-if="$slots.description" v-show="isExpanded"
      class="mb-3 text-zinc-700 dark:text-zinc-300 text-base @max-sm:text-sm transition-all duration-300 ease-in-out m-2">
      <slot name="description" />
    </div>
  </div>
</template>

<style scoped>
.card {
  transition: border-color 0.3s ease;
  border-width: 2px;
}

.card :deep(img) {
  transition: transform 0.3s ease;
  transform-origin: center center;
}

.card:hover :deep(img) {
  transform: scale(1.05);
}
</style>
