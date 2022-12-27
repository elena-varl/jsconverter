//import {getImage} from "./Converter";
//import {summ} from "./Converter";
window.onload = function() {
    let c = {
        "граммы": "1",
        "килограммы": "1000",
        "гранёный стакан": "200",
        "тонкий стакан": "250",
        "столовая ложка": "30",
        "чайная ложка": "5"
    }; //Концепция- перевести в граммы любые значения
    let val = document.getElementById("val"); // Получаем элемент ввода данных
    let tare1 = document.getElementById("tare1"); // Получаем первый селект
    let tare2 = document.getElementById("tare2"); // Получаем второй селект
    let result = document.getElementsByClassName("convert_result")[0]; // Получаем поле куда будем писать результат
    let button = document.getElementById("button"); // Получаем кнопку, по нажатию на которую будет считатся результат
    getImage();
    button.onclick = function() {
        summ();
    };
    function summ() {
        let z = 0;
        if (tare1.value === tare2.value) result.innerText = val.value; // То просто вписываем данные из поля ввода
        else if (tare1.value != "граммы") {
            z = val.value / c[tare1.value]; // Переводим тару в граммы
            result.innerHTML = Math.ceil(z / c[tare2.value] * 100) / 100; // Делим на значение и округляем до сотых
        } else result.innerHTML = Math.ceil(val.value / c[tare2.value] * 100) / 100; // *100)/100; Умножаем на значение и округляем до сотых
    }
};
// Функция для вывода случайной картинки
function getImage() {
    const random = Math.floor(Math.random() * 5); // 5, потому что у нас 5 картинок случайных
    return "<img src=/img/day" + (random + 1) + '.jpg alt="" />'; // подставляем в путь до картинки, + 1 потому что генерирует с 0
}
document.getElementById("img").innerHTML = getImage(); // вызываем функцию и вставляем получившуюся img в див с id "img"

//# sourceMappingURL=index.09c24910.js.map
