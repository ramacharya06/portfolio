<script setup>
defineProps({
    label: {
        type: String,
        required: true,
    },
    widthClass: {
        type: String,
        default: 'w-full',
    },
})
</script>

<template>
    <div
        class="m-1 mt-4 rounded-xl border-2 border-dashed border-zinc-600 hover:border-zinc-800 dark:border-zinc-400 dark:hover:border-zinc-200 p-4 @max-md:w-70 @max-sm:w-60 card flex items-center gap-4 @max-md:block"
        :class="[widthClass]"
    >
        <div v-if="$slots.image" class="flex justify-center items-center shrink-0 @max-md:hidden">
            <slot name="image" />
        </div>
        <div class="flex-1 @max-md:text-xs">
            <div class="mb-1 text-zinc-700 dark:text-zinc-300 font-bold text-xl @max-md:text-sm">
                <slot name="college_name" class="h-1/10" />
            </div>
            <div class="text-zinc-600 dark:text-zinc-400 w-full @max-md:text-xs">
                <slot />
            </div>
        </div>
        <div class="ml-auto items-end shrink-0 @max-md:text-xs @max-md:mt-3" v-if="$slots.details">
            <slot name="details" />
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
