<!--
  Header component is a component which is displayed at the top of the page. It consists of logo, burger menu and navigation menu.
  Only one of those two menus is shown depending on wheter the user is on mobile or desktop.
-->

<script setup>
const activeMenuItem = useActiveMenuItem();
</script>

<template>
  <header
    :style="{ backgroundColor: getMenuItemColor(activeMenuItem) }"
    v-show="isDesktop || isMobile"
  >
    <NuxtLink to="/" @click="activeMenuItem = 'home'">
      <SvgIcon />
    </NuxtLink>
    <div class="burger-menu" @click="toggleMenu">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
    <nav
      :class="{ 'show-menu': showMenu }"
      :style="{ backgroundColor: getMenuItemColor(activeMenuItem) }"
    >
      <div class="close-menu" @click="toggleMenu()">X</div>
      <div class="menu-items">
        <div class="dropdown" v-if="isDesktop">
          <span class="link navElement hover:cursor-pointer">About us</span>
          <div class="dropdown-content">
            <NuxtLink
              to="/about"
              class="link"
              exact-active-class="dropdownElementActive"
              @click="toggleMenu(), (activeMenuItem = 'about')"
            >
              About us
            </NuxtLink>
            <NuxtLink
              to="/about/faq"
              class="link"
              exact-active-class="dropdownElementActive"
              @click="toggleMenu(), (activeMenuItem = 'faq')"
            >
              FAQ
            </NuxtLink>
          </div>
        </div>
        <template v-if="isMobile">
          <NuxtLink
            to="/about"
            class="link navElement"
            exact-active-class="linkActive"
            @click="toggleMenu(), (activeMenuItem = 'about')"
          >
            About us
          </NuxtLink>
          <NuxtLink
            to="/about/faq"
            class="link navElement"
            exact-active-class="linkActive"
            @click="toggleMenu(), (activeMenuItem = 'faq')"
          >
            FAQ
          </NuxtLink>
        </template>
        <NuxtLink
          to="/people"
          class="link navElement"
          exact-active-class="linkActive"
          @click="toggleMenu(), (activeMenuItem = 'people')"
        >
          People
        </NuxtLink>
        <NuxtLink
          to="/projects"
          class="link navElement"
          exact-active-class="linkActive"
          @click="toggleMenu(), (activeMenuItem = 'projects')"
        >
          Projects
        </NuxtLink>
        <NuxtLink
          to="/areas"
          class="link navElement"
          exact-active-class="linkActive"
          @click="toggleMenu(), (activeMenuItem = 'areas')"
        >
          Areas
        </NuxtLink>
        <NuxtLink
          to="/contact"
          class="link navElement"
          exact-active-class="linkActive"
          @click="toggleMenu(), (activeMenuItem = 'contact')"
        >
          Contact us
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
      activeMenuItem: null,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
      // this.activeMenuItem = null;
    },
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
      return colorMap[menuItem] || "#ff006b"; // Default color for the header
    },
  },
  computed: {
    isDesktop() {
      if (process.client) {
        return window.innerWidth > 768; // Adjust the breakpoint as needed
      } else {
        return null;
      }
    },
    isMobile() {
      if (process.client) {
        return window.innerWidth < 768; // Adjust the breakpoint as needed
      } else {
        return null;
      }
    },
  },
  mounted() {
    const body = document.querySelector("body");
    body.addEventListener("click", (event) => {
      if (event.target.closest("header") === null) {
        this.showMenu = false;
      }
    });
  },
};
</script>

<style>
header {
  padding: 10px 30px 10px 30px;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav {
  display: flex;
  gap: 30px;
}

.menu-items {
  display: flex;
  gap: 30px;
}

.close-menu {
  display: none;
}

.burger-menu {
  display: none;
}

.dropdown {
  position: relative;
  display: flex;
  align-items: center;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 8px;
  overflow: hidden;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown-content a {
  display: block;
  padding: 10px;
  text-decoration: none;
  color: black;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.navElement {
  font-size: 1.25rem;
  font-family: sans-serif Black;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.link {
  font-family: sans-serif;
  text-decoration: none;
}

.linkActive {
  color: #fff;
  font-family: sans-serif;
  text-decoration: none;
}

.menu-item-selected {
  /* Default color for the header when no menu item is selected */
  background-color: #ff006b;
}

@media (max-width: 768px) {
  header {
    flex-wrap: wrap;
  }

  .burger-menu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 20px;
    cursor: pointer;
    margin-right: 15px;
  }

  .bar {
    width: 100%;
    height: 3px;
    background-color: #fff;
  }

  nav {
    flex-direction: column;
    align-items: center;
    gap: 15px;
    padding: 10px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #ff006b;
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
    z-index: 99;
  }

  nav.show-menu {
    transform: translateX(0);
  }

  .close-menu {
    display: block;
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 1.5rem;
    color: #fff;
    cursor: pointer;
  }

  .dropdown {
    display: none; /* Hide dropdown on mobile */
  }

  .menu-items {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin-top: 20px;
  }

  /* Adjust the styling for mobile view */
  .navElement {
    font-size: 1.5rem;
    margin: 10px 0;
  }
}
</style>
