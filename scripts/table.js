const form = document.querySelector('#schedule-form');
const dataContainer = document.querySelector('#schedule-list');


const addTaskToMarkup = (task) => {
    const markup = `
    <div class="schedule__item" id="${new Date().getTime()}">
      <span class="schedule__item_body">
        <h5 class="schedule__item_header">${task.text}</h5>
        <p class="schedule__item_text">${task.type}</p>
      </span>
      <span class="schedule__button-delete">
        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 10 2 L 9 3 L 5 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 21.093063 5.9069372 22 7 22 L 17 22 C 18.093063 22 19 21.093063 19 20 L 19 5 L 20 5 L 20 3 L 19 3 L 18 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z" fill="#000000"/> 
        </svg>
      </span>
    </div>
  `;
    dataContainer.insertAdjacentHTML('beforeend', markup);
}

const deleteItem = (item) => {
    const values = JSON.parse(localStorage.getItem('schedule'));
    const filteredValues = values.filter((value) => value.id === item.id);
    localStorage.setItem('schedule', JSON.stringify(filteredValues));
    item.remove();
}

document.addEventListener('DOMContentLoaded', () => {

    document.addEventListener('click', (e) => {
        if (e.target.closest('.schedule__button-delete')) {
            const item = e.target.closest('.schedule__item');
            deleteItem(item);
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const values = Object.fromEntries(formData);

        if(!values.text)
        {
            alert('Введите данные')
            return
        }

        if(values.text.match(/\s{1,20}/) != null)
        {
            alert('Поле не может быть пустым')
            return
        }

        addTaskToMarkup(values);
        e.target.reset();
    });

    dataContainer.addEventListener('DOMSubtreeModified', () => {
        const items = document.querySelectorAll('.schedule__item');

        let values = [];
        items.forEach((item) => {
            const text = item.getElementsByClassName('schedule__item_header')[0].innerText;
            const type = item.getElementsByClassName('schedule__item_text')[0].innerText;
            const id = item.id;

            values.push({ text, type, id });
        });

        localStorage.setItem('schedule', JSON.stringify(values));
    })

    if (localStorage.getItem('schedule')) {
        const schedule = JSON.parse(localStorage.getItem('schedule'));
        schedule.forEach((task) => {
            addTaskToMarkup(task);
        });
    }


})