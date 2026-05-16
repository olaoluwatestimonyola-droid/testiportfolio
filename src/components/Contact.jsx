import './Contact.css'

function Contact() {
  return (
    <section className="contact">

      <h1 data-aos="fade-up">
        Contact Me
      </h1>

      <p data-aos="fade-up">
        Interested in working with me?
        Let's connect on WhatsApp.
      </p>

      <a
        href="https://wa.me/2347076704063"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-btn"
        data-aos="zoom-in"
      >
        Message Me on WhatsApp
      </a>

    </section>
  )
}

export default Contact