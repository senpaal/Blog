<!DOCTYPE html>
<html lang="en">
<?php
    include 'head.php';
?>
<body>
    <div class="panel">
        <h1 class="titleMe">Portfolio</h1>
        <a class="panelHome" href="/">Home</a>
        <a class="panelAboutme" href="aboutme.html">About me</a>
        <a class="panelWorks" href="works.html">My works</a>
        <a class="panelContacts" href="contacts.html">My contacts</a>
        <select class="optionsLang">
            <option value="ru" selected>RU</option>
            <option value="en">EN</option>
        </select>
        <!-- <div class="d-flex flex-column">
            <button class="Theme mb-2" onclick="lightTheme()"><i class="fa-solid fa-sun"></i></button>
            <button class="Theme"onclick="darkTheme()"><i class="fa-solid fa-moon"></i></button>
        </div> -->
    </div>
    <div class="container">
        <nav class="navbar navbar-expand-md navbar-dark">
            <span class="navbar-brand">Portfolio</span>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link linkhome" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="aboutme.html">About me</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="works.html">My works</a>
                    </li>
                    <li class="nav-item">
                        <span style="cursor: default" class="nav-text" href="contacts.html">-- My contacts: --</span>
                    </li>
                    <ul>
                        <li>
                            <a class="nav-link" href="https://discordapp.com/users/328901168447225867" target="_blank">> Discord</a>
                        </li>
                        <li>
                            <a class="nav-link" href="https://vk.com/senpaall" target="_blank">> VK</a>
                        </li>
                        <li>
                            <a class="nav-link" href="https://github.com/senpaal" target="_blank">> GitHub</a>
                        </li>
                    </ul>
                    <li class="nav-item">
                        <select class="optionsLangMobile mt-2">
                            <option value="ru" selected>RU</option>
                            <option value="en">EN</option>
                        </select>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    <div class="main">
        <h1 class="lng-hello">Привет!</h1>
        <h2 class="lng-welcome px-3 text-center my-2">Добро пожаловать в мой блог!</h2>
        <hd class="my-3"></hd>
        <h1 class="lng-see">Что тут можно увидеть?</h1>
        <div class="grid container">
            <div class="row align-items-center justify-content-center mt-4">
                <div class="grid-item-1 col-sm-12 col-xxl-6 mb-2">
                    <span class="lng-grid-1">Мои учения</span>
                    <p class="lng-info-1">Я читал учебник и делал упражнения, чтобы добиться такого</p>
                </div>
                <div class="grid-item-2 col-sm-12 col-xxl-6 mb-2 py-4">
                    <span class="lng-grid-2">Мои развития</span>
                    <p class="lng-info-2">Я обретал всё больше и больше знаний, учась на ошибках</p>
                </div>
                </div>
                <div class="row align-items-center justify-content-center custom_row">
                <div class="grid-item-3 col-sm-12 col-xxl-6 mb-2 py-4">
                    <span class="lng-grid-3">Мои попытки</span>
                    <p class="lng-info-3">Не всё было гладко, но я старался и не терял мотивацию</p>
                </div>
                <div class="grid-item-4 col-sm-12 col-xxl-6 mb-2 py-4">
                    <span class="lng-grid-4">Мои успехи</span>
                    <p class="lng-info-4">С помощью моих знаний и умений, я смог сделать этот сайт, и это не всё</p>
                </div>
            </div>
        </div>
        <hd class="mb-3"></hd>
        <h1 class="lng-forth my-3">Что ещё?</h1>
        <h2 class="lng-endtext text-center mb-3">У меня есть портфолио, в котором ты можешь ознакомиться с моими работами.</h2>
        <button onclick="window.location.href = 'aboutme.html'" class="lng-buttonPortfolio">Портфолио</button>
    </div>
    <script src="js/lng.js"></script>
    <script src="js/translate.js"></script>
    <!-- <script src="js/theme.js"></script> -->
</body>
</html>