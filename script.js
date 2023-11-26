const addTaskForm = document.querySelector(".last-form");
const uList = document.querySelector(".todos");
const search = document.querySelector(".search input");
const genereteTemplate = (todo) => {
    const html = `
    <li>
        <span>${todo}</span>
        <i class="fa-solid fa-trash-can delete"></i>
    </li>
    `;
    uList.innerHTML += html;
};

addTaskForm.addEventListener("submit", e => {
    e.preventDefault(); //sayfanın yenilenmesini engelledim
    const todo = addTaskForm.add.value.trim(); //trim() metotu girilen metnin başında sonunda boşluk olmasını engeller
    if (todo.length) {
        genereteTemplate(todo);
        addTaskForm.reset();
    }
});

uList.addEventListener("click", e => {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.remove();
    }
});

const filterTodos = (term) => {
    Array.from(uList.children).filter(todo => !todo.textContent.toLowerCase().includes(term)).forEach(todo => todo.classList.add("filtered"));
    Array.from(uList.children).filter(todo => todo.textContent.toLowerCase().includes(term)).forEach(todo => todo.classList.remove("filtered"));

}

search.addEventListener("keyup", e => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});