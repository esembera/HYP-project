<script setup>
const activeMenuItem = useActiveMenuItem();
</script>

<template>
  <footer :style="{ backgroundColor: getMenuItemColor(activeMenuItem) }">
    <div class="flex-container">
      <div class="rectangle">
        <SvgIcon style="margin-top: 7.5%; margin-left: 55%" />
      </div>
      <div class="container">
        <nav class="nav-container">
          <div class="column">
            <div class="row heading1" style="justify-content: center">
              Connect
            </div>
            <div class="row option">
              <div class="rowColumn">
                <Icon name="mdi:twitter" size="20px" />
              </div>
              <div class="rowColumn">
                <span style="padding-left: 3%">@zenventures</span>
              </div>
            </div>
            <div class="row option">
              <div class="rowColumn">
                <Icon name="mdi:instagram" size="20px" />
              </div>
              <div class="rowColumn">
                <span style="padding-left: 3%"> @zen.ventures </span>
              </div>
            </div>
            <div class="row option">
              <div class="rowColumn">
                <Icon name="ic:baseline-tiktok" size="20px" />
              </div>
              <div class="rowColumn">
                <span style="padding-left: 3%">@zenadventures</span>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="row heading1" style="justify-content: center">
              Explore
            </div>
            <div class="row option">
              <NuxtLink
                to="/people"
                class="link"
                @click="activeMenuItem = 'people'"
                >People</NuxtLink
              >
            </div>
            <div class="row option">
              <NuxtLink
                to="/projects"
                class="link"
                @click="activeMenuItem = 'projects'"
                >Projects</NuxtLink
              >
            </div>
            <div class="row option">
              <NuxtLink
                to="/areas"
                class="link"
                @click="activeMenuItem = 'areas'"
                >Areas</NuxtLink
              >
            </div>
          </div>
          <div class="column">
            <div class="row heading1" style="justify-content: center">Info</div>
            <div class="row option">
              <NuxtLink
                to="/about"
                class="link"
                @click="activeMenuItem = 'about'"
                >About us</NuxtLink
              >
            </div>
            <div class="row option">
              <NuxtLink
                to="/contact"
                class="link"
                @click="activeMenuItem = 'contact'"
                >Contact us</NuxtLink
              >
            </div>
          </div>
        </nav>
        <div class="additional-info">
          <div class="info-row">
            <span>info@zen.ventures</span>
          </div>
          <div class="info-row">
            <span>+39 1234567890</span>
          </div>
          <div class="info-row">
            <span>Milano, Viale Monza 106</span>
          </div>
          <div class="info-row">
            <span>®2023</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    activeMenuItem: String,
  },
  methods: {
    getMenuItemColor(menuItem) {
      const colorMap = {
        home: "#ff006b",
        people: "#66C5FF",
        projects: "#A582FF",
        areas: "#B3DC3D",
        contact: "#FF006B",
        about: "#FF006B",
        faq: "#FF006B",
      };
      return colorMap[menuItem] || "#ff006b"; // Default color for the footer
    },
  },
};
</script>

<style>
.additional-info {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  margin-left: auto;
  color: black;
  font-size: 0.9rem;
  font-family: sans-serif;
  font-weight: 500;
  line-height: normal;
  margin-top: auto;
  margin-bottom: 5px;
}

.info-row {
  margin-bottom: 5px;
}
.rectangle {
  width: 350px;
  height: 100px;
  background: #f6f6f6;
  border-radius: 292px;
  transform: translateX(-50%);
}
footer {
  background: #ff006b;
  flex-shrink: 0;
  text-align: center;
  margin-top: auto;
  padding: 10px;
  height: 7.5rem;
  min-height: 1vh;
}

.flex-container {
  display: flex;
}

.container {
  display: flex;
  justify-content: left;
  margin-left: 20%;
}

.nav-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.column {
  margin: 0 20px;
}

.row {
  display: flex;
  align-items: center;
}

.heading1 {
  color: #181717;
  text-align: center;
  font-size: 1.1rem;
  font-family: sans-serif;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 5px;
}

.option {
  color: #181717;
  text-align: center;
  font-size: 0.9rem;
  font-family: sans-serif;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 5px;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    margin-left: 0;
  }

  .column {
    margin: 0;
    margin-bottom: 20px;
  }

  .nav-container {
    flex-direction: column;
    align-items: center;
  }
}
</style>
