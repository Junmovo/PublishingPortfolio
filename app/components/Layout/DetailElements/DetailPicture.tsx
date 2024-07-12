import React, { useEffect } from 'react';
import * as S from '@/app/styles/Detail';
import { Image } from 'antd';
import { IDetailPictureProps } from '@/app/types/PortfolioType';

const DetailPicture = ({ ImageGroup }: IDetailPictureProps) => {
  useEffect(() => {
    const preloadImages = () => {
      ImageGroup.forEach((image) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = image.preview;
        link.as = 'image';
        link.type = 'image/gif';
        document.head.appendChild(link);
      });
    };
    preloadImages();

    return () => {
      ImageGroup.forEach((image) => {
        const links = document.querySelectorAll(`link[rel='preload'][href='${image.preview}']`);
        links.forEach((link) => link.remove());
      });
    };
  }, [ImageGroup]);

  return (
    <article className="p-[20px]  pb-[80px]">
      <div className="text-[24px] font-[800]">💻 작업내역</div>
      <div className="text-gray-500 mb-6 ml-10 text-[16px]">클릭 시 미리보기가 가능합니다.(Gif)</div>
      <div>
        <Image.PreviewGroup>
          <div className="grid md:grid-cols-3 gap-4">
            {ImageGroup.map((items) => (
              <div key={items.title} className="">
                <Image
                  src={items.src}
                  alt={items.title}
                  className="rounded-[10px] border  overflow-hidden"
                  preview={{
                    src: `${items.preview}`,
                    maskClassName: 'rounded-[10px]',
                  }}
                />
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
