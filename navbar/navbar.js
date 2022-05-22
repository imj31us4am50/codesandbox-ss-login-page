import navbarCSS from "/navbar/navbar.css";

export default function navbar() {
  return (
    <div className="container-fluid m-0 navbar-main mx-auto" style={navbarCSS}>
      <div className="container-of-navbar d-flex justify-content-between align-items-center">
        <img
          className="logo"
          src="https://imj31us4am50.github.io/SpringStudy-media/logospringstudy.png"
        />
        <div className="navbar-list-container">
          <ul className="navbar-list d-flex">
            <li className="list-item-d-1 dropdown-1 color">
              <span>DESCOPERĂ</span>
              <div className="dropdown-content-1">
                <li className="sublist-item-1">
                  <a href="#pomodoros">POMODORO</a>
                </li>
                <li className="sublist-item-1">
                  <a href="#avgcalc">CALCULATOR MEDIE</a>
                </li>
                <li className="sublist-item-1">
                  <a href="#resources">RESURSE</a>
                </li>
              </div>
            </li>
            <li className="list-item-d-1 dropdown-1">
              <span> CREEAZĂ </span>
              <div className="dropdown-content-1">
                <li className="sublist-item-1">PLAN DE STUDIU</li>
                <li className="sublist-item-1">TIMER/REMINDER</li>
              </div>
            </li>
            <li className="list-item-d-1 dropdown-1">
              <span> CHAT </span>
              <div className="dropdown-content-1">
                <li className="sublist-item-1">PRINCIPAL</li>
                <li className="sublist-item-1">SUBIECTE</li>
              </div>
            </li>
            <li className="list-item-1 curr">CONT</li>
            <li className="list-item-1">AJUTOR</li>
          </ul>
        </div>
        <div className="dropdown-list-container">
          <img
            className="dropdown-icon"
            src="https://imj31us4am50.github.io/SpringStudy-media/menu-icon.png"
            onClick={() => {
              let dropdown = document.getElementById("dropdown-el");

              if (dropdown.style.display === "none")
                dropdown.style.display = "block";
              else dropdown.style.display = "none";
            }}
          />
        </div>
      </div>
      <ul className="dropdown-list w-100 m-0 p-0" id="dropdown-el">
        <li className="list-item-d-2 dropdown-2 text-center">
          <span className="mx-auto"> DESCOPERĂ </span>
          <div className="dropdown-content-2 mx-auto">
            <li className="sublist-item-2">POMODORO</li>
            <li className="sublist-item-2">CALCULATOR MEDIE</li>
            <li className="sublist-item-2">RESURSE</li>
          </div>
        </li>
        <li className="list-item-d-2 dropdown-2 text-center">
          <span className="mx-auto"> CREEAZĂ </span>
          <div className="dropdown-content-2 mx-auto">
            <li className="sublist-item-2">PLAN DE STUDIU</li>
            <li className="sublist-item-2">TIMER/REMINDER</li>
          </div>
        </li>
        <li className="list-item-d-2 dropdown-2 text-center">
          <span className="mx-auto"> CHAT </span>
          <div className="dropdown-content-2 mx-auto">
            <li className="sublist-item-2">PRINCIPAL</li>
            <li className="sublist-item-2">SUBIECTE</li>
          </div>
        </li>
        <li className="list-item-2 curr">CONT</li>
        <li className="list-item-2">AJUTOR</li>
      </ul>
    </div>
  );
}
