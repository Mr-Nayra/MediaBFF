import NavBar from "@/components/NavBar/NavBar";
import "./globals.css";

export const metadata = {
  title: "Media BFF",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#FEFEFF]">
        {/* <NavBar /> */}
        {children}
      </body>
    </html>
  );
}
