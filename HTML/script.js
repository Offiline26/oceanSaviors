let actualTheme = "LIGHT";
themeIcon = {
    'LIGHT': '../IMG/night-mode.png',
    'DARK': '../IMG/themes.png'
}

window.addEventListener("load", () => toogleIconTheme());

function toogleTheme() {
    if (actualTheme == "LIGHT") {
        darkTheme();
        return;
    }
    lightTheme();
}

function darkTheme() {
    actualTheme = "DARK";
    document.body.classList.add("darkTheme")
    toogleIconTheme();
}

function lightTheme() {
    actualTheme = "LIGHT";
    document.body.classList.remove("darkTheme")
    toogleIconTheme();
}

function toogleIconTheme() {
    document.getElementById("themeButton").innerHTML = `<img class="icon" src="${themeIcon[actualTheme]}">`;
}