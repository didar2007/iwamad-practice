function ContactPage() {
  return (
    <main>
      <section id="contact">
        <h2>Contact Me</h2>

        <p>
          Email me:{" "}
          <a href="mailto:d_kalabayev@kbtu.kz">
            d_kalabayev@kbtu.kz
          </a>
        </p>

        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />

          <br />
          <br />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />

          <br />
          <br />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" />

          <br />
          <br />

          <button type="submit">Send</button>
        </form>
      </section>
    </main>
  );
}

export default ContactPage;