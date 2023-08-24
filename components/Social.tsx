import { FC } from 'react';
import Link from 'next/link';
import { IconBrandGithub, IconMail, IconBrandTwitter } from '@tabler/icons-react';
import WechatDialog from './WechatDialog';

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
      <WechatDialog />
    </div>
  );
};

export default Social;
