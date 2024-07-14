import Image from 'next/image';
import React, { useRef } from 'react';
import { ClipLoader } from 'react-spinners';

interface IDetailTopImage {
  ImageSrc: string;
}

const DetailTopImage = ({ ImageSrc }: IDetailTopImage) => {
  const ref = useRef<any>(null);
  return (
    <div className="md:w-[600px] md:h-[400px] bg-gray-100 rounded-[20px] overflow-hidden  md:mt-3 p-[20px]  shadow-[0_2px_30px_0_rgba(0,0,0,.06)] dark:bg-[#2525259d] relative w-full h-[240px]">
      <Image
        src={ImageSrc}
        fill
        alt="상단메인이미지"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO8UA8AAiUBUcc3qzwAAAAASUVORK5CYII="
        onLoadingComplete={(e) => ref.current.remove()}
        priority
      />
      <div className="absolute position_center" ref={ref}>
        <ClipLoader speedMultiplier={0.5}></ClipLoader>
      </div>
    </div>
  );
};

export default DetailTopImage;
