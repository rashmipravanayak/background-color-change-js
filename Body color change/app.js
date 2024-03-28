

const colorPrickar =document.getElementById('color');
colorPrickar.addEventListener('change',()=>{
    console.log(colorPrickar.value);
    document.body.style.backgroundColor=colorPrickar.value;
});