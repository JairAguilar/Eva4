 function agregarTarea(){
    var tareaTitulo = document.getElementById('tx-titulo').value;
    var tareaDesc = document.getElementById('tx-descripcion').value;
    
    if (tareaTitulo == "" && tareaDesc == ""){
        alert("Debe ingresar título y descripción, en las notas");
    } 
    else{
        var importante = document.getElementById("ch-importante").checked;      
        var pos=[];
        pos = JSON.parse(localStorage.getItem("posts"));

        if(!pos){
            pos=[];
            pos.push({tareaTitulo,tareaDesc,importante});
        }
        else{      
            var i = pos.findIndex(r => r.tareaTitulo == tareaTitulo);
            if(i == -1){
                pos.push({tareaTitulo, tareaDesc,importante});
            }
            else{
                pos[i]={tareaTitulo,tareaDesc,importante};
            }
        }
        localStorage.setItem("posts", JSON.stringify(pos));
    }
    limpiarForm();
    
}
function limpiarForm(){
    verNotas();
    document.getElementById("tx-titulo").value="";
    document.getElementById("tx-descripcion").value="";
    document.getElementById("ch-importante").checked=false;
}

function eliminarNota(tareaTitulo){
    
    var pos=[];
    pos = JSON.parse(localStorage.getItem('posts'));
    var i= pos.findIndex(r => r.tareaTitulo == tareaTitulo);
    alert("Elemento se ha eliminado!");
    pos.splice(i,1);
    localStorage.setItem("posts", JSON.stringify(pos));
    verNotas();
}

function verNotas(){
    var pos=[];
    pos = JSON.parse(localStorage.getItem("posts"));

    var contenedor = document.getElementById("contenedor");
    var postHtml = "";
    var panelCSS = "";

    pos.forEach(element => {
       
        if(element.importante){
            panelCSS="panel2";
        }
        else{
            panelCSS="panel1";
        }
        postHtml += `<div  class="col-md-3 col-sm-6">
                            <div class="panel panel-default ${panelCSS}">
                                    <div class="panel-heading">
                                        <div class="row">
                                            <div class="col-md-8">
                                            ${element.tareaTitulo}
                                            </div>
                                            <div class="col-md-2">
                                            </div>
                                            <div class="col-md-2">
                                                <span onClick="eliminarNota('${element.tareaTitulo}')" class="fa fa-trash coloricon"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel-body">${element.tareaDesc}</div>
                            </div>
                        </div>
        `});
    document.getElementById("contenedor").innerHTML= postHtml;


}

