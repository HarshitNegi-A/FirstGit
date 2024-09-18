const subHeading=document.createElement('h3')
const subHeadingText=document.createTextNode('Buy high quality organic fruits online')
subHeading.appendChild(subHeadingText)
subHeading.style.fontStyle='italic'

const header=document.querySelector('#header')
header.appendChild(subHeading)

const para=document.createElement('p')
const paraText=document.createTextNode('Total fruits:4')
para.appendChild(paraText)
para.id='fruits-total'

const divs=document.getElementsByTagName('div')
const secondDiv=divs[1]

const ul=document.querySelector('.fruits')

secondDiv.insertBefore(para,ul)