import "./Button.css";

// ==============================
// Reusable Button Component
// ==============================
const Button = ({
  children,
  href,
  className = "",
  variant = "dark",
  as = "button",
  type = "button",
}) => {
  const normalizedVariant =
    variant === "primary" ? "dark" : variant === "outline" ? "light" : variant;
  const classes = `button button--${normalizedVariant} ${className}`.trim();

  if (as === "a" || href) {
    return (
      <a className={classes} href={href || "#"}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type={type}>
      {children}
    </button>
  );
};

export default Button;
