interface Loading {
  state: boolean;
}

export default function Layout({ state }: Loading) {
  return <div className={state ? 'backdrop-blur-3xl' : ''}></div>;
}
