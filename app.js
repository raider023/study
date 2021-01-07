const ulElement = document.querySelector('.buttons');
const resultElement = document.querySelector('.result');

for (let i = 0; i < 10; i++) {
    let btnElement = document.createElement('button');

    btnElement.textContent = `Я номер ${i + 1}`;
    btnElement.classList.add('btn', 'btn-primary');
    ulElement.appendChild(btnElement);

    btnElement.addEventListener('click', () => {
        if(i === 4) {
            alert('You are lucky');
            return true;
        }

        resultElement.textContent = `Ты нажал на кнопку с номером: ${i + 1}`;
    });
}
   
 