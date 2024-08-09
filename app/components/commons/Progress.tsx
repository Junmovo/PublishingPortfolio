import React, { useEffect, useState } from 'react';
import { Flex, Progress } from 'antd';

interface IProgress_bar {
  title: string;
  per: number;
}

const Progress_Bar = ({ title, per }: IProgress_bar) => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = per / 50;
    const interval = setInterval(() => {
      start += increment;
      if (start >= per) {
        start = per;
        clearInterval(interval);
      }
      setNumber(Math.round(start));
    }, 20);

    return () => clearInterval(interval);
  }, [per]);
  const color = () => {
    if (title === '디자인') {
      return '#71a7c0';
    } else if (title === '퍼블리싱') {
      return '#95c4c7';
    } else if (title === '기획') {
      return '#bd95c7';
    } else {
      return '#95a6c7';
    }
  };

  return (
    <>
      <article className="flex w-full mb-2 pl-4">
        <h4 className="w-[100px] text-[14px]">{title}</h4>

        <Progress percent={number} percentPosition={{ type: 'outer' }} strokeColor={color()} status="normal" />
      </article>
    </>
  );
};

export default Progress_Bar;
