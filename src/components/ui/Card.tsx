type CardProps = {
  children: React.ReactNode;
};

function Card({ children }: CardProps) {
  return <section className="ui-card">{children}</section>;
}

export default Card;