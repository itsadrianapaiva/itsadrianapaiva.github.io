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
    <footer className='relative overflow-x-clip'>
      <div className='absolute bottom-0 left-1/2 -z-10 h-[400px] w-[1600px] -translate-x-1/2 bg-light-pink/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]'></div>
      <div className='container'>
        <div className='flex flex-col-reverse items-center gap-8 border-t border-white/15 py-6 text-sm md:flex-row md:justify-between'>
          <div className='text-center md:text-left'>
            <div className='text-white/40'>&copy; 2025 Adriana Paiva</div>
          </div>
          <nav className='z-7 flex flex-col items-center gap-8 md:flex-row'>
            {footerLinks.map((link) => (
              <div
                key={link.title}
                className='z-7 inline-flex items-center gap-1.5'
              >
                <a
                  href={link.href}
                  target='_blank'
                  className='font-semibold hover:text-medium-pink transition-duration-600'
                >
                  {link.title}
                </a>
                <ArrowUpRightIcon className='size-4' />
              </div>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
