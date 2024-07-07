import React, { useState } from 'react';
import NextImage from 'next/image';
import { Image } from 'antd';
import { ImageDesignGroup } from '@/app/lib/images';
import { IFiliterDesignProps, IImageDesignGroupProps } from '@/app/types/PortfolioType';
import PageTransition from '../../commons/Pagetransition';
import { cn } from '@/app/lib/utils';

const DesignImageList = ({ ImageList }: IFiliterDesignProps) => {
  const [isImagecount, setIsImagecount] = useState<number>(20);
  const onClickView = () => {
    setIsImagecount((prev) => prev + 20);
  };
  return (
    <Image.PreviewGroup>
      <div className="relative">
        <div className="grid grid-cols-4 gap-4 p-4 grid-flow-row-dense auto-rows-min pb-8">
          {ImageList.slice(0, isImagecount).map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden  ${image.type === '배너' ? 'col-span-2 h-[200px]' : 'h-[300px]'}`}
            >
              <Image
                src={image.thumb ?? image.src}
                alt={`Image ${index + 1}`}
                preview={{
                  src: `${image.src}`,
                  maskClassName: `${image.type === '배너' ? 'h-[200px]' : 'h-[300px]'}`,
                }}
                placeholder={<NextImage src={image.src} alt={'index'} fill />}
              />
            </div>
          ))}
        </div>
        <div
          className={cn(
            ' items-center justify-center w-full h-[100px]',
            isImagecount > ImageList.length ? 'hidden' : 'flex'
          )}
        >
          <button onClick={onClickView} className="py-2 px-5 text-[14px] border roundde">
            + 더보기{' '}
            <span className="text-gray-500 text-[12px]">
              {isImagecount}/{ImageList.length}
            </span>
          </button>
        </div>
      </div>
    </Image.PreviewGroup>
  );
};

export default DesignImageList;
