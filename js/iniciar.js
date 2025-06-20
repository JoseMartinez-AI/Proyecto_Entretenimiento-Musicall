document.addEventListener('DOMContentLoaded', function () { 
    
  // Carrusel
  let elemcr = document.querySelector('.carousel');
  let optioncr={fullWidth: true, indicators: false, padding: 40, dist: -130 };

  //Internamente convierte el valor de elemcr a un valor lógico (esto se llama truthy o falsy).
  //Si elemcr contiene un elemento HTML, es un valor truthy, entonces el if se ejecuta.
  //Si elemcr es null (porque no encontró nada), es un valor falsy entonces el if no se ejecuta.
  //Podríamos que sería un equivalente de usar elemcr !== null
  if (elemcr) {

    let instancecr = M.Carousel.init(elemcr,optioncr);
    if(instancecr){
      setInterval(function () {
        instancecr.next();
      }, 2500);
    }

  };
  

  // Dropdown
 
  let elemdd = document.querySelectorAll('.dropdown-trigger');
  let optiondd = { alignment: 'left',hover: true, coverTrigger: false, constrainWidth: false };
  let instancesdd = M.Dropdown.init(elemdd,optiondd);


 // Collapsible
  let elemclp = document.querySelectorAll('.collapsible.popout');
  let optionclp ={accordion: false};
  let instancesclp = M.Collapsible.init(elemclp, optionclp);


  // titulo que se debe desplazar   
  let tituloDesplazar = " ¡¡¡Bienvenido a CringeMusic: Lo que no suena en la radio, pero vive en tu cabeza!!! ";
  // funcion que hace que el titulo se mueva
  function moverTitulo() {
  // quita la primer letra y la pone al final
    let primeraLetra = tituloDesplazar.charAt(0);
    let resto = tituloDesplazar.substring(1);
    tituloDesplazar = resto + primeraLetra;
      //cambia el titulo del documento
      document.title = tituloDesplazar;
  }
  // cada 150 milisegundos llama a la funcion moverTitulo
  setInterval(moverTitulo, 150);



//Ajustar altura para que el iframe soporte más tamaño por si solo consideramos imagenes grandes
function ajustarAlturaIframe() {
    const iframe = document.getElementById('indexIframe'); // Busca el iframe en el documento por su ID
    if (!iframe) {
        return; // Si no existe, termina la función con return
    }
    try {
        //iframe.contentDocument si estás desarrollando para navegadores modernos,ingreso directo al documento (al archivo HTML).
        //iframe.contentDocument || iframe.contentWindow.document si quieres máxima compatibilidad con navegadores antiguos.
        const contenido = iframe.contentDocument || iframe.contentWindow.document; // Accede al contenido del iframe (página interna)
        if (!contenido){ 
            return; // Si no puede acceder al contenido, termina
        }
        const images = contenido.images; // Obtiene todas las imágenes dentro del iframe y las guarda en un HTMLcollection (lista)
        let loadedCount = 0; // Contador de imágenes cargadas
        if (images.length === 0) { // Si no hay imágenes, ajusta de inmediato, usamos === para igualar hasta el tipo, es una condición estricta
            iframe.style.height = '0px'; //reset de altura
            iframe.style.height = contenido.body.scrollHeight + 'px';
            return;
        }

        for (let img of images) { // Recorre todas las imágenes usando un iterador ya que tenemos una lista(HTMLcollection)
            if (img.complete) { // complete es una propiedad booleana de la api de javascript y la usamos para ver si la imagen ya cargó
                loadedCount++; // Aumenta el contador
            } else {
                // Espera que cargue o falle se va a poner a cargar, ta de adorno porque la imagen debería ser inmensamente grande 
                img.onload = img.onerror = () => { 
                    loadedCount++; // Aumenta el contador cuando termine
                    if (loadedCount === images.length) { // Si ya cargaron todas
                        iframe.style.height = '0px'; //reset de altura
                        iframe.style.height = contenido.body.scrollHeight + 'px'; // Ajusta altura
                    }
                };
            }
        }
        if (loadedCount === images.length) { // Si ya estaban todas cargadas desde antes
            iframe.style.height = '0px'; //reset de altura
            iframe.style.height = contenido.body.scrollHeight + 'px'; // Ajusta altura
        }
    } catch (e) {
        console.warn("No se puede acceder al contenido del iframe: ", e); // Si ocurre un error (como política de seguridad), lo muestra en consola
    }
}

const iframe = document.getElementById('indexIframe'); // Busca nuevamente el iframe
if (iframe) {
    iframe.addEventListener('load', function () { // Espera que se cargue una página dentro del iframe
        setTimeout(ajustarAlturaIframe, 100); // Espera 100ms y luego ajusta altura
    });
}

});