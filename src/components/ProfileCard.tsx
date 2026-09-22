import { useState } from "react";
import profilePhoto from "../assets/5258035342319755548.jpg";

type ProfileCardProps = {
  title: string;
  description: string;
};

function ProfileCard({ title, description }: ProfileCardProps) {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <section id="about" className="profile-card">
      <img
        src={profilePhoto}
        alt="Didar Kalabayev"
      />

      <h2>{title}</h2>

      <p>{description}</p>

      <button
        className="like-button"
        onClick={handleLike}
      >
        ❤️ Like {likes}
      </button>
    </section>
  );
}

export default ProfileCard;