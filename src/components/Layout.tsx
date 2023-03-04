import { ReactElement } from 'react';

interface Layout {
  children: ReactElement;
  className?: string;
}

export default function Layout({ children, className }: Layout) {
  const styles = className + ' grid place-content-center h-screen';
  return <div className={styles}>{children}</div>;
}
