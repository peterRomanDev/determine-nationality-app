import { home } from './pageHome.js';
import { btnPageManageUsers, highlightPageBtn } from './sidebar.js';
import { listOfUsers } from './list-of-users.js';
import { userWindow } from './user-window.js';

export const pageManageUsers = () => {
    home.classList.add('d-none');

    listOfUsers.classList.remove('d-none');
    userWindow.classList.remove('d-none');

    highlightPageBtn(btnPageManageUsers);
};