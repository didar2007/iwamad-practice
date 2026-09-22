import "./App.css";

import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import Footer from "./components/Footer";
import SkillItem from "./components/SkillItem";


type Skill = {
  id: number;
  name: string;
};

const skills: Skill[] = [
  { id: 1, name: "C++" },
  { id: 2, name: "HTML" },
  { id: 3, name: "SQL" },
  { id: 4, name: "Python" },
  { id: 5, name: "Power BI" },
];

function App() {
  return (
    <>
      <Header
        name="Didar Kalabayev"
        subtitle="Student of KBTU"
      />

      <nav>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#goals">Goals</a>
        <a href="#contact">Contact</a>
      </nav>

      <main>
        <ProfileCard
          title="About Me"
          description="I'm a third-year university student. I’m interested in IT and web development. I want to learn how to build websites and improve my coding skills."
        />

        <section id="skills">
          <h2>Skills</h2>

          {skills.length > 0 ? (
            <ul>
              {skills.map((skill) => (
                <SkillItem
                  key={skill.id}
                  skill={skill.name}
                />
              ))}
            </ul>
          ) : (
            <p>No skills available.</p>
          )}
        </section>

        <section id="goals">
          <h2>My Goals</h2>

          <table>
            <thead>
              <tr>
                <th>Skill</th>
                <th>Current Level</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>HTML</td>
                <td>Beginner</td>
              </tr>

              <tr>
                <td>Python</td>
                <td>Intermediate</td>
              </tr>

              <tr>
                <td>Git</td>
                <td>Beginner</td>
              </tr>
            </tbody>
          </table>
        </section>

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
            <input
              type="text"
              id="name"
              name="name"
            />

            <br />
            <br />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
            />

            <br />
            <br />

            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
            />

            <br />
            <br />

            <button type="submit">Send</button>
          </form>
        </section>
      </main>

      <Footer text="© 2026 Didar Kalabayev" />
    </>
  );
}

export default App;