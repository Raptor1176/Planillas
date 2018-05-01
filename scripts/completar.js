function completar(IDanchor){    
    // no voy a hacer este socotroco 2 veces   
    function crearCabecera(ID, nodoTitulo){
        cabecera= document.createElement("div");
        cabecera.setAttribute("class", "card-header");
        cabeceraB= document.createElement("button");
        cabeceraB.setAttribute("id", ID+"1");
        cabeceraB.setAttribute("class", "btn btn-link");
        cabeceraB.setAttribute("data-toggle", "collapse");
        cabeceraB.setAttribute("data-target", "#"+ID+"2");
        cabeceraB.setAttribute("aria-expanded","true");
        cabeceraB.setAttribute("aria-controls", "name");
        cabeceraB.appendChild(nodoTitulo);
        cabecera.appendChild(cabeceraB);
        return cabecera;        
    }
    // ni este
    function crearCuerpo(ID, nodoContenido, anchor){
        cuerpo= document.createElement("div");    
        cuerpo.setAttribute("id", ID+"2");
        cuerpo.setAttribute("class","collapse");
        cuerpo.setAttribute("aria-labelledby",ID+"1");
        cuerpo.setAttribute("data-parent","#"+ anchor);
        cuerpo.appendChild(nodoContenido);
        return cuerpo;
    }
    
    datos= JSON.parse('{"player": "Raptor","name"  : "Raptor","description": {"gender": "male","age": 30,"peso": 60,"altura": 1.87,"eyes": "black","hair": "black","origin": ""},"rekt": {}}');
    
    //Imagen lateral
    lateral= document.createElement("div");
    lateral.setAttribute("class","col-4 card d-none d-sm-none d-md-block");    
    lateral.appendChild(document.createElement("img"));
    lateral.firstChild.src="./imagenes/fullbody.jpg";        
    
    tabla= document.createElement("div");
    tabla.setAttribute("class","col-8 card");
    tabla.appendChild(document.createTextNode("paneles"));
    
    aux= document.createElement("div");
    aux.setAttribute("class", "row");
    
    for (i=0; i<2; i++){
        p= document.createElement("div");
        p.setAttribute("class", "card col-6");
        p.appendChild(crearCabecera("panel"+i,document.createTextNode("Panel "+i)));
        p.appendChild(crearCuerpo("panel"+i, document.createTextNode("contenido"), "panel"+i));
        aux.appendChild(p);
    }
    tabla.appendChild(aux);
    
    aux= document.createElement("div");
    aux.setAttribute("class", "row");
    tabla.appendChild(document.createTextNode("paneles 2"));
    
    for (i=0; i<4; i++){
        p= document.createElement("div");
        p.setAttribute("class", "card col-3");
        p.appendChild(crearCabecera("next"+i,document.createTextNode(i)));
        p.appendChild(crearCuerpo("next"+i, document.createTextNode("contenido"), "next"+i));
        aux.appendChild(p);
    }
    tabla.appendChild(aux);
    
    aux= document.createElement("div");
    aux.setAttribute("class", "row");
    tabla.appendChild(document.createTextNode("paneles 3"));
    
    for (i=0; i<4; i++){
        p= document.createElement("div");
        p.setAttribute("class", "card col-3");
        p.appendChild(crearCabecera("next1"+i,document.createTextNode(i)));
        p.appendChild(crearCuerpo("next1"+i, document.createTextNode("contenido"), "next1"+i));
        aux.appendChild(p);
    }
    tabla.appendChild(aux);
    /*
                <div class="col-9 card">
                    paneles
                    <div class="row">
                        <div class="col-6 card">
                            primer panel
                        </div>
                        <div class="col-6 card">
                            segundo panel
                        </div>
                        <div class="col-12 card">
                            otros
                            <div class="row"> 
                                <div class="col-3 card">
                                    1
                                </div>
                                <div class="col-3 card">
                                    2
                                </div>
                                <div class="col-3 card">
                                    3
                                </div><div class="col-3 card">
                                    4
                                </div>                                
                            </div> 
                            continua
                            <div class="row"> 
                                <div class="col-3 card">
                                    1
                                </div>
                                <div class="col-3 card">
                                    2
                                </div>
                                <div class="col-3 card">
                                    3
                                </div><div class="col-3 card">
                                    4
                                </div>                                
                            </div> 
                        </div>
                        y se va de rango
                    </div>
                </div>
            </div>
    */
    // par -> cabecera / contenido
    par= document.createElement("div");
    par.setAttribute("class", "card");
    par.appendChild(crearCabecera("personaje", document.createTextNode("PERSONAJE")));
    
    cuerpo= document.createElement("div");
    cuerpo.setAttribute("class","row d-flex justify-content-center");
    cuerpo.appendChild(lateral);
    cuerpo.appendChild(tabla);
    par.appendChild(crearCuerpo("personaje", cuerpo, IDanchor));
    
    
    document.getElementById(IDanchor).appendChild(par);
}