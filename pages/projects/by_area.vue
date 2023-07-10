<script setup>
const activeMenuItem = useActiveMenuItem(); // custom hook

const client = useSupabaseClient();

let { data: projects, error } = await useAsyncData(
  async () => {
    return await client.from("projects").select("*");
  },
  { transform: (result) => result.data }
);
</script>

<template>
  <div class="md:container md:mx-auto">
    <div class="max-w-4xl md:mx-auto mt-20">
      <h1 class="md:text-8xl font-extrabold text-center text-6xl">
        Introducing our <span class="image-after-purple">PROJECTS</span>
      </h1>
    </div>
    <div class="max-w-4xl md:mx-auto mt-20">
      <p
        class="text-center md:text-xl md:mx-auto font-sans text-lg md:text-justify"
      >
        Discover a collection of remarkable ventures that redefine industries,
        spark meaningful change, and inspire a new generation. Join us on this
        transformative journey as we shape a future brimming with possibility
        and unleash the full potential of bold ideas.
      </p>
    </div>
    <div id="buttonContainer" class="mt-20">
      <NuxtLink
        class="buttonProjects"
        to="/projects"
        exact-active-class="buttonActiveProjects"
        @click="activeMenuItem = 'projects'"
      >
        All
      </NuxtLink>
      <NuxtLink
        class="buttonProjects"
        to="/projects/most_relevant"
        exact-active-class="buttonActiveProjects"
        @click="activeMenuItem = 'projects'"
      >
        Most relevant
      </NuxtLink>
      <NuxtLink
        class="buttonProjects"
        to="/projects/by_area"
        exact-active-class="buttonActiveProjects"
        @click="activeMenuItem = 'projects'"
      >
        Projects by area
      </NuxtLink>
    </div>
    <div
      class="md:text-5xl font-bold text-2xl text-center hover:cursor-pointer mt-10"
      style="font-family: ArchiveBlack"
      @click="hospitalityActive = !hospitalityActive"
    >
      HOSPITALITY
    </div>
    <hr />
    <div
      class="grid md:grid-cols-4 mt-20 mb-20 md:gap-4 md:ml-28 md:mr-28 gap-8 ml-4 mr-4 grid-cols-2"
      v-if="hospitalityActive"
    >
      <template v-for="project in projects">
        <div
          class="relative flex justify-center"
          v-if="project.area === 'hospitality'"
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
    <div
      class="md:text-5xl font-bold text-2xl text-center hover:cursor-pointer mt-10"
      style="font-family: ArchiveBlack"
      @click="creativeActive = !creativeActive"
    >
      CREATIVE SOLUTIONS
    </div>
    <hr />
    <div
      class="grid md:grid-cols-4 mt-20 mb-20 md:gap-4 md:ml-28 md:mr-28 gap-8 ml-4 mr-4 grid-cols-2"
      v-if="creativeActive"
    >
      <template v-for="project in projects">
        <div
          class="relative flex justify-center"
          v-if="project.area === 'creative'"
          :key="project.id"
          @mouseover="setHoveredItem(project.id)"
          @mouseleave="clearHoveredItem"
        >
          <img class="w-full" :src="`/img/projects/${project.image}`" />
          <div
            class="detailsButton"
            v-if="project == hoveredProject"
            @click="showModal = true"
          >
            Details
          </div>
        </div>
      </template>
    </div>
    <div
      class="md:text-5xl font-bold text-2xl text-center hover:cursor-pointer mt-10"
      style="font-family: ArchiveBlack"
      @click="technologyActive = !technologyActive"
    >
      TECHNOLOGY & INOVATION
    </div>
    <hr />
    <div
      class="grid md:grid-cols-4 mt-20 mb-20 md:gap-4 md:ml-28 md:mr-28 gap-8 ml-4 mr-4 grid-cols-2"
      v-if="technologyActive"
    >
      <template v-for="project in projects">
        <div
          class="relative flex justify-center"
          v-if="project.area === 'technology'"
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
    <div class="w-11/12 text-left md:mb-20 mt-10 mb-10 ml-20">
      <NuxtLink
        to="/projects/most_relevant"
        @click="activeMenuItem = 'projects'"
      >
        <span class="md:text-3xl open-sans text-xl">
          <SvgBackArrow class="inline mr-1" />previous
          <span class="font-bold">Most Relevant</span>
        </span>
      </NuxtLink>
    </div>
    <ProjectDetails
      v-show="showModal"
      @close-modal="showModal = false"
      :project="childParameter"
      :projects="projects"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      hoveredProject: null,
      hospitalityActive: true,
      creativeActive: false,
      technologyActive: false,
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
hr {
  height: 5px;
  border: none;
  background-color: black;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 20px;
}
</style>
