import Games from "./games.module.js";
const gamesUi = new Games();

class Nav {
  navigate() {
    const navLinks = document.querySelectorAll(".nav-link");

    gamesUi.getGames("mmorpg");

    let activeNavLink = navLinks[0];

    navLinks.forEach((navLink) => {
      navLink.addEventListener("click", function (e) {
        if (activeNavLink) {
          activeNavLink.classList.remove("active");
        }
        let category = navLink.getAttribute("category");

        activeNavLink = navLink;

        navLink.classList.add("active");
        gamesUi.getGames(category);
      });
    });
  }
}

const navigation = new Nav();
navigation.navigate();
