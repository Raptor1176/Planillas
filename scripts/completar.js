function completar(IDanchor){
    
    datos= JSON.parse('{"player": "Raptor","name"  : "Raptor","description": {"gender": "male","age": 30,"peso": 60,"altura": 1.87,"eyes": "black","hair": "black","origin": ""},"rekt": {}}');
    
    // par -> cabecera / contenido
    par= document.createElement("div");
    par.setAttribute("class", "card");
        
    cabecera= document.createElement("div");
    cabecera.setAttribute("class", "card-header mb-0");
    cabeceraB= document.createElement("button");
    cabeceraB.setAttribute("id", "personaje1");
    cabeceraB.setAttribute("class", "btn btn-link");
    cabeceraB.setAttribute("data-toggle","collapse");
    cabeceraB.setAttribute("data-target","#personaje2");
    cabeceraB.setAttribute("aria-expanded","true");
    cabeceraB.setAttribute("aria-controls","name");
    cabeceraB.appendChild(document.createTextNode("PERSONAJE"));
    
    cuerpo= document.createElement("div");    
    cuerpo.setAttribute("id", "personaje2");
    cuerpo.setAttribute("class","collapse show");
    cuerpo.setAttribute("aria-labelledby","personaje1");
    cuerpo.setAttribute("data-parent","#"+ IDanchor);
    cuerpo.appendChild(document.createTextNode("asdasdasdsad"));
    
    cabecera.appendChild(cabeceraB);
    par.appendChild(cabecera);
    par.appendChild(cuerpo);
    
    document.getElementById(IDanchor).appendChild(par);
}