import Image from "next/image";

const BlogImage = (props: object) => {
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const { src } = props as Record<string, string>;
  const imageSource = `${origin}/${src}`;
  return (
    <span className="block mt-3 text-center">
      <Image
        {...props}
        src={imageSource}
        // width="500px"
        // height="500px"
        objectFit="contain"
        className="flex flex-1 justify-center"
        loading="lazy"
        alt=""
      />
    </span>
  );
};

export default BlogImage;
