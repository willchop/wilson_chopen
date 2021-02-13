/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var total=0;
window.addEventListener("load",function(){

var JsonCarrito;

var objeto={};
var productos=new Array();
var precios=new Array();
var subtotales=new Array();
var i=0;

var objetos=document.querySelector(".agregar");
console.log(objetos);
document.addEventListener("click",function(e){
    if(e.target.getAttribute("class")=="agregar")
    {   
        var cadena="";
        var descripcion=e.target.getAttribute("id");
        var Pventa=document.querySelector("."+e.target.getAttribute("id")).textContent;
        for(x=2;x<Pventa.length;x++){
         cadena+=Pventa[x];
        }
         total+=parseInt(cadena);
         document.getElementById("Total").innerHTML="Total: "+total;
        var fila=document.getElementById("Mitabla");
        fila.innerHTML+='<tr> <td>'+descripcion  +'</td><td>'+ Pventa +'</td><td>'+Pventa+ '</td></tr>';


        productos[i]=descripcion;
        precios[i]=Pventa;
        subtotal=Pventa;
        subtotales[i]=subtotal;
        var datos=[];
        for(y=0;y<productos.length;y++)
        {
          
            
            datos.push({ 
                "Producto":productos[y],
                "Precio":precios[y],
                "Subtotal":subtotales[y]
            });
        }
        i++;
        objeto.datos=datos;
        console.log(JSON.stringify(objeto));
        JsonCarrito={"Producto":descripcion};
  
    
    } 
});


document.getElementById("ventas").addEventListener("click",function(){
  
    localStorage.setItem('MisVentas',JSON.stringify((objeto)));
});

});