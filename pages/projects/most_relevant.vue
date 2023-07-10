<script setup>
const activeMenuItem = useActiveMenuItem();
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
    <div class="max-w-2xl md:mx-auto mt-20">
      <p
        class="text-center md:text-xl md:mx-auto font-sans text-lg md:text-justify font-bold"
      >
        These ventures created substantial value and gathered significant
        recognition. With a combined worth exceeding billions of dollars, these
        projects have captured the attention of investors and industry leaders
        alike.
      </p>
    </div>
    <div
      class="grid md:grid-cols-4 mt-20 mb-20 md:gap-4 md:ml-28 md:mr-28 gap-8 ml-4 mr-4 grid-cols-2"
    >
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
    </div>
    <div class="container ml-0" style="margin: 0 auto">
      <div class="w-11/12 text-left md:mb-20 md:mt-0 mb-10 ml-6">
        <NuxtLink to="/projects" @click="activeMenuItem = 'projects'">
          <span class="md:text-3xl open-sans text-xl">
            <SvgBackArrow class="inline mr-1" />previous
            <span class="font-bold">All projects</span>
          </span>
        </NuxtLink>
      </div>
      <div class="w-11/12 text-right md:mb-20 mt-10 md:mt-0 mb-10 mr-6">
        <NuxtLink to="/projects/by_area" @click="activeMenuItem = 'projects'">
          <span class="md:text-3xl open-sans text-xl"
            >next <span class="font-bold">Projects by area</span>&nbsp;
            <SvgArrow class="inline mb-1" />
          </span>
        </NuxtLink>
      </div>
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
      projects: [
        {
          id: 13,
          name: "H Technology",
          image: "h.png",
          black_white_img: "h.png",
          description:
            "Zen Ventures recognized the passion for culinary and café excellence in Miguel Silva and Sonia Mendes, the founders of The Lisbon Café. The Zen 2021 investment enabled The Lisbon Café to establish itself as a vibrant cultural and culinary destination. Ava Rodriguez, an experienced café owner, was appointed as the supervisor to ensure the highest standards of coffee quality, menu development, and customer experience. With Zen Ventures' support, The Lisbon Café has become a beloved spot for coffee enthusiasts and food lovers, offering a cozy atmosphere, delectable pastries, and coffee creations.",
          area: "Hospitality",
          industries: ["Culinary Delights", "Café Culture"],
          milestones: ["Zen Ventures Investment: 2021"],
          founders: ["Miguel Silva", "Sonia Mendes"],
          supervisor: "Ava Rodriguez",
        },
        {
          id: 4,
          name: "Public Anchor",
          image: "publicAnchor.jpg",
          black_white_img: "public anchor.png",
          description:
            "Zen Ventures recognized the passion for culinary and café excellence in Miguel Silva and Sonia Mendes, the founders of The Lisbon Café. The Zen 2021 investment enabled The Lisbon Café to establish itself as a vibrant cultural and culinary destination. Ava Rodriguez, an experienced café owner, was appointed as the supervisor to ensure the highest standards of coffee quality, menu development, and customer experience. With Zen Ventures' support, The Lisbon Café has become a beloved spot for coffee enthusiasts and food lovers, offering a cozy atmosphere, delectable pastries, and coffee creations.",
          area: "Hospitality",
          industries: ["Culinary Delights", "Café Culture"],
          milestones: ["Zen Ventures Investment: 2021"],
          founders: ["Miguel Silva", "Sonia Mendes"],
          supervisor: "Ava Rodriguez",
        },
        {
          id: 7,
          name: "Nerve",
          image: "nerve.png",
          black_white_img: "nerve.png",
          description:
            "Zen Ventures recognized the passion for culinary and café excellence in Miguel Silva and Sonia Mendes, the founders of The Lisbon Café. The Zen 2021 investment enabled The Lisbon Café to establish itself as a vibrant cultural and culinary destination. Ava Rodriguez, an experienced café owner, was appointed as the supervisor to ensure the highest standards of coffee quality, menu development, and customer experience. With Zen Ventures' support, The Lisbon Café has become a beloved spot for coffee enthusiasts and food lovers, offering a cozy atmosphere, delectable pastries, and coffee creations.",
          area: "Hospitality",
          industries: ["Culinary Delights", "Café Culture"],
          milestones: ["Zen Ventures Investment: 2021"],
          founders: ["Miguel Silva", "Sonia Mendes"],
          supervisor: "Ava Rodriguez",
        },
        {
          id: 6,
          name: "Calm",
          image: "calm.png",
          black_white_img: "calm.png",
          description:
            "Zen Ventures recognized the passion for culinary and café excellence in Miguel Silva and Sonia Mendes, the founders of The Lisbon Café. The Zen 2021 investment enabled The Lisbon Café to establish itself as a vibrant cultural and culinary destination. Ava Rodriguez, an experienced café owner, was appointed as the supervisor to ensure the highest standards of coffee quality, menu development, and customer experience. With Zen Ventures' support, The Lisbon Café has become a beloved spot for coffee enthusiasts and food lovers, offering a cozy atmosphere, delectable pastries, and coffee creations.",
          area: "Hospitality",
          industries: ["Culinary Delights", "Café Culture"],
          milestones: ["Zen Ventures Investment: 2021"],
          founders: ["Miguel Silva", "Sonia Mendes"],
          supervisor: "Ava Rodriguez",
        },
      ],
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
