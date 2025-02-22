<template>
    <div class="container mt-5">
      <h2 class="text-center">Galería de Imágenes</h2>
      <div class="row">
        <div class="col-md-4 mb-4" v-for="(imagen, index) in imagenes" :key="index">
          <div class="gallery-item" @click="abrirModal(imagen)">
            <img :src="imagen.src" :alt="imagen.alt" class="img-fluid">
          </div>
        </div>
      </div>
  
      <!-- Modal para mostrar imagen ampliada -->
      <div v-if="imagenSeleccionada" class="modal-overlay" @click="cerrarModal">
        <div class="modal-content">
          <img :src="imagenSeleccionada.src" :alt="imagenSeleccionada.alt" class="img-fluid">
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        imagenes: [
          { src: "/img/NetCore1.png", alt: "Imagen 1" },
          { src: "/img/NetCore2.png", alt: "Imagen 2" },
          { src: "/img/NetCore3.png", alt: "Imagen 3" },
          { src: "/img/NetCore4.png", alt: "Imagen 4" },
          { src: "/img/NetCore5.png", alt: "Imagen 5" },
          { src: "/img/NetCore6.png", alt: "Imagen 6" }
        ],
        imagenSeleccionada: null
      };
    },
    methods: {
      abrirModal(imagen) {
        this.imagenSeleccionada = imagen;
      },
      cerrarModal() {
        this.imagenSeleccionada = null;
      }
    }
  };
  </script>
  
  <style scoped>
  /* Galería */
  .gallery-item {
    cursor: pointer;
    overflow: hidden;
    border-radius: 10px;
    transition: transform 0.3s, box-shadow 0.3s;
  }
  
  .gallery-item img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 10px;
  }
  
  .gallery-item:hover {
    transform: scale(1.05);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  }
  
  /* Modal */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .modal-content {
    max-width: 80vw; /* 90% del ancho de la pantalla */
    max-height: 100vh; /* 90% del alto de la pantalla */
  }
  
  .modal-content img {
    width: auto; /* Mantiene la proporción original */
    height: auto; /* Mantiene la proporción original */
    max-width: 100%; /* Se ajusta al contenedor */
    max-height: 100%; /* Se ajusta al contenedor */
    border-radius: 10px;
}
  </style>
  