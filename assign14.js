function handleSubmit(event){
    event.preventDefault();
    const username=event.target.username.value
    const email=event.target.email.value
    const phone=event.target.phone.value
    const obj={
      'Username': username,
      'Email': email,
      'Phone': phone,
    }
    const myObj=JSON.stringify(obj)
    localStorage.setItem(email.value,myObj)
  
    const ul=document.querySelector('ul')
    const li=document.createElement('li')
    const liText=document.createTextNode(username+"-"+email+"-"+phone)
    li.appendChild(liText)
  
    ul.appendChild(li)
  }