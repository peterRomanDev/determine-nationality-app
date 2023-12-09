import { shrinkDashboard, extendDashboard, enableScrolling, disableScrolling } from './dashboard.js';

export const sidebar = document.querySelector('.sidebar');
const sidebarBtnToggle = document.querySelector('.sidebar-btn-toggle');
const sidebarTooltip = document.querySelector('.sidebar-tooltip');
const lineTop = document.querySelector('.sidebar-btn-toggle__line-top');
const lineCenter = document.querySelector('.sidebar-btn-toggle__line-center');
const lineBottom = document.querySelector('.sidebar-btn-toggle__line-bottom');
const bgDark = document.querySelector('.bg-dark');

const showSidebar = () => {
    sidebar.classList.remove('sidebar-hidden');
    sidebarBtnToggle.classList.remove('sidebar-hidden');
    sidebarTooltip.classList.remove('sidebar-hidden');
};

const hideSidebar = () => {
    sidebar.classList.add('sidebar-hidden');
    sidebarBtnToggle.classList.add('sidebar-hidden');
    sidebarTooltip.classList.add('sidebar-hidden');
};

const setTooltipMsg = msg => sidebarTooltip.textContent = msg;

export const showTooltipMsg = () => {
    sidebarTooltip.classList.remove('d-none');
    setTimeout(() => sidebarTooltip.classList.remove('transparent'), 0);
};

export const hideTooltipMsg = () => {
    sidebarTooltip.classList.add('transparent');
    setTimeout(() => sidebarTooltip.classList.add('d-none'), 125);
};

export const activateBtnToggle = () => {
    lineTop.classList.add('line-top-active');
    lineCenter.classList.add('line-center-active');
    lineBottom.classList.add('line-bottom-active');
};

export const deactivateBtnToggle = () => {
    lineTop.classList.remove('line-top-active');
    lineCenter.classList.remove('line-center-active');
    lineBottom.classList.remove('line-bottom-active');
};

export const showDarkBg = () => {
    bgDark.classList.remove('d-none');
    setTimeout(() => bgDark.classList.remove('transparent'), 0);
};

export const hideDarkBg = () => {
    bgDark.classList.add('transparent');
    setTimeout(() => bgDark.classList.add('d-none'), 125);
};

export const openSidebar = () => {
    // turn the hamburger icon into an X
    activateBtnToggle();
                
    // show sidebar
    showSidebar();

    // update the text of the tooltip message
    setTooltipMsg('Hide sidebar');

    // show dark background
    showDarkBg();

    // if the user is on a mobile...
    if(window.innerWidth < 768) {
        // disable scrolling on the page
        disableScrolling();
    }
    // if the user is on a tablet or a desktop...
    else if(window.innerWidth >= 768) {
        // shrink the dashboard
        shrinkDashboard();
    }
};

export const closeSidebar = () => {
    // turn the hamburger icon into three horizontal lines
    deactivateBtnToggle();
            
    // hide sidebar
    hideSidebar();

    // update the text of the tooltip message
    setTooltipMsg('Show sidebar');

    // hide dark background
    hideDarkBg();

    // if the user is on a mobile...
    if(window.innerWidth < 768) {
        // enable scrolling on the page
        enableScrolling();
    }
    // if the user is on a tablet or a desktop...
    else if(window.innerWidth >= 768) {
        // extend the dashboard to full-screen
        extendDashboard();
    }
};

export const highlightClickedOption = e => {
    const sidebarOptionsBtns = document.querySelectorAll('.sidebar-options__btn');
    
    sidebarOptionsBtns.forEach(btn => btn.classList.remove('sidebar-option-active'));
    e.target.classList.add('sidebar-option-active');
};