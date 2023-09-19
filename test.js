let total = 0;

function handleClick(target){
    const selectedItemContainer = document.getElementById('selected-items');
    const itemName = target.parentNode.parentNode.childNodes[1].innerText;
    const li = document.createElement('li');
        li.innerText = itemName;
        selectedItemContainer.appendChild(li)

    const price = target.parentNode.parentNode.childNodes[5].childNodes[1].innerText;
    
    total = parseInt(total) + parseInt(price);
    document.getElementById('total-span').innerText = total;

}