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
        class="colorPink text-black font-bold py-2 px-8 rounded-2xl mt-5"
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
