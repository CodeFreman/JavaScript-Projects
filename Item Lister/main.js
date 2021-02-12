var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form Submit Event
form.addEventListener('submit', addItem);

// Delete Event
  itemList.addEventListener('click', removeItem);

// Filter Event
filter.addEventListener('keyup', filterItems);

// Add Item
function addItem(e) {
  e.preventDefault();
  
  //Get Input Value
  var newItem = document.getElementById('item').value;

  // Create New li Element
    var li = document.createElement('li');

    // Add Class
    li.className = 'list-group-item';

    // Add Text Node With Input Value
    li.appendChild(document.createTextNode(newItem));

    // Create Delete Button
    var deleteBtn = document.createElement('button');

    // Add Classes To Delete Button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    // Append Text Node
    deleteBtn.appendChild(document.createTextNode('X'));

    // Append Button to li
    li.appendChild(deleteBtn);

    // Append li to List
    itemList.appendChild(li);
}

  // Remove Item
  function removeItem(e) {
    if(e.target.classList.contains('delete')) {
      if(confirm('Are You Sure?')) {
        var li = e.target.parentElement;
        itemList.removeChild(li);
      }
    }
  }

  // Filter Items
  function filterItems(e) {
    // Convert Text To Lowercase
    var text = e.target.value.toLowerCase();
    // Get List Items
    var items = itemList.getElementsByTagName('li');
    // Convert To An Array
    Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
      if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
    });
  }