import './globals.css';

import {
  Navbar,
  Footer,
  TopBar,
  ScrollToTop,
} from '../components/layout/index.js';

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">

      <body>

        <TopBar />

        <Navbar />

        <main className="pt-10">
          {children}
        </main>

        <Footer />

        <ScrollToTop />

      </body>

    </html>
  );
}