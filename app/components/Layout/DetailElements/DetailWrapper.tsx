import React, { ReactNode } from 'react';

const DetailWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <article className="flex flex-col-reverse lg:flex-row justify-between lg:items-end mt-[30px] p-[20px] border-b-[1px] pb-[60px]  gap-4 items-start">
      {children}
    </article>
  );
};

export default DetailWrapper;
