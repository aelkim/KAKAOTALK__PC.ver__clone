export default function ChatBox() {
  const box = $(".chat-box");
  window.addEventListener("scroll", function () {
    console.log(box.getBoundingClientRect());
  });
  return (
    <div className="chat-box">
      <div className="chat-box__column">
        <img
          src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2F736x%2F99%2Fe2%2Fd9%2F99e2d92465efa4a5857ec80c31999c14.jpg&type=sc960_832"
          width="45px"
          height="45px"
        />
        <div className="chat-box__column__content">
          <span>김아엘</span>
          <span>sonofgod</span>
        </div>
      </div>
      <div>
        <span>오후 06:39</span>
      </div>
    </div>
  );
}
