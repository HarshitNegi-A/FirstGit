const mainHeading=document.querySelector('#main-heading')
mainHeading.style.textAlign='right'

const basketHeading=document.querySelector('#basket-heading')
basketHeading.style.color='brown'
basketHeading.style.marginLeft='30px'

const fruits=document.querySelector('.fruits')
fruits.style.backgroundColor='gray'
fruits.style.padding='30px'
fruits.style.margin='30px'
fruits.style.width=''
fruits.style.borderRadius='5px'
fruits.style.listStyleType='none'

const fruit=document.querySelectorAll('.fruit')
for(let i=0;i<fruit.length;i++){
  fruit[i].style.margin='10px'
  fruit[i].style.padding='10px'
  fruit[i].style.borderRadius='5px'
  if(i%2==0){
    fruit[i].style.backgroundColor='red'
    fruit[i].style.color='white'
  }
  else{
    fruit[i].style.backgroundColor='brown'
    fruit[i].style.color='white'
  }
  
}