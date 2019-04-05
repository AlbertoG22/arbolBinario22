
var arbol = new ArbolBinario();
var botonAdd = document.getElementById("agregar");
botonAdd.addEventListener("click", accion);

function accion(){
    //console.log('sí entró')
    var num = document.getElementById("num").value;
    var nuevo = new Nodo(num);
    arbol.agregar(nuevo);
    console.log(arbol)
}
//-------------------------------------------------------------------------------------
var botonIn = document.getElementById("btnInOrder");
botonIn.addEventListener("click", ordenarIn);

function ordenarIn(){
    //console.log('sí entró')
    document.getElementById("resInOrder").innerHTML = arbol.inOrder();
}
//-------------------------------------------------------------------------------------
var botonPre = document.getElementById("btnPreOrder");
botonPre.addEventListener("click", ordenarPre);

function ordenarPre(){
    document.getElementById("resPreOrder").innerHTML = arbol.preOrder();
}
//-------------------------------------------------------------------------------------
var botonPost = document.getElementById("btnPostOrder");
botonPost.addEventListener("click", ordenarPost);

function ordenarPost(){
    document.getElementById("resPostOrder").innerHTML = arbol.postOrder();
}
//-------------------------------------------------------------------------------------
var botonBus = document.getElementById("buscar");
botonBus.addEventListener("click", search);

function search(){
    //document.getElementById("resBusc").innerHTML = arbol.buscar();
    var dato = document.getElementById("num").value;

    let find = arbol.buscar(dato, arbol.raiz)

    if(find == true){
        document.getElementById("resBusc").innerHTML = "Encontrado"
    }
    else{
        document.getElementById("resBusc").innerHTML = "NO encontrado"
    }
}
