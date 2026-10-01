import profilePhoto from "../assets/5258035342319755548.jpg";
import LikeButton from "./LikeButton";

type ProfileCardProps = {
  title: string;
  description: string;
};

function ProfileCard({ title, description }: ProfileCardProps) {
  return (
    <section id="about" className="profile-card">
      <img src={profilePhoto} alt="Didar Kalabayev" />

      <h2>{title}</h2>

      <p>{description}</p>

      <LikeButton />
    </section>
  );
}

export default ProfileCard;