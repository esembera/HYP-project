<template>
    <div>
        <div>
            <img :src="`/img/people/${person.image}`" id="peopleImg" />
        </div>
        <div id="peopleName">{{ person.name }}</div>
        <div id="peoplePosition">{{ person.position }}</div>
        <div id="peopleDescription">{{ person.description }}</div>
        <br />
        <br />
        <div id="peopleProjects">
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
const { person } = defineProps(['person']);
</script>

<style scoped>
#peopleName {
    font-size: 25px;
    font-weight: bold;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
}

#peopleImg {
    width: 100%;
}

#peoplePosition {
    color: #66C5FF;
    font-size: 20px;
    font-weight: bold;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
}

#peopleDescription {
    font-size: 18px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    text-align: justify;
    margin: 0;
}

#peopleProjects {
    font-size: 18px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    font-weight: bold;
}
</style>