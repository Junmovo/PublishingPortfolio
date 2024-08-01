import React from 'react';

const DetailSection = ({ children }: { children: React.ReactNode }) => {
  return <section className="grid lg:grid-cols-2 p-[20px] gap-7 pt-[40px] pb-[80px]">{children}</section>;
};

export default DetailSection;
