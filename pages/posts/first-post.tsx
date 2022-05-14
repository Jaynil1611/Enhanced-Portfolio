import Image from "next/image";
import Link from "next/link";
import React from "react";

function FirstPost() {
  return (
    <div className="flex flex-col">
      <Link href="/">first-post</Link>
      <Image
        src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
        alt="background"
        width="500px"
        height="300px"
      />
    </div>
  );
}

export default FirstPost;
