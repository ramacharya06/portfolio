<script setup>
import Avatar from 'primevue/avatar'
import { ref } from 'vue'
import Button from 'primevue/button'
import Card from '../components/projectCards.vue'
import WCard from '../components/WorkCards.vue'
import Title from '../components/Title.vue'
import ECard from '../components/eduCards.vue'
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

let contactLinks = [
  { label: 'GitHub', icon: 'pi pi-github', route: 'https://github.com/ramacharya06' },
  { label: 'LinkedIn', icon: 'pi pi-linkedin', route: 'https://linkedin.com/in/ramacharya06' },
  { label: 'X', icon: 'pi pi-twitter', route: 'https://x.com/ramacharya06' },
  { label: 'Email', icon: 'pi pi-envelope', route: 'mailto:rama14062006@gmail.com' },
]

let projectcards = [
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

let techstack = {
  python: { name: 'Python', icon: '/python.png' },
  fastapi: { name: 'FastAPI', icon: '/fastapi.png' },
  vue: { name: 'Vue.js', icon: '/vue.png' },
  html: { name: 'Html', icon: '/html.png' },
  css: { name: 'CSS', icon: '/css.png' },
  js: { name: 'JavaScript', icon: '/js.png' },
  cpp: { name: 'C++', icon: '/cpp.png' },
  azure: { name: 'Microsoft Azure', icon: '/azure.png' },
  linux: { name: 'Linux Administration', icon: '/linux.png' },
  git: { name: 'Git', icon: '/git.png' },
  flask: { name: 'Flask', icon: '/flask.png' },
  postgresql: { name: 'PostgreSQL', icon: '/postgresql.png' },
  tailwind: { name: 'Tailwind CSS', icon: '/tailwind.svg' },
  vercel: { name: 'Vercel', icon: '/vercel.png' },
  django: { name: 'Django', icon: '/django.png' },
  streamlit: { name: 'Streamlit', icon: '/streamlit.png' },
  celery: { name: 'Celery', icon: '/celery.png' },
  redis: { name: 'Redis', icon: '/redis.svg' },
}

let workCards = [
  {
    label: 'Veermata Jijabai College of Engineering (VJTI), Mumbai',
    title: 'NLP Research Intern',
    duration: 'May 2025 - July 2025',
    description: [
      'Created a Marathi Grammar Error Correction (GEC) system by fine-tuning IndicBART on 2.5M+ tokens from the L3Cube-MahaCorpus, improving baseline accuracy by 15%.',
      ' Developed a Python post-processing pipeline that reduced false positive generations by 35% using Levenshtein distance logic, processing 500+ sentences per minute.',
    ],
    techstack: ['Python', 'IndicBART', 'Stanza', 'L3Cube', 'PyTorch', 'Hugging Face'],
    image: '/vjti.png',
    github: '',
    live: '',
  },
  {
    label: 'Microsoft Learn Students’ Club at WCE, Sangli',
    title: 'Ass. Cloud Coordinator',
    duration: 'August 2025 - Present',
    description: [
      'Facilitated technical workshops on Microsoft Azure, guiding 50+ students through Virtual Machine deployment and cloud resource management.',
      'Collaboratively developed and deployed a Django-based website on Microsoft Azure.',
    ],
    techstack: ['Python', 'IndicBART', 'Stanza', 'L3Cube', 'PyTorch', 'Hugging Face'],
    image: '/wce_mlsc.png',
    github: '',
    live: '',
  },
]

let cp_accounts = [
  {
    label: 'Codeforces',
    icon: '/codeforces.svg',
    route: 'https://codeforces.com/profile/ramacharya06',
  },
  {
    label: 'CodeChef',
    icon: '/codechef.svg',
    route: 'https://www.codechef.com/users/ramacharya06',
  },
  { label: 'Leetcode', icon: '/leetcode.svg', route: 'https://www.leetcode.com/u/ramacharya06' },
]

let education = [
  {
    college: 'IIT Madras (Online)',
    course: 'Bachelor of Science in Data Science',
    duration: '2024 – Present',
    score: '9.45 CGPA',
    image: '/iitm.svg',
  },
  {
    college: 'Walchand College of Engineering, Sangli',
    course: 'B.Tech in Information Technology',
    duration: '2024 – Expected 2028',
    score: '9.65 CGPA',
    image: '/wcoe.png',
  },
]
</script>
<template>
  <!-- Profile Hero Session -->
  <div class="w-full max-w-4xl min-w-[250px] mx-auto flex p-4 flex-col @container">
    <div class="flex justify-between items-end @sm:my-16 @max-sm:block">
      <Avatar :image="logo" shape="circle" size="large"
        class="p-2 w-50 h-50 min-w-50 min-h-50 rounded-bg overflow-hidden border-2 border-black dark:border-gray-600"
        non-selectable />
      <nav>
        <ul class="flex @max-sm:p-3">
          <li v-for="item in contactLinks" :key="item.label"
            class="p-2 text-gray-500 hover:text-gray-900 hover:scale-[1.01] dark:hover:text-gray-200 object-fit">
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
      <p class="text-zinc-800 dark:text-zinc-300 text-lg @max-sm:text-sm leading-[2em]" v-html="description"></p>
      <a href="https://drive.google.com/file/d/1ToVYRTwLefL-PbE7iUsvVHg8YdfQQ41J/view?usp=drive_link" target="blank">
        <Button class="hover:scale-[1.01] text-[1.1em]"><i class="pi pi-file-pdf"></i>Resume</Button>
      </a>
    </div>

    <!-- TechStack -->
    <div id="techstack" class="flex justify-center items-center m-2 flex-col scroll-mt-28">
      <Title label="Techstack" />
      <div class="flex flex-row flex-wrap gap-2 w-full justify-center items-center">
        <div class="flex items-center p-2 rounded hover:scale-[1.01] shadow-lg" v-for="tech in techstack"
          :key="tech.name">
          <img :src="tech.icon" :alt="tech.name" class="w-5 h-5 object-contain" />
          <span class="ml-2">{{ tech.name }}</span>
        </div>
      </div>
    </div>

    <!-- Project -->
    <div id="projects" class="flex justify-center items-center m-8 flex-col scroll-mt-28">
      <Title label="My Projects" />
      <div class="flex @md:overflow-x-scroll w-full @max-lg:flex-col jusify-center items-center">
        <Card v-for="card in projectcards" :key="card.label" :github="card.github" :live="card.live" :label="card.label"
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

    <!-- Work Experience -->
    <div id="work" class="flex justify-center items-center m-8 flex-col scroll-mt-28">
      <Title label="Work Experience" class="text-center"/>
      <div class="flex flex-col gap-4 @md:w-full">
        <WCard v-for="work in workCards" :key="work.label" :label="work.label" :title="work.title"
          :duration="work.duration" :techstack="work.techstack" :github="work.github" :live="work.live">
          <template #image>
            <Avatar :image="work.image" class="w-full h-full" size="xlarge" shape="circle" />
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
              <p class="text-sm font-bold mt-1 text-zinc-700 dark:text-zinc-300 whitespace-nowrap">
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
        <div class="flex justify-center items-center m-8 flex-col gap-4 @max-md:w-[100vw] @max-md:m-0">
          <div class="flex flex-wrap gap-4 justify-center">
            <a v-for="link in contactLinks" :key="link.label" :href="link.route" target="_blank"
              rel="noopener noreferrer">
              <Button
                class="hover:scale-[1.05] hover:text-zinc-700 dark:hover:text-zinc-200 transition-transform @max-md:text-xs"
                :label="link.label" :icon="link.icon" severity="secondary" rounded outlined />
            </a>
          </div>
          <div class="flex flex-wrap gap-4 justify-center">
            <a v-for="link in cp_accounts" :key="link.label" :href="link.route" target="_blank"
              rel="noopener noreferrer">
              <Button
                class="text-gray-500 dark:text-gray-400 hover:text-gray-900 hover:scale-[1.01] dark:hover:text-gray-200 transition-transform group @max-md:text-xs"
                severity="secondary" rounded outlined>
                <div
                  class="w-5 h-5 mr-2 bg-gray-500 dark:bg-gray-400 group-hover:bg-gray-700 dark:group-hover:bg-gray-200"
                  :style="`-webkit-mask-image: url(${link.icon}); mask-image: url(${link.icon}); -webkit-mask-repeat: no-repeat; mask-repeat: no-repeat; -webkit-mask-size: contain; mask-size: contain;`">
                </div>
                <p class="text-[1.05em] font-[500]">{{ link.label }}</p>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
