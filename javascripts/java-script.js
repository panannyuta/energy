const images = [
    "img/1 экран/1.gif",
    "img/1 экран/2.gif",
    "img/1 экран/3.gif",
    "img/1 экран/4.gif",
    "img/1 экран/5.gif",
];

let index = 0;
let interval;
let mouseMoveTimeout;
const imageElement = document.getElementById("animatedImage");
const secondScreen = document.getElementById("secondScreen");
const curvedImage = document.getElementById("curvedImage");
const korzina = document.getElementById("korzina");

function startAnimation() {
    if (!interval) {
        interval = setInterval(() => {
            index = (index + 1) % images.length;
            imageElement.src = images[index];
        }, 350);
    }
}

function stopAnimation() {
    clearInterval(interval);
    interval = null;
}

document.addEventListener("mousemove", () => {
    clearTimeout(mouseMoveTimeout);
    startAnimation();
    mouseMoveTimeout = setTimeout(stopAnimation, 200);
});

document.addEventListener("click", () => {
    imageElement.style.display = "none";
    secondScreen.style.display = "flex";
});

const bankas = document.querySelectorAll("[id^=banka]");
const mappings = {
    banka: { curve: "кривая1.png", basket: "корзина1.png", jar: "банка1.png" },
    banka2: { curve: "кривая2.png", basket: "корзина2.png", jar: "банка2.png" },
    banka3: { curve: "кривая3.png", basket: "корзина3.png", jar: "банка3.png" },
    banka4: { curve: "кривая4.png", basket: "корзина4.png", jar: "банка4.png" },
    banka5: { curve: "кривая5.png", basket: "корзина5.png", jar: "банка5.png" }
};

let activeBanka = null;

bankas.forEach(banka => {
    banka.dataset.originalLeft = banka.style.left;
    banka.dataset.originalTop = banka.style.top;
    banka.addEventListener("click", () => {
        if (activeBanka === banka) {
            banka.style.left = banka.dataset.originalLeft;
            banka.style.top = banka.dataset.originalTop;
            banka.src = "img/2 экран/банка0.png";
            curvedImage.src = "img/2 экран/кривая0.png";
            korzina.src = "img/2 экран/корзина0.png";
            activeBanka = null;
        } else {
            if (activeBanka) {
                activeBanka.style.left = activeBanka.dataset.originalLeft;
                activeBanka.style.top = activeBanka.dataset.originalTop;
                activeBanka.src = "img/2 экран/банка0.png";
            }
            banka.style.left = "68%";
            banka.style.top = "27%";
            banka.src = `img/2 экран/${mappings[banka.id].jar}`;
            curvedImage.src = `img/2 экран/${mappings[banka.id].curve}`;
            korzina.src = `img/2 экран/${mappings[banka.id].basket}`;
            activeBanka = banka;
        }
    });
});

// === АНИМАЦИЯ ДВИЖЕНИЯ ТЕКСТА по траектории ===
document.addEventListener("DOMContentLoaded", () => {
    // Обработка для ingredient1 и ingredient11
    const ingredient1 = document.querySelector(".ingredient1");
    const ingredient11 = document.querySelector(".ingredient11");

    let isStopped1 = false;

    const updateIngredient11Position = () => {
        const rect = ingredient1.getBoundingClientRect();
        const containerRect = document.getElementById("bottomHalf").getBoundingClientRect();

        const left = rect.left - containerRect.left;
        const top = rect.bottom - containerRect.top;

        ingredient11.style.left = `${left}px`;
        ingredient11.style.top = `${top}px`;
    };

    const observer1 = new MutationObserver(updateIngredient11Position);
    observer1.observe(ingredient1, { attributes: true, attributeFilter: ["style"] });

    ingredient1.addEventListener("click", () => {
        if (isStopped1) {
            ingredient1.style.animationPlayState = "running";
            ingredient1.classList.remove("stopped");
            ingredient11.style.display = "none";
        } else {
            ingredient1.style.animationPlayState = "paused";
            ingredient1.classList.add("stopped");
            ingredient11.style.display = "block";
            updateIngredient11Position();
        }
        isStopped1 = !isStopped1;
    });

    window.addEventListener("resize", updateIngredient11Position);

    // Обработка для ingredient2 и ingredient22
    const ingredient2 = document.querySelector(".ingredient2");
    const ingredient22 = document.querySelector(".ingredient22");

    let isStopped2 = false;

    const updateIngredient22Position = () => {
        const rect = ingredient2.getBoundingClientRect();
        const containerRect = document.getElementById("bottomHalf").getBoundingClientRect();

        const left = rect.left - containerRect.left;
        const top = rect.bottom - containerRect.top;

        ingredient22.style.left = `${left}px`;
        ingredient22.style.top = `${top}px`;
    };

    const observer2 = new MutationObserver(updateIngredient22Position);
    observer2.observe(ingredient2, { attributes: true, attributeFilter: ["style"] });

    ingredient2.addEventListener("click", () => {
        if (isStopped2) {
            ingredient2.style.animationPlayState = "running";
            ingredient2.classList.remove("stopped");
            ingredient22.style.display = "none";
        } else {
            ingredient2.style.animationPlayState = "paused";
            ingredient2.classList.add("stopped");
            ingredient22.style.display = "block";
            updateIngredient22Position();
        }
        isStopped2 = !isStopped2;
    });

    window.addEventListener("resize", updateIngredient22Position);

    // Обработка для ingredient3 и ingredient33
    const ingredient3 = document.querySelector(".ingredient3");
    const ingredient33 = document.querySelector(".ingredient33");

    let isStopped3 = false;

    const updateIngredient33Position = () => {
        const rect = ingredient3.getBoundingClientRect();
        const containerRect = document.getElementById("bottomHalf").getBoundingClientRect();

        const left = rect.left - containerRect.left;
        const top = rect.bottom - containerRect.top;

        ingredient33.style.left = `${left}px`;
        ingredient33.style.top = `${top}px`;
    };

    const observer3 = new MutationObserver(updateIngredient33Position);
    observer3.observe(ingredient3, { attributes: true, attributeFilter: ["style"] });

    ingredient3.addEventListener("click", () => {
        if (isStopped3) {
            ingredient3.style.animationPlayState = "running";
            ingredient3.classList.remove("stopped");
            ingredient33.style.display = "none";
        } else {
            ingredient3.style.animationPlayState = "paused";
            ingredient3.classList.add("stopped");
            ingredient33.style.display = "block";
            updateIngredient33Position();
        }
        isStopped3 = !isStopped3;
    });

    window.addEventListener("resize", updateIngredient33Position);

    // Обработка для ingredient4 и ingredient44
    const ingredient4 = document.querySelector(".ingredient4");
    const ingredient44 = document.querySelector(".ingredient44");

    let isStopped4 = false;

    const updateIngredient44Position = () => {
        const rect = ingredient4.getBoundingClientRect();
        const containerRect = document.getElementById("bottomHalf").getBoundingClientRect();

        const left = rect.left - containerRect.left;
        const top = rect.bottom - containerRect.top;

        ingredient44.style.left = `${left}px`;
        ingredient44.style.top = `${top}px`;
    };

    const observer4 = new MutationObserver(updateIngredient44Position);
    observer4.observe(ingredient4, { attributes: true, attributeFilter: ["style"] });

    ingredient4.addEventListener("click", () => {
        if (isStopped4) {
            ingredient4.style.animationPlayState = "running";
            ingredient4.classList.remove("stopped");
            ingredient44.style.display = "none";
        } else {
            ingredient4.style.animationPlayState = "paused";
            ingredient4.classList.add("stopped");
            ingredient44.style.display = "block";
            updateIngredient44Position();
        }
        isStopped4 = !isStopped4;
    });

    window.addEventListener("resize", updateIngredient44Position);

    // Обработка для ingredient5 и ingredient55
    const ingredient5 = document.querySelector(".ingredient5");
    const ingredient55 = document.querySelector(".ingredient55");

    let isStopped5 = false;

    const updateIngredient55Position = () => {
        const rect = ingredient5.getBoundingClientRect();
        const containerRect = document.getElementById("bottomHalf").getBoundingClientRect();

        const left = rect.left - containerRect.left;
        const top = rect.bottom - containerRect.top;

        ingredient55.style.left = `${left}px`;
        ingredient55.style.top = `${top}px`;
    };

    const observer5 = new MutationObserver(updateIngredient55Position);
    observer5.observe(ingredient5, { attributes: true, attributeFilter: ["style"] });

    ingredient5.addEventListener("click", () => {
        if (isStopped5) {
            ingredient5.style.animationPlayState = "running";
            ingredient5.classList.remove("stopped");
            ingredient55.style.display = "none";
        } else {
            ingredient5.style.animationPlayState = "paused";
            ingredient5.classList.add("stopped");
            ingredient55.style.display = "block";
            updateIngredient55Position();
        }
        isStopped5 = !isStopped5;
    });

    window.addEventListener("resize", updateIngredient55Position);
});

document.addEventListener("DOMContentLoaded", () => {
    // Получаем все тексты и картинки
    const ingredient1 = document.querySelector(".ingredient1");
    const ingredient2 = document.querySelector(".ingredient2");
    const ingredient3 = document.querySelector(".ingredient3");
    const ingredient4 = document.querySelector(".ingredient4");
    const ingredient5 = document.querySelector(".ingredient5");

    const gradient1 = document.querySelector(".gradient1");
    const gradient2 = document.querySelector(".gradient2");
    const gradient3 = document.querySelector(".gradient3");
    const gradient4 = document.querySelector(".gradient4");
    const gradient5 = document.querySelector(".gradient5");

    // Функция для переключения видимости картинки
    const toggleGradient = (gradient) => {
        if (gradient.style.display === "none" || gradient.style.display === "") {
            gradient.style.display = "block"; // Показываем картинку
        } else {
            gradient.style.display = "none"; // Скрываем картинку
        }
    };

    // Обработчики кликов
    ingredient1.addEventListener("click", () => {
        toggleGradient(gradient1);
    });

    ingredient2.addEventListener("click", () => {
        toggleGradient(gradient2);
    });

    ingredient3.addEventListener("click", () => {
        toggleGradient(gradient3);
    });

    ingredient4.addEventListener("click", () => {
        toggleGradient(gradient4);
    });

    ingredient5.addEventListener("click", () => {
        toggleGradient(gradient5);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // Получаем все тексты и картинки
    const ingredients = [
        { text: document.querySelector(".ingredient1"), hidden: document.querySelector(".ingredient11"), gradient: document.querySelector(".gradient1") },
        { text: document.querySelector(".ingredient2"), hidden: document.querySelector(".ingredient22"), gradient: document.querySelector(".gradient2") },
        { text: document.querySelector(".ingredient3"), hidden: document.querySelector(".ingredient33"), gradient: document.querySelector(".gradient3") },
        { text: document.querySelector(".ingredient4"), hidden: document.querySelector(".ingredient44"), gradient: document.querySelector(".gradient4") },
        { text: document.querySelector(".ingredient5"), hidden: document.querySelector(".ingredient55"), gradient: document.querySelector(".gradient5") }
    ];

    let activeIngredient = null; // Текущий активный текст

    // Функция для активации текста
    const activateIngredient = (ingredient) => {
        // Если уже есть активный текст, деактивируем его
        if (activeIngredient) {
            activeIngredient.text.style.animationPlayState = "running";
            activeIngredient.text.classList.remove("stopped");
            activeIngredient.hidden.style.display = "none";
            activeIngredient.gradient.style.display = "none";
        }

        // Активируем новый текст
        if (activeIngredient === ingredient) {
            // Если кликнули на уже активный текст, деактивируем его
            activeIngredient = null;
        } else {
            ingredient.text.style.animationPlayState = "paused";
            ingredient.text.classList.add("stopped");
            ingredient.hidden.style.display = "block";
            ingredient.gradient.style.display = "block";
            activeIngredient = ingredient;
        }
    };

    // Добавляем обработчики кликов для каждого текста
    ingredients.forEach((ingredient) => {
        ingredient.text.addEventListener("click", () => {
            activateIngredient(ingredient);
        });
    });
});