import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { cards } from "../../../Constants";
import "./Report.css";

function Report() {
  return (
    <div className="report" id="report">
      <div className="report-contents">
        <div className="report-content">
          <h1>REPORT AN INCIDENT</h1>
          <p>
            Report a gender-based violence incident quickly with no fear and
            judgment.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          // pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="card"
        >
          {cards.map((card) => (
            <SwiperSlide key={card.id} className="report-cards">
              <div className="report-card">
                <img src={card.image} alt={card.title} />
                <h2>{card.title}</h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <a
          href="https://forms.gle/fFbJFATLoGFD3G8G9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="report-cta">Report</button>
        </a>
      </div>
    </div>
  );
}

export default Report;
