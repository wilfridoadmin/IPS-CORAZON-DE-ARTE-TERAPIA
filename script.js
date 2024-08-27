// Usuarios predeterminados
const users = {
    'admin': '221099',
    'psicologa': 'michell2210'
};

// Función de login
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (users[username] && users[username] === password) {
        document.getElementById('login-page').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
    } else {
        alert('Credenciales incorrectas');
    }
}

// Función para agregar pacientes
function addPatient() {
    const id = document.getElementById('patient-id').value;
    const name = document.getElementById('patient-name').value;
    const age = document.getElementById('age').value;
    const admissionDate = document.getElementById('admission-date').value;
    const observations = document.getElementById('observations').value;
    const documents = document.getElementById('documents').files[0];

    if (id && name && age && admissionDate) {
        const table = document.getElementById('patient-list').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();

        newRow.insertCell(0).textContent = id;
        newRow.insertCell(1).textContent = name;
        newRow.insertCell(2).textContent = age;
        newRow.insertCell(3).textContent = admissionDate;
        newRow.insertCell(4).textContent = observations;
        newRow.insertCell(5).textContent = documents ? documents.name : 'No hay documento';
        const actionsCell = newRow.insertCell(6);
        actionsCell.innerHTML = '<button onclick="deletePatient(this)">Eliminar</button>';

        // Limpiar formulario
        document.getElementById('add-patient-form').reset();
    } else {
        alert('Por favor complete todos los campos requeridos.');
    }
}

// Función para eliminar pacientes
function deletePatient(button) {
    const row = button.parentElement.parentElement;
    row.parentElement.removeChild(row);
}

// Función para imprimir listado
function printList() {
    const printWindow = window.open('', '', 'height=600,width=800');
    const table = document.getElementById('patient-list').outerHTML;
    const date = new Date().toLocaleDateString();
    printWindow.document.write('<html><head><title>Listado de Pacientes</title>');
    printWindow.document.write('</head><body>');
    printWindow.document.write('<h1>IPS CORAZÓN DE ARTE TERAPIA</h1>');
    printWindow.document.write('<p>Fecha: ' + date + '</p>');
    
    // Agregar detalles de cada paciente
    const rows = document.getElementById('patient-list').getElementsByTagName('tbody')[0].rows;
    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].cells;
        printWindow.document.write('<h2>Paciente ' + (i + 1) + '</h2>');
        printWindow.document.write('<p><strong>Nombre:</strong> ' + cells[1].textContent + '</p>');
        printWindow.document.write('<p><strong>Edad:</strong> ' + cells[2].textContent + '</p>');
        printWindow.document.write('<p><strong>Fecha de Ingreso:</strong> ' + cells[3].textContent + '</p>');
        printWindow.document.write('<p><strong>Observaciones:</strong> ' + cells[4].textContent + '</p>');
        printWindow.document.write('<p><strong>Documento:</strong> ' + cells[5].textContent + '</p>');
        printWindow.document.write('<hr>');
    }
    
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
}

// Función para guardar listado (para este ejemplo solo muestra un mensaje)
function saveList() {
    alert('La funcionalidad de guardar está implementada como un ejemplo y no guarda realmente los datos.');
}
