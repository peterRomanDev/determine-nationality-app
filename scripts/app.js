const app = document.querySelector('.app');
const sidebarWrapper = document.querySelector('.sidebar-wrapper');
const sidebar = document.querySelector('.sidebar');
const sidebarTooltip = document.querySelector('.sidebar-tooltip');
const dashboardWrapper = document.querySelector('.dashboard-wrapper');

app.addEventListener('click', e => {
    if(e.target.classList.contains('sidebar--btn-toggle')) {
        if(sidebarWrapper.classList.contains('sidebar-hidden')) {
            sidebarWrapper.classList.remove('sidebar-hidden');
            sidebarTooltip.textContent = 'Hide sidebar';

            dashboardWrapper.classList.remove('dashboard-full-screen');
        } else {
            sidebarWrapper.classList.add('sidebar-hidden');
            sidebarTooltip.textContent = 'Show sidebar';

            dashboardWrapper.classList.add('dashboard-full-screen');
        }
    } else if(e.target.classList.contains('sidebar__options-btn')) {
        const sidebarOptionsBtns = document.querySelectorAll('.sidebar__options-btn');

        sidebarOptionsBtns.forEach(btn => btn.classList.remove('sidebar-option-active'));
        e.target.classList.add('sidebar-option-active');
    } else if(e.target.classList.contains('user')) {
        const users = document.querySelectorAll('.user');
        
        users.forEach(user => user.classList.remove('user-active'));
        e.target.classList.add('user-active');
    }
});

app.addEventListener('pointerover', e => {
    if(e.target.classList.contains('sidebar--btn-toggle')) {
        sidebarTooltip.classList.remove('d-none');
        setTimeout(() => sidebarTooltip.classList.remove('transparent'), 125);
    }
});

app.addEventListener('pointerout', e => {
    if(e.target.classList.contains('sidebar--btn-toggle')) {
        sidebarTooltip.classList.add('transparent');
        setTimeout(() => sidebarTooltip.classList.add('d-none'), 125);
    }
});