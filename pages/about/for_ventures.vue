<script setup>
const activeMenuItem = useActiveMenuItem();
const client = useSupabaseClient();

let { data: questions, errorQuestions } = await useAsyncData(
  async () => {
    return await client.from("questions").select("*");
  },
  { transform: (result) => result.data }
);
</script>

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
        >FOR VENTURES</span
      >
      <BlackLine />
      <template v-for="question in questions">
        <FaqItem
          v-if="question.type === 'for_ventures'"
          :key="question.id"
          :question="question.question"
          :answer="question.answer"
          :hasContactUsBtn="question.hasContactUsBtn"
          :hasAreasBtn="question.hasAreasBtn"
        />
      </template>
    </div>
    <div class="w-11/12 text-right mb-20">
      <NuxtLink to="/about" @click="activeMenuItem = 'about'">
        <span class="md:text-3xl open-sans text-xl"
          ><SvgBackArrow class="inline" />&nbsp;previous
          <span class="font-bold">About us</span></span
        >
      </NuxtLink>
    </div>
  </div>
</template>
