'use client';
import * as S from '@/app/styles/Header';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';

import DarkModeButton from '../commons/DarkModeButton';

export default function Header(): JSX.Element {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const onClickMode = () => {
    if (resolvedTheme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <>
      <div className="w-full flex justify-center bg-inherit h-60px sticky top-0 z-10 mx-auto bg-white bg-opacity-80 backdrop-blur border-b border-opacity-10">
        <S.HeaderInner>
          <S.InnerMenuWrap>
            <S.InnerMenu>
              <Link href={'/'}>Home</Link>
            </S.InnerMenu>
            <S.InnerMenu>
              <Link href={'/Project'}>Project</Link>
            </S.InnerMenu>
            <S.InnerMenu>
              <Link href={'/Project'}>Project</Link>
            </S.InnerMenu>
          </S.InnerMenuWrap>
          <DarkModeButton />
        </S.HeaderInner>
      </div>
    </>
  );
}
