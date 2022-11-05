export default function Banner({ children }) {
  return (
    <section className="max-w-2xl mx-auto px-4">
      <div className="flex flex-col items-center justify-center pt-6 pb-12 border-b border-gray-100">
        {children}
      </div>
    </section>
  );
}
