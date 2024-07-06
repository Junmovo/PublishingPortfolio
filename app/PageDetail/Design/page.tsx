'use client';
import React, { useState } from 'react';

import Header from '@/app/components/Layout/Header';
import PageDetailWrapper from '@/app/components/Layout/mainElements/PageDetailWrapper';
import { useThemeObserver } from '@/app/hooks/useThemeObserver';
import { MenuItem } from '@/app/types/PortfolioType';
import * as S from '@/app/styles/Detail';
import DesignDetailTop from '@/app/components/Layout/DetailElements/DesignDetailTop';
import DesignDetailList from '@/app/components/Layout/DetailElements/DesignDetailList';
import DesignImageList from '@/app/components/Layout/DetailElements/DesignImageList';

const Designpage = () => {
  const [navNumber, setNavNumber] = useState(1);
  const [MainRef] = useThemeObserver(setNavNumber, 1);
  const [ProjectRef] = useThemeObserver(setNavNumber, 2);
  const MenuList: MenuItem[] = [];
  return (
    <>
      <Header position={navNumber} setNavNumber={setNavNumber} MenuList={MenuList} />
      <PageDetailWrapper>
        <div ref={MainRef} id="Detail">
          <DesignDetailTop />
          <DesignDetailList />
        </div>
      </PageDetailWrapper>
    </>
  );
};

export default Designpage;
