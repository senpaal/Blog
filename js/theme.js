function lightTheme() {
    var body = document.getElementsByTagName("body")[0];
    var grid = document.getElementsByTagName("div.grid.container div.row.align-items-center.justify-content-center.mt-4 .col-sm-12")[0];
    body.removeAttribute("class");
    body.setAttribute("class", "light");
    grid.removeAttribute("class", "dark");
    grid.setAttribute("class", "light");
    localStorage.setItem("theme", "light");
  }
  
  function darkTheme() {
    var body = document.getElementsByTagName("body")[0];
    var grid = document.getElementsByTagName("hdiv.grid.container div.row.align-items-center.justify-content-center.mt-4 div")[0];
    body.removeAttribute("class");
    body.setAttribute("class", "dark");
    grid.removeAttribute("class", "light");
    grid.setAttribute("class", "dark");
    localStorage.setItem("theme", "dark");
  }

var savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
   darkTheme();
} else {
   lightTheme();
}

