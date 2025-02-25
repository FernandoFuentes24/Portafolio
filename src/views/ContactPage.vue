<template>
    <div class="contact ">
      <h2 class="text-center titulo">Contacto</h2>
      <div class="card card-contacto">

        <form>
          <div class="mb-3">
            <label class="form-label">Nombre</label>
            <input type="text" class="form-control" placeholder="Nomnre Apellido">
          </div>
          <div class="mb-3">
            <label class="form-label">Email</label>
            <input type="email" class="form-control" placeholder="ejemplo@gmail.com">
          </div>
          <div class="mb-3">
            <label class="form-label">Mensaje</label>
            <textarea class="form-control" rows="4" placeholder="Escribe tu mensaje"></textarea>
          </div>
          <button type="submit" class="btn btn-primary w-100">Enviar</button>
        </form>
      </div>
    </div>
  </template> 
<style scoped>
.titulo {
  color: white;
  background-color: rgba(5, 0, 0, 0.555);
}
  .contact {
  padding: 1rem;
  height: 90vh;
  width: 100%;
  background-image: url('../assets/image/stars.svg');
  background-color: rgb(0, 0, 0);
  
  }
  .card-contacto {
    max-width: 500px;
    margin: 0 auto;
    padding: 1rem;
    background-color: white;
    border-radius: 0.5rem;
  }
</style>