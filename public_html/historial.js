/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.addEventListener("load",function(){
    var lista=[];//lista que nos para almacenar el JSON
var historial=localStorage.getItem('MisVentas');//Obteniendo datos del local storage con el nombre que le pusimos
lista=JSON.parse(historial);//convirtiendo a JSON los datos obtenidos, y almacenados en "lista"
var fila=document.getElementById("Mitabla");//obtencion del body de la tabla del html
for(var x=0;x<historial.length;x++)//recorriendo el JSON
{
    //Ingresando los datos a la tabla
    fila.innerHTML+='<tr> <td>'+lista.datos[x].Producto+'</td><td>'+ lista.datos[x].Precio +'</td><td>'+lista.datos[x].Subtotal+ '</td></tr>';
}
});

