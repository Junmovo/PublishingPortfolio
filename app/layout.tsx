import type { Metadata } from 'next';
import './globals.css';
import StyledComponentsRegistry from '@/app/lib/registry';
import { NanumNeo, montserrat, pretendard } from '../public/fonts/fonts';
import { ThemeProvider } from '@/provider/ThemeProvider';
import Gotop from './components/commons/Gotop';

export const metadata: Metadata = {
  metadataBase: new URL('https://junmo-portfolio.vercel.app/'),
  title: `Junmo's Portfolio`,
  description: '성장을 두려워 하지 않는 프론트엔드 강준모 포트폴리오입니다.',
  openGraph: {
    title: '준모 포트폴리오',
    description: '성장을 두려워 하지 않는 프론트엔드 강준모 포트폴리오입니다.',
    url: 'https://junmo-portfolio.vercel.app/',
    images: [
      {
        url: '/images/opengraph.png',
        width: 800,
        height: 400,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${NanumNeo.variable} ${pretendard.variable} ${montserrat.className} `}>
      <StyledComponentsRegistry>
        <body className={NanumNeo.className}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <Gotop />
            {children}
          </ThemeProvider>
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
