const formAddUser = document.querySelector('.form-add-user');
const formAddUserInput = document.querySelector('.form-add-user__input');
const formAddUserMsg = document.querySelector('.form-add-user__msg');
const pattern = /^[a-zA-Z]{1,20}$/;

export const highlightClickedUser = e => {
    const users = document.querySelectorAll('.list-of-users__user');
    users.forEach(user => user.classList.remove('user-active'));
    
    e.target.classList.add('user-active');
};

export const getUserInput = () => formAddUser.user.value;

export const checkUserInput = userInput => pattern.test(userInput);

export const showFeedbackNone = () => {
    formAddUserInput.classList.remove('border-success');
    formAddUserInput.classList.remove('border-error');

    formAddUserMsg.classList.add('transparent');
    setTimeout(() => formAddUserMsg.classList.add('d-none'), 125);
};

export const showFeedbackSuccess = () => {
    formAddUserInput.classList.remove('border-error');
    formAddUserInput.classList.add('border-success');

    formAddUserMsg.classList.add('transparent');
    setTimeout(() => formAddUserMsg.classList.add('d-none'), 125);
};

export const showFeedbackError = () => {
    formAddUserInput.classList.remove('border-success');
    formAddUserInput.classList.add('border-error');

    formAddUserMsg.classList.remove('d-none');
    setTimeout(() => formAddUserMsg.classList.remove('transparent'), 0);
};