<script setup>
import Avatar from 'primevue/avatar'
import { ref, onMounted, onUnmounted, computed } from 'vue'
import Button from 'primevue/button'
import Card from '../components/ProjectCards.vue'
import WCard from '../components/WorkCards.vue'
import Title from '../components/Title.vue'
import ECard from '../components/EduCards.vue'
import {
    PROFILE_HERO_TITLES,
    PROFILE_DESCRIPTION,
    CONTACT_LINKS,
    PROJECT_CARDS,
    TECH_STACK,
    WORK_CARDS,
    CP_ACCOUNTS,
    EDUCATION,
} from '../data/constants'
import { useTheme } from '../composables/useTheme'

const { isDark } = useTheme()

const logo = computed(() => (isDark.value ? '/misc/logo-dark.png' : '/misc/logo.png'))

const text = ref(PROFILE_HERO_TITLES[0])
let intervalId = null

onMounted(() => {
    let i = 0
    intervalId = setInterval(() => {
        i = (i + 1) % PROFILE_HERO_TITLES.length
        text.value = PROFILE_HERO_TITLES[i]
    }, 2000)
})

onUnmounted(() => {
    if (intervalId) clearInterval(intervalId)
})

const description = ref(PROFILE_DESCRIPTION)
const contactLinks = CONTACT_LINKS
const projectcards = PROJECT_CARDS
const techstack = TECH_STACK
const workCards = WORK_CARDS
const cp_accounts = CP_ACCOUNTS
const education = EDUCATION
</script>
<template>
    <!-- Profile Hero Session -->
    <div class="w-full max-w-4xl min-w-[250px] mx-auto flex p-4 flex-col @container">
        <div class="flex justify-between items-end @sm:my-16 @max-sm:block">
            <Avatar
                :image="logo"
                shape="circle"
                size="large"
                class="p-2 w-50 h-50 min-w-50 min-h-50 rounded-bg overflow-hidden border-2 border-black dark:border-gray-600 bg-zinc-100 dark:bg-zinc-800"
                non-selectable
            />
            <nav>
                <ul class="flex @max-sm:p-3">
                    <li
                        v-for="item in contactLinks"
                        :key="item.label"
                        class="p-2 text-gray-500 hover:text-gray-900 hover:scale-[1.01] dark:hover:text-gray-200 object-fit"
                    >
                        <a :href="item.route" target="new">
                            <i :class="item.icon" class="text-[1.5em]"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="p-4 @container">
            <div class="block @lg:flex font-bold">
                <p class="mr-2 text-4xl @max-sm:text-2xl text-blue-950 dark:text-blue-100">
                    Hi, I'm Ram —
                </p>
                <p class="mr-2 text-4xl @max-sm:text-2xl text-zinc-400">{{ text }}</p>
            </div>
            <p class="text-zinc-800 dark:text-zinc-300 @max-sm:text-xs">
                <i><u>@ramacharya06</u></i>
            </p>
        </div>
        <div>
            <p
                class="text-zinc-800 dark:text-zinc-300 text-lg @max-sm:text-sm leading-[2em]"
                v-html="description"
            ></p>
            <a
                href="https://drive.google.com/file/d/1ToVYRTwLefL-PbE7iUsvVHg8YdfQQ41J/view?usp=drive_link"
                target="blank"
            >
                <Button class="hover:scale-[1.01] text-[1.1em]"
                    ><i class="pi pi-file-pdf"></i>Resume</Button
                >
            </a>
        </div>

        <!-- TechStack -->
        <div id="techstack" class="flex justify-center items-center m-2 flex-col scroll-mt-28">
            <Title label="Techstack" />
            <div class="flex flex-row flex-wrap gap-2 w-full justify-center items-center">
                <div
                    class="flex items-center p-2 rounded hover:scale-[1.01] shadow-lg"
                    v-for="tech in techstack"
                    :key="tech.name"
                >
                    <img :src="tech.icon" :alt="tech.name" class="w-5 h-5 object-contain" />
                    <span class="ml-2">{{ tech.name }}</span>
                </div>
            </div>
        </div>

        <!-- Project -->
        <div id="projects" class="flex justify-center items-center m-8 flex-col scroll-mt-28">
            <Title label="My Projects" />
            <div
                class="flex @md:overflow-x-scroll w-full @max-lg:flex-col justify-center items-center"
            >
                <Card
                    v-for="card in projectcards"
                    :key="card.label"
                    :github="card.github"
                    :live="card.live"
                    :label="card.label"
                    :widthClass="card.widthClass"
                    :techstack="card.techstack"
                >
                    <template #image>
                        <img
                            :src="card.image"
                            :alt="card.title"
                            class="mx-auto rounded-lg object-contain"
                        />
                    </template>

                    <template #title>
                        <p>{{ card.title }}</p>
                    </template>

                    <template #description>
                        <p>{{ card.description }}</p>
                    </template>
                </Card>
            </div>
            <hr />
        </div>

        <!-- Work Experience -->
        <div id="work" class="flex justify-center items-center m-8 flex-col scroll-mt-28">
            <Title label="Work Experience" class="text-center" />
            <div class="flex flex-col gap-4 @md:w-full">
                <WCard
                    v-for="work in workCards"
                    :key="work.label"
                    :label="work.label"
                    :title="work.title"
                    :duration="work.duration"
                    :techstack="work.techstack"
                    :github="work.github"
                    :live="work.live"
                >
                    <template #image>
                        <Avatar
                            :image="work.image"
                            class="w-full h-full"
                            size="xlarge"
                            shape="circle"
                        />
                    </template>
                    <template #title>
                        {{ work.title }}
                        <p class="text-zinc-500 text-sm font-normal">{{ work.label }}</p>
                    </template>
                    <template #description>
                        <ul>
                            <li v-for="desc in work.description" :key="desc" type="disc">
                                {{ desc }}
                            </li>
                        </ul>
                    </template>
                </WCard>
            </div>
        </div>

        <!-- Education -->
        <div class="flex justify-center items-center m-8 flex-col">
            <Title label="Education" />
            <div class="flex flex-col gap-4">
                <ECard v-for="edu in education" :key="edu.college" :label="edu.college">
                    <template #image>
                        <Avatar :image="edu.image" size="xlarge" shape="circle" />
                    </template>
                    <template #college_name>
                        {{ edu.college }}
                    </template>
                    <template #default>
                        <p class="font-semibold">{{ edu.course }}</p>
                    </template>
                    <template #details>
                        <div class="flex flex-col items-end">
                            <p class="text-xs text-zinc-500 whitespace-nowrap">
                                {{ edu.duration }}
                            </p>
                            <p
                                class="text-sm font-bold mt-1 text-zinc-700 dark:text-zinc-300 whitespace-nowrap"
                            >
                                {{ edu.score }}
                            </p>
                        </div>
                    </template>
                </ECard>
            </div>
        </div>
        <!-- Github Graph -->
        <!-- <div class="flex justify-center items-center m-8 flex-col">
      <Title label="Github Graph" />
    </div> -->

        <!-- Let's Connect -->
        <div id="connect" class="flex justify-center items-center m-8 flex-col scroll-mt-28">
            <Title label="Let's Connect" />
            <p class="text-zinc-500 text-sm font-normal text-center">
                Feel free to reach out for collaborations or just a friendly chat.
            </p>
            <div class="flex justify-center items-center m-8 flex-col">
                <div
                    class="flex justify-center items-center m-8 flex-col gap-4 @max-md:w-[100vw] @max-md:m-0"
                >
                    <div class="flex flex-wrap gap-4 justify-center">
                        <a
                            v-for="link in contactLinks"
                            :key="link.label"
                            :href="link.route"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                class="hover:scale-[1.05] hover:text-zinc-700 dark:hover:text-zinc-200 transition-transform @max-md:text-xs"
                                :label="link.label"
                                :icon="link.icon"
                                severity="secondary"
                                rounded
                                outlined
                            />
                        </a>
                    </div>
                    <div class="flex flex-wrap gap-4 justify-center">
                        <a
                            v-for="link in cp_accounts"
                            :key="link.label"
                            :href="link.route"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                class="text-gray-500 dark:text-gray-400 hover:text-gray-900 hover:scale-[1.01] dark:hover:text-gray-200 transition-transform group @max-md:text-xs"
                                severity="secondary"
                                rounded
                                outlined
                            >
                                <div
                                    class="w-5 h-5 mr-2 bg-gray-500 dark:bg-gray-400 group-hover:bg-gray-700 dark:group-hover:bg-gray-200"
                                    :style="`-webkit-mask-image: url(${link.icon}); mask-image: url(${link.icon}); -webkit-mask-repeat: no-repeat; mask-repeat: no-repeat; -webkit-mask-size: contain; mask-size: contain;`"
                                ></div>
                                <p class="text-[1.05em] font-[500]">{{ link.label }}</p>
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
