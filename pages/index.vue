<!--
    Home page
-->
<template>
  <div class="md:container md:mx-auto">
    <div class="max-w-3xl md:mx-auto mt-20">
      <h1
        class="text-8xl font-extrabold text-center"
        style="font-family: ArchivoBlack"
      >
        Ready for your <span class="image-after">BOLD</span> ideas.
      </h1>
    </div>
    <div class="max-w-3xl md:mx-auto mt-20">
      <p class="text-center text-xl md:mx-auto font-sans">
        We're the adrenaline junkies of the startup world: embracing the
        unexpected, flipping the script, and thriving on the thrill of bold
        ideas. Together with Mini, Calm, Kilo and 200 others , we've celebrated
        successes & new generations.
      </p>
    </div>
    <div
      class="text-center text-xl md:mx-auto font-bold mt-10"
      style="font-family: ArchivoBlack"
    >
      We can, indeed, do it all.
    </div>
    <div class="text-center md:mx-auto">
      <button
        class="colorPink text-black font-bold py-2 px-8 rounded-2xl mt-5 hover:shadow-2xl"
        style="font-family: ArchivoBlack"
      >
        <NuxtLink to="/contact"> Contact us </NuxtLink>
      </button>
    </div>
    <div class="flex w-full justify-center mt-20 mb-10">
      <div class="w-1/4 text-center colorPink h-80 m-1 hover:shadow-2xl">
        <NuxtLink to="/about">
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
      <div class="w-1/4 text-center colorBlue h-80 m-1 hover:shadow-2xl">
        <NuxtLink to="/people">
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
      <div class="w-1/4 text-center colorGreen h-80 m-1 hover:shadow-2xl">
        <NuxtLink to="/areas">
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
    <div class="w-4/5 md:mx-auto">
      <span class="text-4xl" style="font-family: ArchivoBlack"
        >RECENT INVESTMENTS</span
      >
      <div class="text-left flex w-full mt-5 mb-5">
        <div class="w-1/5 text-center colorPink h-auto m-1 hover:shadow-2xl">
          <NuxtLink to="#">
            <img src="../assets/img/projects/calm.png" />
          </NuxtLink>
        </div>
        <div class="w-1/5 text-center colorBlue h-auto m-1 hover:shadow-2xl">
          <NuxtLink to="#">
            <img src="../assets/img/projects/sara.png" />
          </NuxtLink>
        </div>
        <div class="w-1/5 text-center colorGreen h-auto m-1 hover:shadow-2xl">
          <NuxtLink to="#">
            <img src="../assets/img/projects/lovin.png" />
          </NuxtLink>
        </div>
        <div class="w-1/5 text-center colorGreen h-auto m-1 hover:shadow-2xl">
          <NuxtLink to="#">
            <img src="../assets/img/projects/mini.png" />
          </NuxtLink>
        </div>
        <div class="w-1/5 text-center colorGreen h-auto m-1 hover:shadow-2xl">
          <NuxtLink to="#">
            <img src="../assets/img/projects/publicAnchor.jpg" />
          </NuxtLink>
        </div>
      </div>
      <NuxtLink to="/projects">
        <span class="text-3xl open-sans"
          >view <span class="font-bold">PROJECTS</span>&nbsp;<SvgArrow
            class="inline mb-2"
        /></span>
      </NuxtLink>
      <span class="text-4xl block mt-10" style="font-family: ArchivoBlack"
        >WHAT SHOULD YOU KNOW ABOUT?</span
      >
      <BlackLine />
      <span class="text-3xl block mt-10 open-sans"
        >Does Zen Ventures only invest in particular areas or industries?</span
      >
      <BlackLine />
      <span class="text-3xl block mt-10 open-sans"
        >Is it ever too early to approach Zen Ventures about investing?</span
      >
      <BlackLine />
      <span class="text-3xl block mt-10 open-sans"
        >How long does the investment process take?</span
      >
      <BlackLine />
      <span class="text-3xl block mt-10 open-sans"
        >How will Zen Ventures support you in future financings?</span
      >
      <BlackLine />
      <NuxtLink to="/about/faq">
        <span class="text-3xl open-sans block mb-20"
          >view <span class="font-bold">FAQ</span>&nbsp;
          <SvgArrow class="inline mb-2"
        /></span>
      </NuxtLink>
    </div>
  </div>
</template>

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
