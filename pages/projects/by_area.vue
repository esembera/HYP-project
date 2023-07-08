<template>
    <div id="projectsTitle">Introducing our PROJECTS</div>
    <div id="colorContainer"><img src="../../assets/img/projects/color.png" /></div>
    <div id="projectsDescription">
        Discover a collection of remarkable ventures that redefine industries, spark meaningful change, and inspire a new
        generation. Join us on this transformative journey as we shape a future brimming with possibility and unleash the
        full potential of bold ideas.
    </div>
    <div id="buttonContainer">
        <div class="button">
            <NuxtLink class="nextLink" to="/projects" style="font-weight: initial;">
                All
            </NuxtLink>
        </div>
        <div class="button">
            <NuxtLink class="nextLink" to="/projects/most_relevant" style="font-weight: initial;">
                Most relevant
            </NuxtLink>
        </div>
        <div class="button" style="background-color: #A582FF;">
            Projects by area
        </div>
    </div>
    <div class="areaName" @click="hospitalityActive = !hospitalityActive">HOSPITALITY</div>
    <hr />
    <div id="projectsGrid" v-if="hospitalityActive">
        <div class="projectContainer" v-for="project in getProjectsByArea('hospitality')" :key="project.id"
            @mouseover="setHoveredItem(project.id)" @mouseleave="clearHoveredItem">
            <img class="projectImage" :src="`/img/projects/${project.image}`" />
            <div class="detailsButton" v-if="project.id == hoveredProject">Details</div>
        </div>
    </div>
    <div class="areaName" @click="creativeActive = !creativeActive">CREATIVE SOLUTIONS</div>
    <hr />
    <div id="projectsGrid" v-if="creativeActive">
        <div class="projectContainer" v-for="project in getProjectsByArea('creative')" :key="project.id"
            @mouseover="setHoveredItem(project.id)" @mouseleave="clearHoveredItem">
            <img class="projectImage" :src="`/img/projects/${project.image}`" />
            <div class="detailsButton" v-if="project.id == hoveredProject">Details</div>
        </div>
    </div>
    <div class="areaName" @click="technologyActive = !technologyActive">TECHNOLOGY & INOVATION</div>
    <hr />
    <div id="projectsGrid" v-if="technologyActive">
        <div class="projectContainer" v-for="project in getProjectsByArea('technology')" :key="project.id"
            @mouseover="setHoveredItem(project.id)" @mouseleave="clearHoveredItem">
            <img class="projectImage" :src="`/img/projects/${project.image}`" />
            <div class="detailsButton" v-if="project.id == hoveredProject">Details</div>
        </div>
    </div>
    <div id="linkContainer">
        <NuxtLink class="nextLink" to="/projects/most_relevant">
            <img src="../../assets/img/projects/arrow_left.png" style="width:31px; height:31px" />
        </NuxtLink>
        &nbsp;&nbsp;
        previous&nbsp;<NuxtLink class="nextLink" to="/projects/most_relevant">Most Relevant</NuxtLink>
    </div>
</template>

<script>
export default {
    data() {
        return {
            projects: [
                { id: 0, name: 'Sara', image: 'sara.png', black_white_img: 'sara.png', description: 'Zen Ventures recognized the passion for culinary and café excellence in Miguel Silva and Sonia Mendes, the founders of The Lisbon Café. The Zen 2021 investment enabled The Lisbon Café to establish itself as a vibrant cultural and culinary destination. Ava Rodriguez, an experienced café owner, was appointed as the supervisor to ensure the highest standards of coffee quality, menu development, and customer experience. With Zen Ventures\' support, The Lisbon Café has become a beloved spot for coffee enthusiasts and food lovers, offering a cozy atmosphere, delectable pastries, and coffee creations.', area: 'hospitality', industries: ['Culinary Delights', 'Café Culture'], milestones: ['Zen Ventures Investment: 2021'], founders: ['Miguel Silva', 'Sonia Mendes'], supervisor: 'Ava Rodriguez' },
                { id: 1, name: 'Baba Boom', image: 'Baba _ Boom.jpg', black_white_img: 'baba boom.png', description: 'Zen Ventures recognized the passion for culinary and café excellence in Miguel Silva and Sonia Mendes, the founders of The Lisbon Café. The Zen 2021 investment enabled The Lisbon Café to establish itself as a vibrant cultural and culinary destination. Ava Rodriguez, an experienced café owner, was appointed as the supervisor to ensure the highest standards of coffee quality, menu development, and customer experience. With Zen Ventures\' support, The Lisbon Café has become a beloved spot for coffee enthusiasts and food lovers, offering a cozy atmosphere, delectable pastries, and coffee creations.', area: 'creative', industries: ['Culinary Delights', 'Café Culture'], milestones: ['Zen Ventures Investment: 2021'], founders: ['Miguel Silva', 'Sonia Mendes'], supervisor: 'Ava Rodriguez' },
                { id: 2, name: 'Kim', image: 'kim.jpg', black_white_img: 'kim.png', description: 'Zen Ventures recognized the passion for culinary and café excellence in Miguel Silva and Sonia Mendes, the founders of The Lisbon Café. The Zen 2021 investment enabled The Lisbon Café to establish itself as a vibrant cultural and culinary destination. Ava Rodriguez, an experienced café owner, was appointed as the supervisor to ensure the highest standards of coffee quality, menu development, and customer experience. With Zen Ventures\' support, The Lisbon Café has become a beloved spot for coffee enthusiasts and food lovers, offering a cozy atmosphere, delectable pastries, and coffee creations.', area: 'technology', industries: ['Culinary Delights', 'Café Culture'], milestones: ['Zen Ventures Investment: 2021'], founders: ['Miguel Silva', 'Sonia Mendes'], supervisor: 'Ava Rodriguez' },
                { id: 3, name: 'Nobu', image: 'nobu.png', black_white_img: 'nobu.png', description: 'Zen Ventures recognized the passion for culinary and café excellence in Miguel Silva and Sonia Mendes, the founders of The Lisbon Café. The Zen 2021 investment enabled The Lisbon Café to establish itself as a vibrant cultural and culinary destination. Ava Rodriguez, an experienced café owner, was appointed as the supervisor to ensure the highest standards of coffee quality, menu development, and customer experience. With Zen Ventures\' support, The Lisbon Café has become a beloved spot for coffee enthusiasts and food lovers, offering a cozy atmosphere, delectable pastries, and coffee creations.', area: 'hospitality', industries: ['Culinary Delights', 'Café Culture'], milestones: ['Zen Ventures Investment: 2021'], founders: ['Miguel Silva', 'Sonia Mendes'], supervisor: 'Ava Rodriguez' },
                { id: 4, name: 'Public Anchor', image: 'publicAnchor.jpg', black_white_img: 'public anchor.png', description: 'Zen Ventures recognized the passion for culinary and café excellence in Miguel Silva and Sonia Mendes, the founders of The Lisbon Café. The Zen 2021 investment enabled The Lisbon Café to establish itself as a vibrant cultural and culinary destination. Ava Rodriguez, an experienced café owner, was appointed as the supervisor to ensure the highest standards of coffee quality, menu development, and customer experience. With Zen Ventures\' support, The Lisbon Café has become a beloved spot for coffee enthusiasts and food lovers, offering a cozy atmosphere, delectable pastries, and coffee creations.', area: 'creative', industries: ['Culinary Delights', 'Café Culture'], milestones: ['Zen Ventures Investment: 2021'], founders: ['Miguel Silva', 'Sonia Mendes'], supervisor: 'Ava Rodriguez' },
                { id: 5, name: 'La Ventura', image: 'La Ventura - LMNOP.png', black_white_img: 'la ventura.png', description: 'Zen Ventures recognized the passion for culinary and café excellence in Miguel Silva and Sonia Mendes, the founders of The Lisbon Café. The Zen 2021 investment enabled The Lisbon Café to establish itself as a vibrant cultural and culinary destination. Ava Rodriguez, an experienced café owner, was appointed as the supervisor to ensure the highest standards of coffee quality, menu development, and customer experience. With Zen Ventures\' support, The Lisbon Café has become a beloved spot for coffee enthusiasts and food lovers, offering a cozy atmosphere, delectable pastries, and coffee creations.', area: 'creative', industries: ['Culinary Delights', 'Café Culture'], milestones: ['Zen Ventures Investment: 2021'], founders: ['Miguel Silva', 'Sonia Mendes'], supervisor: 'Ava Rodriguez' },
                { id: 6, name: 'Calm', image: 'calm.png', black_white_img: 'calm.png', description: 'Zen Ventures recognized the passion for culinary and café excellence in Miguel Silva and Sonia Mendes, the founders of The Lisbon Café. The Zen 2021 investment enabled The Lisbon Café to establish itself as a vibrant cultural and culinary destination. Ava Rodriguez, an experienced café owner, was appointed as the supervisor to ensure the highest standards of coffee quality, menu development, and customer experience. With Zen Ventures\' support, The Lisbon Café has become a beloved spot for coffee enthusiasts and food lovers, offering a cozy atmosphere, delectable pastries, and coffee creations.', area: 'technology', industries: ['Culinary Delights', 'Café Culture'], milestones: ['Zen Ventures Investment: 2021'], founders: ['Miguel Silva', 'Sonia Mendes'], supervisor: 'Ava Rodriguez' },
                { id: 7, name: 'Nerve', image: 'nerve.png', black_white_img: 'nerve.png', description: 'Zen Ventures recognized the passion for culinary and café excellence in Miguel Silva and Sonia Mendes, the founders of The Lisbon Café. The Zen 2021 investment enabled The Lisbon Café to establish itself as a vibrant cultural and culinary destination. Ava Rodriguez, an experienced café owner, was appointed as the supervisor to ensure the highest standards of coffee quality, menu development, and customer experience. With Zen Ventures\' support, The Lisbon Café has become a beloved spot for coffee enthusiasts and food lovers, offering a cozy atmosphere, delectable pastries, and coffee creations.', area: 'creative', industries: ['Culinary Delights', 'Café Culture'], milestones: ['Zen Ventures Investment: 2021'], founders: ['Miguel Silva', 'Sonia Mendes'], supervisor: 'Ava Rodriguez' },
                { id: 8, name: 'Mini', image: 'mini.png', black_white_img: 'mini.png', description: 'Zen Ventures recognized the passion for culinary and café excellence in Miguel Silva and Sonia Mendes, the founders of The Lisbon Café. The Zen 2021 investment enabled The Lisbon Café to establish itself as a vibrant cultural and culinary destination. Ava Rodriguez, an experienced café owner, was appointed as the supervisor to ensure the highest standards of coffee quality, menu development, and customer experience. With Zen Ventures\' support, The Lisbon Café has become a beloved spot for coffee enthusiasts and food lovers, offering a cozy atmosphere, delectable pastries, and coffee creations.', area: 'creative', industries: ['Culinary Delights', 'Café Culture'], milestones: ['Zen Ventures Investment: 2021'], founders: ['Miguel Silva', 'Sonia Mendes'], supervisor: 'Ava Rodriguez' },
                { id: 9, name: 'Kilo', image: 'Kilo.png', black_white_img: 'kilo.png', description: 'Zen Ventures recognized the passion for culinary and café excellence in Miguel Silva and Sonia Mendes, the founders of The Lisbon Café. The Zen 2021 investment enabled The Lisbon Café to establish itself as a vibrant cultural and culinary destination. Ava Rodriguez, an experienced café owner, was appointed as the supervisor to ensure the highest standards of coffee quality, menu development, and customer experience. With Zen Ventures\' support, The Lisbon Café has become a beloved spot for coffee enthusiasts and food lovers, offering a cozy atmosphere, delectable pastries, and coffee creations.', area: 'technology', industries: ['Culinary Delights', 'Café Culture'], milestones: ['Zen Ventures Investment: 2021'], founders: ['Miguel Silva', 'Sonia Mendes'], supervisor: 'Ava Rodriguez' },
                { id: 10, name: 'Lovin', image: 'Lovvin.png', black_white_img: 'lovin.png', description: 'Zen Ventures recognized the passion for culinary and café excellence in Miguel Silva and Sonia Mendes, the founders of The Lisbon Café. The Zen 2021 investment enabled The Lisbon Café to establish itself as a vibrant cultural and culinary destination. Ava Rodriguez, an experienced café owner, was appointed as the supervisor to ensure the highest standards of coffee quality, menu development, and customer experience. With Zen Ventures\' support, The Lisbon Café has become a beloved spot for coffee enthusiasts and food lovers, offering a cozy atmosphere, delectable pastries, and coffee creations.', area: 'hospitality', industries: ['Culinary Delights', 'Café Culture'], milestones: ['Zen Ventures Investment: 2021'], founders: ['Miguel Silva', 'Sonia Mendes'], supervisor: 'Ava Rodriguez' },
                { id: 11, name: 'The Lisbon', image: 'the lisbon.jpg', black_white_img: 'the lisbon.png', description: 'Zen Ventures recognized the passion for culinary and café excellence in Miguel Silva and Sonia Mendes, the founders of The Lisbon Café. The Zen 2021 investment enabled The Lisbon Café to establish itself as a vibrant cultural and culinary destination. Ava Rodriguez, an experienced café owner, was appointed as the supervisor to ensure the highest standards of coffee quality, menu development, and customer experience. With Zen Ventures\' support, The Lisbon Café has become a beloved spot for coffee enthusiasts and food lovers, offering a cozy atmosphere, delectable pastries, and coffee creations.', area: 'hospitality', industries: ['Culinary Delights', 'Café Culture'], milestones: ['Zen Ventures Investment: 2021'], founders: ['Miguel Silva', 'Sonia Mendes'], supervisor: 'Ava Rodriguez' },
                { id: 12, name: 'Comosumo', image: 'comosumo.jpg', black_white_img: 'comosumo.png', description: 'Zen Ventures recognized the passion for culinary and café excellence in Miguel Silva and Sonia Mendes, the founders of The Lisbon Café. The Zen 2021 investment enabled The Lisbon Café to establish itself as a vibrant cultural and culinary destination. Ava Rodriguez, an experienced café owner, was appointed as the supervisor to ensure the highest standards of coffee quality, menu development, and customer experience. With Zen Ventures\' support, The Lisbon Café has become a beloved spot for coffee enthusiasts and food lovers, offering a cozy atmosphere, delectable pastries, and coffee creations.', area: 'technology', industries: ['Culinary Delights', 'Café Culture'], milestones: ['Zen Ventures Investment: 2021'], founders: ['Miguel Silva', 'Sonia Mendes'], supervisor: 'Ava Rodriguez' },
                { id: 13, name: 'H Technology', image: 'h.png', black_white_img: 'h.png', description: 'Zen Ventures recognized the passion for culinary and café excellence in Miguel Silva and Sonia Mendes, the founders of The Lisbon Café. The Zen 2021 investment enabled The Lisbon Café to establish itself as a vibrant cultural and culinary destination. Ava Rodriguez, an experienced café owner, was appointed as the supervisor to ensure the highest standards of coffee quality, menu development, and customer experience. With Zen Ventures\' support, The Lisbon Café has become a beloved spot for coffee enthusiasts and food lovers, offering a cozy atmosphere, delectable pastries, and coffee creations.', area: 'technology', industries: ['Culinary Delights', 'Café Culture'], milestones: ['Zen Ventures Investment: 2021'], founders: ['Miguel Silva', 'Sonia Mendes'], supervisor: 'Ava Rodriguez' },
                { id: 14, name: 'Porto', image: 'porto.png', black_white_img: 'porto.png', description: 'Zen Ventures recognized the passion for culinary and café excellence in Miguel Silva and Sonia Mendes, the founders of The Lisbon Café. The Zen 2021 investment enabled The Lisbon Café to establish itself as a vibrant cultural and culinary destination. Ava Rodriguez, an experienced café owner, was appointed as the supervisor to ensure the highest standards of coffee quality, menu development, and customer experience. With Zen Ventures\' support, The Lisbon Café has become a beloved spot for coffee enthusiasts and food lovers, offering a cozy atmosphere, delectable pastries, and coffee creations.', area: 'creative', industries: ['Culinary Delights', 'Café Culture'], milestones: ['Zen Ventures Investment: 2021'], founders: ['Miguel Silva', 'Sonia Mendes'], supervisor: 'Ava Rodriguez' },],
            hoveredProject: null,
            hospitalityActive: false,
            creativeActive: false,
            technologyActive: false
        };
    },
    methods: {
        setHoveredItem(index) {
            this.hoveredProject = index;
        },
        clearHoveredItem() {
            this.hoveredProject = null;
        },
        getProjectsByArea(area) {
            let typeProjects = [];
            this.projects.forEach(project => {
                if (project.area === area) typeProjects.push(project);
            });
            return typeProjects;
        }
    },
};
</script>

<style scoped>
#projectsTitle {
    font-size: 100px;
    margin-left: 20%;
    margin-right: 20%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    font-weight: bold;
    text-align: center;
}

#colorContainer {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

#projectsDescription {
    text-align: justify;
    margin-left: 25%;
    margin-right: 25%;
    font-family: sans-serif;
    margin-top: 30px;
    font-size: 25px;
}

#buttonContainer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 50px;
}

.button {
    display: inline;
    width: 220px;
    height: 62px;
    border-radius: 50px;
    background-color: #D9D9D9;
    margin-left: 15px;
    margin-right: 15px;
    font-size: 25px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    text-align: center;
    line-height: 62px;
}

#projectsGrid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    /* Three columns with equal width */
    grid-gap: 13px;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 50px;
    margin-bottom: 50px;
}

.projectImage {
    width: 100%;
}

#contactButton {
    width: 280px;
    height: 96px;
    border-radius: 35px;
    background-color: #A582FF;
    font-size: 30px;
    font-weight: bold;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    text-align: center;
    line-height: 96px;
}

.nextLink {
    font-weight: bold;
    text-decoration: none;
    color: black;
}

#linkContainer {
    font-size: 25px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    display: flex;
    flex-direction: row;
    margin-left: 5%;
    margin-bottom: 50px;
    align-items: center;
}

#lastImage {
    background-color: #A582FF;
    font-size: 35px;
    font-weight: 1000;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    padding-left: 30%;
    padding-right: 30%;
    text-align: center;
    display: flex;
    align-items: center;
}

.projectContainer {
    position: relative;
    display: flex;
    justify-content: center;
}

.detailsButton {
    position: absolute;
    bottom: 10%;
    background-color: #A582FF;
    color: white;
    font-size: 12px;
    font-weight: bold;
    width: 111px;
    height: 32px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.areaName {
    font-size: 45px;
    font-weight: bold;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    text-align: center;
    margin-top: 50px;
}

hr {
    height: 5px;
    border: none;
    background-color: black;
    margin: 5%;
    margin-top: 20px;
}
</style>