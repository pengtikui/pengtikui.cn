export default function Banner({ children }) {
  return (
    <section className="max-w-2xl mx-auto pt-6 pb-12 flex flex-col items-center justify-center border-b border-gray-100">
      {children}
    </section>
  );
}
