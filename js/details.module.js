import Ui from "./ui.module.js";

const gamesUi = new Ui();

export default class Details {
  async getDetails(id) {
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
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

      gamesUi.displayDetails(result);
      this.exitDetails();
      this.goToGame(result.game_url);
    } catch (error) {
      console.error(error);
    }
  }

  exitDetails() {
    document.querySelector(".btn-close").addEventListener("click", function () {
      document.querySelector("#details").classList.add("d-none");
      document.querySelector("#games").classList.remove("d-none");
      document.querySelector(".header").classList.remove("d-none");
    });
  }

  goToGame(gameLink) {
    document
      .querySelector(".btn-details")
      .addEventListener("click", function () {
        window.open(`${gameLink}`);
      });
  }
}
