import searchImg from "@i/search.svg";

function Furniture() {
  return (
    <header id="furniture">
        <div className="header__content">
          <div className="titles">
          <h2 className="header__title">
            Make Your Interior More
          </h2>
          <h2 className="header__title">Minimalistic & Modern</h2>
          </div>
          <p className="header__text">
            Turn your room with panto into a lot more minimalist and modern with
            ease and speed
          </p>
          <form action="" className="form">
            <input className="header-input" type="text" placeholder="Search furniture"/>
            <img className="search" src={searchImg} alt="" />
          </form>
        </div>
    </header>
  );
}

export default Furniture;
