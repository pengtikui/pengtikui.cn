export default function Footer() {
  return (
    <footer className="max-w-2xl mx-auto px-4 py-8 border-t border-gray-100">
      <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:space-y-0 text-sm text-gray-500">
        <p>Copyright &copy; 2022 Paranoid_K</p>
        <span className="mx-2 font-bold hidden sm:block">·</span>
        <a href="https://beian.miit.gov.cn" target="_blank" rel="noreferrer">
          鲁ICP备15010597号-1
        </a>
      </div>
    </footer>
  );
}
