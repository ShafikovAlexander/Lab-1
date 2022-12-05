(() => {
    const startTime = new Date().getTime()

    document.addEventListener('DOMContentLoaded', () => {
        const stampParagraph = document.querySelector('#time-load');
        window.addEventListener('load', () => {
            stampParagraph.innerHTML += `Время загрузки - ${(new Date().getTime() - startTime) / 1000} c`;
        });
    })
})()