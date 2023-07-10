<!--
    Page with the list of all the people.
-->

<script setup>
const activeMenuItem = useActiveMenuItem(); // custom hook
const client = useSupabaseClient();

let { data: people, error } = await useAsyncData(
  async () => {
    return await client.from("people").select("*");
  },
  { transform: (result) => result.data }
);
</script>
<template>
  <div class="md:container md:mx-auto">
    <div class="max-w-4xl md:mx-auto mt-20">
      <h1 class="md:text-8xl font-extrabold text-center text-6xl">
        We are on <br />your <span class="image-after-blue">TEAM</span>.
      </h1>
    </div>
    <div class="max-w-6xl md:mx-auto mt-20">
      <p class="text-center md:text-xl md:mx-auto font-sans text-lg">
        We're a team of visionaries, driven by our love for innovation and the
        thrill of discovering untapped potential. With diverse backgrounds and a
        shared entrepreneurial spirit, we bring a personal touch to every
        partnership. We're not just investors, we're your biggest cheerleaders
        and trusted advisors, here to guide you through the ups and downs of the
        journey!
      </p>
    </div>
    <div
      class="grid md:grid-cols-3 md:gap-16 md:ml-28 md:mr-28 mt-20 mb-20 grid-cols-2 gap-8 ml-4 mr-4"
    >
      <PeopleCard v-for="person in people" :key="person.id" :person="person" />
    </div>
    <div class="w-11/12 text-right md:mb-20 mt-10 md:mt-0 mb-10">
      <NuxtLink to="/projects" @click="activeMenuItem = 'projects'">
        <span class="md:text-3xl open-sans text-xl"
          >next <span class="font-bold">Projects</span>&nbsp;
          <SvgArrow class="inline mb-1" />
        </span>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
#colorContainer {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 30%;
}
</style>
