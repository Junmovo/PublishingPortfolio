import React, { Children } from 'react';
import * as S from '@/app/styles/Detail';

interface IProblemContentProps {
  mode: string;
  children: React.ReactNode;
}

const LostarkDetailProblemContents = ({ mode, children }: IProblemContentProps) => {
  return (
    <>
      <S.DetailContents color={mode}>{children}</S.DetailContents>
    </>
  );
};

export default LostarkDetailProblemContents;
