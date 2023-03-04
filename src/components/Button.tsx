import { MouseEventHandler } from 'react';

interface Button {
  src: string;
  className: string;
  onClick: MouseEventHandler;
}

export default function Button({ className, onClick }: Button) {
  return <button onClick={onClick} className={className} />;
}
