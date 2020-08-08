const btns = document.querySelectorAll('button'), // все кнопки на странице
      overlay = document.querySelector('.overlay');

// btn.onclick = function() {
//     alert('Click');
// };

// btn.onclick = function() {
//     alert('Second click');
// }; // в итоге выведется только Second click

// btn.addEventListener('click', (e) => {
//     console.log(e.target); // получить доступ к элементу
//     e.target.remove();
//     console.log('Hover');
// });

// let i = 0;
const deleteElement = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // } // значит что можно кликнуть только один раз
};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true}); // once true значит что можно кликнуть только один раз
}); // добавить обработчика событий всем кнопкам

const link = document.querySelector('a');

link.addEventListener('click', function(event) {
    event.preventDefault(); // чтобы не переходить по ссылке

    console.log(event.target);
});
