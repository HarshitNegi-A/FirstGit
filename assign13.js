const form=document.querySelector('form')

form.addEventListener('submit',function(e){
  e.preventDefault();

  const username=document.querySelector('#username')
  const email=document.querySelector('#email')
  const phone=document.querySelector('#phone')

  const obj={
    'Username': username.value,
    'Email': email.value,
    'Phone': phone.value,
  }

  const myObj=JSON.stringify(obj)

  localStorage.setItem('User Details',myObj)
  
})
