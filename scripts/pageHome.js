import { btnPageHome, highlightPageBtn } from './sidebar.js';
import { listOfUsers } from './list-of-users.js';
import { userWindow } from './user-window.js';

export const home = document.querySelector('.home');

export const pageHome = () => {
    listOfUsers.classList.add('d-none');
    userWindow.classList.add('d-none');

    home.classList.remove('d-none');

    highlightPageBtn(btnPageHome);
};