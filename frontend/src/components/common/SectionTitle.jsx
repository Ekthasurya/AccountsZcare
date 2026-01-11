const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl font-heading font-bold text-primary">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
