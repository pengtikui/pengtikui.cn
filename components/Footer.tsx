import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="mt-2 px-2 py-6">
      <div className="flex items-center space-x-2 pt-6 text-xs text-gray-500 border-t border-gray-100">
        <p>Paranoid_K &copy; {new Date().getFullYear()}</p>
        <span className="font-bold">·</span>
        <a href="https://beian.miit.gov.cn" target="_blank" rel="noreferrer">
          鲁ICP备15010597号-1
        </a>
      </div>
    </footer>
  );
};

export default Footer;
