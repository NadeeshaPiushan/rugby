//Make the DIV element draggagle:
dragElement(document.getElementById("mydiv1"));
dragElement(document.getElementById("mydiv2")); 
dragElement(document.getElementById("mydiv3"));
dragElement(document.getElementById("mydiv4"));
dragElement(document.getElementById("mydiv5"));
dragElement(document.getElementById("mydiv6"));
dragElement(document.getElementById("mydiv7"));
dragElement(document.getElementById("mydiv8"));
dragElement(document.getElementById("mydiv9"));
dragElement(document.getElementById("mydiv10"));
dragElement(document.getElementById("mydiv11"));

dragElement(document.getElementById("my2div1"));
dragElement(document.getElementById("my2div2")); 
dragElement(document.getElementById("my2div3"));
dragElement(document.getElementById("my2div4"));
dragElement(document.getElementById("my2div5"));
dragElement(document.getElementById("my2div6"));
dragElement(document.getElementById("my2div7"));
dragElement(document.getElementById("my2div8"));
dragElement(document.getElementById("my2div9"));
dragElement(document.getElementById("my2div10"));
dragElement(document.getElementById("my2div11"));



function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}