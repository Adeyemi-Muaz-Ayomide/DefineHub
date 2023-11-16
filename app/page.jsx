/* eslint-disable react/no-unescaped-entities */
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

export default function Home() {
  return (
    <main className="flex flex-col justify-between h-screen">
      <Header />
      <Main />
      <Footer />
    </main>
  );
}
