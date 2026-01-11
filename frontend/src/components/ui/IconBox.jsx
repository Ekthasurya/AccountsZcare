const IconBox = ({ icon: Icon }) => {
  return (
    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-accent text-white mb-4">
      <Icon size={22} />
    </div>
  );
};

export default IconBox;
