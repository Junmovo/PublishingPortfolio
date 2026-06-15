'use client';

import Header from '@/app/components/Layout/Header';
import PageDetailWrapper from '@/app/components/Layout/mainElements/PageDetailWrapper';
import { useThemeObserver } from '@/app/hooks/useThemeObserver';
import AIMovieDetailTop from '@/app/components/Layout/DetailElements/AIMovieDetailTop';
import * as S from '@/app/styles/Detail';
import { MenuItem } from '@/app/types/PortfolioType';
import { bannerList } from '@/app/lib/MovieData';
import ImageVideoItem from '@/app/components/Layout/DetailElements/AIMovieWrap';
import React, { useState } from 'react';

const AIMovie = () => {
  const [navNumber, setNavNumber] = useState(1);
  const [MainRef] = useThemeObserver(setNavNumber, 1);
  const [ProjectRef] = useThemeObserver(setNavNumber, 2);

  const MenuList: MenuItem[] = [
    { contents: 'Detail' },
    { contents: 'Work-Detail' },
  ];

  return (
    <>
      <Header position={navNumber} setNavNumber={setNavNumber} MenuList={MenuList} />

      <PageDetailWrapper>
        <section ref={MainRef} id="Detail">
          <AIMovieDetailTop />

          <S.ImageVideoSection>
            {bannerList.map((item) => (
              <ImageVideoItem key={item.id} item={item} />
            ))}
          </S.ImageVideoSection>
        </section>

      </PageDetailWrapper>
    </>
  );
};

export default AIMovie;