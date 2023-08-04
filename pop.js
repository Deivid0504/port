
var btnAbrirPopup = document.getElementById('bet2'),
  overlay = document.getElementById('overlay'),
      popup = document.getElementById('popup'),
    btnCerrarPopup = document.getElementById('btn-cerrar-popup');
  
  btnAbrirPopup.addEventListener('click', function(){
    overlay.classList.add('active');
    popup.classList.add('active');
  });
  
    btnCerrarPopup.addEventListener('click', function(){
    overlay.classList.remove('active');
    popup.classList.remove('active');
  });
  //acción del botón
  
  const bott=document.getElementById('obj3');
  const capturadt =() => {
    let nomb,asunto, num;
    nomb=document.getElementById('obj1').value;
    asunto=document.getElementById('obj2').value;
    num=9871121687;
  
    var win= window.open(`https://wa.me/${num}?text=Hola%20mi%20nombre%20es%20${nomb}%20me%20pueden%20ayudar%20con%20esto:%20${asunto}`,'_blank');
  }
  bott.addEventListener('click', capturadt)
  
