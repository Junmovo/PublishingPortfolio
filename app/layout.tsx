import type { Metadata } from 'next';
import './globals.css';
import StyledComponentsRegistry from '@/app/lib/registry';
import { NanumNeo, montserrat, pretendard } from '../public/fonts/fonts';
import { ThemeProvider } from '@/provider/ThemeProvider';
import PageTransition from './components/commons/Pagetransition';
import Header from './components/Layout/Header';
import Gotop from './components/commons/Gotop';

export const metadata: Metadata = {
  title: '준모 포트폴리오',
  description: '성장을 두려워 하지 않는 프론트엔드 강준모 포트폴리오입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr" className={`${NanumNeo.variable} ${pretendard.variable} ${montserrat.className} `}>
      <StyledComponentsRegistry>
        <body className={NanumNeo.className} style={{ overflowX: 'hidden' }}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <Gotop />
            {children}
          </ThemeProvider>
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
