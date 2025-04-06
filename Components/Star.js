// components/ShootingStars.js
const ShootingStars = () => {
  return (
    <div>
      <section className="bg-stars">
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
      </section>

      <style jsx>{`
        .bg-stars {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 50vh; /* Reduced height to 50% of the viewport */
          z-index: -100;
          max-width: 1300px;
          margin: 0 auto;
        }

        .star {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #fff;
          border-radius: 50%;
          box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.1),
                      0 0 0 8px rgba(255, 255, 255, 0.1),
                      0 0 20px rgba(255, 255, 255, 0.1);
          animation: animate 3s linear infinite;
        }

        .star::before {
          content: '';
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 300px;
          height: 1px;
          background: linear-gradient(90deg, #fff, transparent);
        }

        @keyframes animate {
          0% {
            transform: rotate(315deg) translateX(0);
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            transform: rotate(315deg) translateX(-1500px);
            opacity: 0;
          }
        }

        /* Adjust the positions of the stars to fit within the reduced height */
        .star:nth-child(1) { top: 5%; left: 90%; animation-delay: 0s; animation-duration: 1.5s; }
        .star:nth-child(2) { top: 10%; left: 70%; animation-delay: 0.5s; animation-duration: 2s; }
        .star:nth-child(3) { top: 15%; left: 50%; animation-delay: 1s; animation-duration: 2.5s; }
        .star:nth-child(4) { top: 20%; left: 30%; animation-delay: 1.5s; animation-duration: 3s; }
        .star:nth-child(5) { top: 25%; left: 10%; animation-delay: 2s; animation-duration: 3.5s; }
        .star:nth-child(6) { top: 30%; left: 80%; animation-delay: 2.5s; animation-duration: 1.8s; }
        .star:nth-child(7) { top: 35%; left: 60%; animation-delay: 3s; animation-duration: 2.2s; }
        .star:nth-child(8) { top: 40%; left: 40%; animation-delay: 3.5s; animation-duration: 2.7s; }
        .star:nth-child(9) { top: 45%; left: 20%; animation-delay: 4s; animation-duration: 3.2s; }
      `}</style>
    </div>
  );
};

export default ShootingStars;