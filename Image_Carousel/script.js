const imgbox = document.querySelectorAll('.imgbox');
imgbox.forEach(popup => popup.addEventListener('click',()=>{
    popup.classList.toggle('active');
}))