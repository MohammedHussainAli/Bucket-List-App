function add(){
    var elem= document.getElementById('input').value;
    console.log(elem);
    var list= document.createElement('li');
    if(elem === ''){
        alert("Your List cannot be empty, add items to continue.")
    }
    else{
    list.innerHTML=elem;
    // console.log(list);
    var items=document.getElementById('about');
    items.appendChild(list);
    }
}
var list = document.querySelector('ul');
list.addEventListener('click', function(tick) {
  if (tick.target.tagName === 'LI') {
    tick.target.classList.toggle('checked');
  }
}, false);
function remove(){
    var items=document.getElementById('about');
    items.removeChild(list.lastElementChild);
}