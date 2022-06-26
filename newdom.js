var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Add item
// Add item
function addItem(e){
    e.preventDefault();
 
    // Get input value
    var newItem = document.getElementById('item').value;
  
    // Create new li element
    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
 
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    var editBtn = document.createElement('button');
    editBtn.className='btn btn-success btn-sm float-right edit';
    // append text node
   editBtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(editBtn);
    //create delete button element
    var deleteBtn = document.createElement('button');
    deleteBtn.className='btn btn-danger btn-sm mr-2 float-right delete';
    // append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);

    

    // append li to list
    
    itemList.appendChild(li);
}

// remove item

function removeItem(e){
   if(e.target.classList.contains('delete')){
       if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        itemList.removeChild(li);      
     }  
   }

}