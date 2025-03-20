function formatText(command) {
    document.execCommand(command, false, null);
}

function changeFontSize() {
    const fontSize = document.getElementById("fontSize").value;
    document.execCommand("fontSize", false, fontSize); // Cambia el tamaño de la fuente
}

function changeTextColor() {
    const color = document.getElementById("colorPicker").value;
    document.execCommand("foreColor", false, color); // Cambia el color del texto
}

function changeFontFamily() {
    const fontFamily = document.getElementById("fontFamily").value;
    document.execCommand("fontName", false, fontFamily); // Cambia la fuente de letra
}

function findAndReplace() {
    const searchText = document.getElementById("searchText").value;
    const replaceText = document.getElementById("replaceText").value;
    const textArea = document.getElementById("textArea");

    if (!searchText) {
        alert("Por favor, ingresa una palabra para buscar.");
        return;
    }

    // Reemplazar todas las coincidencias
    const content = textArea.innerHTML;
    const newContent = content.replace(new RegExp(searchText, "g"), replaceText);
    textArea.innerHTML = newContent;
}