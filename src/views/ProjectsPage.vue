<template>
    <div class="container mt-5">
      <h2 class="text-center">Mis Ultimos Proyectos</h2>
      <div class="row">
        <div class="col-md-4 pt-4" v-for="proyecto in proyectos" :key="proyecto.id">
          <div class="card project-card"
          :class="{ selected: selectedProject === proyecto.id }"
             @click="seleccionarProyecto(proyecto.id, proyecto.ruta)">
            <img :src="proyecto.imagen" class="card-img-top" alt="Proyecto">
            <div class="card-body">
              <h5 class="card-title" >{{ proyecto.nombre }}</h5>
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
          { id: 1, nombre: "Plataforma de cursos", descripcion: "ASP.NETCORE| Bootstrap| MYSQL", imagen: "/img/NetCore1.png", ruta: "/NetCore" },
          { id: 2, nombre: "Proyecto 2", descripcion: "Descripción breve.", imagen: "/img/NetCore2.png" },
          { id: 3, nombre: "Proyecto 3", descripcion: "Descripción breve.", imagen: "/img/NetCore3.png" },
          { id: 4, nombre: "Proyecto 4", descripcion: "Descripción breve.", imagen: "/img/NetCore3.png" }
        ]
      };
    },
    methods: {
    seleccionarProyecto(id, ruta) {
      this.selectedProject = id; // Marca el proyecto seleccionado
      setTimeout(() => {
        this.$router.push(ruta); // Redirige después de un breve tiempo
      }, 300);
    }
  }
  };
  </script>
<style scoped>
.project-card {
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
}
.project-card:hover {
  transform: scale(1.05);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}
.selected {
  transform: scale(1.1);
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.3);
}
</style>
  