
const btnPrevArr = document.querySelectorAll('.btn-previous');
const btnNextArr = document.querySelectorAll('.btn-next');

const slide1 = document.querySelector('.slide-1');
const slide2 = document.querySelector('.slide-2');

function toggleFunction() {
    slide1.classList.toggle('none');
    slide2.classList.toggle('none');
}

btnPrevArr.forEach(btn=>{
    btn.onclick = toggleFunction
})

btnNextArr.forEach(btn=>{
    btn.onclick = toggleFunction
})