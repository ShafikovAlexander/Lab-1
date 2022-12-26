class Footer extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
<footer class="footer">
  <div class="footer">
        <div class="footer__item">
            <blockquote>
                <p>Не тот волк, кто волк, а тот кто волк</p>
                <cite> &copy; <sub>Волк</sub></cite>
            </blockquote>
            <p class="absolute-example">I like pizza</p>
        </div>
        <div class="footer__item">
            <p>Контактная информация</p>
            <ul class="footer__list">
                <li class="footer-item">Телефон: <a href="tel:+79630213681">+79630213681</a></li>
                <li class="footer-item">Github: <a href="https://github.com/ShafikovAlexander">ShafikovAlexander</a></li>
            </ul>
            <p id="time-load"></p>
        </div>
    </div>
</footer>
`
    }
}

customElements.define('custom-footer', Footer)