<template>
  <div class="md:container md:mx-auto">
    <div class="max-w-4xl md:mx-auto mt-20">
      <h1
        class="text-8xl font-extrabold text-center"
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
    <div class="w-4/5 md:mx-auto">
      <span class="text-4xl block mt-10" style="font-family: ArchivoBlack"
        >FOR INVESTORS</span
      >
      <BlackLine />
      <span class="text-3xl block mt-10 open-sans"
        >How can you become an investor with Zen Ventures?</span
      >
      <BlackLine />
      <span class="text-3xl block mt-10 open-sans"
        >Does Zen Ventures only invest in particular areas or industries?</span
      >
      <BlackLine />
      <span class="text-3xl block mt-10 open-sans"
        >What is the investment process with Zen Ventures?</span
      >
      <BlackLine />
      <span class="text-3xl block mt-10 open-sans"
        >How do we mitigate risks associated with startup investments?</span
      >
      <BlackLine />
    </div>
    <div class="w-11/12 text-right mb-20">
      <NuxtLink to="/about">
        <span class="text-3xl open-sans"
          ><SvgBackArrow class="inline" />&nbsp;previous
          <span class="font-bold">About us</span></span
        >
      </NuxtLink>
    </div>
  </div>
</template>

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
</style>
