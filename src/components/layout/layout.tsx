
import { Navbar } from "./navbar";
import { Footer } from "./footer";

interface LayoutProps {
  children: React.ReactNode;
  hideNavbar?: boolean;
  hideFooter?: boolean;
}

export function Layout({ children, hideNavbar = false, hideFooter = false }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {!hideNavbar && <Navbar />}
      <main className="flex-grow">{children}</main>
      {!hideFooter && <Footer />}
    </div>
  );
}
