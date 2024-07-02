document.getElementById('add-items').addEventListener('submit', function(event) {
    event.preventDefault(); //

    const newItemText = document.getElementById('item-input').value;

    const newItem = document.createElement('li');
    newItem.className = 'item';
    newItem.textContent = newItemText;

    document.getElementById('item-list').appendChild(newItem);

    document.getElementById('item-input').value = '';
});