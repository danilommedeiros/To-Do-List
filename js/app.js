"use strict";

/*  <ul>
          <li>
           Estudar JS 
            <button type="submit">
              <i class="fa fa-trash"></i>
            </button>
          </li>
*/

const add = document.querySelector(".input-add");
const add_btn = document.querySelector(".btn-add");
const del_button = `<button class="delete" type="submit">
              <i class="fa fa-trash"></i>
            </button>`;

const createItem = () => {
  const items = document.createElement("li");
  items.innerHTML = add.value + del_button;

  document.querySelector(".task").appendChild(items);
  if (createItem === "click") {
  }


  if (add.value === "") {
    alert("Adicione uma tarefa!");
    items.remove();
  }

  var current_tasks = document.querySelectorAll(".delete");
  for (var i = 0; i < current_tasks.length; i++) {
    current_tasks[i].addEventListener("click", function () {
      this.parentNode.remove();
    });
  }

  var tasks = document.querySelectorAll(".task");
  for (var i = 0; i < tasks.length; i++) {
    tasks[i].addEventListener("click", function () {
      this.classList.toggle("completed");
    });
  }
  


};

 