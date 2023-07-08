<template>
  <div>
    <span
      class="text-3xl block mt-10 open-sans hover:cursor-pointer"
      @click="toggleAnswer"
    >
      {{ question }}
    </span>
    <BlackLine />
    <transition name="fade">
      <div v-show="showAnswer">
        <p class="text-2xl mt-2 open-sans mb-10">
          {{ answer }}
        </p>
        <div v-if="hasAreasBtn" class="w-11/12 text-right mb-20">
          <NuxtLink to="/about/faq">
            <span class="text-2xl open-sans"
              >view <span class="font-bold">AREAS</span>&nbsp;<SvgArrow
                class="inline mb-1"
            /></span>
          </NuxtLink>
        </div>
        <div v-if="hasContactUsBtn" class="w-11/12 text-right mb-20">
          <button
            class="colorPink text-black font-bold py-3 px-10 rounded-2xl hover:shadow-2xl"
            style="font-family: ArchivoBlack"
          >
            <NuxtLink to="/contact"> Contact us </NuxtLink>
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
