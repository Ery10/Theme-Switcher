const button = document.querySelector("#switch-theme");
button.addEventListener("click", () => theme());

document.body.classList.toggle("dark-theme");
document.body.classList.toggle("light-theme");

function theme() {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    const Switch = document.querySelector("#switch-theme");
    Switch.style.transform = "translateX(-132px)";

    const light = document.querySelector("#light-icon");
    light.style.marginLeft = "-132px";
    light.style.visibility = "inherit";
    light.style.opacity = "";

    const container = document.querySelector(".container");
    container.style.background = "#F1F1F1";

    const h1 = document.querySelector("h1");
    h1.style.color = "#292C35";
  } else {
    const Switch = document.querySelector("#switch-theme");
    Switch.style.transform = "";

    const light = document.querySelector("#light-icon");
    light.style.marginLeft = "";
    light.style.visibility = "inherit";
    light.style.opacity = "0";

    const container = document.querySelector(".container");
    container.style.background = "";

    const h1 = document.querySelector("h1");
    h1.style.color = "";
  }
}
