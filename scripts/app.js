const dashboardWrapper = document.querySelector('.dashboard-wrapper');
const dashboard = document.querySelector('.dashboard');
const dashboardTooltip = document.querySelector('.dashboard-tooltip');

dashboardWrapper.addEventListener('click', e => {
    if(e.target.classList.contains('dashboard--btn-toggle')) {
        if(dashboardWrapper.classList.contains('dashboard-hidden')) {
            dashboardWrapper.classList.remove('dashboard-hidden');
            dashboardTooltip.textContent = 'Hide Dashboard';
        } else {
            dashboardWrapper.classList.add('dashboard-hidden');
            dashboardTooltip.textContent = 'Show Dashboard';
        }
    }
});

dashboardWrapper.addEventListener('pointerover', e => {
    if(e.target.classList.contains('dashboard--btn-toggle')) {
        dashboardTooltip.classList.remove('d-none');
        setTimeout(() => dashboardTooltip.classList.remove('transparent'), 125);
    }
});

dashboardWrapper.addEventListener('pointerout', e => {
    if(e.target.classList.contains('dashboard--btn-toggle')) {
        dashboardTooltip.classList.add('transparent');
        setTimeout(() => dashboardTooltip.classList.add('d-none'), 125);
    }
});