var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// filter event
filter.addEventListener('keyup', filterItems);


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

   
    
    var discli= document.createElement('dd');
    discli.className ='discription';
    discli.appendChild(document.createTextNode('item is added to the list'));
    li.appendChild(discli);

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

// function items

function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('');
    
    // covert to array
   
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
    }else{
        item.style.display = 'none'
    }
    });
    
   

  
}

