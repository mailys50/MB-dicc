const palabra = document.getElementById("palabra");
const buttomEnv = document.getElementById("buscar");
const resp = document.getElementById("root");

const data = [{
    "id": "",
    "key":"Api",
    "values": "interfaz de programación de aplicaciones: es un conjunto de reglas que va a definir como se comunican dos aplicaciones entre si"
    
},
{
    "id": "2",
    "key":"Express",
    "values": "jornada"
    
},
{
    "id": "3",
    "key":"coerción de tipo",
    "values": "cuando un operador es aplicado al tipo incorrecto de valor, javascript convertirá silenciosamente el valor en el tipo de dato que esperas"
},
]


const buscar = () =>{
    const result = data.filter(resultado =>{
       if (resultado.key == palabra.value) {
         return resultado.values  
       } 
        
     });
    return newFunction();

    function newFunction() {
        const valor = result.filter(descrip => resp.innerHTML= palabra.value+"=" + "" + descrip.values);
       
        return valor;
    }
    
}
buttomEnv.addEventListener("click", buscar);
document.write(buscar())
// var input = [{key:"key1", value:"value1"},{key:"key2", value:"value2"}];

// var result = {};

// for(var i = 0; i < input.length; i++)
// {
//     result[input[i].key] = input[i].value;
// }

// console.log(result); // Just for testing





// example dict/json var iterateDict = {'record_identifier': {'content':'Some content','title':'Title of my Record'}, 'record_identifier_2': {'content':'Some different content','title':'Title of my another Record'} }; var array = []; // key to reduce the 'record' to var reduceKey = 'title'; for(key in iterateDict) // ultra-safe variable checking... if(iterateDict[key] !== undefined && iterateDict[key][reduceKey] !== undefined) // build element to new array key array[key]=iterateDict[key][reduceKey];

//SFuente: https://www.iteramos.com/pregunta/81025/como-crear-un-diccionario-y-anadir-pares-de-valores-clave-dinamicamente-en-javascript