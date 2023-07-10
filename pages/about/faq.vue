<script setup>
const activeMenuItem = useActiveMenuItem();
const client = useSupabaseClient();

let { data: questions, errorQuestions } = await useAsyncData(
  async () => {
    return await client.from("questions").select("*");
  },
  { transform: (result) => result.data }
);
console.log(questions);
</script>
<template>
  <div class="md:container md:mx-auto">
    <div class="max-w-4xl md:mx-auto mt-20">
      <h1
        class="md:text-8xl text-6xl font-extrabold text-center"
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
      <div class="mt-10">&nbsp;</div>
      <FaqItem
        v-for="question in questions"
        :key="question.id"
        :question="question.question"
        :answer="question.answer"
        :hasContactUsBtn="question.hasContactUsBtn"
        :hasAreasBtn="question.hasAreasBtn"
      />
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
  #buttonContainer {
    flex-direction: column;
  }
  .button {
    font-size: 16px;
    text-overflow: clip;
    border-radius: 25px;
    margin: 0 auto;
    margin-top: 10px;
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
