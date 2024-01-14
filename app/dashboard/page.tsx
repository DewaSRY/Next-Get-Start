import { FC, HTMLAttributes, PropsWithChildren } from 'react';

interface pageProps extends HTMLAttributes<HTMLDivElement> {}
type pageComponents = FC<pageProps> & PropsWithChildren;
const page: pageComponents = ({ children, ...resProps }) => {
  return (
    <div
      {...resProps}
      className={`${resProps.className ? resProps.className : ''}`}
    >
      {children}
      <p>Dashboard Page</p>
    </div>
  );
};

export default page;
