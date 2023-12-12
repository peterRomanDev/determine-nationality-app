export const getData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if(response.status !== 200) {
        throw new Error(`Could not fetch data. Status: ${response.status}, Status text: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
};