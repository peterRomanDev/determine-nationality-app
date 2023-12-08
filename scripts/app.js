const app = document.querySelector('.app');
const sidebarWrapper = document.querySelector('.sidebar-wrapper');
const sidebar = document.querySelector('.sidebar');
const sidebarTooltip = document.querySelector('.sidebar-tooltip');
const dashboardWrapper = document.querySelector('.dashboard-wrapper');

app.addEventListener('click', e => {
    // show/hide sidebar button clicked
    if(e.target.classList.contains('sidebar-btn-toggle')) {
        // if the sidebar is hidden...
        if(sidebarWrapper.classList.contains('sidebar-hidden')) {
            // show sidebar
            sidebarWrapper.classList.remove('sidebar-hidden');

            // update the text of the tooltip message
            sidebarTooltip.textContent = 'Hide sidebar';

            // shrink the dashboard
            dashboardWrapper.classList.remove('dashboard-full-screen');
        }
        // if the sidebar is visible...
        else {
            // hide sidebar
            sidebarWrapper.classList.add('sidebar-hidden');

            // update the text of the tooltip message
            sidebarTooltip.textContent = 'Show sidebar';

            // extend the dashboard to full-screen
            dashboardWrapper.classList.add('dashboard-full-screen');
        }
    }
    // sidebar option button clicked
    else if(e.target.classList.contains('sidebar-options__btn')) {
        // make all the buttons not highlighted
        const sidebarOptionsBtns = document.querySelectorAll('.sidebar-options__btn');
        sidebarOptionsBtns.forEach(btn => btn.classList.remove('sidebar-option-active'));
        
        // highlight the option button that is clicked
        e.target.classList.add('sidebar-option-active');
    }
    // user clicked
    else if(e.target.classList.contains('list-of-users__user')) {
        // make all the users not highlighted
        const users = document.querySelectorAll('.list-of-users__user');
        users.forEach(user => user.classList.remove('user-active'));
        
        // highlight the user that is clicked
        e.target.classList.add('user-active');
    }
});

app.addEventListener('pointerover', e => {
    // the show/hide button is hovered over
    if(e.target.classList.contains('sidebar-btn-toggle')) {
        // display the tooltip message
        sidebarTooltip.classList.remove('d-none');
        
        // show the tooltip message
        setTimeout(() => sidebarTooltip.classList.remove('transparent'), 125);
    }
});

app.addEventListener('pointerout', e => {
    // the cursor leaves the show/hide button
    if(e.target.classList.contains('sidebar-btn-toggle')) {
        // hide the tooltip message
        sidebarTooltip.classList.add('transparent');

        // undisplay the tooltip message
        setTimeout(() => sidebarTooltip.classList.add('d-none'), 125);
    }
});