document.addEventListener('DOMContentLoaded', () => {
    function themeSwitcher() {
        const toggleBtn = document.querySelector('.toggle-label');
        const headerFirst = document.querySelector('.header-first');
        const headerSecond = document.querySelector('.header-second');
        const body = document.body;

        toggleBtn.addEventListener('click', () => {
            console.log('Toggle button clicked'); // Проверка
            if (body.classList.contains('light-mode')) {
                body.classList.remove('light-mode');
                body.classList.add('dark-mode');

                headerFirst.classList.contains('header-first-dark');
                headerFirst.classList.remove('header-first-dark');
                headerFirst.classList.add('header-first-light');

                headerSecond.classList.contains('header-second-dark');
                headerSecond.classList.remove('header-second-dark');
                headerSecond.classList.add('header-second-light');

            } else {
                body.classList.remove('dark-mode');
                body.classList.add('light-mode');

                headerFirst.classList.remove('header-first-light');
                headerFirst.classList.add('header-first-dark');

                headerSecond.classList.remove('header-second-light');
                headerSecond.classList.add('header-second-dark');
            }
        });
    }

    themeSwitcher();
});