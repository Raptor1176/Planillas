function createNav(contID, navID) {    
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
    document.getElementById(navID).style.width = "250px";
    document.getElementById(contID).style.marginRight = "250px";
}

function closeNav(contID, navID) {
    document.getElementById(navID).style.width = "0";
    document.getElementById(contID).style.marginRight= "0";
}