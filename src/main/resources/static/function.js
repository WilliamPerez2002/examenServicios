//server.port=4444
$(document).ready(function () {
        $('#btnBuscar').click(function(e) {
        console.log("Aqui estoy")
            LoadUserById($('#ced').val());
        });


    LoadUser();
    $("#addUserForm").submit(function(event){
        event.preventDefault(); // Evitar la recarga de la página
        $.ajax({
            type: "POST",
            url: "http://localhost:8080/rest/save", // Ruta para insertar un estudiante
            dataType: "json",
            contentType: 'application/json',
            data: JSON.stringify({
                "CEDULA": $('#Cedula').val(),
                "nom_EST": $('#Nombre').val(),
                "ape_EST": $('#Apellido').val(),
                "dir_EST": $('#Direccion').val(),
                "tel_EST": $('#Telefono').val()
            }),
            success: function(response) {
                LoadUser(); // Actualizar la tabla después de agregar un estudiante
            }
        });
    });

    $("#aditUserForm").submit(function(event){
        event.preventDefault(); // Evitar la recarga de la página
        $.ajax({
            type: "PUT",
            url: "http://localhost:8080/rest/edit/"+$('#edCedula').val(), // Ruta para editar un estudiante
            dataType: "json",
            contentType: 'application/json',
            data: JSON.stringify({
                "nom_EST": $('#edNombre').val(),
                "ape_EST": $('#edApellido').val(),
                "dir_EST": $('#edDireccion').val(),
                "tel_EST": $('#edTelefono').val()
            }),
            success: function(response) {
                LoadUser(); // Actualizar la tabla después de editar un estudiante
            }
        });
    });
    $("#tblUser tbody").on('click', '.btnEdit', function(){
        var currentRow = $(this).closest("tr");

        $('#edCedula').val(currentRow.find("td:eq(0)").text());
        $('#edNombre').val(currentRow.find("td:eq(1)").text());
        $('#edApellido').val(currentRow.find("td:eq(2)").text());
        $('#edDireccion').val(currentRow.find("td:eq(3)").text());
        $('#edTelefono').val(currentRow.find("td:eq(4)").text());
    });
    $("#tblUser").on('click', '.btnDelete', function(){
        var currentRow = $(this).closest("tr");
        var cedula = currentRow.find("td:eq(0)").text();
        $.ajax({
            url: "http://localhost:8080/rest/delete/" + cedula, // Ruta para eliminar un estudiante
            type: "DELETE",
            success: function(){
                LoadUser(); // Actualizar la tabla después de eliminar un estudiante
            }
        });
    });
});
function LoadUser() {
    $.ajax({
        url: "http://localhost:8080/rest/all",
        type: "GET",
        dataType: "json",
        success: function (data) {
            var btnEdit = "<button type='button' class='btn btn-primary btnEdit' data-bs-toggle='modal' data-bs-target='#aditUser'>Editar</button>";
            var btnDelete = "<button type='button' class='btn btn-danger btnDelete' data-bs-toggle='modal' data-bs-target='deleteUserModal'>Eliminar</button>";
            let htmlTable = "";
            for (let i = 0; i < data.length; i++) {
                htmlTable += "<tr>" +
                    "<td>" + data[i].cedula + "</td>" +
                    "<td>" + data[i].nom_EST + "</td>" +
                    "<td>" + data[i].ape_EST + "</td>" +
                    "<td>" + data[i].dir_EST + "</td>" +
                    "<td>" + data[i].tel_EST + "</td>" +
                    "<td>" + btnEdit + "</td>" +
                    "<td>" + btnDelete + "</td>" +
                    "</tr>";
            }
            $("#tblUser tbody").html(htmlTable);
        },
        error: function (data) {
            alert("Error");
        }
    });
}


function LoadUserById(cedula) {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/rest/all/" + cedula,
        dataType: "json",
        success: function (data) {
        console.log(data)
            var btnEdit = "<button type='button' class='btn btn-primary btnEdit' data-bs-toggle='modal' data-bs-target='#aditUser'>Editar</button>";
            var btnDelete = "<button type='button' class='btn btn-danger btnDelete' data-bs-toggle='modal' data-bs-target='deleteUserModal'>Eliminar</button>";
            let htmlTable = "";
            for (let i = 0; i < data.length; i++) {
                htmlTable += "<tr>" +
                    "<td>" + data[i].cedula + "</td>" +
                    "<td>" + data[i].nom_EST + "</td>" +
                    "<td>" + data[i].ape_EST + "</td>" +
                    "<td>" + data[i].dir_EST + "</td>" +
                    "<td>" + data[i].tel_EST + "</td>" +
                    "<td>" + btnEdit + "</td>" +
                    "<td>" + btnDelete + "</td>" +
                    "</tr>";
            }
            $("#tblUser tbody").html(htmlTable);
        },
        error: function (data) {
            alert("Error");
        }
    });
}
