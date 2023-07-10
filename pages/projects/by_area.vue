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
      <p class="text-center md:text-xl md:mx-auto font-sans text-lg md:text-justify">
        Discover a collection of remarkable ventures that redefine industries,
        spark meaningful change, and inspire a new generation. Join us on this
        transformative journey as we shape a future brimming with possibility
        and unleash the full potential of bold ideas.
      </p>
    </div>
    <div id="buttonContainer" class="mt-20">
      <NuxtLink class="buttonProjects" to="/projects" exact-active-class="buttonActiveProjects"
        @click="activeMenuItem = 'projects'">
        All
      </NuxtLink>
      <NuxtLink class="buttonProjects" to="/projects/most_relevant" exact-active-class="buttonActiveProjects"
        @click="activeMenuItem = 'projects'">
        Most relevant
      </NuxtLink>
      <NuxtLink class="buttonProjects" to="/projects/by_area" exact-active-class="buttonActiveProjects"
        @click="activeMenuItem = 'projects'">
        Projects by area
      </NuxtLink>
    </div>
    <div class="md:text-5xl font-bold text-2xl text-center hover:cursor-pointer mt-10" style="font-family: ArchiveBlack"
      @click="hospitalityActive = !hospitalityActive">
      HOSPITALITY
    </div>
    <hr />
    <div class="grid md:grid-cols-4 mt-20 mb-20 md:gap-4 md:ml-28 md:mr-28 gap-8 ml-4 mr-4 grid-cols-2"
      v-if="hospitalityActive">
      <div class="relative flex justify-center" v-for="project in getProjectsByArea('hospitality')" :key="project.id"
        @mouseover="setHoveredItem(project)" @mouseleave="clearHoveredItem">
        <img class="w-full" :src="`/img/projects/${project.image}`" />
        <div class="detailsButton" v-if="project.id == hoveredProject" @click="showModal = true">
          Details
        </div>
      </div>
    </div>
    <div class="md:text-5xl font-bold text-2xl text-center hover:cursor-pointer mt-10" style="font-family: ArchiveBlack"
      @click="creativeActive = !creativeActive">
      CREATIVE SOLUTIONS
    </div>
    <hr />
    <div class="grid md:grid-cols-4 mt-20 mb-20 md:gap-4 md:ml-28 md:mr-28 gap-8 ml-4 mr-4 grid-cols-2"
      v-if="creativeActive">
      <div class="relative flex justify-center" v-for="project in getProjectsByArea('creative')" :key="project.id"
        @mouseover="setHoveredItem(project.id)" @mouseleave="clearHoveredItem">
        <img class="w-full" :src="`/img/projects/${project.image}`" />
        <div class="detailsButton" v-if="project == hoveredProject" @click="showModal = true">
          Details
        </div>
      </div>
    </div>
    <div class="md:text-5xl font-bold text-2xl text-center hover:cursor-pointer mt-10" style="font-family: ArchiveBlack"
      @click="technologyActive = !technologyActive">
      TECHNOLOGY & INOVATION
    </div>
    <hr />
    <div class="grid md:grid-cols-4 mt-20 mb-20 md:gap-4 md:ml-28 md:mr-28 gap-8 ml-4 mr-4 grid-cols-2"
      v-if="technologyActive">
      <div class="relative flex justify-center" v-for="project in getProjectsByArea('technology')" :key="project.id"
        @mouseover="setHoveredItem(project)" @mouseleave="clearHoveredItem">
        <img class="w-full" :src="`/img/projects/${project.image}`" />
        <div class="detailsButton" v-if="project.id == hoveredProject" @click="showModal = true">
          Details
        </div>
      </div>
    </div>
    <div class="w-11/12 text-left md:mb-20 mt-10 mb-10 ml-20">
      <NuxtLink to="/projects/most_relevant" @click="activeMenuItem = 'projects'">
        <span class="md:text-3xl open-sans text-xl">
          <SvgBackArrow class="inline mr-1" />previous
          <span class="font-bold">Most Relevant</span>
        </span>
      </NuxtLink>
    </div>
    <ProjectDetails v-show="showModal" @close-modal="showModal = false;" :project="childParameter" :projects="projects" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          id: 0,
          name: "Sara",
          image: "sara.png",
          black_white_img: "sara.png",
          description:
            "Zen Ventures recognized the passion for culinary and café excellence in Miguel Silva and Sonia Mendes, the founders of The Lisbon Café. The Zen 2021 investment enabled The Lisbon Café to establish itself as a vibrant cultural and culinary destination. Ava Rodriguez, an experienced café owner, was appointed as the supervisor to ensure the highest standards of coffee quality, menu development, and customer experience. With Zen Ventures' support, The Lisbon Café has become a beloved spot for coffee enthusiasts and food lovers, offering a cozy atmosphere, delectable pastries, and coffee creations.",
          area: "hospitality",
          industries: ["Culinary Delights", "Café Culture"],
          milestones: ["Zen Ventures Investment: 2021"],
          founders: ["Miguel Silva", "Sonia Mendes"],
          supervisor: "Ava Rodriguez",
        },
        {
          id: 1,
          name: "Baba Boom",
          image: "Baba _ Boom.jpg",
          black_white_img: "baba boom.png",
          description:
            "Zen Ventures recognized the passion for culinary and café excellence in Miguel Silva and Sonia Mendes, the founders of The Lisbon Café. The Zen 2021 investment enabled The Lisbon Café to establish itself as a vibrant cultural and culinary destination. Ava Rodriguez, an experienced café owner, was appointed as the supervisor to ensure the highest standards of coffee quality, menu development, and customer experience. With Zen Ventures' support, The Lisbon Café has become a beloved spot for coffee enthusiasts and food lovers, offering a cozy atmosphere, delectable pastries, and coffee creations.",
          area: "creative",
          industries: ["Culinary Delights", "Café Culture"],
          milestones: ["Zen Ventures Investment: 2021"],
          founders: ["Miguel Silva", "Sonia Mendes"],
          supervisor: "Ava Rodriguez",
        },
        {
          id: 2,
          name: "Kim",
          image: "kim.jpg",
          black_white_img: "kim.png",
          description:
            "Zen Ventures recognized the passion for culinary and café excellence in Miguel Silva and Sonia Mendes, the founders of The Lisbon Café. The Zen 2021 investment enabled The Lisbon Café to establish itself as a vibrant cultural and culinary destination. Ava Rodriguez, an experienced café owner, was appointed as the supervisor to ensure the highest standards of coffee quality, menu development, and customer experience. With Zen Ventures' support, The Lisbon Café has become a beloved spot for coffee enthusiasts and food lovers, offering a cozy atmosphere, delectable pastries, and coffee creations.",
          area: "technology",
          industries: ["Culinary Delights", "Café Culture"],
          milestones: ["Zen Ventures Investment: 2021"],
          founders: ["Miguel Silva", "Sonia Mendes"],
          supervisor: "Ava Rodriguez",
        },
        {
          id: 3,
          name: "Nobu",
          image: "nobu.png",
          black_white_img: "nobu.png",
          description:
            "Zen Ventures recognized the passion for culinary and café excellence in Miguel Silva and Sonia Mendes, the founders of The Lisbon Café. The Zen 2021 investment enabled The Lisbon Café to establish itself as a vibrant cultural and culinary destination. Ava Rodriguez, an experienced café owner, was appointed as the supervisor to ensure the highest standards of coffee quality, menu development, and customer experience. With Zen Ventures' support, The Lisbon Café has become a beloved spot for coffee enthusiasts and food lovers, offering a cozy atmosphere, delectable pastries, and coffee creations.",
          area: "hospitality",
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
          area: "creative",
          industries: ["Culinary Delights", "Café Culture"],
          milestones: ["Zen Ventures Investment: 2021"],
          founders: ["Miguel Silva", "Sonia Mendes"],
          supervisor: "Ava Rodriguez",
        },
        {
          id: 5,
          name: "La Ventura",
          image: "La Ventura - LMNOP.png",
          black_white_img: "la ventura.png",
          description:
            "Zen Ventures recognized the passion for culinary and café excellence in Miguel Silva and Sonia Mendes, the founders of The Lisbon Café. The Zen 2021 investment enabled The Lisbon Café to establish itself as a vibrant cultural and culinary destination. Ava Rodriguez, an experienced café owner, was appointed as the supervisor to ensure the highest standards of coffee quality, menu development, and customer experience. With Zen Ventures' support, The Lisbon Café has become a beloved spot for coffee enthusiasts and food lovers, offering a cozy atmosphere, delectable pastries, and coffee creations.",
          area: "creative",
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
          area: "technology",
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
          area: "creative",
          industries: ["Culinary Delights", "Café Culture"],
          milestones: ["Zen Ventures Investment: 2021"],
          founders: ["Miguel Silva", "Sonia Mendes"],
          supervisor: "Ava Rodriguez",
        },
        {
          id: 8,
          name: "Mini",
          image: "mini.png",
          black_white_img: "mini.png",
          description:
            "Zen Ventures recognized the passion for culinary and café excellence in Miguel Silva and Sonia Mendes, the founders of The Lisbon Café. The Zen 2021 investment enabled The Lisbon Café to establish itself as a vibrant cultural and culinary destination. Ava Rodriguez, an experienced café owner, was appointed as the supervisor to ensure the highest standards of coffee quality, menu development, and customer experience. With Zen Ventures' support, The Lisbon Café has become a beloved spot for coffee enthusiasts and food lovers, offering a cozy atmosphere, delectable pastries, and coffee creations.",
          area: "creative",
          industries: ["Culinary Delights", "Café Culture"],
          milestones: ["Zen Ventures Investment: 2021"],
          founders: ["Miguel Silva", "Sonia Mendes"],
          supervisor: "Ava Rodriguez",
        },
        {
          id: 9,
          name: "Kilo",
          image: "Kilo.png",
          black_white_img: "kilo.png",
          description:
            "Zen Ventures recognized the passion for culinary and café excellence in Miguel Silva and Sonia Mendes, the founders of The Lisbon Café. The Zen 2021 investment enabled The Lisbon Café to establish itself as a vibrant cultural and culinary destination. Ava Rodriguez, an experienced café owner, was appointed as the supervisor to ensure the highest standards of coffee quality, menu development, and customer experience. With Zen Ventures' support, The Lisbon Café has become a beloved spot for coffee enthusiasts and food lovers, offering a cozy atmosphere, delectable pastries, and coffee creations.",
          area: "technology",
          industries: ["Culinary Delights", "Café Culture"],
          milestones: ["Zen Ventures Investment: 2021"],
          founders: ["Miguel Silva", "Sonia Mendes"],
          supervisor: "Ava Rodriguez",
        },
        {
          id: 10,
          name: "Lovin",
          image: "Lovvin.png",
          black_white_img: "lovin.png",
          description:
            "Zen Ventures recognized the passion for culinary and café excellence in Miguel Silva and Sonia Mendes, the founders of The Lisbon Café. The Zen 2021 investment enabled The Lisbon Café to establish itself as a vibrant cultural and culinary destination. Ava Rodriguez, an experienced café owner, was appointed as the supervisor to ensure the highest standards of coffee quality, menu development, and customer experience. With Zen Ventures' support, The Lisbon Café has become a beloved spot for coffee enthusiasts and food lovers, offering a cozy atmosphere, delectable pastries, and coffee creations.",
          area: "hospitality",
          industries: ["Culinary Delights", "Café Culture"],
          milestones: ["Zen Ventures Investment: 2021"],
          founders: ["Miguel Silva", "Sonia Mendes"],
          supervisor: "Ava Rodriguez",
        },
        {
          id: 11,
          name: "The Lisbon",
          image: "the lisbon.jpg",
          black_white_img: "the lisbon.png",
          description:
            "Zen Ventures recognized the passion for culinary and café excellence in Miguel Silva and Sonia Mendes, the founders of The Lisbon Café. The Zen 2021 investment enabled The Lisbon Café to establish itself as a vibrant cultural and culinary destination. Ava Rodriguez, an experienced café owner, was appointed as the supervisor to ensure the highest standards of coffee quality, menu development, and customer experience. With Zen Ventures' support, The Lisbon Café has become a beloved spot for coffee enthusiasts and food lovers, offering a cozy atmosphere, delectable pastries, and coffee creations.",
          area: "hospitality",
          industries: ["Culinary Delights", "Café Culture"],
          milestones: ["Zen Ventures Investment: 2021"],
          founders: ["Miguel Silva", "Sonia Mendes"],
          supervisor: "Ava Rodriguez",
        },
        {
          id: 12,
          name: "Comosumo",
          image: "comosumo.jpg",
          black_white_img: "comosumo.png",
          description:
            "Zen Ventures recognized the passion for culinary and café excellence in Miguel Silva and Sonia Mendes, the founders of The Lisbon Café. The Zen 2021 investment enabled The Lisbon Café to establish itself as a vibrant cultural and culinary destination. Ava Rodriguez, an experienced café owner, was appointed as the supervisor to ensure the highest standards of coffee quality, menu development, and customer experience. With Zen Ventures' support, The Lisbon Café has become a beloved spot for coffee enthusiasts and food lovers, offering a cozy atmosphere, delectable pastries, and coffee creations.",
          area: "technology",
          industries: ["Culinary Delights", "Café Culture"],
          milestones: ["Zen Ventures Investment: 2021"],
          founders: ["Miguel Silva", "Sonia Mendes"],
          supervisor: "Ava Rodriguez",
        },
        {
          id: 13,
          name: "H Technology",
          image: "h.png",
          black_white_img: "h.png",
          description:
            "Zen Ventures recognized the passion for culinary and café excellence in Miguel Silva and Sonia Mendes, the founders of The Lisbon Café. The Zen 2021 investment enabled The Lisbon Café to establish itself as a vibrant cultural and culinary destination. Ava Rodriguez, an experienced café owner, was appointed as the supervisor to ensure the highest standards of coffee quality, menu development, and customer experience. With Zen Ventures' support, The Lisbon Café has become a beloved spot for coffee enthusiasts and food lovers, offering a cozy atmosphere, delectable pastries, and coffee creations.",
          area: "technology",
          industries: ["Culinary Delights", "Café Culture"],
          milestones: ["Zen Ventures Investment: 2021"],
          founders: ["Miguel Silva", "Sonia Mendes"],
          supervisor: "Ava Rodriguez",
        },
        {
          id: 14,
          name: "Porto",
          image: "porto.png",
          black_white_img: "porto.png",
          description:
            "Zen Ventures recognized the passion for culinary and café excellence in Miguel Silva and Sonia Mendes, the founders of The Lisbon Café. The Zen 2021 investment enabled The Lisbon Café to establish itself as a vibrant cultural and culinary destination. Ava Rodriguez, an experienced café owner, was appointed as the supervisor to ensure the highest standards of coffee quality, menu development, and customer experience. With Zen Ventures' support, The Lisbon Café has become a beloved spot for coffee enthusiasts and food lovers, offering a cozy atmosphere, delectable pastries, and coffee creations.",
          area: "creative",
          industries: ["Culinary Delights", "Café Culture"],
          milestones: ["Zen Ventures Investment: 2021"],
          founders: ["Miguel Silva", "Sonia Mendes"],
          supervisor: "Ava Rodriguez",
        },
      ],
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
    getProjectsByArea(area) {
      let typeProjects = [];
      this.projects.forEach((project) => {
        if (project.area === area) typeProjects.push(project);
      });
      return typeProjects;
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
