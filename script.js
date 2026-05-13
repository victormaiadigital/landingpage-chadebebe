const checkoutButtons = document.querySelectorAll(".checkout-btn");

checkoutButtons.forEach((button) => {
  button.addEventListener("click", function (event) {
    const checkoutLink = this.getAttribute("href");

    if (checkoutLink === "COLE_AQUI_O_LINK_DO_CHECKOUT") {
      event.preventDefault();

      alert("Adicione o link do checkout da Kiwify ou Hotmart neste botão.");
    }
  });
});