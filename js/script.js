/**
 * Funcion para calcular el promedio de un grupo de numeros ingresados por el usuario
 */
function calcularPromedio(){
    let promedio = 0;
    let contador = 0;
    let dato = "";
    while(true){
        dato = prompt(`Ingrese un numero y presiones ACEPTAR, luego ingrese un nuevo valor numerico.\nPara terminar de cargar datos ingrese "X"`);
        if(dato === "X" || dato === "x"){
            break; /*Se finalizo la carga de datos*/
        }
        dato = parseFloat(dato);
        if(isNaN(dato)){
            alert("Usted ha ingresado un valor NO numerico");
        } else{
            promedio += dato;
            contador += 1;
        }
    }
    if (contador == 0){
        alert("No se puede calcular el promedio sin datos");
    } else{
        alert(`El promedio es: ${promedio/contador}`);
    }
}

/**
 * Escribe el parametro en consola.
 * @param {*} imprimir - Parametro para imprimir en consola
 * @returns {void}
*/
const imprimirEnConsola = imprimir => {console.log(imprimir)};

/**
 * Calcula el discriminante de un polinomio cuadratico o tambien llamado de grado 2
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {number}
 */
const discriminante = (a,b,c) => (b**2) - (4*a*c);

/**
 * Calcula las raices reales distintas de un polinomio de grados 2
 * @param {number} a constante cuadratico del polinomio
 * @param {number} b constante lineal del polinomio
 * @param {number} disc discriminante del polinomio
 * @returns {string}
 */
function raicesRealesDistintas(a,b,disc){
    let x1 = (-b+disc**0.5)/(2*a);
    let x2 = (-b-disc**0.5)/(2*a);
    return `x1 = ${x1} ; x2 = ${x2}`;
}

/**
 * Calcula las raices repetidas de un polinomio de grados 2
 * @param {number} a constante cuadratico del polinomio
 * @param {number} b constante lineal del polinomio
 * @returns {string}
 */
function raicesRealesRepetidas(a,b){
    let raiz = -b/(2*a);
    return `x1 = ${raiz} ; x2 = ${raiz}`;
}

/**
 * Calcula las raices complejas de un polinomio de grados 2
 * @param {number} a constante cuadratico del polinomio
 * @param {number} b constante lineal del polinomio
 * @param {number} disc discriminante del polinomio
 * @returns {string}
 */
function raicesComplejas(a,b,disc){
    let primerTermino = -b / (2 * a);
    let segundoTermino = ((-disc) ** 0.5) / (2 * a);
    let resultado = `x1 = ${primerTermino} + ${segundoTermino}i ; x2 = ${primerTermino} - ${segundoTermino}i`;
    if(primerTermino == 0){
        resultado = `x1 = ${segundoTermino}i ; x2 = -${segundoTermino}i`
    }
    return resultado
}

/**
 * Determina el tipo de raices y las calcula
 * @param {number} a - Constante a del polinomio cuadrático.
 * @param {number} b - Constante b del polinomio cuadrático.
 * @param {number} c - Constante c del polinomio cuadrático.
 * @returns {string}
 */
function calcularResolvente(a,b,c){
    let mensajeSalida = "";
    let disc = discriminante(a,b,c);
    if (disc > 0 ){
        mensajeSalida = `Raices reales y distintas: ${raicesRealesDistintas(a,b,disc)}`;
    } else if (disc === 0){
        mensajeSalida = `Raices reales e iguales: ${raicesRealesRepetidas(a,b)}`;
    } else {
        mensajeSalida = `Raices Complejas: ${raicesComplejas(a,b,disc)}`;
    }
    return mensajeSalida;
}

/**
 * Validacion que la constante ingresada de un polinomio sea un numero
 * @param {*} dato Valor ingresado por el usuario
 * @param {string} constante Constante a mostrar
 * @returns {number}
 */
const validacionDeConstante = (dato,constante) =>{
    while(isNaN(dato)) {
        dato = parseFloat(prompt(`Ingrese la constante ${constante} del polinomio de grado 2 con forma ax^2+bx+c`));
        if(isNaN(dato)){
            alert(`La constante ${constante} debe ser un numero. Vuelva a ingresarla.`)
        }
    }
    return dato;
}

/**
 * Lee los datos ingresados por el usuario de un polinomio de grado 2 y muestra el resultado
 */
function poliCuadratico(){
    let a,b,c = NaN;
    a = validacionDeConstante(a,"a");
    b = validacionDeConstante(b,"b");
    c = validacionDeConstante(c,"c");
    alert(calcularResolvente(a,b,c));
}

/**
 * MAIN
 */

const mensajePrincipal = "Selecciones una opcion:\n 1. Resolver una ecuacion cuadratica.\n 2. Obtener un promedio.\n X. Finalizar";
const principal = () => {
    let ejecucion  =  true;
    while (ejecucion){
        let opcion = prompt(mensajePrincipal);
        switch (opcion){
            case "1":
                poliCuadratico();
                break;
            case "2":
                calcularPromedio();
                break;
            case "x":
                ejecucion = false;
                break;
            case "X":
                ejecucion = false;
                break;
            default:
                alert("Opcion ingresada NO valida");
                break;

        }
    }
}

/*EJECUCION*/
principal();




