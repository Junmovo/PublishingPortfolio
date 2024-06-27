import React from 'react';
import * as S from '@/styles/Detail';
import { Image } from 'antd';

const DetailPicture = () => {
  return (
    <article className="p-[20px]">
      <S.TitleText>💻 어떻게 생겼어요?</S.TitleText>
      <div>
        <Image.PreviewGroup>
          <div className="grid grid-cols-3 gap-4">
            <div className="overflow-hidden">
              <Image src="/images/KoniImage.jpg" alt="이미지" className="rounded-[10px]" />
            </div>
            <div className="overflow-hidden">
              <Image src="/images/KoniImage.jpg" alt="이미지" className="rounded-[10px]" />
            </div>
            <div className="overflow-hidden">
              <Image src="/images/KoniImage.jpg" alt="이미지" className="rounded-[10px]" />
            </div>
            <div className="overflow-hidden">
              <Image src="/images/KoniImage.jpg" alt="이미지" className="rounded-[10px]" />
            </div>
            <div className="overflow-hidden">
              <Image src="/images/KoniImage.jpg" alt="이미지" className="rounded-[10px]" />
            </div>
            <div className="overflow-hidden">
              <Image src="/images/KoniImage.jpg" alt="이미지" className="rounded-[10px]" />
            </div>
          </div>
        </Image.PreviewGroup>
      </div>
    </article>
  );
};

export default DetailPicture;
