// Add the Edit Button:
const liE=document.querySelectorAll("li")

liE.forEach(function(i) {
  const editBtn=document.createElement('button')
const editBtnText=document.createTextNode('Edit')
editBtn.appendChild(editBtnText)
  editBtn.className="edit-btn"
  i.appendChild(editBtn);
  
});

// Implemcent the code as in video but with one extra 'Edit' button in 'li'

const form=document.querySelector('form')
const fruits=document.querySelector('.fruits')

form.addEventListener('submit',function(e){
  e.preventDefault();
  const fruitToAdd=document.getElementById('fruit-to-add')
  const li=document.createElement('li')
  // li.innerHTML=fruitToAdd.value+'<button class="delete-btn">x</button><button class="edit-btn">Edit</button>'
  const liText=document.createTextNode(fruitToAdd.value)
  li.appendChild(liText)
  li.className="fruit"

  const delBtn=document.createElement('button')
  const delBtnText=document.createTextNode('x')

  delBtn.appendChild(delBtnText)
  delBtn.className="delete-btn"

  li.appendChild(delBtn)

  const editBtn=document.createElement('button')
  const editBtnText=document.createTextNode('Edit')

  editBtn.appendChild(editBtnText)
  editBtn.className="edit-btn"

   li.appendChild(editBtn)
  
  fruits.appendChild(li)
})

fruits.addEventListener('click',function(e){
  if(e.target.classList.contains('delete-btn')){
    const fruitToDelete=e.target.parentElement
    fruits.removeChild(fruitToDelete)
  }
})