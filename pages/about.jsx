import Image from 'next/image';
import PageHead from '../shared/PageHead';
import Banner from '../shared/Banner';

export default function About() {
  return (
    <>
      <PageHead title="关于 - Paranoid_K" />
      <Banner>
        <h1 className="text-3xl font-medium">关于</h1>
      </Banner>
      <div className="prose text-center max-w-2xl mx-auto py-8">
        <div className="flex justify-center mb-8">
          <Image
            className="rounded-full"
            src="/avatar.jpeg"
            width={120}
            height={120}
            alt=""
          />
        </div>
        <p>一个前端开发者</p>
        <p>
          你可以通过<a href="mailto:pengtikui@gmail.com">邮件</a>联系我
        </p>
      </div>
    </>
  );
}
