
import { animate, motion } from "framer-motion";
import React, { useEffect } from "react";
import { cn } from "../utils/cn";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNodeJs } from "@fortawesome/free-brands-svg-icons";



export function CardDemo1() {
  return (
    (<Card>
      <CardSkeletonContainer>
        <Skeleton />
      </CardSkeletonContainer>
      <CardTitle className="">Backend <br /> Development</CardTitle>
      {/* <CardDescription>
        A card that showcases a set of tools that you use to create your
        product.
      </CardDescription> */}
    </Card>)
  );
}

const Skeleton = () => {
  const scale = [1, 1.1, 1];
  const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];
  const sequence = [
    [
      ".circle-1",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-2",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-3",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-4",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-5",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
  ];

  useEffect(() => {
    animate(sequence, {
      // @ts-ignore
      repeat: Infinity,
      repeatDelay: 1,
    });
  }, []);
  return (
    (<div
      className="p-8 overflow-hidden h-full relative flex items-center justify-center">
      <div className="flex flex-row flex-shrink-0 justify-center items-center gap-5">
       
        <Container className=" circle-4 ">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 40 40">
<path fill="#b0c1d4" d="M37.005,31.5c-0.975,0-1.91-0.463-2.502-1.237l-5.599-7.321l-5.6,7.321 c-0.592,0.774-1.527,1.237-2.502,1.237h-2.22l8.433-11.028L18.625,9.5h2.22c0.975,0,1.911,0.462,2.502,1.236l5.556,7.266 l5.557-7.266C35.051,9.962,35.987,9.5,36.962,9.5h2.22l-8.391,10.972L39.225,31.5H37.005z"></path><path fill="#66798f" d="M38.17,10l-8.008,10.472L38.213,31h-1.208c-0.825,0-1.604-0.385-2.105-1.04l-5.996-7.841 l-5.996,7.841c-0.501,0.656-1.28,1.04-2.105,1.04h-1.208l8.051-10.528L19.636,10h1.208c0.825,0,1.604,0.385,2.105,1.04l5.954,7.785 l5.954-7.785c0.501-0.656,1.28-1.04,2.105-1.04H38.17 M40.194,9H38.17h-1.208c-1.129,0-2.213,0.536-2.899,1.433l-5.159,6.747 l-5.159-6.747C23.058,9.536,21.974,9,20.845,9h-1.208h-2.024l1.229,1.607l7.544,9.865l-7.586,9.92L17.57,32h2.024h1.208 c1.129,0,2.213-0.536,2.899-1.433l5.202-6.803l5.202,6.803C34.791,31.464,35.875,32,37.005,32h1.208h2.024l-1.229-1.607 l-7.586-9.92l7.544-9.865L40.194,9L40.194,9z"></path><g><path fill="#b0c1d4" d="M10,32.5c-5.238,0-9.5-4.409-9.5-9.828v-4.345C0.5,12.909,4.762,8.5,10,8.5s9.5,4.408,9.5,9.827 v4.172L3.5,22.5v0.172c0,3.765,2.916,6.828,6.5,6.828c1.977,0,3.893-0.996,5.125-2.663c0.628-0.851,1.551-1.338,2.532-1.338h1.469 l-0.248,0.673C17.484,29.957,13.917,32.5,10,32.5z M16.5,19.5v-1.173c0-3.765-2.916-6.827-6.5-6.827s-6.5,3.062-6.5,6.827V19.5 H16.5z"></path><path fill="#66798f" d="M10,9c4.962,0,9,4.185,9,9.327V22L3,22v0.672C3,26.713,6.14,30,10,30 c2.188,0,4.223-1.102,5.527-2.866C16.035,26.447,16.802,26,17.657,26l0.752,0c0,0,0,0,0.001,0.001c-1.322,3.588-4.704,6-8.41,6 c-4.962,0-9-4.185-9-9.328v-4.345C1,13.185,5.038,9,10,9 M3,20h14v-1.673C17,14.287,13.86,11,10,11s-7,3.287-7,7.327V20 M10,8 C4.486,8,0,12.633,0,18.327v4.345C0,28.367,4.486,33,10,33c4.125,0,7.881-2.674,9.348-6.654l0.495-1.344L18.411,25L17.658,25 c-1.142,0-2.211,0.561-2.935,1.54C13.584,28.08,11.819,29,10,29c-3.204,0-5.83-2.663-5.992-6L19,23l1,0v-1v-3.672 C20,12.633,15.514,8,10,8L10,8z M4,19v-0.673C4,14.838,6.692,12,10,12s6,2.838,6,6.327V19H4L4,19z"></path></g>
</svg>
        </Container>
        <Container className="circle-3">
        <FontAwesomeIcon icon={faNodeJs} size="2xl" style={{color: "#048650",}} className="h-18 w-18 dark:text-white" />
        </Container>
        <Container className=" circle-4">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="240" height="240" viewBox="0 0 48 48">
<path fill="#5d4037" d="M42,17.3C42,37.8,24,44,24,44S6,37.8,6,17.3c0-2.5,0.2-4.6,0.4-6.3c0.3-2.5,2-4.5,4.4-5.1 C13.9,5,18.8,4,24,4s10.1,1,13.3,1.9c2.4,0.6,4.1,2.7,4.4,5.1C41.8,12.7,42,14.9,42,17.3z"></path><path fill="#4caf50" d="M24,7c4.9,0,9.5,1,12.5,1.8c1.2,0.3,2,1.3,2.2,2.6c0.2,1.9,0.3,3.9,0.3,5.9c0,15.6-11.5,21.9-15,23.4 c-3.5-1.6-15-7.9-15-23.4c0-2,0.1-4,0.3-5.9c0.1-1.3,1-2.3,2.2-2.6C14.5,8,19.1,7,24,7 M24,4c-5.2,0-10.1,1-13.3,1.9 C8.4,6.5,6.6,8.6,6.4,11C6.2,12.7,6,14.9,6,17.3C6,37.8,24,44,24,44s18-6.2,18-26.7c0-2.5-0.2-4.6-0.4-6.3c-0.3-2.5-2-4.5-4.4-5.1 C34.1,5,29.2,4,24,4L24,4z"></path><path fill="#dcedc8" d="M23 28H25V36H23z"></path><path fill="#4caf50" d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3l1,3c1.7-1.5,5-4.8,5-10C30,15,24,10,24,10z"></path><path fill="#81c784" d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3V10z"></path>
</svg>
        </Container>
      
      </div>
      <div
        className="h-40 w-px absolute top-20 m-auto z-40 bg-gradient-to-b from-transparent via-blue-800 to-transparent animate-move">
        <div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10">
          <Sparkles />
        </div>
      </div>
    </div>)
  );
};
const Sparkles = () => {
  const randomMove = () => Math.random() * 2 - 1;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();
  return (
    (<div className="absolute inset-0">
      {[...Array(12)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 2 + 4,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block bg-black dark:bg-white"></motion.span>
      ))}
    </div>)
  );
};

export const Card = ({
  className,
  children
}) => {
  return (
    (<div
      className={cn(
        " w-72  mx-auto p-4 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_20px_0px_rgba(248,248,248,0.06)_inset] group",
        className
      )}>
      {children}
    </div>)
  );
};

export const CardTitle = ({
  children,
  className
}) => {
  return (
    (<h3
      className={cn(" text-center text-2xl font-bold text-gray-600 dark:text-white ", className)}>
      {children}
    </h3>)
  );
};

export const CardDescription = ({
  children,
  className
}) => {
  return (
    (<p
      className={cn(
        "text-sm font-normal text-neutral-600 dark:text-neutral-400 max-w-sm",
        className
      )}>
      {children}
    </p>)
  );
};

export const CardSkeletonContainer = ({
  className,
  children,
  showGradient = true
}) => {
  return (
    (<div
      className={cn("h-[5rem] md:h-[20rem] rounded-xl z-40", className, showGradient &&
        "bg-neutral-300 dark:bg-[rgba(40,40,40,0.70)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]")}>
      {children}
    </div>)
  );
};

const Container = ({
  className,
  children
}) => {
  return (
    (<div
      className={cn(
        `h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
    shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
    `,
        className
      )}>
      {children}
    </div>)
  );
};




