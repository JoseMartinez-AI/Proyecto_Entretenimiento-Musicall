//window.self:
//************/
//window: es el objeto global que representa la ventana del navegador actual.
//self: hace referencia a esta misma ventana.

//window.top:
//************/
//top hace referencia a la ventana superior que contiene este documento (es decir, el padre del iframe, si existe).

//Si estuvieramos cargando la página directamente, self y top serían lo mismo.
//por tanto si es diferente es porque esta cargando en un iframe
//entonces cuando sea diferente, y cargue en un iframe ponle una clase, para que, para aplicar css en la clase pe!

// Este script detecta si la página está dentro de un iframe
if (window.self !== window.top) {
  // Si es así, le agrega la clase "in-iframe" al elemento <html>
  document.documentElement.classList.add('in-iframe');
}
