export const dashboardWrapper = document.querySelector('.dashboard-wrapper');
const body = document.querySelector('body');

export const shrinkDashboard = () => dashboardWrapper.classList.remove('dashboard-full-screen');
export const extendDashboard = () => dashboardWrapper.classList.add('dashboard-full-screen');

export const enableScrolling = () => {
    const focusableElements = dashboardWrapper.querySelectorAll('a, button, input, select, textarea');
    
    focusableElements.forEach(focusableElement => focusableElement.setAttribute('tabindex', 0));
    body.classList.remove('scrolling-disabled');
};

export const disableScrolling = () => {
    const focusableElements = dashboardWrapper.querySelectorAll('a, button, input, select, textarea');
    
    focusableElements.forEach(focusableElement => focusableElement.setAttribute('tabindex', -1));
    body.classList.add('scrolling-disabled');
};