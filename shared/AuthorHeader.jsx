import Image from 'next/image';

export default function AuthorHeader() {
  return (
    <header className="flex items-center author-header">
      <Image src="/avatar.jpeg" alt="Avatar" width={64} height={64} />
      <div className="ml-4">
        <p className="text-black dark:text-white text-2xl font-extrabold">
          Paranoid_K
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          #stayparanoid
        </p>
      </div>
    </header>
  );
}
