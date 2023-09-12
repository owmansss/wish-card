const submitBtn = document.getElementById('submitButton');
const username = document.getElementById('userName');
const content = document.getElementById('content');
const myForm = document.getElementById('myForm');
import { readFileSync, writeFileSync } from 'fs'; // error na didieu


let name = '';
let wish = '';

function getValue(event) {
    event.preventDefault();
    // declare name & wish as value tina username jg content
    name = username.value;
    wish = content.value;

    let result = name + ' - ' + wish;

    username.value = '';
    content.value = '';

    console.log(result);

    // nunda data
    let file = readFileSync('/data.json', 'utf-8');
    let sum = JSON.parse(file);
    sum.push({ name, wish });
    writeFileSync('data.json', JSON.stringify(sum));

    return result;
}

submitBtn.addEventListener('click', getValue);

myForm.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        getValue(e); // Call the getValue function when "Enter" is pressed
    }
});
