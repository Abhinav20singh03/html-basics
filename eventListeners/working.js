let content= document.querySelector('h1');
content.addEventListener('click',function(){
    content.style.backgroundColor='red';
});
let link = document.querySelector('a');
link.addEventListener('click',function(event){
 event.preventDefault();
 console.log("hoigya");
});