<script setup>
import Button from 'primevue/button';

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
});
</script>

<template>
  <div class="m-4 rounded-xl border-4 border-dashed
           border-zinc-600 hover:border-zinc-800
           dark:border-zinc-400 dark:hover:border-zinc-200 p-4 pb-10" :class="[widthClass, heightClass]">
    <div v-if="$slots.image" class="mb-3 h-4/10 flex justify-center align-center">
      <slot name="image" />
    </div>

    <div v-if="$slots.title" class="mb-3 text-zinc-700 dark:text-zinc-300 font-bold text-xl">
      <slot name="title" class="h-1/10" />
    </div>

    <div v-if="$slots.description" class="mb-3 text-zinc-700 dark:text-zinc-300">
      <slot name="description" class="h-2/10" />
    </div>

    <div v-if="$slots.techstack" class="mb-4 flex flex-wrap gap-2 justify-center">
      <slot name="techstack" class="h-1/10" />
    </div>
    <div class="flex text-center h-2/15">
      <slot name="github-link">
        <a :href="github" target="_blank" rel="noopener" class="w-full flex">
          <Button label="Source Code" class="w-[90%] p-3 m-2 text-[1.5em]
               bg-zinc-600 hover:bg-zinc-800
               dark:bg-zinc-400 dark:hover:bg-zinc-100
               border-black dark:border-gray-600
               text-white dark:text-black" />
        </a>
      </slot>
      <slot name="live-link">
        <a :href="live" v-if="live" target="_blank" rel="noopener">
          <Button class="w-[90%] p-3 m-2 text-[1.5em]
             bg-zinc-600 hover:bg-zinc-800
             dark:bg-zinc-400 dark:hover:bg-zinc-100
             border-black dark:border-gray-600
             text-white dark:text-black h-11"><i class="pi pi-globe text-[1em]"></i>
            <p class="text-[1.1em] font-semibold">Live</p>
          </Button>
        </a>
      </slot>
    </div>
  </div>
</template>
