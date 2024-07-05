import React from 'react';
import Detailbedge from './Detailbedge';
import DetailTitle from './DetailTitle';

const menuList = [
  {
    title: '전체',
  },
  { title: '팝업' },
  { title: '이벤트' },
  { title: '배너' },
];

const DesignDetailList = () => {
  return (
    <div className="flex justify-between p-[20px]">
      <ul className="flex">
        {menuList.map((menu, idx) => (
          <li key={idx} className="p-4 cursor-pointer">
            {menu.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DesignDetailList;
