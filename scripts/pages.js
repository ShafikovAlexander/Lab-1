const paths = Object.freeze({
    Page2: { file: 'page_2.html', link: 'page2'},
    Page3: { file: 'page_3.html', link: 'page3'},
    Page4: { file: 'page_4.html', link: 'page4'}
});

(() => {
    document.addEventListener('DOMContentLoaded', () => {
        const navigationLinks = document.querySelectorAll('.header__link_normal');
        switch (true) {
            case document.location.pathname.endsWith(paths.Page2.file):
                [...navigationLinks].find(link => link.dataset.link === paths.Page2.link).classList.add('header__link_normal-active');
                break;
            case document.location.pathname.endsWith(paths.Page3.file):
                [...navigationLinks].find(link => link.dataset.link === paths.Page3.link).classList.add('header__link_normal-active');
                break;
            case document.location.pathname.endsWith(paths.Page4.file):
                [...navigationLinks].find(link => link.dataset.link === paths.Page4.link).classList.add('header__link_normal-active');
        }
    })
})();
