import Image from 'next/image';
import React from 'react';

interface IDetailTopImage {
  ImageSrc: string;
}

const DetailTopImage = ({ ImageSrc }: IDetailTopImage) => {
  return (
    <div className="w-[600px] h-[400px] bg-gray-400 rounded-[20px] overflow-hidden  mt-3 p-[20px]  shadow-[0_2px_30px_0_rgba(0,0,0,.06)] dark:bg-[#2525259d] relative">
      <Image
        src={ImageSrc}
        fill
        alt="상단메인이미지"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO8UA8AAiUBUcc3qzwAAAAASUVORK5CYII="
      />
    </div>
  );
};

export default DetailTopImage;
