<template>
    <div class="container  ">
      <h2 class="text-center titulo">Mis Ultimos Proyectos</h2>
      <div class="row">
        <div class="col-md-4 pt-3" v-for="proyecto in proyectos" :key="proyecto.id">
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
          { id: 1, nombre: "Plataforma de cursos", descripcion: "ASP.NETCORE| Bootstrap| MYSQL", imagen: require('@/assets/image/NetCore1.png'), ruta: "/NetCore" },
          { id: 2, nombre: "Proyecto 2", descripcion: "Descripción breve.", imagen: require('@/assets/image/NetCore2.png') },
          { id: 3, nombre: "Proyecto 3", descripcion: "Descripción breve.", imagen: require('@/assets/image/NetCore2.png') },
          { id: 4, nombre: "Proyecto 4", descripcion: "Descripción breve.", imagen: require('@/assets/image/NetCore3.png') },
          { id: 5, nombre: "Proyecto 5", descripcion: "Descripción breve.", imagen: require('@/assets/image/NetCore3.png') }
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
.titulo {
  color: white;
  background-color: rgba(5, 0, 0, 0.555);
}
.container {
  padding: 1rem;
  padding-bottom: 5.5rem;
  background-image: url('../assets/image/stars.svg');
  background-color: black; /* Ruta de la imagen de fondo */
  background-size: cover; /* Ajusta la imagen para cubrir todo el contenedor */
  background-position: center; /* Centra la imagen */
  background-repeat: no-repeat; /* Evita que la imagen se repita */
  min-height: 100vh;
  min-width: 100%;
  
  
}
.project-card {

  cursor: pointer;
  overflow: hidden;
  border-radius: 10px;
  transition: transform 0.3s, box-shadow 0.3s;
  background-color: rgba(255, 255, 255, 0.322); /* Fondo semi-transparente para las tarjetas */
  padding: 10px; /* Espaciado interno */
}

.project-card img {
  width: 100%;
  height: auto; /* Mantiene la proporción de la imagen */
  border-radius: 10px;
}

.project-card:hover {
  transform: scale(1.03);
  box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.664); /* Sombra blanca para contraste */
}
</style>
  