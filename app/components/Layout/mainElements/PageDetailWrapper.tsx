import React from 'react';

const PageDetailWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="xl:w-[1300px] m-auto w-full">{children}</div>;
};

export default PageDetailWrapper;
