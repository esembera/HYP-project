<!--
    Home page
-->

<script setup>
const activeMenuItem = useActiveMenuItem(); // custom hook

const client = useSupabaseClient();

let { data: projects, errorProjects } = await useAsyncData(
  async () => {
    return await client.from("projects").select("*");
  },
  { transform: (result) => result.data }
);

let { data: questions, errorQuestions } = await useAsyncData(
  async () => {
    return await client.from("questions").select("*");
  },
  { transform: (result) => result.data }
);
</script>
<template>
  <div class="md:container md:mx-auto">
    <div class="max-w-3xl md:mx-auto mt-20">
      <h1
        class="md:text-8xl font-extrabold text-center text-6xl"
        style="font-family: ArchivoBlack"
      >
        Ready for your <span class="image-after">BOLD</span> ideas.
      </h1>
    </div>
    <div class="max-w-3xl md:mx-auto mt-20">
      <p class="text-center md:text-xl md:mx-auto font-sans text-lg">
        We're the adrenaline junkies of the startup world: embracing the
        unexpected, flipping the script, and thriving on the thrill of bold
        ideas. Together with Mini, Calm, Kilo and 200 others , we've celebrated
        successes & new generations.
      </p>
    </div>
    <div
      class="text-center md:text-xl text-lg md:mx-auto font-bold mt-10"
      style="font-family: ArchivoBlack"
    >
      We can, indeed, do it all.
    </div>
    <div class="text-center md:mx-auto">
      <button
        class="colorPink text-black font-bold py-2 px-8 rounded-2xl mt-5 hover:shadow-2xl"
        style="font-family: ArchivoBlack"
      >
        <NuxtLink to="/contact" @click="activeMenuItem = 'contact'">
          Contact us
        </NuxtLink>
      </button>
    </div>
    <div
      class="flex w-full justify-center mt-20 mb-10 md:flex-row flex-col mr-10"
    >
      <div
        class="md:w-1/4 w-full text-center colorPink h-80 md:m-1 mt-2 md:mt-0 hover:shadow-2xl"
      >
        <NuxtLink to="/about" @click="activeMenuItem = 'about'">
          <div
            class="w-full h-full text-6xl text-left pl-5 pt-10"
            style="font-family: ArchivoBlack"
          >
            OUR<br />
            WHAT<br />
            & WHY
            <span
              class="text-lg block text-right pt-16 pr-5"
              style="font-family: ArchivoBlack"
              >About us <SvgArrow class="inline"
            /></span>
          </div>
        </NuxtLink>
      </div>
      <div
        class="md:w-1/4 w-full text-center colorBlue h-80 md:m-1 mt-2 md:mt-0 hover:shadow-2xl"
      >
        <NuxtLink to="/people" @click="activeMenuItem = 'people'">
          <div
            class="w-full h-full text-6xl text-left pl-5 pt-10"
            style="font-family: ArchivoBlack"
          >
            OUR<br />
            WHO<br />
            & HOW
            <span
              class="text-lg block text-right pt-16 pr-5"
              style="font-family: ArchivoBlack"
              >People <SvgArrow class="inline"
            /></span>
          </div>
        </NuxtLink>
      </div>
      <div
        class="md:w-1/4 w-full text-center colorGreen h-80 md:m-1 mt-2 md:mt-0 hover:shadow-2xl"
      >
        <NuxtLink to="/areas" @click="activeMenuItem = 'areas'">
          <div
            class="w-full h-full text-6xl text-left pl-5 pt-10"
            style="font-family: ArchivoBlack"
          >
            OUR<br />
            GO-TO<br />
            IDEAS
            <span
              class="text-lg block text-right pt-16 pr-5"
              style="font-family: ArchivoBlack"
              >Areas <SvgArrow class="inline"
            /></span>
          </div>
        </NuxtLink>
      </div>
    </div>
    <div class="w-4/5 mx-auto">
      <span class="text-4xl" style="font-family: ArchivoBlack"
        >RECENT INVESTMENTS</span
      >
      <div class="grid md:grid-cols-5 mt-10 mb-10 gap-4 grid-cols-2">
        <template v-for="project in projects">
          <div
            class="relative flex justify-center"
            v-if="project.is_recent === true"
            :key="project.id"
            @mouseover="setHoveredItem(project)"
            @mouseleave="clearHoveredItem"
          >
            <img class="w-full" :src="`/img/projects/${project.image}`" />
            <div
              class="detailsButton"
              v-if="project.id == hoveredProject"
              @click="showModal = true"
            >
              Details
            </div>
          </div>
        </template>
      </div>
      <NuxtLink to="/projects" @click="activeMenuItem = 'projects'">
        <span class="md:text-3xl open-sans text-xl"
          >view <span class="font-bold">PROJECTS</span>&nbsp;<SvgArrow
            class="inline mb-2"
        /></span>
      </NuxtLink>
      <span class="text-4xl block mt-10" style="font-family: ArchivoBlack"
        >WHAT SHOULD YOU KNOW ABOUT?</span
      >
      <BlackLine />
      <template v-for="question in questions">
        <FaqItem
          v-if="question.displayOnHomeScreen"
          :key="question.id"
          :question="question.question"
          :answer="question.answer"
          :hasContactUsBtn="question.hasContactUsBtn"
          :hasAreasBtn="question.hasAreasBtn"
        />
      </template>
      <NuxtLink to="/about/faq" @click="activeMenuItem = 'faq'">
        <span class="md:text-3xl open-sans text-xl mb-20 block"
          >view <span class="font-bold">FAQ</span>&nbsp;
          <SvgArrow class="inline mb-2"
        /></span>
      </NuxtLink>
    </div>
  </div>
  <ProjectDetails
    v-show="showModal"
    @close-modal="showModal = false"
    :project="childParameter"
    :projects="recentProjects"
  />
</template>

<script>
export default {
  data() {
    return {
      hoveredProject: null,
      showModal: false,
      childParameter: null,
    };
  },
  methods: {
    setHoveredItem(project) {
      this.childParameter = project;
      this.hoveredProject = project.id;
    },
    clearHoveredItem() {
      this.hoveredProject = null;
    },
  },
};
</script>

<style>
#main-img {
  width: 80%;
  max-width: 1000px;
  height: auto;
}

main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
