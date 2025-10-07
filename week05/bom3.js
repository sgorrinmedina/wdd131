// 1. Declarar las variables una sola vez al principio del script.
// Esto hace referencia a los elementos principales de nuestro HTML.
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list'); // Corregido: Se usa el selector de ID '#list'

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});




function displayList(item) {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = item; // note the use of the displayList parameter 'item'
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete'); // this references the CSS rule .delete{width:fit-content;} to size the delete button
    li.append(deletebutton);
    list.append(li);
    deletebutton.addEventListener('click', function () {
      list.removeChild(li);
      deleteChapter(li.textContent); // note this new function that is needed to remove the chapter from the array and localStorage.
      input.focus(); // set the focus back to the input
    });
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}


// 2. Crear un solo event listener para el botón "Add Chapter".
button.addEventListener('click', function() {
    // 3. Verificar que el campo de entrada no esté vacío.
    // .trim() elimina espacios en blanco al inicio y al final.
    if (input.value.trim() !== '') {
        // Si no está vacío, procedemos a crear los elementos.
        displayList(input.value);
        chaptersArray.push(input.value);  // add the chapter to the array
        setChapterList(); // update the localStorage with the new array
        input.value = ''; // clear the input
        input.focus(); // set the focus back to the input
      }


      function getChapterList() {
        return JSON.parse(localStorage.getItem('myFavBOMList'));
      }

      function deleteChapter(chapter) {
        chapter = chapter.slice(0, chapter.length – 1);
        chaptersArray = chaptersArray.filter((item) => item !== chapter); 
        setChapterList();
      }
      

        // 4. Crear los nuevos elementos HTML para la lista.
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        // 5. Poblar los elementos con el contenido deseado.
        li.textContent = input.value; // El texto del 'li' es el valor del input.
        deleteButton.textContent = '❌'; // El botón de borrar contiene una 'X'.

        // Se añade un aria-label para accesibilidad, como sugiere la guía.
        deleteButton.setAttribute('aria-label', `Remove ${input.value}`);

        // 6. Añadir el botón de borrar como hijo del elemento de lista.
        li.append(deleteButton);

        // 7. Añadir el nuevo elemento de lista (con su botón) a la lista 'ul'.
        list.append(li);

        // 8. Añadir el evento de borrado AL BOTÓN QUE ACABAMOS DE CREAR.
        deleteButton.addEventListener('click', function() {
            list.removeChild(li); // Elimina este 'li' específico de la lista 'ul'.
            input.focus(); // Devuelve el foco al campo de entrada.
        });

        // 9. Limpiar el campo de entrada para el siguiente capítulo.
        input.value = '';


