import Navbar from './components/Navbar';
import './globals.css';
import ToasterProvider from './providers/ToasterProvider';

export const metadata = {
  title: 'Owoicho David Uji',
  description: 'Software Developer, Graphic Designer and Photographer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ToasterProvider />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
