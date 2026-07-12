import "./Card.css";

// ==============================
// Reusable Card Component
// ==============================
const Card = ({ children, className = "", accent = "default" }) => {
  return (
    <div className={`card card--${accent} ${className}`.trim()}>{children}</div>
  );
};

export default Card;
