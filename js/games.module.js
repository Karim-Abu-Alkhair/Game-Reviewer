import Ui from "./ui.module.js";
import Details from "./details.module.js";

const gamesUi = new Ui();
const gamesDetails = new Details();

export default class Games {
  async getGames(category) {
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "0e9aeaf390mshfb03abefceb4c53p12de1djsnfb4081dead85",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    try {
      const loader = document.querySelector(".loader");

      let isLoading = true;
      if (isLoading) loader.classList.remove("d-none");
      const response = await fetch(url, options);
      const result = await response.json();

      isLoading = false;
      if (!isLoading) loader.classList.add("d-none");
      gamesUi.displayGames(result);
      this.exploreGame();
      gamesUi.stickyNav();
    } catch (error) {
      console.error(error);
    }
  }

  exploreGame() {
    document.querySelectorAll(".game-card").forEach(function (card) {
      card.addEventListener("click", function () {
        let gameID = card.getAttribute("gameID");

        document.querySelector("#details").classList.remove("d-none");
        document.querySelector("#games").classList.add("d-none");
        document.querySelector(".header").classList.add("d-none");
        gamesDetails.getDetails(gameID);
      });
    });
  }
}
