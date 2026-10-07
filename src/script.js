const form = document.querySelector("header div form");
const userInput = document.querySelector("header div form input");
const lists = document.querySelector("main ul");

// POST MACHINE
form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (userInput.value !== "") {
    lists.insertAdjacentHTML(
      "afterbegin",
      `
      <li class="bg-gray-700 mb-2 flex justify-between p-2 rounded-lg">
          <span class="done-list inline-block cursor-pointer">${userInput.value}</span><span class="delete-list text-red-500 hover:text-red-600 inline-block cursor-pointer">x</span>
        </li>
      `,
    );
  }
  userInput.value = "";
});

// LISTS MACHINE
lists.addEventListener("click", function (event) {
  const done = event.target.closest(".done-list");
  const del = event.target.closest(".delete-list");

  if (done) {
    if (!done.parentElement.classList.contains("bg-lime-400")) {
      done.parentElement.classList.add("bg-lime-400");
      lists.appendChild(done.parentElement);
    } else {
      done.parentElement.classList.remove("bg-lime-400");
      lists.prepend(done.parentElement);
    }
  }

  if (del) {
    del.parentElement.remove();
  }
});
