function addItem() {
    let input = document.getElementById("bucketInput");
    let itemText = input.value
    if (itemText === "") return;
    
    let ul = document.createElement("ul");
    document.getElementById("bucketList").appendChild(ul);
    
    input.value = "";
}
 
    function deleteitem(button) {
        item.splice(button, 1);
        saveitem();}