import Image from "next/image";

export const Article = ({ title }) => {
  return (
    <div className="article">
      {/* <Image alt="article-thumb" src={thumb} /> */}
      <h2>{title}</h2>
    </div>
  );
};
