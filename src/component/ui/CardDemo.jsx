import { animate, motion } from "framer-motion";
import  { useEffect } from "react";
import { cn } from "../utils/cn";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faReact } from "@fortawesome/free-brands-svg-icons";

export function CardDemo() {
  return (
    <Card >
      <CardSkeletonContainer>
        <Skeleton />
      </CardSkeletonContainer>
      <CardTitle>
        Frontend <br /> Development
      </CardTitle>
    </Card>
  );
}

const Skeleton = () => {
  const scale = [1, 1.1, 1];
  const transform = ["translateY(0px)", "translateY(-8px)", "translateY(0px)"];
  const sequence = [
    [".circle-1", { scale, transform }, { duration: 0.8 }],
    [".circle-2", { scale, transform }, { duration: 0.8 }],
    [".circle-3", { scale, transform }, { duration: 0.8 }],
    [".circle-4", { scale, transform }, { duration: 0.8 }],
    [".circle-5", { scale, transform }, { duration: 0.8 }],
  ];

  useEffect(() => {
    animate(sequence, {
      repeat: Infinity,
      repeatDelay: 1,
    });
  }, []);

  return (
    <div className="p-4 overflow-hidden h-full relative flex items-center justify-center">
      <div className="flex flex-row flex-shrink-0 justify-center items-center gap-6">
        <Container className="circle-1">
          <FontAwesomeIcon icon={faHtml5} style={{ color: "#f55905" }} className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12 2xl:h-14 2xl:w-14" />
        </Container>
        <Container className="circle-2">
          <FontAwesomeIcon icon={faReact} style={{ color: "#1d5cc9" }} className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12 2xl:h-14 2xl:w-14" />
        </Container>
        <Container className="circle-3">
          <FontAwesomeIcon icon={faCss3Alt} style={{ color: "#8e25e4" }} className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12 2xl:h-14 2xl:w-14" />
        </Container>
      </div>
      <div className="h-40 w-px absolute top-0 md:top-2 lg:top-4 xl:top-28 2xl:top-32 m-auto z-40 bg-gradient-to-b from-transparent via-blue-800 to-transparent animate-move">
        <div className="w-10 h-32 top-1/2 -translate-y-1/2 relative -left-10">
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
    <div
      className={cn(
        "  h-[11rem] w-[14rem] md:h-[16rem] md:w-[20rem] lg:h-[20rem] lg:w-[18rem]  xl:h-[28rem] xl:w-[24rem] 2xl:h-[32rem] 2xl:w-[24rem] mx-auto md:p-8 lg:p-4 xl:p-6 2xl:p-8 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_20px_0px_rgba(248,248,248,0.06)_inset] group",
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
      className={cn(
        "mt-6 md:mt-4 lg:mt-6 xl:mt-8 text-center text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-gray-600 dark:text-white",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({ children, className }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base font-normal text-neutral-600 dark:text-neutral-400 max-w-sm text-center",
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
      className={cn(
        "h-[5rem] md:h-[8rem] lg:h-[12rem] xl:h-[16rem] 2xl:h-[20rem] rounded-xl z-40",
        className,
        showGradient &&
          "bg-neutral-300 dark:bg-[rgba(40,40,40,0.70)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]"
      )}
    >
      {children}
    </div>
  );
};

const Container = ({ className, children }) => {
  return (
    <div
      className={cn(
        `h-8 w-8 md:h-16 md:w-16 lg:h-20 lg:w-20 xl:h-24 xl:w-24 2xl:h-28 2xl:w-28 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
         shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]`,
        className
      )}
    >
      {children}
    </div>
  );
};
