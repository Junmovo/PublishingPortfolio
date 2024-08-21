import React from 'react';

const PageDetailWrapper = ({ children }: { children: React.ReactNode }) => {
  return <main className="xl:w-[1300px] m-auto w-full">{children}</main>;
};

export default PageDetailWrapper;
