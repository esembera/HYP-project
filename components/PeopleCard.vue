<!--
    People card is a component which consists of person's image, name, position, description and projects.

    PROPS:
    - person: person to display

    person is an object with the following properties:
    - name: name of the person
    - position: position of the person
    - description: description of the person
    - projects: array of projects the person is working on
    - image: image of the person
-->

<template>
  <div>
    <div>
      <img :src="`/img/people/${person.image}`" class="w-full" />
    </div>
    <div class="text-xl font-bold md:text-2xl font-sans">{{ person.name }}</div>
    <div class="text-lg font-bold md:text-xl peoplePosition">
      {{ person.position }}
    </div>
    <div class="text-base md:text-lg text-justify font-sans">
      {{ person.description }}
    </div>
    <br />
    <br />
    <div class="text-base md:text-lg font-sans font-bold">
      <span v-if="person.projects.length > 1">Projects: </span>
      <span v-if="person.projects.length === 1">Project: </span>
      <span v-for="(project, index) in person.projects" :key="index">
        <span v-if="index !== person.projects.length - 1">{{ project }}, </span>
        <span v-if="index === person.projects.length - 1">{{ project }} </span>
      </span>
    </div>
  </div>
</template>

<script setup>
const { person } = defineProps(["person"]);
</script>

<style scoped>
.peoplePosition {
  color: #66c5ff;
}
</style>
