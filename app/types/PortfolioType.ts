import { ImageGroup } from './../lib/DetailImgData';
import { MouseEvent } from 'react';

export interface IDetailContentsType {
  contents: string;
}

export interface IDetailTitleType {
  title: string;
  subTitle: string;
  date: string;
}
export interface IDetailSubcontentsType {
  subContents: React.ReactNode;
  HomepageLink: string;
  githubLink?: string;
}

export interface IconButtonProps {
  icon: React.ReactNode;
  onClickIcon?: (e: MouseEvent<HTMLDivElement>) => void;
}

export interface IconButtonColorProps {
  icon?: React.ReactNode;
  title: string;
  className?: string;
}

export type ImageGroupType = {
  preview: string;
  src: string;
  title: string;
};

export interface IDetailPictureProps {
  ImageGroup: ImageGroupType[];
}

export interface MenuItem {
  contents: string;
}
