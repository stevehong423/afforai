import "./Highlights.css";

type HighlightProps = {
  highlight: string;
};

const Highlights = ({ highlight }: HighlightProps) => {
  return <button className="highlight">&#x2713;{highlight}</button>;
};

export default Highlights;
