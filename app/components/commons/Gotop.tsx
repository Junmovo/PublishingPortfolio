'use client';
import { cn } from '@/app/lib/utils';
import React, { useEffect, useRef, useState } from 'react';
import { MdKeyboardArrowUp } from 'react-icons/md';

const Gotop = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const headRef = useRef(null);

  const onClickGotop = () => {
    window.scrollTo({ behavior: 'smooth', top: 0 });
  };

  useEffect(() => {
    const ShowButtonClick = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', ShowButtonClick);
    return () => {
      window.removeEventListener('scroll', ShowButtonClick);
    };
  }, []);

  return (
    <button
      onClick={onClickGotop}
      ref={headRef}
      className={cn(
        'bottom-[30px] right-[30px] transition cursor-pointer border rounded-full p-2 opacity-0 z-10 bg-white dark:bg-inherit',
        isScrolled ? 'fixed opacity-100 pointer-events-auto' : 'hidden opacity-0 pointer-events-none'
      )}
    >
      <MdKeyboardArrowUp size={30} />
    </button>
  );
};

export default Gotop;
