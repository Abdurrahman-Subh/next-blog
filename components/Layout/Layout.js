import Header from "@/components/Header/Header";

export default function Layout({ children }) {
  return (
    <div className="backgorund-image h-[300vh] p-20">
      <div className="sticky top-0">
        <Header />
        <div className="">{children}</div>
        <footer>footer</footer>
      </div>
    </div>
  );
}
