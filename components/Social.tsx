import { FC } from 'react';
import { IconBrandGithub, IconMail, IconBrandTwitter, IconBrandWechat } from '@tabler/icons-react';
import Link from 'next/link';

const Social: FC = () => {
  return (
    <div className="mt-6 flex items-center space-x-3">
      <Link
        className="block p-1.5 rounded-full text-white bg-[#171715] transition-opacity hover:opacity-75"
        href="https://github.com/pengtikui"
        title="Github"
      >
        <IconBrandGithub size={20} />
      </Link>
      <Link
        className="block p-1.5 rounded-full text-white bg-[#e86125] transition-colors hover:opacity-75"
        href="mailto:pengtikui@gmail.com"
        title="邮箱"
      >
        <IconMail size={20} />
      </Link>
      <Link
        className="block p-1.5 rounded-full text-white bg-[#1d9bf0] transition-colors hover:opacity-75"
        href="https://twitter.com/pengtikui"
        title="Twitter"
      >
        <IconBrandTwitter size={20} />
      </Link>
      {/* <a
        className="block p-1.5 rounded-full text-white bg-[#2aae67] transition-colors hover:opacity-75"
        href="#"
        title="微信"
      >
        <IconBrandWechat size={20} />
      </a> */}
    </div>
  );
};

export default Social;
