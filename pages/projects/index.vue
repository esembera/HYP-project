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
    <div
      class="grid md:grid-cols-4 mt-20 mb-20 md:gap-4 md:ml-28 md:mr-28 gap-8 ml-4 mr-4 grid-cols-2"
    >
      <div
        class="relative flex justify-center"
        v-for="project in projects"
        :key="project.id"
        @mouseover="setHoveredItem(project.id)"
        @mouseleave="clearHoveredItem"
      >
        <img class="w-full" :src="`/img/projects/${project.image}`" />
        <div class="detailsButton" v-if="project.id == hoveredProject">
          Details
        </div>
      </div>
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
          >next <span class="font-bold">Most Relevant</span>&nbsp;<SvgArrow
            class="inline mb-1"
        /></span>
      </NuxtLink>
    </div>
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
    };
  },
  methods: {
    setHoveredItem(index) {
      this.hoveredProject = index;
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
  .buttonProjects {
    font-size: 14px;
    text-overflow: clip;
    border-radius: 25px;
  }

  .buttonProjects:last-child {
    font-size: 12px;
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
