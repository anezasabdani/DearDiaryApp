(function(){
   var list = document.querySelector('#list'),
   form = document.querySelector('form'),
   item = document.querySelector('#diary');
   form.addEventListener('submit',function(e){
   e.preventDefault();
  
  list.innerHTML += '<li>' + diary.value + '</li>';
   store();

diary.value = "";
  },false)

   list.addEventListener('click',function(e){

    var t = e.target;

  if(t.classList.contains('checked')){
   t.parentNode.removeChild(t);
  } 
  else {
   t.classList.add('checked');
  }

store();
},false)

    function store() {
    window.localStorage.myitems = list.innerHTML;
   }
    function getValues() {
    var storedValues = window.localStorage.myitems;

if(!storedValues) {

list.innerHTML = '<li>Bad Luck</li>'+

'<li>Everything was blue</li>'+

'<li>Stay with me</li>'+

'<li>Look what you made me do</li>';

}

else {

list.innerHTML = storedValues;

}

}

getValues();

})();
