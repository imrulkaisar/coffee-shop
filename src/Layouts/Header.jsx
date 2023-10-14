import Logo from "../Components/Logo";

const Header = () => {
  return (
    <header className="p-8 bg-primary flex justify-center">
      <Logo isDark={true} />
    </header>
  );
};

export default Header;
