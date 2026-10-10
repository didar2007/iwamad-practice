import Tag from "./ui/Tag";

type SkillItemProps = {
  skill: string;
};

function SkillItem({ skill }: SkillItemProps) {
  return <Tag>{skill}</Tag>;
}

export default SkillItem;