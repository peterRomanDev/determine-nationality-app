import { getCountryName } from './data.js';

const userWindowInfo = document.querySelector('.user-window__info');

export const showUserInfo = async (data) => {
    const name = `${data.name[0].toUpperCase()}${data.name.slice(1).toLowerCase()}`;

    const countryNamePromises = data.country.map(country =>
        getCountryName(country.country_id)
            .then(data => data[0].name.common)
            .catch(err => {
                console.log(err.message);
                return '';
            })
    );

    const countryNames = await Promise.all(countryNamePromises);

    const nationalitiesList = data.country
        .sort((a, b) => b.probability - a.probability)
        .map((country, index) => {
            const probability = (country.probability * 100).toFixed(1);
            const countryName = countryNames[index];

            return `<li class="user-window__nationality">${countryName}: ${probability}%</li>`;
        })
        .join('');

    const template = `
        <div class="user-window__details">
            <h3 class="user-window__h3">Name</h3>
            <span class="user-window__name">${name}</span>
        </div>
        <div class="user-window__details">
            <h3 class="user-window__h3">Possible Nationalities</h3>
            <ul class="user-window__nationalities-list">${nationalitiesList}</ul>
        </div>
    `;

    userWindowInfo.innerHTML = template;
};
