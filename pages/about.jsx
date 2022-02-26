import PageHead from '../shared/PageHead';
import AuthorHeader from '../shared/AuthorHeader';

export default function About() {
  return (
    <>
      <PageHead />
      <AuthorHeader />
      <div className="prose dark:prose-light max-w-none mt-10 mb-8">
        <p>Paranoid_K 的个人站点。</p>
      </div>
    </>
  );
}
