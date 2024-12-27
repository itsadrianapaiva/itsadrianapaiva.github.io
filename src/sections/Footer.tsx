import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';

const footerLinks = [
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/itsadrianapaiva/',
  },
  {
    title: 'GitHub',
    href: 'https://github.com/itsadrianapaiva',
  },
  {
    title: 'Instagram',
    href: 'https://www.instagram.com/itsadrianapaiva',
  },
  {
    title: 'Threads',
    href: 'https://www.threads.net/@itsadrianapaiva',
  },
];

export const Footer = () => {
  return (
    <footer className="relative -z-10 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-light-pink/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className='container'>
        <div className='flex flex-col-reverse items-center gap-8 border-t border-white/15 py-6 text-sm md:flex-row md:justify-between'>
          <div className="text-center md:text-left">
            <div className='text-white/40'>
              &copy; 2025 Adriana Paiva
            </div>
          </div>
          <nav className='flex flex-col items-center gap-8 md:flex-row'>
            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={link.title}
                className='inline-flex items-center gap-1.5'
              >
                <span className='font-semibold'>{link.title}</span>
                <ArrowUpRightIcon className='size-4' />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
