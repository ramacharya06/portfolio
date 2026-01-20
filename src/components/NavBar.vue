<script setup>
import MenuBar from 'primevue/menubar'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import { ref, onMounted } from 'vue'
import { useTheme } from '../composables/useTheme'
import { computed } from 'vue'

const logo = computed(() => (isDark.value ? '/logo-dark.png' : '/logo.png'))

const items = ref([
  { label: 'Projects', icon: 'pi pi-github', route: '#projects' },
  { label: 'Work', icon: 'pi pi-briefcase', route: '#work' },
  { label: 'Connect', icon: 'pi pi-envelope', route: '#connect' },
])

const { isDark, toggleTheme, initTheme } = useTheme()

onMounted(() => {
  initTheme()
})
</script>

<template>
  <header
    class="w-full flex justify-center p-4 bg-linear-to-t from-[rgba(255,255,255,0)] to-zinc-200 dark:from-[rgba(0,0,0,0)] dark:to-zinc-800">
    <MenuBar :model="items" class="w-7/10 min-w-[300px] rounded-[10px] border-black dark:border-gray-600">
      <template #start>
        <router-link to="/">
          <Avatar :image="logo" shape="square" size="large" class="rounded-bg overflow-hidden [&_img]:scale-110"
            alt="Logo" />
        </router-link>
      </template>
      <template #item="{ item, props, hasSubmenu }">
        <a v-if="item.route && item.route.startsWith('#')" v-ripple :href="item.route" v-bind="props.action">
          <span :class="item.icon" />
          <span>{{ item.label }}</span>
        </a>
        <router-link v-else-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
          <a v-ripple :href="href" v-bind="props.action" @click="navigate">
            <span :class="item.icon" />
            <span>{{ item.label }}</span>
          </a>
        </router-link>
        <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
          <span :class="item.icon" />
          <span>{{ item.label }}</span>
          <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down" />
        </a>
      </template>
      <template #end>
        <Button :icon="isDark ? 'pi pi-moon' : 'pi pi-sun'"
          class="bg-transparent text-black dark:text-white border-black dark:border-gray-600 outline-none"
          @click="toggleTheme" aria-label="Toggle Theme" raised />
      </template>
    </MenuBar>
  </header>
</template>

<style scoped></style>
