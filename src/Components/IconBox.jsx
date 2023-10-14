const IconBox = ({ icon, title, children }) => {
  return (
    <div className="space-y-1 max-w-xs">
      <img className="w-16" src={icon} alt="" />
      <h4 className="font-primary text-2xl font-normal">{title}</h4>
      <p>{children}</p>
    </div>
  );
};

export default IconBox;
