import { addUser, formatName } from './list-of-users.js';

export const storeUser = name => {
    const formattedName = formatName(name);

    let storedUsersJSON = localStorage.getItem('storedUsers');

    if (!storedUsersJSON || storedUsersJSON === 'null') {
        // if there are no stored users - if storedUsersJSON is falsy or if it is a string of 'null'
        const storedUsers = [];
        storedUsers.push(formattedName);

        const storedUsersJSON = JSON.stringify(storedUsers);
        localStorage.setItem('storedUsers', storedUsersJSON);
    } else {
        // if there are stored users
        const storedUsers = JSON.parse(storedUsersJSON);
        storedUsers.push(formattedName);

        storedUsersJSON = JSON.stringify(storedUsers);
        localStorage.setItem('storedUsers', storedUsersJSON);
    }
};

export const addStoredUsers = () => {
    let storedUsersJSON = localStorage.getItem('storedUsers');

    if (!storedUsersJSON || storedUsersJSON === 'null') return;
    // return if there are no stored users - if storedUsersJSON is falsy or if it is a string of 'null'

    // if there are stored users
    const storedUsers = JSON.parse(storedUsersJSON);
    storedUsers.forEach(user => addUser(user));
};

export const deleteStoredUser = user => {
    let storedUsersJSON = localStorage.getItem('storedUsers');

    if (!storedUsersJSON || storedUsersJSON === 'null') return;
    // return if there are no stored users - if storedUsersJSON is falsy or if it is a string of 'null'

    // if there are stored users
    const storedUsers = JSON.parse(storedUsersJSON);
    storedUsers.forEach((storedUser, index) => {
        if(storedUser === user) {
            storedUsers.splice(index, 1);
        }
    });

    storedUsersJSON = JSON.stringify(storedUsers);
    localStorage.setItem('storedUsers', storedUsersJSON);

    if (storedUsers.length === 0) {
        // if all users have been deleted from the local storage, remove the storedUsers entry from the local storage entirely
        localStorage.removeItem('storedUsers');
    }
};