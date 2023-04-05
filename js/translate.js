const select = document.querySelector('select');

select.addEventListener('change', changeURLlanguage);

function changeURLlanguage() {
    let lng = select.value;
    location.href = window.location.pathname + '#'+lng;
    location.reload();
}