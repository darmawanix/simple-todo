// ELEMENTS
const post = document.querySelector("header div form"); // Get Event from form
const content = document.querySelector("header div form input"); // Get User Input

const lists = document.querySelector("main ul"); // get ul tag to store contents

// Event
post.addEventListener("submit", function (event) {
  event.preventDefault();
  if (content.value !== "") {
    lists.insertAdjacentHTML(
      "afterbegin",
      `
    <li class="bg-gray-700 mb-2 flex justify-between p-2 rounded-lg"><span class="done-list inline-block cursor-pointer">${content.value}</span><span class="delete-list text-red-500 hover:text-red-600 inline-block cursor-pointer">x</span></li>
    `,
    );
  }
  content.value = "";

  const doneList = document.querySelectorAll("main ul li .done-list");
  for (let i = 0; i < doneList.length; i++) {
    doneList[i].addEventListener("click", function () {
      const done = doneList[i].parentElement;

      if (done.classList.contains("bg-lime-400") === false) {
        done.classList.add("bg-lime-400");
        done.parentElement.appendChild(done);
      } else {
        lists.prepend(done);
      }
    });
  }
  const deleteList = document.querySelectorAll("main ul li .delete-list");
  for (let i = 0; i < deleteList.length; i++) {
    deleteList[i].addEventListener("click", function () {
      deleteList[i].parentElement.remove();
    });
  }
});
