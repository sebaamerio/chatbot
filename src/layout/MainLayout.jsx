import "./MainLayout.css";
import Header from "./Header";
import Chatbot from "../components/chatbot/Chatbot.jsx";
import Footer from "./Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <section>{children}</section>
      <Chatbot />
      <Footer />
    </>
  );
}
