'use client';
import * as S from '@/app/styles/Header';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import DarkModeButton from '../commons/DarkModeButton';
import useMoveScroll from '@/app/hooks/useMoveScroll';
import { SetStateAction, useState } from 'react';
import { cn } from '@/app/lib/utils';
import { MenuItem } from '@/app/types/PortfolioType';

interface IHeaderProps {
  position?: number;
  setNavNumber?: React.Dispatch<React.SetStateAction<number>>;
  MenuList: MenuItem[];
}
export default function Header({ position, setNavNumber, MenuList }: IHeaderProps): JSX.Element {
  const pathname = usePathname();
  const handleClick = (V: string) => () => {
    document.getElementById(V)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <div className="w-full flex justify-center bg-inherit h-60px sticky top-0 z-10 mx-auto bg-white bg-opacity-80 backdrop-blur border-b border-opacity-10 dark:bg-black dark:bg-opacity-40 dark:border-b-gray-600">
        <S.HeaderInner>
          <Link href={'/'} className="font-montserrat font-[600] text-[20px]">
            JM.Portfolio
          </Link>
          <S.InnerMenuWrap>
            {MenuList.map((items, idx) => (
              <S.InnerMenu key={idx}>
                <button
                  onClick={handleClick(items.contents)}
                  className={cn('relative transition px-[30px] py-[10px]', position === idx + 1 ? 'font-[600]' : '')}
                >
                  {items.contents}
                </button>
              </S.InnerMenu>
            ))}
          </S.InnerMenuWrap>
          <DarkModeButton />
        </S.HeaderInner>
      </div>
    </>
  );
}
