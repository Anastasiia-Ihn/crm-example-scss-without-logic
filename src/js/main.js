import "../scss/main.scss";

(() => {
  const list = {
    menu: document.querySelector(".js-menu"),
    close: document.querySelector(".js-menu-close"),
    open: document.querySelector(".js-menu-open"),
  };

  function handlerToggleModal() {
    list.menu.classList.toggle("is-open");
  }

  list.open.addEventListener("click", handlerToggleModal);
  list.close.addEventListener("click", handlerToggleModal);
})();
