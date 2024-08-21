import React from 'react';

const MainWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <article className="w-[100%] flex items-center h-[100vh] m-auto relative pb-[50px] xl:w-[1300px]  justify-center lg:justify-between overflow-hidden lg:overflow-visible">
      {children}
    </article>
  );
};

export default MainWrapper;
