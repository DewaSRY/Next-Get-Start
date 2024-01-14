import { FC, HTMLAttributes, PropsWithChildren } from 'react';

interface pageProps extends HTMLAttributes<HTMLDivElement> {}
type pageComponents = FC<pageProps> & PropsWithChildren;
const page: pageComponents = ({ children, ...resProps }) => {
  return (
    <div
      {...resProps}
      className={`${resProps.className ? resProps.className : ''}`}
    >
      <p>Invoices Page</p>
      {children}
    </div>
  );
};

export default page;
