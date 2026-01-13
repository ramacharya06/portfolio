<script setup>
import Avatar from 'primevue/avatar'
import { ref } from 'vue'
import Button from 'primevue/button'
import Card from '../components/Cards.vue'
const logo = '/logo.png'
// const logo = '';

let arr = ['Python Dev', 'AI Enthusiast', 'ML Enthusiast', 'Web Developer']
const text = ref('Python Dev')
let i = 0
setInterval(() => {
  text.value = arr[i]
  i++
  if (i == arr.length) {
    i = 0
  }
}, 2000)

let description = ref(
  'I build interactive web applications using <b>Flask</b>, <b>FastAPI</b>, <b>Django</b>, <b>Vue.js</b>, and <b>PostgreSQL</b>, with a strong focus on clean UI and well-structured backends. I work across the stack, from <b>CSS to API design</b> and <b>async systems</b> to <b>deployment</b> and <b>real-world usage</b>.<br><br>',
)

let items = [
  { label: 'GitHub', icon: 'pi pi-github', route: 'https://github.com/ramacharya06' },
  { label: 'LinkedIn', icon: 'pi pi-linkedin', route: 'https://linkedin.com/in/ramacharya06' },
  { label: 'X', icon: 'pi pi-twitter', route: 'https://x.com/ramacharya06' },
  { label: 'Email', icon: 'pi pi-envelope', route: 'mailto:rama14062006@gmail.com' },
]

let cards = [
  {
    github: 'https://github.com/ramacharya06/credit-risk-predictor',
    live: 'https://credit-risk-predictor-lrhp.streamlit.app/',
    title: 'Credit Risk Predictor',
    widthClass: 'w-100',
    image: '/credit_risk_prediction_system.png',
    description:
      'A machine learning application that predicts credit risk and loan default probability using Random Forest Classifier.',
    techstack: [
      'Python',
      'Jupyter Notebook',
      'Streamlit',
      'Pandas',
      'Numpy',
      'Scikit-learn',
      'Matplotlib',
    ],
  },
  {
    github: 'https://github.com/ramacharya06/SaveIt',
    title: 'Save It',
    widthClass: 'w-100',
    image: '/save-it.png',
    description:
      'A versatile utility that allows you to download images and other files from the internet. It provides both a Command-Line Interface (CLI) and a modern Web Interface.',
    techstack: ['Python', 'FastAPI', 'Vue.js', 'Html', 'CSS', 'JS'],
  },
]
</script>

<template>
  <div class="w-full max-w-4xl min-w-[250px] mx-auto flex p-4 flex-col @container">
    <div class="flex justify-between items-end @sm:my-16">
      <Avatar :image="logo" shape="circle" size="large"
        class="p-2 w-50 h-50 min-w-50 min-h-50 rounded-bg overflow-hidden border-2 border-black dark:border-gray-600"
        non-selectable />
      <nav>
        <ul class="flex">
          <li v-for="item in items" :key="item.label"
            class="p-2 text-gray-500 hover:text-gray-900 dark:hover:text-gray-200">
            <a :href="item.route" target="new">
              <i :class="item.icon" class="text-[1.5em]"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="p-4 @container">
      <div class="block @lg:flex font-bold">
        <p class="mr-2 text-4xl text-blue-950 dark:text-blue-100">Hi, I'm Ram —</p>
        <p class="mr-2 text-4xl text-zinc-400">{{ text }}</p>
      </div>
      <p class="text-zinc-800 dark:text-zinc-300">
        <i><u>@ramacharya06</u></i>
      </p>
    </div>
    <div>
      <p class="text-zinc-800 dark:text-zinc-300 text-lg leading-[2em]" v-html="description"></p>
      <a href="https://www.google.com" target="blank">
        <Button
          class="pi pi-file-pdf p-3 bg-zinc-600 hover:bg-zinc-800 dark:bg-zinc-400 hover:dark:bg-zinc-100 dark:bg-gray-600 border-black dark:border-gray-600 text-white dark:text-black text-[1.5em] hover:scale-[1.01]"
          label=" Resume" />
      </a>
    </div>
    <div class="flex justify-center items-center m-8 flex-col">
      <p class="mr-2 text-4xl text-zinc-900 dark:text-zinc-100 font-bold">My Projects</p>
      <div>
        <Card v-for="card in cards" :key="card.label" :github="card.github" :live="card.live" :label="card.label"
          :widthClass="card.widthClass" :heightClass="card.heightClass">
          <template #image>
            <img :src="card.image" :alt="card.title" class="mx-auto rounded-lg object-contain" />
          </template>

          <template #title>
            <p>{{ card.title }}</p>
          </template>

          <template #description>
            <p>{{ card.description }}</p>
          </template>

          <template #techstack>
            <span v-for="tech in card.techstack" :key="tech"
              class="px-2 py-1 text-sm rounded bg-zinc-200 dark:bg-zinc-700">
              {{ tech }}
            </span>
          </template>
        </Card>
      </div>
      <hr />
    </div>
    <div class="flex justify-center items-center m-8 flex-col">
      <p class="mr-2 text-4xl text-zinc-900 dark:text-zinc-100 font-bold">Work Experience</p>
    </div>
    <div class="flex justify-center items-center m-8 flex-col">
      <p class="mr-2 text-4xl text-zinc-900 dark:text-zinc-100 font-bold">Codolio Graph</p>
    </div>
    <div class="flex justify-center items-center m-8 flex-col">
      <p class="mr-2 text-4xl text-zinc-900 dark:text-zinc-100 font-bold">Techstack</p>
    </div>
    <div class="flex justify-center items-center m-8 flex-col">
      <p class="mr-2 text-4xl text-zinc-900 dark:text-zinc-100 font-bold">About</p>
    </div>
  </div>
</template>
