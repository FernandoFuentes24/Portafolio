<template>
   <div class="home">
      <h1>Fernando Fuentes</h1>
      <h2>Junior Web Developer</h2>
      <p>LARAVEL | .NET CORE | .NET MAUI | MYSQL | BOOTSTRAP | VUE JS </p>
    
    <!--Logos-->
    <div class="logos">
      <img src="../assets/image/Linkedln.png" alt="Logo 1" class="logo">
      <img src="../assets/image/Github.png" alt="Logo 2" class="logo">
    </div>
    
      <hr color="white" size="8" width="290"><br>

      <!--Botones-->
      <div class="buttons-container">
      <button type="button" class="btn btn-secondary">Proyectos</button>
      <button type="button" class="btn btn-secondary">Contacto</button>
  </div>
</div>
</template>

<style scoped>

.home {
  display:  flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 5rem;
  height: 90vh;
  width: 100%;
  background-image: url('../assets/image/stars.svg');
  background-color: rgb(0, 0, 0);
}

.home h1 {
  font-size: 4rem;
  font-family: 'Roboto', sans-serif;
  color: #3ff3f3;
}

.home h2 {
  font-size: 2rem;
 
  font-family: 'Roboto', sans-serif;
  color: #ffffff;
}

.home p {
  font-size: 1.2rem;
  font-family: 'Roboto', sans-serif;
  color: #ffffff;
}
.buttons-container{
  display: flex;
  gap: 1rem;
}
 .logo{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
 }
 .buttons-container{
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
 }
</style>