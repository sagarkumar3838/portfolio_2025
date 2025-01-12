import { IconCloud } from "./IconCloud";

const slugs = [
  "typescript",
  "javascript",

  "react",

  "html5",
  "css3",
 
  "express",
 
  "amazonaws",
 
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  
  "docker",
 
  "github",
  "gitlab",
  "visualstudiocode",

  "figma",
];

export function IconCloudDemo() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div className="relative flex max-w-lg  items-center justify-center overflow-hidden  bg-transparent ">
      <IconCloud images={images} />
    </div>
  );
}