const formAddUser = document.querySelector('.form-add-user');
const pattern = /^[a-zA-Z]{1,20}$/;

export const highlightClickedUser = e => {
    const users = document.querySelectorAll('.list-of-users__user');
    users.forEach(user => user.classList.remove('user-active'));
    
    e.target.classList.add('user-active');
};

export const getUserInput = () => formAddUser.user.value.toLowerCase();

export const checkUserInput = userInput => pattern.test(userInput);