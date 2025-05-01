function buscar(){
    let search = document.getElementById('search').value;
    alert("buscaste: "+search)
}

function execute(){
    let codigo = document.getElementById("console").value;
    eval(codigo);
}

function resaltar() {
    let input = document.getElementById('console').value;
    
    // Resaltar el texto dentro de las comillas dobles
    let highlighted = input.replace(/"([^"]*)"/g, (match, p1) => {
      return `<span class="green">"${p1}"</span>`;
    });

    // Resaltar las palabras clave
    let alerts = highlighted.replace(/(alert)/g, '<span class="alert">$1</span>');
    let lets = alerts.replace(/(let)/g, '<span class="let">$1</span>');
    let prompts = lets.replace(/(prompt)/g, '<span class="prompt">$1</span>');
    let parseInts = prompts.replace(/(parseInt)/g, '<span class="parseInt">$1</span>');
    let ifs = parseInts.replace(/(if)/g, '<span class="if">$1</span>');
    let elses = ifs.replace(/(else)/g, '<span class="else">$1</span>');

    // Mostrar el código resaltado
    document.getElementById("codificador").innerHTML = elses;
  }

  document.getElementById('console').addEventListener('input', function(event) {
    let input = document.getElementById('console').value;

    // Verifica si la última tecla presionada fue una comilla
    if (event.inputType === 'insertText' && event.data === '"') {
        // Duplica la comilla
        document.getElementById('console').value = input + '"';
    }

    // Verifica si la última tecla presionada fue un paréntesis izquierdo '('
    if (event.inputType === 'insertText' && event.data === '(') {
        // Duplica el paréntesis izquierdo
        document.getElementById('console').value = input + ')';
    }
});
!!

// Escuchar el evento de entrada en el textarea para actualizar el div 'codificador'
document.getElementById("console").addEventListener("input", resaltar);
