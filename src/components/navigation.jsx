export default function Navigation() {
  return (
    <>
        <nav className="nav-bar">
          <div className="nav-bar__icons">
            <a href="/">
              <i className="fa-solid fa-user"></i>
            </a>
            <a href="/chats">
              <div className="nav-bar__chats">
                <i className="fa-solid fa-comment">
                  <div className="chats__count">
                    <span>2</span>
                  </div>
                </i>
              </div>
            </a>
            <a href="/more">
              <i className="fa-solid fa-ellipsis"></i>
            </a>
          </div>
          <div className="nav-bar__icons">
            <i className="fa-regular fa-face-smile"></i>
            <i className="fa-regular fa-bell"></i>
            <i className="fa-regular fa-star"></i>
          </div>
        </nav>
    </>
  );
}
