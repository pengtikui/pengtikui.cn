import { FC } from 'react';
import Link from 'next/link';
import { IconBrandGithub, IconMail, IconBrandX } from '@tabler/icons-react';
import WechatDialog from './WechatDialog';

const Social: FC = () => {
  return (
    <div className="mt-6 flex items-center space-x-3">
      <Link
        className="block p-1.5 rounded-full text-white bg-[#171515] transition-opacity hover:opacity-75"
        href="https://github.com/pengtikui"
        target="_blank"
        title="Github"
      >
        <IconBrandGithub size={20} />
      </Link>
      <a
        className="block p-1.5 rounded-full text-white bg-[#e86125] transition-colors hover:opacity-75"
        href="mailto:pengtikui@gmail.com"
        title="邮箱"
      >
        <IconMail size={20} />
      </a>
      <Link
        className="block p-1.5 rounded-full text-white bg-[#0f1419] transition-colors hover:opacity-75"
        href="https://x.com/pengtikui"
        target="_blank"
        title="X (Twitter)"
      >
        <IconBrandX size={20} />
      </Link>
      <WechatDialog />
    </div>
  );
};

export default Social;
