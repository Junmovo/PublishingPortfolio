import React, { useState, useEffect } from 'react';
import { ImageDesignGroup } from '@/app/lib/images';
import { cn } from '@/app/lib/utils';
import DesignImageListComponent from './DesignImageList';
import PageTransition from '../../commons/Pagetransition';

const menuList = [
  { title: '전체' },
  { title: '팝업' },
  { title: '이벤트' },
  { title: '배너' },
  { title: '상세' },
  { title: '합성' },
  { title: '기타' },
];

const DesignDetailList = () => {
  const [isSelected, setIsSelected] = useState('전체');
  const [visible, setVisible] = useState(true);

  const getImageList = (selected: string) => {
    if (selected === '전체') {
      return ImageDesignGroup;
    }
    return ImageDesignGroup.filter((el) => el.type === selected);
  };

  const ImageList = getImageList(isSelected);

  const onChangeSelect = (select: string) => () => {
    setVisible(false);
    setTimeout(() => {
      setIsSelected(select);
      setVisible(true);
    }, 300);
  };

  return (
    <>
      <div className="flex justify-between p-[10px] border-b-[1px]">
        <div className=" overflow-x-auto whitespace-nowrap	 w-full">
          <ul className="md:flex flex">
            {menuList.map((menu, idx) => (
              <li
                key={idx}
                className={cn(
                  'px-[15px] py-[10px] cursor-pointer text-gray-500',
                  isSelected === menu.title ? 'font-[600] text-black dark:text-white' : ''
                )}
                onClick={onChangeSelect(menu.title)}
              >
                {menu.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className={`transition relative duration-300 ${
          visible ? 'opacity-100 translate-y-1' : 'opacity-0 translate-y-[-20]'
        }`}
      >
        <DesignImageListComponent ImageList={ImageList} />
      </div>
    </>
  );
};

export default DesignDetailList;
