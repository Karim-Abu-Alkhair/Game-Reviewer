export default class Ui {
  displayGames(arr) {
    let content = "";
    for (let i = 0; i < arr.length; i++) {
      content += `  <div gameID=${
        arr[i].id
      } class=" col-md-6 col-lg-4 col-xl-3 g-4 game-card align-self-stretch">
        <div class="card rounded-3 border-1 bg-transparent h-100 ">
          <figure class="p-3">
            <img
              src="${arr[i].thumbnail}"
              class="card-img-top rounded-top-3 object-fit-cover w-100 game-img"
              alt="game's image"
            />
          </figure>
          <div
            class="card-body p-3 d-flex align-items-center justify-content-between"
          >
            <h5 class="fs-2">${arr[i].title}</h5>
            <span class="badge card-badge fs-5">Free</span>
          </div>
          <p class="card-text text-white small opacity-50 text-center  p-4">
           ${arr[i].short_description.split(" ").slice(0, 7).join(" ") + "..."}
          </p>
          <div
            class="d-flex border-top border-black border-opacity-25 bg-transparent d-flex align-items-center justify-content-between p-3"
          >
            <span class="badge footer-badge p-2 fs-6">${arr[i].genre}</span>
            <span class="badge footer-badge p-2 fs-6">${arr[i].platform}</span>
          </div>
        </div>
      </div>`;
    }
    document.querySelector(".display").innerHTML = content;
  }

  displayDetails(arr) {
    let content = "";
    content = ` <div class="details-img col-lg-4">
      <img src='${arr.thumbnail}' />
    </div>
    <div class="col-lg-8 ps-5">
      <h2 class="fs-1">Title: ${arr.title}</h2>
      <p class="fs-3 fw-bolder">
        Category:
        <span class="badge text-bg-info fw-bolder fs-5">${arr.genre}</span>
      </p>
      <p class="fs-3 fw-bolder">
        Platform:
        <span class="badge text-bg-info fw-bolder fs-5">${arr.platform}</span>
      </p>
      <p class="fs-3 fw-bolder">
        Status:
        <span class="badge text-bg-info fw-bolder fs-5">${arr.status}</span>
      </p>
      <p class="fs-4 mb-5">
     ${arr.description}
      </p>
      <button
        class="btn btn-details btn-outline-warning text-white fs-4 px-3 py-2"
      >
        Show Game
      </button>
    </div>`;

    document.querySelector(".details").innerHTML = content;
  }

  stickyNav() {
    const navbar = document.getElementById("navbar-example2");
    const header = document.querySelector(".header");
    const navHeight = navbar.getBoundingClientRect().height;

    const stickyNav = function (entries) {
      const [entry] = entries;

      if (!entry.isIntersecting) navbar.classList.add("sticky");
      else navbar.classList.remove("sticky");
    };

    const headerObserver = new IntersectionObserver(stickyNav, {
      root: null,
      threshold: 0,
      rootMargin: `-${navHeight}px`,
    });
    headerObserver.observe(header);
  }
}
