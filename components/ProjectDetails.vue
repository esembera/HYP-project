<template>
    <div class="modal-overlay" @click="$emit('close-modal')" v-if="localProject !== null">
        <div class="modal" @click.stop>
            <div class="close" @click="$emit('close-modal')">
                <img class="close-img" src="~/assets/img/projects/close_dialog.png" alt="" />
            </div>
            <div class="dialogContainer">
                <div class="dialogColumn">
                    <div id="projectName">
                        {{ localProject.name }}
                    </div>
                    <div id="projectDescription">
                        {{ localProject.description }}
                    </div>
                </div>
                <div class="dialogColumn">
                    <div class="propertyName">AREA</div>
                    <div class="propertyValue">{{ getAreaFullName(localProject.area) }}</div>
                    <div class="propertyName">INDUSTRIES</div>
                    <div class="propertyValue" v-for="i in localProject.industries" :key="i">{{ i }}</div>
                    <div class="propertyName">MILESTONES</div>
                    <div class="propertyValue" v-for="m in localProject.milestones" :key="m">{{ m }}</div>
                    <div class="propertyName">FOUNDERS</div>
                    <div class="propertyValue" v-for="f in localProject.founders" :key="f">{{ f }}</div>
                    <div class="propertyName">SUPERVISOR</div>
                    <div class="propertyValue">{{ localProject.supervisor }}</div>
                </div>
            </div>
            <div class="dialogContainer">
                <div class="dialogColumn">
                    <span class="previous" @click="previousProject">
                        PREVIOUS&nbsp;&nbsp;
                        <SvgBackArrow class="inline mr-1" />
                    </span>
                </div>
                <div class="dialogColumn">
                    <span class="next" @click="nextProject">
                        <SvgArrow class="inline mr-1" />
                        &nbsp;&nbsp;NEXT
                    </span>
                </div>
            </div>

            <img :src="`/img/projects/black and white/${project.black_white_img}`"
                style="position: absolute; bottom: 0; right: 0; width: 250px;" />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        project: {
            type: Object,
            required: true,
        },
        projects: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            localProject: null,
        };
    },
    watch: {
        project(newVal) {
            this.localProject = newVal;
        },
    },
    methods: {
        getAreaFullName(area) {
            switch (area) {
                case "hospitality":
                    return "Hospitality";
                case "technology":
                    return "Technology & Inovation";
                case "creative":
                    return "Creative Solutions";
            }
        },
        previousProject() {
            let index;
            for (let i = 0; i < this.projects.length; i++) {
                if (this.localProject.id == this.projects[i].id) {
                    index = i;
                    break;
                }
            }
            this.localProject = this.projects[index != 0 ? index - 1 : this.projects.length - 1];
        },
        nextProject() {
            let index;
            for (let i = 0; i < this.projects.length; i++) {
                if (this.localProject.id == this.projects[i].id) {
                    index = i;
                    break;
                }
            }
            this.localProject = this.projects[(index + 1) % this.projects.length];
        }
    }
};
</script>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000000da;
}

.modal {
    background-color: #A582FF;
    width: 70%;
    height: 666px;
    border-radius: 50px;
    padding: 15px;
    position: relative;
}

.close {
    float: right;
    cursor: pointer;
    width: 51px;
    height: 51px;
}

.dialogContainer {
    display: flex;
}

.dialogColumn {
    margin-top: 5%;
    flex: 1;
}

#projectName {
    font-size: 50px;
    font-weight: 1000;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    text-align: center;
    color: #181717;
}

#projectDescription {
    font-size: 18px;
    text-align: justify;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    margin: 7%;
    color: #181717;
}

.propertyName {
    font-size: 18px;
    font-weight: 1000;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    color: #181717;
    margin-left: 25%;
    margin-top: 5%;
}

.propertyValue {
    color: #181717;
    margin-left: 25%;
    font-size: 18px;
    font-family: sans-serif;
}

.previous {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-weight: 1000;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    margin-right: 5%;
    cursor: pointer;
}

.next {
    display: flex;
    align-items: center;
    font-weight: 1000;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    margin-left: 5%;
    cursor: pointer;
}
</style>