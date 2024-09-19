const form=document.querySelector("form")

form.addEventListener('submit',(event)=>{
   event.preventDefault();
  const username=document.querySelector('#username')
 
  const email=document.querySelector('#email')
  const phno=document.querySelector('#tel')
  
  localStorage.setItem('Username',username.value)
  localStorage.setItem('Email',email.value)
  localStorage.setItem('Phone',phno.value)
})

