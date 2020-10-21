import './styles.scss';
import foodsData from './menu.json';
import foodCardsTpl from './templates/food-cards.hbs';

const bodyRef = document.querySelector('body');
const MenuListRef = document.querySelector('.js-menu');
const checkboxRef = document.querySelector('#theme-switch-toggle');

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
    STORAGE_KEY: 'theme',
    CHECKBOX_STATUS: false,
};

initTheme(Theme.STORAGE_KEY);

checkboxRef.addEventListener('change', changeTheme);

MenuListRef.innerHTML = foodCardsTpl(foodsData);

function initTheme(key) {
    const keyinLocalStorage = localStorage.getItem(key);
    if (keyinLocalStorage && keyinLocalStorage === Theme.DARK) {
        checkboxRef.checked = true;
        setDarkTheme();
    }
}

function changeTheme() {
    if (Theme.CHECKBOX_STATUS) setLightTheme();
    else setDarkTheme();
}

function setLightTheme() {
    localStorage.setItem(Theme.STORAGE_KEY, Theme.LIGHT);
    Theme.CHECKBOX_STATUS = false;
    bodyRef.classList.remove(Theme.DARK);
    bodyRef.classList.add(Theme.LIGHT);
}

function setDarkTheme() {
    localStorage.setItem(Theme.STORAGE_KEY, Theme.DARK);
    Theme.CHECKBOX_STATUS = true;
    bodyRef.classList.remove(Theme.LIGHT);
    bodyRef.classList.add(Theme.DARK);
}