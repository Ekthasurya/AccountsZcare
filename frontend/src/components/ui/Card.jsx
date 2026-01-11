const Card = ({ children }) => {
  return (
    <div className="p-6 border rounded-xl hover:shadow-lg transition">
      {children}
    </div>
  );
};

export default Card;
