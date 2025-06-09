document.addEventListener("DOMContentLoaded", function() {
  const btnCategorias = document.getElementById("btn-categorias");
  const listaCategorias = document.getElementById("lista-categorias");

  btnCategorias.addEventListener("click", function() {
    listaCategorias.classList.toggle("mostrar");
  });

  document.addEventListener("click", function(event) {
    if (!btnCategorias.contains(event.target) && !listaCategorias.contains(event.target)) {
      listaCategorias.classList.remove("mostrar");
    }
  });
});
