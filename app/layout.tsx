import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "./components/Sidebar/Sidebar";
/*import { Navbar } from "@/components/Navbar/Navbar";*/
export const metadata: Metadata = {
  title: "Mi Proyecto",
  description: "Aqui voy aprender paso a paso a crear mi pagina web",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/*<Navbar/>*/}
        <div className="flex flex-col bg-slate-100  w-screen h-screen antialiased ">
          <div className="flex flex-row relative w-full">
            <Sidebar/>
            <div className=" w-full bg-white">
              {children}    
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
