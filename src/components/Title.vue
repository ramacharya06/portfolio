<script setup>
defineProps({
    label: {
        type: String,
        required: true,
    },
    colorClass: {
        type: String,
        default: 'text-zinc-900 dark:text-zinc-100',
    },
})
</script>

<template>
    <div class="flex justify-center items-center m-8 flex-col">
        <h2 class="mr-2 text-4xl @max-sm:text-2xl font-bold" :class="colorClass">
            {{ label }}
        </h2>
    </div>
</template>