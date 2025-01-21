import { addUser, formatName } from './list-of-users.js';

export const storeUser = name => {
    const formattedName = formatName(name);

    let storedUsersJSON = localStorage.getItem('storedUsers');
    const storedUsers = JSON.parse(storedUsersJSON);

    if (storedUsers) {
        storedUsers.push(formattedName);
        
        storedUsersJSON = JSON.stringify(storedUsers);
        localStorage.setItem('storedUsers', storedUsersJSON);
    }
};

export const addStoredUsers = () => {
    const storedUsersJSON = localStorage.getItem('storedUsers');
    const storedUsers = JSON.parse(storedUsersJSON);
    
    if (storedUsers) {
        storedUsers.forEach(user => addUser(user));
    }
};

export const deleteStoredUser = user => {
    let storedUsersJSON = localStorage.getItem('storedUsers');
    const storedUsers = JSON.parse(storedUsersJSON);

    if (storedUsers) {
        storedUsers.forEach((storedUser, index) => {
            if(storedUser === user) {
                storedUsers.splice(index, 1);
            }
        });
    }

    storedUsersJSON = JSON.stringify(storedUsers);
    localStorage.setItem('storedUsers', storedUsersJSON);
};