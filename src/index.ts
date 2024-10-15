import { formData } from './forms';

const form = document.querySelector('form')!;

console.log('Hello, World!');
console.log('Hello, Typescript & Webpack!');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = formData(form);
    console.log(data);
});