<template>
    <div class="container mt-5">
      <h2 class="text-center">Mis Proyectos</h2>
      <div class="row">
        <div class="col-md-4" v-for="proyecto in proyectos" :key="proyecto.id">
          <div class="card">
            <img :src="proyecto.imagen" class="card-img-top" alt="Proyecto">
            <div class="card-body">
              <h5 class="card-title">{{ proyecto.nombre }}</h5>
              <p class="card-text">{{ proyecto.descripcion }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        proyectos: [
          { id: 1, nombre: "Proyecto 1", descripcion: "Descripción breve.", imagen: "https://via.placeholder.com/300" },
          { id: 2, nombre: "Proyecto 2", descripcion: "Descripción breve.", imagen: "https://via.placeholder.com/300" }
        ]
      };
    }
  };
  </script>
  