<template>
  <div class="md:container md:mx-auto">
    <div class="max-w-4xl md:mx-auto mt-20">
      <h1
        class="text-6xl font-extrabold text-center md:text-8xl"
        style="font-family: ArchivoBlack"
      >
        What should you <span class="image-after">KNOW</span> about?
      </h1>
    </div>
    <div id="buttonContainer" class="mt-20">
      <NuxtLink
        class="button"
        to="/about/faq"
        exact-active-class="buttonActive"
      >
        All
      </NuxtLink>
      <NuxtLink
        class="button"
        to="/about/for_ventures"
        exact-active-class="buttonActive"
      >
        For ventures
      </NuxtLink>
      <NuxtLink
        class="button"
        to="/about/for_investors"
        exact-active-class="buttonActive"
      >
        For investors
      </NuxtLink>
    </div>
    <div class="w-4/5 mx-auto">
      <span class="text-4xl block mt-10" style="font-family: ArchivoBlack"
        >FOR INVESTORS</span
      >
      <BlackLine />
      <template v-for="question in questions">
        <FaqItem
          v-if="question.type === 'for_investors'"
          :key="question.id"
          :question="question.question"
          :answer="question.answer"
          :hasContactUsBtn="question.hasContactUsBtn"
          :hasAreasBtn="question.hasAreasBtn"
        />
      </template>
    </div>
    <div class="w-11/12 text-right mb-20">
      <NuxtLink to="/about">
        <span class="md:text-3xl open-sans text-xl"
          ><SvgBackArrow class="inline" />&nbsp;previous
          <span class="font-bold">About us</span></span
        >
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
#buttonContainer {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.button {
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

.buttonActive {
  display: inline;
  width: 220px;
  height: 62px;
  border-radius: 50px;
  background-color: #ff006b;
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
@media (max-width: 768px) {
  .button {
    font-size: 16px;
  }
}
</style>
