(() => {
    document.addEventListener('DOMContentLoaded', () => {
        const currentPath = location.pathname.split('/').pop();
        const activeLinks = document.querySelectorAll(`header a[href="${currentPath}"]`);
        activeLinks.forEach((link) => {
            link.classList.add('header__link_normal-active');
        });
    });
})()
