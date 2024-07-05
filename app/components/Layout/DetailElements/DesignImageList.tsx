import React from 'react';
import NextImage from 'next/image';
import { Image } from 'antd';
import { ImageDesignGroup } from '@/app/lib/images';

const DesignImageList = () => {
  return (
    <Image.PreviewGroup>
      <div className="grid grid-cols-4 gap-4 p-4 grid-flow-row-dense auto-rows-min">
        {ImageDesignGroup.map((image, index) => (
          <div
            key={index}
            className={`relative overflow-hidden  ${image.type === '배너' ? 'col-span-2 h-[200px]' : 'h-[300px]'}`}
          >
            <Image
              src={image.src}
              alt={`Image ${index + 1}`}
              preview={{
                maskClassName: `${image.type === '배너' ? 'h-[200px]' : 'h-[300px]'}`,
              }}
              placeholder={<NextImage src={image.src} alt={'index'} fill />}
            />
          </div>
        ))}
      </div>
    </Image.PreviewGroup>
  );
};

export default DesignImageList;
