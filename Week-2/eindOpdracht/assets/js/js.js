const toggleBtn = document.querySelector('#toggleBtn');
const div1 = document.querySelector('#div1');
const div2 = document.querySelector('#div2');

toggleBtn.addEventListener('click'), () => {
    if (div1.style.visibility === 'hidden')  {
        div1.style.visibility = 'visible';
    } else {
        div1.style.visibility = 'hidden';
    }
}