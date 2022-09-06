

const textArea1 = document.querySelector(".text-area")
const textArea2 = document.querySelector(".area-mensaje-encrip")

function mostrarPantallaEncriptar(){
    //Var para almacenar el texto ingresado por usuario
    const textonEcriptado = encriptar(textArea1.value)

    //Enviamos el texto ingresado al segundo cuadro de texto
    textArea2.value = textonEcriptado;
    textArea1.value = ""

    

    document.getElementById('vista-encriptada').style.display = 'block';
    document.getElementById('vista-sin-encriptar').style.display = 'none';
}


function encriptar(stringEncriptado){
    //Reglas
    let matrizCodigo = [["e","enter"], ["i","imes"],["a","ai"],["o", "ober"],["u", "ufat"]];

    //Validar que solo sea minuscula
     stringEncriptado = stringEncriptado.toLowerCase();

    //Reemplazo de letras
    //Bucle que recorre todo el mensaje que se debe encriptar
    for(let i = 0; i < matrizCodigo.length; i++){
        //Evaluamos si el mensaje posee las letras que debemos reemplazar
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
            i++;
        }
    }
    return stringEncriptado;

}

//DESENCRIPTAR
function mostrarPantallaDesencriptar(){
    const textoEncriptado = desencriptar(textArea1.value)
    textArea2.value = textoEncriptado
    textArea1.value =""
}

function desencriptar(stringDesencriptada){
    //Reglas
    let matrizCodigo = [["e","enter"], ["i","imes"],["a","ai"],["o", "ober"],["u", "ufat"]];

    //Solo minusculas
    stringDesencriptada = stringDesencriptada.toLowerCase();

    //Bucle para recorrer el mensaje que se debe desencriptar
    for(let i =0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return stringDesencriptada;
}

//BOTON COPIAR

function copiar(){
    textArea2.select()
    navigator.clipboard.writeText(textArea2.value)
    textArea2.value = ""
    alert("El texto ha sido copiado")
}