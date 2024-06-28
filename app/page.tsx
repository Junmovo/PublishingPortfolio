'use client';

import AboutMe from '@/app/components/Layout/mainElements/AboutMe';
import MainContents_ver2 from '@/app/components/Layout/mainElements/MainContents_ver2';
import List2 from '@/app/components/Layout/mainElements/list_ver2';

export default function Home() {
  return (
    <>
      <MainContents_ver2 />
      <AboutMe />
      <List2 />
    </>
  );
}
