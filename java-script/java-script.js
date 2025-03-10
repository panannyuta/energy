const images = [
    "img/1.gif",
    "img/2.gif",
    "img/3.gif",
    "img/4.gif",
    "img/5.gif",
];

let index = 0;
let interval;
let mouseMoveTimeout;
const imageElement = document.getElementById("animatedImage");
const secondScreen = document.getElementById("secondScreen");
const banka = document.getElementById("banka");
const curvedImage = document.getElementById("curvedImage");
const korzina = document.getElementById("korzina");

let isBankaMoved = false; // Флаг для отслеживания состояния банки

function startAnimation() {
    if (!interval) {
        interval = setInterval(() => {
            index = (index + 1) % images.length;
            imageElement.src = images[index];
        }, 350); // Скорость смены картинок
    }
}

function stopAnimation() {
    clearInterval(interval);
    interval = null;
}

document.addEventListener("mousemove", () => {
    clearTimeout(mouseMoveTimeout);
    startAnimation();
    mouseMoveTimeout = setTimeout(stopAnimation, 200); // Остановка после 200 мс без движения
});

// Функция переключения на второй экран
function changeScreen() {
    imageElement.style.display = "none"; // Скрываем картинку с первого экрана
    secondScreen.style.display = "flex"; // Показываем второй экран
}

// Добавляем обработчик клика для первого экрана
document.addEventListener("click", changeScreen);

// Функция для перемещения банки
banka.addEventListener("click", () => {
    if (!isBankaMoved) {
        // Перемещаем банку в нужные координаты
        banka.style.position = "absolute";
        banka.style.left = "68%";
        banka.style.top = "26%";

        // Меняем изображения после перемещения
        setTimeout(() => {
            console.log("Меняем картинки на новые...");
            curvedImage.src = "img/кривая1.png";
            korzina.src = "img/корзина1.png";
            banka.src = "img/банка11.png";
        },); // Небольшая задержка для плавности

        isBankaMoved = true; // Устанавливаем флаг, что банка была перемещена
    } else {
        // Если банка уже перемещена, возвращаем её в исходное положение
        banka.style.left = "25%";
        banka.style.top = "33%";

        // Меняем изображения обратно
        setTimeout(() => {
            console.log("Меняем картинки обратно...");
            curvedImage.src = "img/кривая0.png";
            korzina.src = "img/корзина0.png";
            banka.src = "img/банка1.png";
        },); // Небольшая задержка для плавности

        isBankaMoved = false; // Сбрасываем флаг, чтобы при следующем клике снова переместить
    }
});
