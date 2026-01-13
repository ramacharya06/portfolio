<script setup>
import Avatar from 'primevue/avatar'
import { ref } from 'vue'
import Button from 'primevue/button'
import Card from '../components/Cards.vue'
import Title from '../components/Title.vue'
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
    <div class="flex justify-between items-end @sm:my-16 @max-sm:block">
      <Avatar :image="logo" shape="circle" size="large"
        class="p-2 w-50 h-50 min-w-50 min-h-50 rounded-bg overflow-hidden border-2 border-black dark:border-gray-600"
        non-selectable />
      <nav>
        <ul class="flex @max-sm:p-3">
          <li v-for="item in items" :key="item.label"
            class="p-2 text-gray-500 hover:text-gray-900 hover:scale-[1.01] dark:hover:text-gray-200">
            <a :href="item.route" target="new">
              <i :class="item.icon" class="text-[1.5em]"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="p-4 @container">
      <div class="block @lg:flex font-bold">
        <p class="mr-2 text-4xl @max-sm:text-2xl text-blue-950 dark:text-blue-100">Hi, I'm Ram —</p>
        <p class="mr-2 text-4xl @max-sm:text-2xl text-zinc-400">{{ text }}</p>
      </div>
      <p class="text-zinc-800 dark:text-zinc-300 @max-sm:text-xs">
        <i><u>@ramacharya06</u></i>
      </p>
    </div>
    <div>
      <p class="text-zinc-800 dark:text-zinc-300 text-lg @max-sm:text-sm leading-[2em]" v-html="description"></p>
      <a href="https://www.google.com" target="blank">
        <Button class="hover:scale-[1.01] text-[1.1em]"><i class="pi pi-file-pdf"></i>Resume</Button>
      </a>
    </div>
    <div class="flex justify-center items-center m-8 flex-col">
      <Title label="My Projects" />
      <div class="flex overflow-x-scroll w-full @max-lg:flex-col">
        <Card v-for="card in cards" :key="card.label" :github="card.github" :live="card.live" :label="card.label"
          :widthClass="card.widthClass" :techstack="card.techstack">
          <template #image>
            <img :src="card.image" :alt="card.title" class="mx-auto rounded-lg object-contain" />
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
    <Title label="Work Experience" />
    <Title label="Codolio Graph" />
    <Title label="Techstack" />
    <Title label="About" />
  </div>
</template>
