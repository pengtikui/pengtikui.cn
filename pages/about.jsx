import { DiscussionEmbed } from 'disqus-react';
import PageHead from '../shared/PageHead';
import AuthorHeader from '../shared/AuthorHeader';

export default function About() {
  return (
    <>
      <PageHead />
      <AuthorHeader />
      <div className="prose mt-10 mb-8">
        <p>Paranoid_K 的个人站点。</p>
      </div>
      <DiscussionEmbed
        shortname="pengtikui"
        config={{
          title: '关于',
          language: 'zh',
        }}
      />
    </>
  );
}
