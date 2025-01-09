import { animate, motion } from "framer-motion";
import React, { useEffect } from "react";
import { cn } from "../utils/cn";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNodeJs } from "@fortawesome/free-brands-svg-icons";

export function CardDemo3() {
  return (
    <Card>
      <CardSkeletonContainer>
        <Skeleton />
      </CardSkeletonContainer>
      <CardTitle>Web <br /> Design</CardTitle>
    </Card>
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
      repeat: Infinity,
      repeatDelay: 1,
    });
  }, []);

  return (
    <div className="p-8 overflow-hidden h-full relative flex items-center justify-center">
      <div className="flex flex-row flex-shrink-0 justify-center items-center gap-5">
        <Container className="circle-4">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="46" height="46" viewBox="0 0 48 48">
            <path fill="#03A9F4" d="M6,10c0-2.209,1.791-4,4-4h28c2.209,0,4,1.791,4,4v28c0,2.209-1.791,4-4,4H10c-2.209,0-4-1.791-4-4V10z"></path>
            <path fill="#020F16" d="M20.016,19.174h-2.002v4.434h1.973c0.547,0,0.97-0.179,1.27-0.537s0.449-0.879,0.449-1.563c0-0.71-0.153-1.274-0.459-1.694S20.53,19.181,20.016,19.174z"></path>
            <path fill="#020F16" d="M9,9v30h30V9H9z M23.365,24.789C22.539,25.597,21.393,26,19.928,26h-1.914v5h-2.871V16.781h4.844c1.406,0,2.528,0.437,3.364,1.309s1.255,2.005,1.255,3.398S24.192,23.981,23.365,24.789z M32.682,30.336c-0.709,0.573-1.641,0.859-2.793,0.859c-0.775,0-1.459-0.151-2.051-0.454s-1.057-0.725-1.392-1.265s-0.503-1.123-0.503-1.748h2.627c0.014,0.481,0.125,0.843,0.337,1.084s0.558,0.361,1.04,0.361c0.742,0,1.113- 0.335,1.113-1.006c0-0.234-0.112-0.451-0.337-0.649S30,27.052,29.225,26.713c-1.139-0.462-1.922-0.94-2.349-1.436s-0.64-1.11-0.64-1.846c0-0.925,0.334-1.688,1.001-2.29s1.552-0.903,2.651-0.903c1.158,0,2.086,0.3,2.783,0.898s1.045,1.403,1.045,2.412h-2.764c0-0.859-0.357-1.289-1.074-1.289c-0.293,0-0.533,0.091-0.723,0.273s-0.283,0.437-0.283,0.762c0,0.234,0.104,0.441,0.313,0.62s0.699,0.435,1.475,0.767c1.127,0.417,1.922,0.881,2.388,1.392s0.698,1.174,0.698,1.987C33.746,29.005,33.391,29.763,32.682,30.336z"></path>
          </svg>
        </Container>
        <Container className="circle-3">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
            <path fill="#b388ff" d="M6,10c0-2.209,1.791-4,4-4h28c2.209,0,4,1.791,4,4v28c0,2.209-1.791,4-4,4H10c-2.209,0-4-1.791-4-4 V10z"></path>
            <path fill="#170b40" d="M9,9v30h30V9H9z"></path>
            <path fill="#b388ff" d="M21.183 27.965h-4.555l-.866 2.846H13L17.694 17h2.407l4.719 13.81h-2.762L21.183 27.965zM17.33 25.66h3.152l-1.584-5.17L17.33 25.66zM30.146 31c-.728 0-1.379-.13-1.953-.389-.575-.259-1.062-.614-1.464-1.063-.402-.449-.707-.975-.918-1.579-.21-.604-.316-1.25-.316-1.94v-.37c0-.778.103-1.491.308-2.139.204-.648.496-1.206.875-1.674.377-.468.837-.833 1.376-1.096.54-.262 1.145-.394 1.814-.394.675 0 1.27.122 1.784.365.514.243.945.585 1.295 1.025.349.439.612.969.788 1.589S34 24.645 34 25.404v1.167h-5.966c.04.335.123.639.247.91.124.272.283.504.476.697s.42.343.679.451c.26.108.552.161.875.161.456 0 .878-.093 1.264-.28.387-.186.719-.476.996-.868l1.23 1.508c-.15.234-.338.462-.563.683-.225.221-.491.419-.797.593-.306.174-.65.313-1.035.417C31.022 30.948 30.603 31 30.146 31zM29.861 22.577c-.272 0-.509.052-.715.157-.205.104-.381.25-.528.436-.147.186-.267 ```javascript
.409-.359.669-.092.259-.158.547-.198.863h3.481v-.218c-.006-.272-.042-.525-.109-.759-.066-.234-.167-.436-.303-.607-.136-.171-.309-.303-.519-.398C30.398 22.625 30.149 22.577 29.861 22.577z"></path>
          </svg>
        </Container>
        <Container className="circle-4">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
            <path fill="#E91E63" d="M5,10c0-2.209,1.791-4,4-4h28c2.209,0,4,1.791,4,4v28c0,2.209-1.791,4-4,4H9c-2.209,0-4-1.791-4-4V10z"></path>
            <path fill="#16020B" d="M26.283,22.553c-0.508,0-0.879,0.205-1.113,0.615s-0.352,1.14-0.352,2.188v0.732c0,1.042,0.111,1.77,0.332,2.183c0.221,0.413,0.596,0.62,1.123,0.62c0.547,0,0.961-0.244,1.24-0.732v-4.824C27.24,22.813,26.83,22.553,26.283,22.553z"></path>
            <path fill="#16020B" d="M8,9v30h30V9H8z M20.141,31H17.27V16.781h2.871V31z M30.297,31h-2.51l-0.127-1.074c-0.566,0.847-1.295,1.27-2.188,1.27c-1.107,0-1.952-0.423-2.534-1.27s-0.88-2.09-0.894-3.73v-0.801c0-1.731,0.293-3.024,0.879-3.877s1.439-1.279,2.559-1.279c0.814,0,1.49,0.352,2.031,1.055V16h2.783V31z"></path>
          </svg>
        </Container>
      </div>
      <div className="h-40 w-px absolute top-20 m-auto z-40 bg-gradient-to-b from-transparent via-blue-800 to-transparent animate-move">
        <div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10">
          <Sparkles />
        </div>
      </div>
    </div>
  );
};

const Sparkles = () => {
  const randomMove = () => Math.random() * 2 - 1;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();
  return (
    <div className="absolute inset-0">
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
          className="inline-block bg-black dark:bg-white"
        ></motion.span>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div className={cn(
        "w-72 mx-auto p-4 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_20px_0px_rgba(248,248,248,0.06)_inset] group",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({ children, className }) => {
  return (
    <h3
      className={cn("text-center text-2xl font-bold text-gray-600 dark:text-white", className)}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({ children, className }) => {
  return (
    <p
      className={cn(
        "text-sm font-normal text-neutral-600 dark:text-neutral-400 max-w-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardSkeletonContainer = ({ className, children, showGradient = true }) => {
  return (
    <div
      className={cn("h-[5rem] md:h-[20rem] rounded-xl z-40", className, showGradient &&
        "bg-neutral-300 dark:bg-[rgba(40,40,40,0.70)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]")}
    >
      {children}
    </div>
  );
};

const Container = ({ className, children }) => {
  return (
    <div
      className={cn(
        `h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
        shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]`,
        className
      )}
    >
      {children}
    </div>
  );
};