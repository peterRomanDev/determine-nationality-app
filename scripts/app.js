const sidebarWrapper = document.querySelector('.sidebar-wrapper');
const sidebar = document.querySelector('.sidebar');
const sidebarTooltip = document.querySelector('.sidebar-tooltip');

sidebarWrapper.addEventListener('click', e => {
    if(e.target.classList.contains('sidebar--btn-toggle')) {
        if(sidebarWrapper.classList.contains('sidebar-hidden')) {
            sidebarWrapper.classList.remove('sidebar-hidden');
            sidebarTooltip.textContent = 'Hide sidebar';
        } else {
            sidebarWrapper.classList.add('sidebar-hidden');
            sidebarTooltip.textContent = 'Show sidebar';
        }
    } else if(e.target.classList.contains('sidebar__options-btn')) {
        const sidebarOptionsBtns = document.querySelectorAll('.sidebar__options-btn');

        sidebarOptionsBtns.forEach(btn => btn.classList.remove('sidebar-option-active'));
        e.target.classList.add('sidebar-option-active');
    }
});

sidebarWrapper.addEventListener('pointerover', e => {
    if(e.target.classList.contains('sidebar--btn-toggle')) {
        sidebarTooltip.classList.remove('d-none');
        setTimeout(() => sidebarTooltip.classList.remove('transparent'), 125);
    }
});

sidebarWrapper.addEventListener('pointerout', e => {
    if(e.target.classList.contains('sidebar--btn-toggle')) {
        sidebarTooltip.classList.add('transparent');
        setTimeout(() => sidebarTooltip.classList.add('d-none'), 125);
    }
});