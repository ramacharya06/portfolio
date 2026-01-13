<script setup>
import Button from 'primevue/button'

defineProps({
  github: {
    type: String,
    required: true,
  },
  live: {
    type: String,
    required: false,
  },
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
})
</script>

<template>
  <div
    class="m-1 mt-4 rounded-xl border-2 border-dashed border-zinc-600 hover:border-zinc-800 dark:border-zinc-400 dark:hover:border-zinc-200 p-4 pb-10 @max-md:w-70 @max-sm:w-60 card"
    :class="[widthClass, heightClass]">
    <div v-if="$slots.image" class="mb-3 h-4/10 flex justify-center items-center">
      <slot name="image" />
    </div>

    <div v-if="$slots.title" class="mb-3 text-zinc-700 dark:text-zinc-300 font-bold text-xl">
      <slot name="title" class="h-1/10" />
    </div>

    <div v-if="$slots.description" class="mb-3 text-zinc-700 dark:text-zinc-300 h-24 overflow-y-auto">
      <slot name="description" class="h-2/10" />
    </div>

    <div v-if="$slots.techstack || techstack.length" class="mb-4 flex flex-nowrap overflow-x-auto gap-2 pb-2 w-full">
      <slot name="techstack">
        <span v-for="tech in techstack" :key="tech"
          class="px-2 py-1 text-sm rounded bg-zinc-200 dark:bg-zinc-700 whitespace-nowrap">
          {{ tech }}
        </span>
      </slot>
    </div>
    <div class="flex h-1/15 justify-evenly">
      <slot name="github-link">
        <a :href="github" target="_blank" rel="noopener" class="p-1">
          <Button><i class="pi pi-github"></i>Source Code</Button>
        </a>
      </slot>
      <slot name="live-link">
        <a :href="live" v-if="live" target="_blank" rel="noopener" class="p-1">
          <Button><i class="pi pi-globe"></i>Live</Button>
        </a>
      </slot>
    </div>
  </div>
</template>

<style>
.card img {
  transition: transform 0.3s ease;
  transform-origin: center center;
}

.card:hover img {
  transform: scale(1.05);
}
</style>
