export const highlightClickedUser = e => {
    const users = document.querySelectorAll('.list-of-users__user');
    users.forEach(user => user.classList.remove('user-active'));
    
    e.target.classList.add('user-active');
};