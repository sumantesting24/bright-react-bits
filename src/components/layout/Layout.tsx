import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background relative">
      {/* Grid + Dual Gradient Overlay */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--border) / 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--border) / 0.15) 1px, transparent 1px),
            radial-gradient(circle 500px at 20% 80%, hsl(var(--accent) / 0.15), transparent),
            radial-gradient(circle 500px at 80% 20%, hsl(var(--primary) / 0.15), transparent)
          `,
          backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
        }}
      />
      <Navbar />
      <main className="flex-1 pt-16 md:pt-20 relative z-10">{children}</main>
      <Footer />
    </div>
  );
};
