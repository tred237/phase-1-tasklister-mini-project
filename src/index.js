document.addEventListener("DOMContentLoaded", () => {
  
  const listerForm = document.getElementById("create-task-form");
  listerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const description = listerForm.querySelector("#new-task-description").value;
    const dateDue = listerForm.querySelector("#new-task-date-due").value;
    const priority = listerForm.querySelector("#new-task-priority").value;
    addToDos(description, dateDue, priority);
    listerForm.reset();
  })

  function addToDos(taskDescription, dueDate, priority) {
    let toDosParentList = document.getElementById("tasks");
    let listChild = document.createElement("li");
    let deleteButton = document.createElement("button");

    listChild.style.color = priorityColor(priority);
    listChild.contentEditable = "true";
    // listChild.id = `li-${priority}-${enumerateListItems()}`;
    // listChild.className = "li-tasklist";
    listChild.textContent = `${taskDescription}, ${dueDate} `;

    deleteButton.addEventListener("click", () => listChild.remove());
    deleteButton.textContent = "remove";

    listChild.appendChild(deleteButton);
    toDosParentList.appendChild(listChild);
  }
    

  function priorityColor(priority) {
    if (priority === "low") {
      return "green";
    } else if (priority === "medium") {
      return "yellow";
    } else {
      return "red";
    }
  }

  // can use this as the callback to delete the list item, but the 
  // anonymous callback is more efficient b/c it does not have to navigate through the node list
  // function deleteListItem(e) {
  //   e.target.parentNode.remove();
  // }

  // function enumerateListItems() {
  //   const currentListCount = document.getElementsByTagName("li").length;
  //   return currentListCount === 0 ? "0" : `${currentListCount + 1}`;
  // }


//   const item = document.querySelector("li")
//   item.getAttribute("style");
// 'color: green;'
// let thisColor = document.querySelectorAll("li");

//Sort list by color
// items[i].style.color 
// let parent = document.querySelector("#tasks"); //pull parent node
// let items = document.querySelectorAll("li"); //pull li node list

//loops through items nodelist and checks if the current iterations color needs to be moved
// in front of the previous node
// for (let i = 0; i < items.length; i++) {
// // while ()
//   let [currentColor, previousColor] = [items[i].style.color, i === 0 ? items[i].style.color : items[i - 1].style.color];
  
//   if(currentColor === "green" && (previousColor === "yellow" || previousColor === "red")){
//     parent.insertBefore(items[i],items[i - 1]);
//   } else if(currentColor === "yellow" && previousColor === "red") {
//     parent.insertBefore(items[i],items[i - 1]);
//   }
// }

});



