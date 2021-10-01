import { Header, Footer } from "../components";
import tw from "twin.macro";

export default function Layout({ children }) {
  return (
    <div className="Layout" tw="max-w-4xl mx-auto">
      <Header />

      {children}

      <Footer />
    </div>
  );
}
