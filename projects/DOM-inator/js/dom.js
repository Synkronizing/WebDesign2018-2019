function w3_open() {
      
    document.getElementById("mySidebar").style.width = "200px";
    document.getElementById("mySidebar").style.display = "block";

  }

  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("openNav").style.display = "inline-block";
  }


const inputs = document.querySelectorAll("input");

function create_Ele(){
    let element = document.createElement(inputs[0].value);
    console.log(element);
}
