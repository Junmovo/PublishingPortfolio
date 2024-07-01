import PageDetailWrapper from '@/app/components/Layout/mainElements/PageDetailWrapper';
import React from 'react';
import DetailHeader from '../components/Layout/DetailElements/DetailHeader';
import Header from '../components/Layout/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
