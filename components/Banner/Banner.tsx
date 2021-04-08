import clsx from 'clsx';
import { GitHub, Linkedin, Mail, Phone } from 'react-feather';

const Banner = () => (
  <div className="flex flex-row justify-between items-center w-full px-12 py-1 bg-gray-800 text-sm text-gray-300">
    <div className="flex flex-row space-x-4">
      <a
        className={clsx('flex flex-row items-center space-x-1 hover:text-white', 'transition duration-300 ease-in-out')}
        href="mailto:max@maxleon.net"
      >
        <Mail size="14" />
        <span>max@maxleon.net</span>
      </a>
      <a
        className={clsx('flex flex-row items-center space-x-1 hover:text-white', 'transition duration-300 ease-in-out')}
        href="tel:5305228476"
      >
        <Phone size="14" />
        <span>(530) 522-8476</span>
      </a>
    </div>
    <div className="flex flex-row space-x-4">
      <a
        className={clsx(
          'p-1 border rounded-full hover:border-white hover:text-white',
          'transition duration-300 ease-in-out'
        )}
        href="https://github.com/m-leon/"
        target="_blank"
      >
        <GitHub size="12" />
      </a>
      <a
        className={clsx(
          'p-1 border rounded-full hover:border-white hover:text-white',
          'transition duration-300 ease-in-out'
        )}
        href="https://www.linkedin.com/in/max-leon-22398439/"
        target="_blank"
      >
        <Linkedin size="12" />
      </a>
    </div>
  </div>
);

export default Banner;
