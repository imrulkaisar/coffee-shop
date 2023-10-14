const IconBox = ({ icon, title, children }) => {
  return (
    <div className="flex flex-col gap-1 items-center text-center max-w-[300px]">
      <img className="w-16" src={icon} alt="" />
      <h4 className="font-primary text-2xl font-normal">{title}</h4>
      <p>{children}</p>
    </div>
  );
};

export default IconBox;
