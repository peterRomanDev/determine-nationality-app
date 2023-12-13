import { addUser, formatName } from './list-of-users.js';

export const storeUser = name => {
    const formattedName = formatName(name);

    let storedUsersJSON = localStorage.getItem('storedUsers');
    const storedUsers = JSON.parse(storedUsersJSON);

    storedUsers.push(formattedName);
    storedUsersJSON = JSON.stringify(storedUsers);

    localStorage.setItem('storedUsers', storedUsersJSON);
};

export const addStoredUsers = () => {
    const storedUsersJSON = localStorage.getItem('storedUsers');
    const storedUsers = JSON.parse(storedUsersJSON);

    storedUsers.forEach(user => addUser(user));
};