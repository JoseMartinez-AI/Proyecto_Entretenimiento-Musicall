// Espera a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function () {
// Busca el elemento <canvas> con id "miGrafico" y obtiene su contexto 2D  
const ctx = document.getElementById('miGrafico').getContext('2d');       // Este contexto permite dibujar en el canvas  
//const labelsX = ['Red Hot Chilli Pepers', 'Limp Bizkit', 'Papa Roach']   // Etiquetas que aparecerán en el eje X (horizontal) 


const labels = ['Red Hot Chilli Pepers', 'Limp Bizkit', 'Papa Roach'];
const data = {
  labels: labels,
  datasets: [{
    label: 'Mis bandas',
    data: [65,59,47],
    backgroundColor: [
      '#f0361c',
      '#f46848',
      '#f89a75',     
    ],
    borderColor: [
      '#f0361c',
      '#f46848',
      '#f89a75',
    ],
    borderWidth: 0
  }]
};


const config = new Chart(ctx,{
  type: 'bar',
  data: data,
  options: {

    plugins: {
        title: {
            display: true,
            text: 'Votaciones de la semana'
        },
        legend: {
                display: false               
        }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  },
});


});
