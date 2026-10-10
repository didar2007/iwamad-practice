
import profilePhoto from "../assets/5258035342319755548.jpg";
import LikeButton from "./LikeButton";
import Card from "./ui/Card";

type ProfileCardProps = {
  title: string;
  description: string;
};

function ProfileCard({ title, description }: ProfileCardProps) {
  return (
    <Card>
      <div id="about" className="profile-card">
        <img src={profilePhoto} alt="Didar Kalabayev" />

        <h2>{title}</h2>

        <p>{description}</p>

        <LikeButton />
      </div>
    </Card>
  );
}

export default ProfileCard;
