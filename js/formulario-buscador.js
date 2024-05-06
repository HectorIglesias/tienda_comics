
const value = document.querySelector("#buscador_form_value");
const input = document.querySelector("#precio");
value.textContent = input.value;
input.addEventListener("input", (event) => {
  value.textContent = event.target.value;
});


function cambiar_pagina(pagina){
  let id= "pagina-"+pagina;
  let pagina_1 = 0;
  let pagina_2 = 0; 
  let pagina_3 = 0;
  if(document.getElementById("pagina-1")){
    pagina_1 = document.getElementById("pagina-1")
  }
  if(document.getElementById("pagina-2")){
    pagina_2 = document.getElementById("pagina-2")
  }
  if(document.getElementById("pagina-3")){
    pagina_3 = document.getElementById("pagina-1")
  }

  if(pagina == 1){
    if(pagina_2 != 0){
      pagina_2.style.display = "none";
    }
    if(pagina_3 != 0){
      pagina_3.style.display = "none";
    }
    pagina_1.style.display = "flex";
  }
  else if(pagina == 2){
    if(pagina_1 != 0){
      pagina_1.style.display = "none";
    }
    if(pagina_3 != 0){
      pagina_3.style.display = "none";
    }
    pagina_2.style.display = "flex";
  }
  else if(pagina == 3){
    if(pagina_1 != 0){
      pagina_1.style.display = "none";
    }
    if(pagina_2 != 0){
      pagina_2.style.display = "none";
    }
   pagina_3.style.display = "flex";
  }
}

