export default function UserComponent() {
  return (
    <>
      <div className="user-component__header">
        <div className="user-component">
          <div className="user-component__column">
            <span>채널</span>
          </div>
          <div className="user-component__column">
            <i className="fa-solid fa-chevron-up"></i>
          </div>
        </div>
      </div>
      <div className="user-component">
        <div className="user-component__column">
          <img
            src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2F736x%2F99%2Fe2%2Fd9%2F99e2d92465efa4a5857ec80c31999c14.jpg&type=sc960_832"
            width="45px"
            height="45px"
          />
          <span className="user-component__column--name">채널</span>
          <span className="user-component__column--count">5</span>
        </div>
        <div className="user-component__column"></div>
      </div>
      <main>
        <div className="user-component__header">
          <div className="user-component">
            <div className="user-component__column">
              <span>친구</span>
              <span>3</span>
            </div>
            <div className="user-component__column">
              <i className="fa-solid fa-chevron-up"></i>
            </div>
          </div>
        </div>
        <div className="user-component">
          <div className="user-component__column">
            <img
              src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2F736x%2F99%2Fe2%2Fd9%2F99e2d92465efa4a5857ec80c31999c14.jpg&type=sc960_832"
              width="45px"
              height="45px"
            />
            <span className="user-component__column--name">누나</span>
          </div>
          <div className="user-component__column"></div>
        </div>
        <div className="user-component">
          <div className="user-component__column">
            <img
              src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2F736x%2F99%2Fe2%2Fd9%2F99e2d92465efa4a5857ec80c31999c14.jpg&type=sc960_832"
              width="45px"
              height="45px"
            />
            <span className="user-component__column--name">아빠</span>
          </div>
          <div className="user-component__column"></div>
        </div>
        <div className="user-component">
          <div className="user-component__column">
            <img
              src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2F736x%2F99%2Fe2%2Fd9%2F99e2d92465efa4a5857ec80c31999c14.jpg&type=sc960_832"
              width="45px"
              height="45px"
            />
            <span className="user-component__column--name">엄마</span>
          </div>
          <div className="user-component__column"></div>
        </div>
      </main>
    </>
  );
}
