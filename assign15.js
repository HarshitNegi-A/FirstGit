const ul=document.querySelector('ul')
function handleFormSubmit(event){
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
    localStorage.setItem(email,myObj)
  
    
    const li=document.createElement('li')
    const liText=document.createTextNode(username+"-"+email+"-"+phone)
    li.appendChild(liText)
  
    const delBtn=document.createElement('button')
    delBtn.innerHTML='Delete'
    delBtn.className="delete-btn"
  
    li.appendChild(delBtn)
  
    ul.appendChild(li)
  }



  ul.addEventListener('click',function(event){
    if(event.target.classList.contains('delete-btn')){
        const itemToDel=event.target.parentElement;
        ul.removeChild(itemToDel)
    }
    
    

  })