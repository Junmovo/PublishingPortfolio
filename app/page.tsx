'use client';

import { useEffect, useRef, useState } from 'react';
import AboutMe from '@/app/components/Layout/mainElements/AboutMe';
import MainContents_ver2 from '@/app/components/Layout/mainElements/MainContents_ver2';
import List2 from '@/app/components/Layout/mainElements/list_ver2';
import PortfolioPadding from './components/commons/PortfolioPadding';
import Header from './components/Layout/Header';
import { useThemeObserver } from './hooks/useThemeObserver';

export default function Home() {
  const [navNumber, setNavNumber] = useState(1);
  const [MainRef] = useThemeObserver(setNavNumber, 1);
  const [AboutRef] = useThemeObserver(setNavNumber, 2);
  const [ProjectRef] = useThemeObserver(setNavNumber, 3);
  const MenuList = [{ contents: 'Main' }, { contents: 'About' }, { contents: 'Project' }];

  return (
    <>
      <Header position={navNumber} MenuList={MenuList} />
      <PortfolioPadding>
        <div id="Main" ref={MainRef}>
          <MainContents_ver2 />
        </div>
        <div id="About" ref={AboutRef}>
          <AboutMe />
        </div>
        <div id="Project" ref={ProjectRef}>
          <List2 />
        </div>
      </PortfolioPadding>
    </>
  );
}
