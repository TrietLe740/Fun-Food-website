const parentContainer =  document.querySelector('.news');

parentContainer.addEventListener('click', event=>{

    const current = event.target;

    const isReadMoreBtn = current.className.includes('news-btn');

    if(!isReadMoreBtn) return;

    const currentText = event.target.parentNode.querySelector('.more');

    currentText.classList.toggle('more--show');

    current.textContent = current.textContent.includes('Xem thêm') ? "Thu gọn" : "Xem thêm";

});