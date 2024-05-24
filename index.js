//Script para cerrar sesion / eliminar datos del localstorage
  const logout = document.querySelector("#logout");
  logout.addEventListener("click",() =>{
      alert("cerro sesion.")
      window.location.href = './src/components/singIn'
  })