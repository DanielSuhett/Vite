interface Image {
  src: string;
  className: string;
  alt: string;
}

export default function Image({ src, className, alt }: Image) {
  return (
    <div>
      <img width={200} height={200} src={src} className={className} alt={alt} />
    </div>
  );
}
