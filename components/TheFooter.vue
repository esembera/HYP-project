<template>
  <footer>
    <div class="container">
      <nav>
        <div class="column">
          <div class="row heading1">Connect</div>
          <div class="row option">
            <font-awesome-icon :icon="['fab', 'twitter']" />@zenventures
          </div>
          <div class="row option">
            <font-awesome-icon :icon="['fab', 'instagram']" />@zen.ventures
          </div>
          <div class="row option">
            <font-awesome-icon :icon="['fab', 'tiktok']" />@zenadventures
          </div>
        </div>
        <div class="column">
          <div class="row heading1">Explore</div>
          <div class="row option">
            <NuxtLink to="/people" class="link">People</NuxtLink>
          </div>
          <div class="row option">
            <NuxtLink to="/projects" class="link">Projects</NuxtLink>
          </div>
          <div class="row option">
            <NuxtLink to="/areas" class="link">Areas</NuxtLink>
          </div>
        </div>
        <div class="column">
          <div class="row heading1">Info</div>
          <div class="row option">
            <NuxtLink to="/about" class="link">About us</NuxtLink>
          </div>
          <div class="row option">
            <NuxtLink to="/contact" class="link">Contact us</NuxtLink>
          </div>
        </div>
      </nav>
    </div>
  </footer>
</template>

<style>
.container {
  display: flex;
  width: 100%;
  justify-content: center;
}
nav {
  display: flex;
  justify-content: center;
  width: 50%;
}
.column {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.option {
  color: #181717;
  text-align: center;
  font-size: 0.9rem;
  font-family: sans-serif;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.heading1 {
  color: #181717;
  text-align: center;
  font-size: 1.1rem;
  font-family: sans-serif;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
footer {
  background: #ff006b;
  flex-shrink: 0;
  text-align: center;
  margin-top: auto;
  padding: 10px;
  height: 6.25rem;
  min-height: 1vh;
}
.link {
  color: #181717;
  text-decoration: none;
  font-family: sans-serif;
}
</style>
