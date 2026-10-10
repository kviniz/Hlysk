document.addEventListener('DOMContentLoaded', () => {

    // 1. Вкладки (Tabs)
    const tabs = document.querySelectorAll('.tab-btn');
    const panes = document.querySelectorAll('.tab-pane');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Убираем активный класс у всех
            tabs.forEach(t => t.classList.remove('active'));
            panes.forEach(p => p.classList.remove('active'));

            // Активируем нужную вкладку
            tab.classList.add('active');
            const target = document.getElementById(tab.getAttribute('data-target'));
            if (target) target.classList.add('active');
        });
    });

    // 2. Аккордеон (через CSS Grid)
    const accordions = document.querySelectorAll('.acc-item');

    accordions.forEach(acc => {
        const header = acc.querySelector('.acc-header');
        
        header.addEventListener('click', () => {
            // Закрываем остальные (опционально)
            accordions.forEach(other => {
                if (other !== acc && other.classList.contains('open')) {
                    other.classList.remove('open');
                }
            });
            
            // Переключаем текущий
            acc.classList.toggle('open');
        });
    });

});