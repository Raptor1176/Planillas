function createNav(contID, navID) { 
    st=document.getElementById("barraLateral");
    if (st===null){
        st= document.createElement("link");
        st.id="barraLateral";
        st.setAttribute("rel","stylesheet");
        st.setAttribute("href","./css/barraLateral.css");
        document.head.insertBefore(st, document.getElementById("maincss"));
    }
    
    sn= document.createElement("div");
    sn.id=navID;
    sn.setAttribute("class","sidenav");
    
    closeb= document.createElement("a");
    closeb.href="javascript:void(0)";
    closeb.setAttribute("class","closebtn");
    closeb.setAttribute("onclick","closeNav('"+contID+"','"+navID+"')");
    closeb.appendChild(document.createTextNode(String.fromCharCode(215)));
    sn.appendChild(closeb);
    
    for (i=0; i<4; i++){
        item= document.createElement("a");
        item.href="#";
        item.appendChild(document.createTextNode("Item "+i));
        sn.appendChild(item);
    }
    document.body.appendChild(sn);
}

function openNav(contID, navID) {
    pix="250px";
    if (screen.width<=500)
        pix="150px";
    document.getElementById(navID).style.width = pix;
    document.getElementById(contID).style.marginRight = pix;
}

function closeNav(contID, navID) {
    document.getElementById(navID).style.width = "0px";
    document.getElementById(contID).removeAttribute("style");
}