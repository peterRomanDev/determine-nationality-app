export const getUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if(response.status !== 200) {
        throw new Error(`Could not fetch data. Status: ${response.status}, Status text: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
};

export const getNationalities = async name => {
    const response = await fetch(`https://api.nationalize.io?name=${name}`);

    if(response.status !== 200) {
        throw new Error(`Could not fetch data. Status: ${response.status}, Status text: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
};

export const getCountryName = async countryCode => {
    const response = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);

    if(response.status !== 200) {
        throw new Error(`Could not fetch data. Status: ${response.status}, Status text: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
};