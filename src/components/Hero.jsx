import './Hero.css'
import profile from '../assets/Testi-pic.png'

function Hero() {
  return (
    <section className="hero">

      <div
        className="hero-image"
        data-aos="fade-right"
      >
        <img src={profile} alt="profile" />
      </div>

      <div
        className="hero-text"
        data-aos="fade-left"
      >
        <p>Hello, I'm</p>

        <h1>
          Olaoluwa <br />
          Olasubomi
        </h1>

        <h2>
          And I'm a <span>Website Developer</span>
        </h2>

        <p className="description">
          I specialize in building clean, responsive websites
          and engaging user interfaces with modern frontend
          tools like HTML, CSS, JavaScript and React.
        </p>
      </div>

    </section>
  )
}

export default Hero