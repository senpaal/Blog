const select = document.querySelector('.optionsLang');
const allLang = ['en', 'ru'];

select.addEventListener('change', changeURLLanguage);

// перенаправить на url с указанием языка
function changeURLLanguage() {
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substr(1);
    console.log(hash);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#ru';
        location.reload();
    }
    select.value = hash;
    document.querySelector('title').innerHTML = langArr['unit'][hash];
    // document.querySelector('.lng-chip').innerHTML = langArr['chip'][hash];
    for (let key in langArr) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }
    }
}
changeLanguage();


const selectMobile = document.querySelector('.optionsLangMobile');
selectMobile.addEventListener('change', changeURLLanguageM);

function changeURLLanguageM() {
    let langM = selectMobile.value;
    location.href = window.location.pathname + '#' + langM;
    location.reload();
}

function changeLanguageM() {
    let hashM = window.location.hash;
    hashM = hashM.substr(1);
    console.log(hashM);
    if (!allLang.includes(hashM)) {
        location.href = window.location.pathname + '#ru';
        location.reload();
    }
    selectMobile.value = hashM;
    document.querySelector('title').innerHTML = langArr['unit'][hashM];
    // document.querySelector('.lng-chip').innerHTML = langArr['chip'][hash];
    for (let key in langArr) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = langArr[key][hashM];
        }
    }
}
changeLanguageM();
