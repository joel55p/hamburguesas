


function calcular(){
    tipo= document.querySelector("#tipo").value;
    cantidad= parseInt(document.querySelector("#cantidad").value);
    tarjeta= document.querySelector("#tarjeta").value;
    let pago= 0;


    if (tipo== "Sencilla") {
        if (tarjeta=="Si"){
            pago = 51* cantidad +(51*cantidad*0.05)
        }else{
            pago= 51*cantidad
        }
    }else if(tipo=="Doble"){
        if(tarjeta=="Si"){
            pago= 58*cantidad +(58*cantidad*0.05)
        }else{
            pago=58*cantidad
        }
    }else if(tipo=="Triple"){
        if(tarjeta=="Si"){
            pago= 64*cantidad+(64*cantidad*0.05)

        }else{
            pago= 64*cantidad
        }
    }


    document.querySelector("#resultado").innerHTML= `El resultado es ${pago}`;
}


document.querySelector("button").addEventListener("click", calcular);

// si pongo () llama a la función de una vez