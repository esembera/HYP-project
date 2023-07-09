<!--
    Home page
-->

<script setup>
const activeMenuItem = useActiveMenuItem();
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
      <div class="text-left flex w-full mt-5 mb-5 md:flex-row flex-col">
        <div
          class="md:w-1/5 w-full text-center colorPink h-auto m-1 hover:shadow-2xl"
        >
          <NuxtLink to="#">
            <img src="../assets/img/projects/calm.png" />
          </NuxtLink>
        </div>
        <div
          class="md:w-1/5 w-full text-center colorBlue h-auto m-1 hover:shadow-2xl"
        >
          <NuxtLink to="#">
            <img src="../assets/img/projects/sara.png" />
          </NuxtLink>
        </div>
        <div
          class="md:w-1/5 w-full text-center colorGreen h-auto m-1 hover:shadow-2xl"
        >
          <NuxtLink to="#">
            <img src="../assets/img/projects/lovin.png" />
          </NuxtLink>
        </div>
        <div
          class="md:w-1/5 w-full text-center colorGreen h-auto m-1 hover:shadow-2xl"
        >
          <NuxtLink to="#">
            <img src="../assets/img/projects/mini.png" />
          </NuxtLink>
        </div>
        <div
          class="md:w-1/5 w-full text-center colorGreen h-auto m-1 hover:shadow-2xl"
        >
          <NuxtLink to="#">
            <img src="../assets/img/projects/publicAnchor.jpg" />
          </NuxtLink>
        </div>
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
</template>

<script>
export default {
  data() {
    return {
      questions: [
        {
          id: 0,
          type: "for_ventures",
          displayOnHomeScreen: false,
          hasContactUsBtn: true,
          hasAreasBtn: false,
          question: "How can my startup apply for funding and support?",
          answer:
            "We encourage startups to submit their applications through our “Contact us” section. We carefully review each submission and evaluate their potential. Selected ventures will be contacted for further discussion.",
        },
        {
          id: 1,
          type: "for_ventures",
          displayOnHomeScreen: true,
          hasContactUsBtn: false,
          hasAreasBtn: false,
          question: "How will Zen Ventures support you in future financings?",
          answer:
            "Zen Ventures takes a long-term partnership approach with the ventures we invest in. We not only provide capital but also strive to be a strategic partner throughout your journey. In future financing rounds, we can leverage our network and expertise to help you secure additional funding from our extensive network of investors, partners, and industry connections. We will work closely with you to develop comprehensive financing strategies and ensure your continued growth and success.",
        },
        {
          id: 2,
          type: "for_ventures",
          displayOnHomeScreen: true,
          hasContactUsBtn: false,
          hasAreasBtn: false,
          question: "How long does the investment process take?",
          answer:
            "The investment process timeline can vary depending on the complexity and specific details of each opportunity. At Zen Ventures, we strive to streamline our evaluation and decision-making processes to ensure efficient and timely investment decisions. While we aim to provide a prompt response, the duration of the investment process may vary depending on factors such as due diligence, negotiations, and legal procedures.",
        },
        {
          id: 3,
          type: "for_ventures",
          displayOnHomeScreen: true,
          hasContactUsBtn: false,
          hasAreasBtn: false,
          question:
            "Is it ever too early to approach Zen Ventures about investing?",
          answer:
            "At Zen Ventures, we understand the importance of early-stage investments and the potential they hold. We are open to exploring investment opportunities at different stages, including pre-seed, seed, and Series A. We value visionary entrepreneurs and innovative ideas, even in the early stages of development. If you have a bold idea and a strong vision, we encourage you to reach out to us to discuss your project.",
        },
        {
          id: 4,
          type: "for_investors",
          displayOnHomeScreen: false,
          hasContactUsBtn: true,
          hasAreasBtn: false,
          question: "How can you become an investor with Zen Ventures?",
          answer:
            "We are always looking to expand our network of investors and partners. If you are interested in joining our network, please contact us to discuss potential opportunities. We look forward to hearing from you!",
        },
        {
          id: 5,
          type: "for_investors",
          displayOnHomeScreen: true,
          hasContactUsBtn: false,
          hasAreasBtn: true,
          question:
            "Does Zen Ventures only invest in particular areas or industries?",
          answer:
            "Zen Ventures has a diverse investment portfolio that spans across various industries, including but not limited to technology, hospitality, sustainable solutions, creative industries, and more. We believe in supporting innovative ideas and promising ventures across different sectors, as long as they align with our core values and have the potential for growth and impact.",
        },
        {
          id: 6,
          type: "for_investors",
          displayOnHomeScreen: false,
          hasContactUsBtn: false,
          hasAreasBtn: false,
          question: "What is the investment process with Zen Ventures?",
          answer:
            "The investment process with Zen Ventures typically involves several stages. It starts with an initial evaluation of the opportunity, followed by in-depth due diligence to assess various aspects such as market potential, team capabilities, and financial viability. Once the evaluation is complete, we negotiate the terms of the investment and work towards finalizing the deal. The specific timeline and process can vary based on the complexity and unique characteristics of each opportunity.",
        },
        {
          id: 7,
          type: "for_investors",
          displayOnHomeScreen: false,
          hasContactUsBtn: false,
          hasAreasBtn: false,
          question:
            "How do we mitigate risks associated with startup investments?",
          answer:
            "Mitigating risks is an integral part of our investment strategy at Zen Ventures. We employ a thorough due diligence process to carefully assess the risks and potential rewards of each investment opportunity. We evaluate the market landscape, competitive dynamics, financial projections, and the strength of the founding team. Additionally, we actively engage with portfolio companies, providing strategic guidance, and leveraging our network to support their growth and mitigate potential challenges. While startup investments inherently carry risks, our experience, expertise, and proactive approach help us navigate and mitigate those risks to maximize the chances of success.",
        },
      ],
    };
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
