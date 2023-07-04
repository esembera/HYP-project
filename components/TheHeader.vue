<!--
    Header of the page
-->
<template>
  <header>
    <NuxtLink to="/"><SvgIcon /></NuxtLink>
    <nav>
      <NuxtLink to="/about" class="link"
        ><div class="navElement">About us</div></NuxtLink
      >
      <NuxtLink to="/people" class="link"
        ><div class="navElement">People</div></NuxtLink
      >
      <NuxtLink to="/projects" class="link"
        ><div class="navElement">Projects</div></NuxtLink
      >
      <NuxtLink to="/areas" class="link"
        ><div class="navElement">Areas</div></NuxtLink
      >
      <NuxtLink to="/contact" class="link"
        ><div class="navElement">Contact us</div></NuxtLink
      >
    </nav>
  </header>
</template>

<style>
header {
  padding: 10px 30px 10px 30px;
  margin-bottom: 5px;
  background-color: #ff006b;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav {
  display: flex;
  gap: 30px;
}

.navElement {
  color: #181717;
  font-size: 1.25rem;
  font-family: sans-serif Black;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.link {
  color: #181717;
  font-family: sans-serif;
  text-decoration: none;
}
</style>
