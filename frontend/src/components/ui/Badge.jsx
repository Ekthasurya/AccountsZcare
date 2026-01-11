const Badge = ({ text }) => {
  return (
    <span className="inline-block bg-primary text-white text-xs px-3 py-1 rounded-full">
      {text}
    </span>
  );
};

export default Badge;
