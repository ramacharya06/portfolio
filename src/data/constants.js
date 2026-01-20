export const PROFILE_HERO_TITLES = ['Python Dev', 'AI Enthusiast', 'ML Enthusiast', 'Web Developer']

export const PROFILE_DESCRIPTION =
    'I build interactive web applications using <b>Flask</b>, <b>FastAPI</b>, <b>Django</b>, <b>Vue.js</b>, and <b>PostgreSQL</b>, with a strong focus on clean UI and well-structured backends. I work across the stack, from <b>CSS to API design</b> and <b>async systems</b> to <b>deployment</b> and <b>real-world usage</b>.<br><br>'

export const CONTACT_LINKS = [
    { label: 'GitHub', icon: 'pi pi-github', route: 'https://github.com/ramacharya06' },
    { label: 'LinkedIn', icon: 'pi pi-linkedin', route: 'https://linkedin.com/in/ramacharya06' },
    { label: 'X', icon: 'pi pi-twitter', route: 'https://x.com/ramacharya06' },
    { label: 'Email', icon: 'pi pi-envelope', route: 'mailto:rama14062006@gmail.com' },
]

export const PROJECT_CARDS = [
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

export const TECH_STACK = {
    python: { name: 'Python', icon: '/python.png' },
    django: { name: 'Django', icon: '/django.png' },
    fastapi: { name: 'FastAPI', icon: '/fastapi.png' },
    vue: { name: 'Vue.js', icon: '/vue.png' },
    postgresql: { name: 'PostgreSQL', icon: '/postgresql.png' },
    azure: { name: 'Microsoft Azure', icon: '/azure.png' },
    js: { name: 'JavaScript', icon: '/js.png' },
    redis: { name: 'Redis', icon: '/redis.svg' },
    celery: { name: 'Celery', icon: '/celery.png' },
    numpy: { name: 'Numpy', icon: '/numpy.svg' },
    pandas: { name: 'Pandas', icon: '/pandas.svg' },
    scikit_learn: { name: 'Scikit-learn', icon: '/scikit-learn.svg' },
    matplotlib: { name: 'Matplotlib', icon: '/matplotlib.svg' },
    streamlit: { name: 'Streamlit', icon: '/streamlit.png' },
    cpp: { name: 'C++', icon: '/cpp.png' },
    linux: { name: 'Linux', icon: '/linux.png' },
    git: { name: 'Git', icon: '/git.png' },
    tailwind: { name: 'Tailwind CSS', icon: '/tailwind.svg' },
    flask: { name: 'Flask', icon: '/flask.png' },
    html: { name: 'Html', icon: '/html.png' },
    css: { name: 'CSS', icon: '/css.png' },
    vercel: { name: 'Vercel', icon: '/vercel.png' },
}

export const WORK_CARDS = [
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

export const CP_ACCOUNTS = [
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

export const EDUCATION = [
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
