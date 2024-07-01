'use client';
import * as S from '@/app/styles/Header';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { useState } from 'react';
import { cn } from '@/app/lib/utils';

export default function DetailHeader(): JSX.Element {
  const [isActive, setIsActive] = useState<string>('Main');
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const onClickMode = () => {
    if (resolvedTheme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  const handleClick = (V: string) => () => {
    document.getElementById(V)?.scrollIntoView({ behavior: 'smooth' });
    setIsActive(V);
  };

  const MenuList = [{ contents: 'Main' }, { contents: 'About' }, { contents: 'Project' }];

  return (
    <>
      <div className="w-full flex justify-center bg-inherit h-60px sticky top-0 z-10 mx-auto bg-white bg-opacity-80 backdrop-blur border-b border-opacity-10 dark:bg-black dark:bg-opacity-40 border-b-gray-200">
        <S.HeaderInner>
          <S.InnerMenuWrap>
            {MenuList.map((items, idx) => (
              <S.InnerMenu key={idx}>
                <button
                  onClick={handleClick(items.contents)}
                  className={cn(isActive === items.contents ? 'font-[600]' : '')}
                >
                  {items.contents}
                </button>
              </S.InnerMenu>
            ))}
          </S.InnerMenuWrap>
          {/* <DarkModeButton /> */}
        </S.HeaderInner>
      </div>
    </>
  );
}
