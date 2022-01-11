
/**
 * Funcion capturar
 * 
*/

function capturar(){
    console.log("Dato Agregado");

    function Alumno(nombreAlumno, direccionAlumno, edadAlumno , gradoAlumno, grupoAlumno, matriculaAlumno, cEsp, cMat, cCie, cDep, cIng, cArt, promedio){
        this.nombreAlumno=nombreAlumno;
        this.direccionAlumno=direccionAlumno;
        this.edadAlumno=edadAlumno;
        this.gradoAlumno=gradoAlumno;
        this.grupoAlumno=grupoAlumno;
        this.matriculaAlumno=matriculaAlumno;
        this.cEsp=cEsp;
        this.cMat=cMat;
        this.cCie=cCie;
        this.cDep=cDep;
        this.cIng=cIng;
        this.cArt=cArt;
        this.promedio=promedio;
    }


    let nombreAlumnoCapturar = document.getElementById("inputNombreAlumno").value;
    console.log("El alumno ingresado es: "+nombreAlumnoCapturar);
    let direccionAlumnoCapturar = document.getElementById("inputDireccionAlumno").value;
    console.log("La direccion ingresada es: "+direccionAlumnoCapturar);
    let edadAlumnoCapturar = document.getElementById("inputEdadAlumno").value;
    console.log("La edad del alumno es: "+edadAlumnoCapturar);
    let gradoAlumnoCapturar = document.getElementById("inputGradoAlumno").value;
    console.log("el grado es: "+gradoAlumnoCapturar);
    let grupoAlumnoCapturar = document.getElementById("selectGrupoAlumno").value;
    console.log("El grupo es : "+grupoAlumnoCapturar);

    let matriculaAlumno = document.getElementById("inputMatriculaAlumno").value ;
    console.log("La matricula: "+matriculaAlumno);
    



    let cEspCapturar = document.getElementById("calEsp").value;
    let cMatCapturar = document.getElementById("calMat").value;
    let cCieCapturar = document.getElementById("calCie").value; 
    let cDepCapturar = document.getElementById("calDep").value;
    let cIngCapturar = document.getElementById("calIng").value;
    let cArtCapturar = document.getElementById("calArt").value;




    //Creando el Objeto
    nuevoAlumno = new Alumno(nombreAlumnoCapturar, direccionAlumnoCapturar, edadAlumnoCapturar, gradoAlumnoCapturar,grupoAlumnoCapturar, matriculaAlumno, cEspCapturar, cMatCapturar, cCieCapturar,cDepCapturar,cIngCapturar,cArtCapturar );
    console.log(nuevoAlumno);

     // Se manda ejecutar la Funcion Agregar();
    agregarATabla();
    crearMatricula(nuevoAlumno.gradoAlumno, nuevoAlumno.nombreAlumno);
    calPromedio(cEsp, cMat,cCie, cDep, cIng,cAr);
}

let baseAlumnos=[];

function agregarATabla(){
    console.log("Soy la funcion agregar");
    baseAlumnos.push(nuevoAlumno);
    console.log(baseAlumnos);


    document.getElementById("tabla").innerHTML += 
    '<tbody><td>' +nuevoAlumno.nombreAlumno +
    '</td><td>'+ nuevoAlumno.direccionAlumno+ 
    '</td><td>' +nuevoAlumno.edadAlumno +
    '</td><td>' + nuevoAlumno.gradoAlumno +
    '</td><td>' + nuevoAlumno.grupoAlumno +
    '</td><td>' + nuevoAlumno.matriculaAlumno +


    '</td><td>'+ nuevoAlumno.cEsp+ 
    '</td><td>' +nuevoAlumno.cMat +
    '</td><td>' + nuevoAlumno.cCie +
    '</td><td>' + nuevoAlumno.cDep +
    '</td><td>' + nuevoAlumno.cIng +
    '</td><td>' + nuevoAlumno.cArt +
    '</td></tbody>';
}


function crearMatricula(grupoAlumno, nombreAlumno){
    
    matriculaGenerada = (nuevoAlumno.grupoAlumno+nuevoAlumno.nombreAlumno);
    console.log("la matricula es "+matriculaGenerada);
    return matriculaGenerada;
    
}

function crear(nombreAlumno){
    let arregloNombre = [];
    arregloNombre = nuevoAlumno.nombreAlumno;
    let longitud = arregloNombre.length();
    console.log("Nombre tiene tantas letras"+longitud);
}

function contar(baseAlumnos){
    let elementos = baseAlumnos.length;
    alert ("Cantidad de Alumnos es: "+elementos);
    console.log ("Cantidad de Alumnos: "+elementos)
}

function calPromedio( cEsp, cMat,cCie, cDep,cIng ,cArt){
    promedio = ((cEsp + cMat + cCie +cDep+ cIng+cArt)/6);
    alert ("El promedio del alumno es: "+Promedio);
    console.log ("El promedio del alumno es: "+Promedio);

}
