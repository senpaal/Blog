const settings = document.getElementById("settings"); // Надо найти элемент с id="settings" и вернуть его

let hidden = true;
// Говорим мистеру настройки что надо при нажати на него открыть панель настроек
settings.addEventListener("click", () => {
    // Надо найти элемент с id="panelSettings" и вернуть его
    // И сделать его видимым
    // Чтобы делать элементы видимыми надо у них убрать класс "hidden"
    if(hidden) {
        document.getElementById("panelSettings").classList.remove("hidden");
        hidden = false;
    } else {
        document.getElementById("panelSettings").classList.add("hidden");
        hidden = true;
    }
});

const select = document.getElementById("select"); // Надо найти элемент с id="select" и вернуть его

select.addEventListener("change", (e) => {
    const value = e.target.value; // Надо получить значение выбранного элемента
    localStorage.setItem("theme", value); // Надо сохранить значение в localStorage
    document.documentElement.style.setProperty('--first-color', value.split(" ")[0]); // Надо установить значение переменной --theme
    document.documentElement.style.setProperty('--second-color', value.split(" ")[1]); // Надо установить значение переменной --theme
});

async function main() {
    const theme = localStorage.getItem("theme"); // Надо получить значение из localStorage
    if(theme) {
        document.documentElement.style.setProperty('--first-color', theme.split(" ")[0]); // Надо установить значение переменной --theme
        document.documentElement.style.setProperty('--second-color', theme.split(" ")[1]); // Надо установить значение переменной --theme
    }
}

main()