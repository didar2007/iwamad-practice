type TagProps = {
  children: React.ReactNode;
};

function Tag({ children }: TagProps) {
  return <li className="ui-tag">{children}</li>;
}

export default Tag;