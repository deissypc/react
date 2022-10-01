const hola = document.getElementById("icon");
        const menu = document.getElementById("menu");
        hola.addEventListener("click", (e) => {
          menu.classList.toggle("show-menu");
          console.log("click");
        });