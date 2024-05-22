const Header = () => {
  return (
    <header className="w-full">
      <div className="w-full flex gap-3 items-center border-b border-neutral-500/50">
        <img alt="logo" src="/images/logo.png" className="w-6 md:w-10 h-auto" />
        <h1>GalleryGlimpse</h1>
      </div>
    </header>
  );
};

export default Header;
