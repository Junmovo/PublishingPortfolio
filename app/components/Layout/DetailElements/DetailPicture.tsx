import React from 'react';
import * as S from '@/app/styles/Detail';
import { Image } from 'antd';
import { IDetailPictureProps } from '@/app/types/PortfolioType';

const DetailPicture = ({ ImageGroup }: IDetailPictureProps) => {
  return (
    <article className="p-[20px] mt-10 pb-[80px]">
      <div className="text-[24px] font-[600]">💻 작업내역</div>
      <div className="text-gray-500 mb-6 ml-10 text-[14px]">클릭 시 미리보기가 가능합니다.(gif)</div>
      <div>
        <Image.PreviewGroup>
          <div className="grid grid-cols-3 gap-4">
            {ImageGroup.map((items) => (
              <div key={items.title}>
                <div className="overflow-hidden w-full h-[250px]">
                  <Image
                    src={items.src}
                    alt={items.title}
                    className="rounded-[10px] border "
                    preview={{
                      src: `${items.preview}`,
                    }}
                  />
                </div>
                <span className=" mt-2 text-[14px]  text-gray-400 text-center w-full inline-block">{items.title}</span>
              </div>
            ))}
          </div>
        </Image.PreviewGroup>
      </div>
    </article>
  );
};

export default DetailPicture;
