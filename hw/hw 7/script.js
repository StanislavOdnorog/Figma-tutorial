function showMoreFeatures() {
    let elements = document.querySelectorAll('.services__services-item');
    elements.forEach((element) => element.classList.remove('mobile-hidden'));
    document.querySelector('.services__view-btn').classList.remove('desktop-hidden');
    document.querySelector('.services__view-btn').style.display = 'none';
}

document.querySelectorAll('.reviews__commentors-list_item').forEach((elem) => elem.addEventListener("click", function(){
    document.querySelector('.reviews__text').innerHTML = elem.querySelector('.author-review').innerHTML;
}))