class Nodo {
    constructor(dato){
        this.dato=dato;
        this.hizq=null;
        this.hder=null;
    }
    set Dato(valor){
        this.dato=valor;
    }
    set Hizq(valor){
        this.hizq=valor;
    }
    set Hder(valor){
        this.hder=valor;
    }
    get Dato(){
        return this.dato;
    }
    get Hizq(){
        return this.hizq;
    }
    get Hder(){
        return this.hder;
    }
}


class ArbolBinario {
    constructor(){
        this.raiz=null;
    }
    agregar(nuevo){
        if(this.raiz==null){
            this.raiz=nuevo;
        }
        else{
            this.agregate(nuevo, this.raiz);
        }
    }
    agregate(n, r){
        if(n.Dato < r.Dato){
            if(r.Hizq==null){
                r.Hizq=n;
            }
            else{
                this.agregate(n, r.Hizq);
            }
        }
        else{
            if(r.Hder==null){
                r.Hder=n;
            }
            else{
                this.agregate(n, r.Hder);
            }
        }
    }
    inOrder(){
        if(this.raiz==null){
            return "";
        }
        else{
            return this.inO(this.raiz);
        }
    }
    inO(r){
        var c="";
        if(r.Hizq != null){
            c+=this.inO(r.Hizq) + " "
        }
        c+=r.Dato;
        if(r.Hder != null){
            c += " " + this.inO(r.Hder);
        }
        return c;
    }
    preOrder(){
        if(this.raiz==null){
            return "";
        }
        else{
            return this.preO(this.raiz);
        }
    }
    preO(r){
        var d="";
        d+=r.Dato;
        if(r.Hizq != null){
            d+= " " + this.preO(r.Hizq);
        }
        if(r.Hder != null){
            d +=this.inO(r.Hder) + " ";
        }
        return d;
    }
    postOrder(){
        if(this.raiz==null){
            return "";
        }
        else{
            return this.postO(this.raiz);
        }
    }
    postO(r){
        var e="";
        
        if(r.Hizq != null){
            e+=this.postO(r.Hizq) + " ";
        }
        if(r.Hder != null){
            e +=" " + this.postO(r.Hder);
        }
        e+=r.Dato;
        return e;
    }
    buscar(dato, raiz){
        if(dato==raiz.dato){
            return true;
        }
        else{
            if(raiz.Hizq != null){
                if(this.buscar(dato, raiz.Hizq)){
                    return true;
                }
            }
            if(raiz.Hder != null){
                if(this.buscar(dato, raiz.Hder)){
                    return true;
                }
            }
        }
        return false;
    }

}

