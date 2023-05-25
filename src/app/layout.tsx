import { Inter } from 'next/font/google';
import { Providers } from './providers';
import Footer from '@/layouts/Footer';
import Content from '@/layouts/Content';
import Wrapper from '@/layouts/Wrapper';
import Header from '@/layouts/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Decode string app by Abdel Posada',
  description: 'Created by Abdel Posada for Digitalhype'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Wrapper>
            <Header />
            <Content>{children}</Content>
            <Footer />
          </Wrapper>
        </Providers>
      </body>
    </html>
  );
}
