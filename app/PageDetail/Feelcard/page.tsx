'use client';
import FeelcardDetailTop from '@/app/components/Layout/DetailElements/FeelcardDetailTop';
import Header from '@/app/components/Layout/Header';
import PageDetailWrapper from '@/app/components/Layout/mainElements/PageDetailWrapper';
import { useThemeObserver } from '@/app/hooks/useThemeObserver';
import React, { useState } from 'react';

const FeelcardPage = () => {
  const [navNumber, setNavNumber] = useState(1);
  const [MainRef] = useThemeObserver(setNavNumber, 1);
  const [ProblemRef] = useThemeObserver(setNavNumber, 2);
  const [ProjectRef] = useThemeObserver(setNavNumber, 3);
  return (
    <>
      <Header position={navNumber} setNavNumber={setNavNumber} />
      <PageDetailWrapper>
        <div ref={MainRef} id="Detail" className="h-[100vh]">
          <FeelcardDetailTop />
        </div>
        <div ref={ProblemRef} id="Problem & Solution" className="h-[100vh]">
          111
        </div>
        <div ref={ProjectRef} id="Work-Detail" className="h-[100vh]">
          111
        </div>
      </PageDetailWrapper>
    </>
  );
};

export default FeelcardPage;
