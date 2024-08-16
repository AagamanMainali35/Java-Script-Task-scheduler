let input = document.getElementById('input')
let model = document.querySelector('.popup');
let elm3 = document.querySelector('.container');
let elm4 = document.querySelectorAll('.container');
count=1;
let btn = document.getElementById('btn');
let btn2 = document.getElementById('btn2');
btn.onclick = () => {
    let addElement = document.createElement('p');
    task = input.value;
    addElement.textContent = `${count++}. ${task}`;
    addElement.onclick = () => {
        addElement.style.textDecoration = 'line-through';
        setTimeout(()=>{addElement.remove()},500) 
        count=1;
    };
    elm3.appendChild(addElement);
    elm3.style.height = 'auto';
    input.value = ""   
}
btn2.onclick = () => {
    if (elm3.lastChild) {
        elm3.removeChild(elm3.lastChild);
    }
    if (elm3.children.length === 0) {
        model.style.display = 'flex';
        setTimeout(() => {
            model.style.display = 'none';
        }, 2000);
    }
}