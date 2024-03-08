export default function More() {
  return (
    <>
      <div className="myInfo">
        <div className="myInfo-certificate">
          <div>
            <span>김아엘</span>
            <span>asonofgod@jesus.com</span>
          </div>
          <i class="fa-solid fa-shield-halved"></i>
        </div>
        <div className="myInfo-subscribe">
          <span>My구독</span>
          <i class="fa-solid fa-chevron-right"></i>
        </div>
      </div>
      <div className="moreStuff">
        <div className="moreStuff-row">
          <div>
            <i class="fa-brands fa-paypal"></i><span></span>
          </div>
          <div>
            <i class="fa-solid fa-download"></i><span></span>
          </div>
          <div>
            <i class="fa-brands fa-facebook"></i><span></span>
          </div>
          <div>
            <i class="fa-solid fa-ghost"></i><span></span>
          </div>
        </div>
        <div className="moreStuff-row">
          <div>
            <i class="fa-brands fa-twitter"></i><span></span>
          </div>
          <div>
            <i class="fa-brands fa-instagram"></i><span></span>
          </div>
          <div>
            <i class="fa-solid fa-star"></i><span></span>
          </div>
          <div>
            <i class="fa-brands fa-docker"></i><span></span>
          </div>
        </div>
        <div className="moreStuff-row">
          <div>
            <i class="fa-solid fa-location-dot"></i><span></span>
          </div>
          <div>
            <i class="fa-solid fa-music"></i><span></span>
          </div>
          <div>
            <i class="fa-solid fa-bomb"></i><span></span>
          </div>
          <div>
            <i class="fa-brands fa-algolia"></i><span></span>
          </div>
        </div>
      </div>
      <div className="footer"></div>
    </>
  );
}
