var tablinks=document.getElementsByClassName("tablink");
var tabcontents=document.getElementsByClassName("tabcontent");
function opentab(tabname){
    // for hiding the content when we click on any link 
    for(tabl of tablinks){
        tabl.classList.remove("active");
    }
    for(tabc of tabcontents){
        tabc.classList.remove("activetab");
    }
    //  show the content on which link we click
    event.currentTarget.classList.add("active");
    document.getElementById(tabname).classList.add("activetab");

}




    // -----------for side menu-------------



    var side=document.getElementById("openside");
    function openmenu(){
        side.style.right="0";
    }
    function closemenu(){
        side.style.right="-200px";
    }