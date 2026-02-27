import type { ReactNode } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

type Props = {
  children?: ReactNode;
};

const Layout = ({ children = null }: Props) => (
  <>
    <Nav />
    <main className="px-6 mt-8 mb-16 max-w-7xl mx-auto py-8 lg:px-16">
      {children}
    </main>
    <Footer />
  </>
);

export default Layout;
