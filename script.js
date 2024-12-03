const pElement = document.getElementById('text');

console.log(pElement.textContent)

console.log("By Class")
const divItems = document.getElementsByClassName('block');

console.log(divItems)

Array.from(divItems).forEach(element => {
    console.log(element.textContent)
})


console.log("By tag")
const tagItems = document.getElementsByTagName('div');
Array.from(tagItems).forEach(element =>{
    console.log(element.textContent)
})
console.log(tagItems)

const textElement = document.querySelector('.container');
console.log(textElement)


const textElements = document.querySelectorAll('.container');
console.log(textElement)

const list = document.querySelector('ul');
const firstItem = list.firstChild
console.log(list.firstItem)
// console.log(list)