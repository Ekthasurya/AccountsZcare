const Button = ({ children, variant = "primary", ...props }) => {
  const base =
    "px-6 py-3 rounded-lg font-medium transition duration-300";

  const variants = {
    primary: "bg-accent text-white hover:bg-yellow-500",
    outline:
      "border border-primary text-primary hover:bg-primary hover:text-white"
  };

  return (
    <button className={`${base} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
