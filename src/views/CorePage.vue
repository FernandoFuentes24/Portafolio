<template>
  <div class="container">
    <h2 class="text-center encabezado">Sistema de cursos</h2>
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
        { src: "/img/NetCore4.png", alt: "Imagen 4" }
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
.encabezado {
  color: white;
  background-color: rgba(5, 0, 0, 0.555);
}

.container {
  padding: 1rem;
  padding-bottom: 5.5rem;
  background-image: url('../assets/image/stars.svg'); /* Ruta de la imagen de fondo */
  background-color: black; /* Fondo negro como respaldo */
  background-size: cover; /* Ajusta la imagen para cubrir todo el contenedor */
  background-position: initial; /* Centra la imagen */
  background-repeat: no-repeat; /* Evita que la imagen se repita */
  min-height: 100vh; /* Asegura que el contenedor ocupe toda la altura de la pantalla */
  min-width: 100%; /* Asegura que el contenedor ocupe todo el ancho */
}

/* Galería */
.gallery-item {
  cursor: pointer;
  overflow: hidden;
  border-radius: 10px;
  transition: transform 0.3s, box-shadow 0.3s;
  background-color: rgba(255, 255, 255, 0.1); /* Fondo semi-transparente para las tarjetas */
  padding: 10px; /* Espaciado interno */
}

.gallery-item img {
  width: 100%;
  height: auto; /* Mantiene la proporción de la imagen */
  border-radius: 10px;
}

.gallery-item:hover {
  transform: scale(1.03);
  box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.3); /* Sombra blanca para contraste */
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
  max-height: auto; /* 90% del alto de la pantalla */
  background: rgba(0, 0, 0, 0.9); /* Fondo oscuro para el modal */
  border-radius: 10px;
  padding: 10px; /* Espaciado interno */
}

.modal-content img {
  width: auto; /* Mantiene la proporción original */
  height: auto; /* Mantiene la proporción original */
  max-width: 100%; /* Se ajusta al contenedor */
  max-height: 100%; /* Se ajusta al contenedor */
  border-radius: 10px;
}
</style>