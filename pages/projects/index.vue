<script setup>
const activeMenuItem = useActiveMenuItem();
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
      class="grid md:grid-cols-4 mt-20 mb-20 md:gap-4 md:ml-28 md:mr-28 gap-8 ml-4 mr-4 grid-cols-2"
    >
      <template v-if="projects">
        <div
          class="relative flex justify-center"
          v-for="project in projects"
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
      <div id="lastImage" style="font-family: ArchivoBlack">
        YOUR BRAND CAN BE HERE TOO
      </div>
    </div>
    <div id="buttonContainer">
      <NuxtLink
        class="nextLink"
        to="/contact"
        @click="activeMenuItem = 'contact'"
      >
        <div id="contactButton">Contact us</div>
      </NuxtLink>
    </div>
    <div class="w-11/12 text-right md:mb-20 mt-10 md:mt-0 mb-10">
      <NuxtLink
        to="/projects/most_relevant"
        @click="activeMenuItem = 'projects'"
      >
        <span class="md:text-3xl open-sans text-xl"
          >next <span class="font-bold">Most Relevant</span>&nbsp;
          <SvgArrow class="inline mb-1" />
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
#buttonContainer {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.buttonProjects {
  display: inline;
  width: 220px;
  height: 62px;
  border-radius: 50px;
  background-color: #d9d9d9;
  margin-left: 15px;
  margin-right: 15px;
  font-size: 25px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  text-align: center;
  line-height: 62px;
  cursor: pointer;
}

.buttonActiveProjects {
  display: inline;
  width: 220px;
  height: 62px;
  border-radius: 50px;
  background-color: #a582ff;
  margin-left: 15px;
  margin-right: 15px;
  font-size: 25px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  text-align: center;
  line-height: 62px;
  font-weight: bold;
  text-decoration: none;
  color: black;
}

.nextLink {
  font-weight: bold;
  text-decoration: none;
  color: black;
  border-radius: 50px;
}

#contactButton {
  width: 280px;
  height: 96px;
  border-radius: 35px;
  background-color: #a582ff;
  font-size: 30px;
  font-weight: bold;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  text-align: center;
  line-height: 96px;
}

#linkContainer {
  font-size: 25px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 10%;
  margin-bottom: 50px;
}

#lastImage {
  background-color: #a582ff;
  font-size: 35px;
  font-weight: 1000;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  padding-left: 30%;
  padding-right: 30%;
  text-align: center;
  display: flex;
  align-items: center;
}

.detailsButton {
  position: absolute;
  bottom: 10%;
  background-color: #a582ff;
  color: white;
  font-size: 12px;
  font-weight: bold;
  width: 111px;
  height: 32px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

@media (max-width: 768px) {
  #buttonContainer {
    flex-direction: column;
  }
  .buttonProjects {
    font-size: 16px;
    text-overflow: clip;
    border-radius: 25px;
    margin: 0 auto;
    margin-top: 10px;
  }

  #lastImage {
    font-size: 20px;
  }

  #contactButton {
    font-size: 20px;
    width: 180px;
    height: 50px;
    border-radius: 25px;
    line-height: 50px;
  }
}
</style>
