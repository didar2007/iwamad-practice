import SkillItem from "../components/SkillItem";

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

function SkillsPage() {
  return (
    <main>
      <section>
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
    </main>
  );
}

export default SkillsPage;