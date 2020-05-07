let checkbox = document.getElementById('toggle');

checkbox.addEventListener('click', () => {
    const card = document.querySelectorAll('.card');
    // convert the variable card ehich is a nodelist into an array
    const priceCards = [...card];
    priceCards.forEach(card => {
        if (checkbox.checked) {
            card.classList.add('show');
            card.classList.add('hide');
        } else {
            card.classList.remove('show');
            card.classList.remove('hide');
        }

    })
    
})