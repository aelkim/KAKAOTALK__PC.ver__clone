export default function ScreenHeader({ title }) {
  return (
    <>
      <header className="screen-header">
        <div className="screen-header__column">
          <span>{title}</span>
        </div>
        <div className="screen-header__column">
          <i className="fa-solid fa-magnifying-glass"></i>
          <i className="fa-solid fa-user-plus"></i>
        </div>
      </header>
    </>
  );
}
