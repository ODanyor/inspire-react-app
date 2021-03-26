import { ChangeEvent } from 'react';

export interface HandleProps<T> {
  controls: {
    value: T;
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  };
  setValue: React.Dispatch<T>;
}

export interface ImageLoadProps {
  loading: boolean;
  current: string;
}

export interface SectionProps {
  setSection: (event: number) => void;
}

export interface SectionsProps extends SectionProps {
  sections: React.FC<SectionProps>[];
  ref: React.Ref<HTMLDivElement>;
}

interface TitleAndContent {
  title: string;
  content: string;
}

export interface CardInterface {
  header: TitleAndContent;
  body: TitleAndContent;
}

export interface CardProps {
  item: CardInterface;
  activeCard: CardInterface;
  setActive: React.Dispatch<CardInterface>;
}

interface Menu {
  onClick: () => void;
}

export interface MenuProps extends Menu {
  isOpen: boolean;
}

export interface MenuLinkProps extends Menu {
  to: string;
  placeholder: string;
}

export interface Position {
  x: number | undefined;
  y: number | undefined;
}

export interface CursorProps {
  cursor: boolean | string;
}

export interface CursorContextProps {
  onCursor?: (value: any) => void;
}
