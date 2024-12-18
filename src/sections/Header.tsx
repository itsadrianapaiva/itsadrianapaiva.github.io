export const Header = () => {
  return (
    <div className='fixed top-3 flex w-full place-content-center'>
      <nav className='flex gap-1 rounded-full border border-light-pink/15 bg-light-pink/10 p-0.5 backdrop-blur'>
        <a
          href='#'
          className='nav-item'
        >
          Home
        </a>
        <a
          href='#'
          className='nav-item'
        >
          Projects
        </a>
        <a
          href='#'
          className='nav-item'
        >
          About
        </a>
        <a
          href='#'
          className='nav-item bg-light-pink text-gray-900 hover:bg-light-pink/70 hover:text-gray-900'
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
