import "./MainLayout.css";
import Header from "./Header";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main className="bodyLayout">{children}</main>
    </>
  );
}
