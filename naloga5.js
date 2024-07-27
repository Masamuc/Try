function addItem() {
  const inputField = document.getElementById("itemInput");
  const newItemText = inputField.value.trim();

  if (newItemText !== "") {
    const newItem = document.createElement("li");
    newItem.textContent = newItemText;

    newItem.addEventListener("click", function () {
      this.remove();
    });

    const itemList = document.getElementById("itemList");
    itemList.appendChild(newItem);

    inputField.value = "";
  }
}

document.getElementById("addItemButton").addEventListener("click", addItem);
