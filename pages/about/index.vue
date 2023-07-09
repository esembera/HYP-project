<!--
    About us page
-->

<script setup>
const activeMenuItem = useActiveMenuItem();
</script>
<template>
  <div class="md:container md:mx-auto">
    <div class="max-w-4xl md:mx-auto mt-20">
      <h1
        class="text-6xl font-extrabold text-center md:text-8xl"
        style="font-family: ArchivoBlack"
      >
        We started with an <span class="image-after">IDEA</span> too.
      </h1>
    </div>
    <div
      class="max-w-6xl md:mx-auto mt-20 flex justify-center items-center md:flex-row flex-col-reverse"
    >
      <div class="w-1/2 m-10">
        <img src="~/assets/img/supportingGraphics/graphic1.png" alt="idea" />
      </div>
      <div class="w-1/2 md:m-10">
        <h2
          class="text-center md:text-5xl text-3xl"
          style="font-family: ArchivoBlack"
        >
          Our Philosophy
        </h2>
        <p class="text-justify mt-10 font-sans text-lg text-center">
          Stepping outside of the comfort zone. We aim to empower the next
          generation of entrepreneurs who are passionate about making a
          difference. We provide not only financial support but also mentorship,
          strategic guidance, and a network of like-minded individuals who share
          a common vision. Together, we strive to create a world where cool
          ideas, sustainable practices, and social impact converge to shape a
          future that is both exciting and responsible.
        </p>
      </div>
    </div>
    <div
      class="max-w-6xl md:mx-auto mt-10 flex justify-center items-center md:flex-row flex-col"
    >
      <div class="w-1/2 md:m-10">
        <h2
          class="text-center md:text-5xl text-3xl"
          style="font-family: ArchivoBlack"
        >
          Our (hi)story
        </h2>
        <p class="text-justify mt-10 font-sans text-lg">
          We know starting path is never easy - it takes hard work. Zen Ventures
          was founded by three visionary friends in 2019. From the start, it
          cultivated a vibrant and inclusive community, attracting like-minded
          individuals who shared a common goals. As Zen Ventures grew, it gained
          recognition for its unique approach to investing and supporting
          startups. Through their combined expertise and network, the founders
          established strategic partnerships with industry leaders in the
          hospitality, creative solutions, and sustainable tech sectors.
        </p>
      </div>
      <div class="w-1/2 m-10">
        <img src="~/assets/img/supportingGraphics/graphic2.png" alt="idea" />
      </div>
    </div>
    <div
      class="max-w-6xl md:mx-auto mt-10 flex justify-center items-center md:flex-row flex-col-reverse"
    >
      <div class="w-1/2 m-10">
        <img src="~/assets/img/supportingGraphics/graphic3.png" alt="idea" />
      </div>
      <div class="w-1/2 md:m-10">
        <h2
          class="text-center md:text-5xl text-3xl"
          style="font-family: ArchivoBlack"
        >
          Our Key Initiatives
        </h2>
        <ul class="text-justify mt-10 font-sans text-lg list-disc">
          <li>
            Funding Support: Zen Ventures offers funding opportunities to
            startups and entrepreneurs at various stages of development,
            including seed funding, early-stage investment, and growth capital.
          </li>
          <li>
            Mentorship and Guidance: We provide hands-on mentorship and guidance
            from experienced industry professionals and entrepreneurs to help
            startups refine their business models, develop strategies, and
            overcome challenges.
          </li>
          <li>
            Network Access: Startups in the Zen Ventures ecosystem gain access
            to a vast network of industry contacts, potential investors,
            mentors, and advisors, fostering valuable connections and
            opportunities for growth.
          </li>
        </ul>
      </div>
    </div>
    <div class="w-11/12 text-right md:mb-20 mt-10 md:mt-0 mb-10">
      <NuxtLink to="/about/faq" @click="activeMenuItem = 'faq'">
        <span class="md:text-3xl open-sans text-xl"
          >next <span class="font-bold">FAQ</span>&nbsp;<SvgArrow
            class="inline mb-2"
        /></span>
      </NuxtLink>
    </div>
  </div>
</template>

<style>
main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
