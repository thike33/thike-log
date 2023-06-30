import "src/app/globals.css";

import React from "react";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { NavList } from "src/components/NavList";

export const metadata = {
  title: "てぃけログ",
  description: "てぃけの学習用ブログサイトです",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <Header>
          <NavList />
        </Header>
        {children}
        <Footer />
      </body>
    </html>
  );
}