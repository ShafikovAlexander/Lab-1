const fetchComments = async (page = 1) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${page}/comments`);
    return await response.json();
}

const feedbackList = document.querySelector('.feedback__list');

const renderComments = async () => {
    try {
        const data = await fetchComments(localStorage.getItem('page'));
        feedbackList.innerHTML = '';

        for (const item of data) {
            feedbackList.innerHTML += `
     <div class="feedback__item">
       <div class="feedback__item_container">
         <span class="feedback__item_mail">${item.email}</span>
         <h5 class="feedback__item_header">${item.name}</h5>
       </div>
       <div class="feedback__item_body">
       ${item.body}
       </div>
     </div>
     `
        }
    } catch (e) {
        feedbackList.innerHTML = '<p class="error__text">⚠ Что-то пошло не так</p>';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderComments();
});