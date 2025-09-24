import { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
  return <main className="container mx-auto my-8 px-4 md:my-16 md:px-8">{children}</main>;
}
