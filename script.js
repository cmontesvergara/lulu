let contrasena = "";
let count_concepts = 0;
let couunt_values = 0;
let fecha = '00/00/00';
let numrecibo = '00000';
let total = 0;
let conceptos = [];

function preprocesar(){
  const cuv = document.getElementById("cuv-c");
  cuv.innerText = Math.random() * 10000000000000000;
}
function lienzo() {
  let acum = ``;
  for (let value of conceptos) {
    let temp_concep = value.concepto;
    let temp_val = value.valor;

    total += parseFloat(value.valor);
    acum += `
    <div class='concept-item'>
      <label class='concept-item-l1'>${temp_concep}</label> 
      <label class='concept-item-l2'>${temp_val}</label>     
    </div>
    `;
  }
  const elemento = document.getElementById("concepts");
  elemento.innerHTML = acum;
  const tot = document.getElementById("total-concept");
  

  tot.innerText = total;
  

  html2canvas(document.getElementById("App")).then((canvas) => {
    
      let link = document.createElement("a");
      link.download = "digitalRecipt.jpg";
      link.href = canvas.toDataURL();
      link.click();
    
  });
}


function captura(value) {
  contrasena = value;
}
function security() {
  if (contrasena == "SecurePassword") {
      document.getElementById('login').style.display='none';
      document.getElementById('dashboard').style.display='flex'
  } else {
    alert("Invalid Password");
  }
}
function add(){
    count_concepts += 1;
    couunt_values += 1;
    document.getElementById('content-concepto').insertAdjacentHTML('beforeend',`
        <div class="items-concepts">
            <input type="text" class="inp"  id="concepto${count_concepts}" placeholder="Concepto">
            <input type="text" class="inp"  id="valconcepto${couunt_values}" placeholder="Valor">
          </div>
    `)
}
function fnumrecibo(valu){
     document.getElementById('numrecibo').innerText=valu ;
}
function ffecha(value){
    document.getElementById('fecha-').innerText=value;
}
function procesar(){
    let temp = {};
    for(let i=0; i<=count_concepts;i++){
        let a1 = document.getElementById(`concepto${i}`).value;
        let a2= document.getElementById(`valconcepto${i}`).value;
        let temp = {'concepto':a1,'valor':a2};
        conceptos.push(temp)

    }
    document.getElementById('num-recibo').value=numrecibo;
    document.getElementById('fecha').value=fecha;
    preprocesar();
    lienzo();
    setTimeout(() => {limpiar()},5000);
    
}
function limpiar(){
    location.reload();
}