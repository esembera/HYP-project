<template>
  <footer>
    <div class="flex-container">
      <div class="rectangle">
        <SvgIcon style="margin-top: 5%; margin-left: 50%" />
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
            <div class="row heading1" style="justify-content: center">Info</div>
            <div class="row option">
              <NuxtLink to="/about" class="link">About us</NuxtLink>
            </div>
            <div class="row option">
              <NuxtLink to="/contact" class="link">Contact us</NuxtLink>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </footer>
</template>

<style>
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
  height: 6.25rem;
  min-height: 1vh;
}

.flex-container {
  display: flex;
}

.container {
  display: flex;
  justify-content: center;
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
</style>
