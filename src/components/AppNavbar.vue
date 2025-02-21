<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/proyectos">Proyectos</router-link>
    <router-link to="/contacto">Contacto</router-link>
  </nav>
  
</template>

<script>
export default {
  name: 'AppNavbar',
};
</script>

<style scoped>
nav {
  background-color: #333;
  padding: 1rem;
  text-align: center;
}

nav a {
  color: rgb(255, 255, 255);
  margin: 0 1rem;
  text-decoration: none;
}

nav a:hover {
  text-decoration: none;
  color: rgb(6, 177, 245);
}
</style>