import {FC, ReactNode} from 'react';

interface IPageContent {
  children?: ReactNode,
}

export const PageContent: FC<IPageContent> = ({children}) => (
  <div className="page-content">
    {children}
  </div>
);
