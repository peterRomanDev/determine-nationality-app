import { sidebar, showTooltipMsg, hideTooltipMsg, activateBtnToggle, deactivateBtnToggle, showDarkBg, hideDarkBg, openSidebar, closeSidebar, highlightClickedOption } from './sidebar.js';
import { shrinkDashboard, extendDashboard, enableScrolling, disableScrolling } from './dashboard.js';
import { highlightClickedUser, getUserInput, checkUserInput } from './list-of-users.js';

const app = document.querySelector('.app');

app.addEventListener('click', e => {
    // show/hide sidebar button clicked
    if(e.target.classList.contains('sidebar-btn-toggle')) {
        // if the sidebar is hidden...
        if(sidebar.classList.contains('sidebar-hidden')) {
            // open sidebar
            openSidebar();
        }
        // if the sidebar is visible...
        else {
            // close sidebar
            closeSidebar();
        }
    }
    // dark background clicked
    else if(e.target.classList.contains('bg-dark')) {
        // close sidebar
        closeSidebar();
    }
    // sidebar option button clicked
    else if(e.target.classList.contains('sidebar-options__btn')) {
        // highlight the option button that is clicked
        highlightClickedOption(e);
    }
    // user clicked
    else if(e.target.classList.contains('list-of-users__user')) {
        // highlight the user that is clicked
        highlightClickedUser(e);
    }
});

app.addEventListener('pointerover', e => {
    // the show/hide button is hovered over
    if(e.target.classList.contains('sidebar-btn-toggle')) {
        // display the tooltip message
        showTooltipMsg();
    }
});

app.addEventListener('pointerout', e => {
    // the cursor leaves the show/hide button
    if(e.target.classList.contains('sidebar-btn-toggle')) {
        // hide the tooltip message
        hideTooltipMsg();
    }
});

app.addEventListener('submit', e => {
    // the add user form is submitted by pressing the Add User button or the Enter key
    if(e.target.classList.contains('form-add-user')) {
        const correctUserInput = checkUserInput(getUserInput());

        e.preventDefault();
        
        if(correctUserInput) {
            console.log('good');
        } else {
            console.log('bad');
        }
    }
});

window.addEventListener('resize', () => {
    // if the sidebar is hidden...
    if(sidebar.classList.contains('sidebar-hidden')) {
        // if the user is on a mobile...
        if(window.innerWidth < 768) {
            // shrink the dashboard
            shrinkDashboard();
        }
        // if the user is on a tablet or a desktop...
        else if(window.innerWidth >= 768) {
            // extend the dashboard to full-screen
            extendDashboard();
        }
    }
    // if the sidebar is visible...
    else {
        // if the user is on a mobile...
        if(window.innerWidth < 768) {
            // turn the hamburger icon into an X
            activateBtnToggle();
            
            // shrink the dashboard
            disableScrolling();

            // show dark background
            showDarkBg();
        }
        // if the user is on a tablet or a desktop...
        else if(window.innerWidth >= 768) {
            // extend the dashboard to full-screen
            enableScrolling();

            // hide dark background
            hideDarkBg();
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // if the sidebar is hidden...
    if(sidebar.classList.contains('sidebar-hidden')) {
        // if the user is on a mobile...
        if(window.innerWidth < 768) {
            // shrink the dashboard
            shrinkDashboard();
        }
        // if the user is on a tablet or a desktop...
        else if(window.innerWidth >= 768) {
            // extend the dashboard to full-screen
            extendDashboard();
        }
    }
    // if the sidebar is visible...
    else {
        // if the user is on a mobile...
        if(window.innerWidth < 768) {
            // turn the hamburger icon into an X
            activateBtnToggle();
            
            // shrink the dashboard
            disableScrolling();

            // show dark background
            showDarkBg();
        }
        // if the user is on a tablet or a desktop...
        else if(window.innerWidth >= 768) {
            // extend the dashboard to full-screen
            enableScrolling();

            // hide dark background
            hideDarkBg();
        }
    }
});