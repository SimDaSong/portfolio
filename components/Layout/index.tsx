import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => (
    <div className="px-10 mt-8 mb-16 max-w-7xl py-8 lg:px-16">
        {children}
    </div>
);

Layout.defaultProps = {
  children: null,
};

export default Layout;
