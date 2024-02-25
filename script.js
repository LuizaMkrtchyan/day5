const listItems = document.querySelectorAll('li');

listItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.color='red';
    });

    item.addEventListener('mouseout', () => {
        item.style.color='';
    });
});