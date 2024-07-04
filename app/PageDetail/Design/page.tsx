'use client';
import React, { useState } from 'react';

import BarunbojungDetailTop from '@/app/components/Layout/DetailElements/BarunbojungDetailTop';
import DetailPicture from '@/app/components/Layout/DetailElements/DetailPicture';
import Header from '@/app/components/Layout/Header';
import PageDetailWrapper from '@/app/components/Layout/mainElements/PageDetailWrapper';
import { useThemeObserver } from '@/app/hooks/useThemeObserver';
import { ImageBarunbojungGroup } from '@/app/lib/DetailImgData';
import { MenuItem } from '@/app/types/PortfolioType';
import * as S from '@/app/styles/Detail';
import DesignDetailTop from '@/app/components/Layout/DetailElements/DesignDetailTop';

const Designpage = () => {
  const [navNumber, setNavNumber] = useState(1);
  const [MainRef] = useThemeObserver(setNavNumber, 1);
  const [ProjectRef] = useThemeObserver(setNavNumber, 2);
  const MenuList: MenuItem[] = [{ contents: 'Detail' }, { contents: 'Work-Detail' }];
  return (
    <>
      <Header position={navNumber} setNavNumber={setNavNumber} MenuList={MenuList} />
      <PageDetailWrapper>
        <div ref={MainRef} id="Detail">
          <DesignDetailTop />
        </div>

        <div ref={ProjectRef} id="Work-Detail">
          <DetailPicture ImageGroup={ImageBarunbojungGroup} />
        </div>
      </PageDetailWrapper>
    </>
  );
};

export default Designpage;
