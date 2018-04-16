function createMainBar(barID){
    st=document.getElementById("barraPrincipal");
    if (st===null){
        st= document.createElement("link");
        st.id="barraPrincipal";
        st.setAttribute("rel","stylesheet");
        st.setAttribute("href","./css/barraPrincipal.css");
        document.head.insertBefore(st, document.getElementById("maincss"));
    }
    
    bar= document.createElement("nav");
    bar.id=barID;
    bar.setAttribute("class","navbar navbar-expand-lg navbar-light");
    
    mainicon= document.createElement("a");
    mainicon.setAttribute("class", "navbar-brand");
    micon= document.createElement("img");
    micon.setAttribute("src","./imagenes/icon.png");
    micon.width="40";
    micon.height="40";
    mainicon.appendChild(micon);
    bar.appendChild(mainicon);
    
    
    document.body.insertBefore(bar, document.body.getElementsByTagName("*")[0]);
}