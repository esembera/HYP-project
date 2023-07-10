<!--
    FAQ item component is a component which consists of question which is clickable. When clicked, the answer is shown.

    PROPS:
    - question: question to display
    - answer: answer to display
    - hasContactUsBtn: boolean that detemermines wheter contact us button is shown or not
    - hasAreasBtn: boolean that detemermines wheter areas button is shown or not
-->

<script setup>
const activeMenuItem = useActiveMenuItem();
</script>

<template>
  <div>
    <span
      class="md:text-3xl text-2xl block mt-10 open-sans hover:cursor-pointer"
      @click="toggleAnswer"
    >
      {{ question }}
    </span>
    <BlackLine />
    <transition name="fade">
      <div v-show="showAnswer">
        <p
          class="md:text-2xl text-xl mt-2 open-sans mb-10 text-justify md:text-left"
        >
          {{ answer }}
        </p>
        <div v-if="hasAreasBtn" class="w-11/12 md:text-right text-center mb-20">
          <NuxtLink to="/areas" @click="activeMenuItem = 'areas'">
            <span class="text-2xl open-sans"
              >view <span class="font-bold">AREAS</span>&nbsp;<SvgArrow
                class="inline mb-1"
            /></span>
          </NuxtLink>
        </div>
        <div
          v-if="hasContactUsBtn"
          class="w-11/12 md:text-right text-center mb-20"
        >
          <button
            class="colorPink text-black font-bold py-3 px-10 rounded-2xl hover:shadow-2xl"
            style="font-family: ArchivoBlack"
          >
            <NuxtLink to="/contact" @click="activeMenuItem = 'contact'">
              Contact us
            </NuxtLink>
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    question: String,
    answer: String,
    hasContactUsBtn: Boolean,
    hasAreasBtn: Boolean,
  },
  data() {
    return {
      showAnswer: false,
    };
  },
  methods: {
    toggleAnswer() {
      this.showAnswer = !this.showAnswer;
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
