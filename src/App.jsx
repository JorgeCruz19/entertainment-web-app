import "./App.css";

import IconNavHome from "./assets/icon-nav-home.svg";
import IconNavMovies from "./assets/icon-nav-movies.svg";
import IconNavTvSeries from "./assets/icon-nav-tv-series.svg";
import IconNavBookmark from "./assets/icon-nav-bookmark.svg";
import Logo from "./assets/logo.svg";

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <nav className="navbar">
          <h1>
            <img src={Logo} alt="" />
          </h1>
          <ul className="navbar-menu">
            <li>
              <a href="#">
                <img src={IconNavHome} alt="Icon home" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={IconNavMovies} alt="Icon movies" />
              </a>
            </li>
            <li>
            <a href="#">
                <img src={IconNavTvSeries} alt="Icon tv series" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={IconNavBookmark} alt="Icon bookmark" />
              </a>
            </li>
          </ul>
          <button className="navbar-button-profile">
            <img src="/src/assets/image-avatar.png" alt="user profile" />
          </button>
        </nav>
      </header>
      <main className="wrapper-main">
        <section>
          <input type="search" placeholder="Search for movies or TV series" />
        </section>
        <section>
          <h2>Trending</h2>
          <div>
            <article>
              <img src="" alt="movie poster" />
              <button>icon Favorite</button>
              <ul>
                <li>2019</li>
                <li>icon Movie</li>
                <li>PG-13</li>
              </ul>
              <h3>Beyond Earth</h3>
            </article>
          </div>
        </section>
        <section>
          <h2>Recommended for you</h2>
          <div>
            <article>
              <div>
                <img src="" alt="movie poster" />
                <button>icon Favorite</button>
              </div>
              <ul>
                <li>2019</li>
                <li>icon Movie</li>
                <li>PG-13</li>
              </ul>
              <h3>Beyond Earth</h3>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
