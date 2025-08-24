import { motion } from "framer-motion";

export interface IThreeProps {
  className?: string;
}

export const Three = ({ className, ...props }: IThreeProps): JSX.Element => {
  return (
    <div
      className={
        "bg-[#18181b] h-[1080px] relative overflow-hidden " + className
      }
    >
      <div className="pt-1.5 pr-6 pb-1.5 pl-6 flex flex-row items-center justify-between absolute right-0 left-0 top-0 overflow-hidden">
        <div className="flex flex-row gap-[9px] items-center justify-start shrink-0 relative">
          <img
            className="shrink-0 w-[30px] h-[30px] relative overflow-visible"
            style={{ aspectRatio: "1"}}
            src="div0.svg"
          />
          <div
            className="text-[#ffffff] text-left font-['Inter-Bold',_sans-serif] text-xl leading-5 font-bold relative flex items-center justify-start"
            style={{ letterSpacing: "-0.025em" }}
          >
            QnAHub{" "}
          </div>
        </div>
        <div className="flex flex-row gap-6 items-center justify-end shrink-0 relative">
          <div
            className="text-[#b0b0b0] text-right font-['Inter-Bold',_sans-serif] text-xs leading-5 font-bold relative flex items-center justify-end"
            style={{ letterSpacing: "-0.025em"}}
          >
            https://qnahub.xyz/likelion_univ{" "}
          </div>
          <div
            className="shrink-0 w-12 h-12 relative overflow-hidden"
            style={{ aspectRatio: "1" }}
          >
            <img
              className="h-[auto] absolute left-0 top-0 overflow-visible"
              src="clip-path-group0.svg"
            />
          </div>
        </div>
      </div>
      <div
        className="text-[#eaeaea] text-center font-['Inter-SemiBold',_sans-serif] text-3xl leading-9 font-semibold absolute left-[50%] top-[300px] flex items-end justify-center"
        style={{ letterSpacing: "-0.025em", translate: "-50%"}}
      >
        QnAHub가 질문을 요약하여 전송합니다{" "}
      </div>
      <div
        className="w-[200px] h-[200px] absolute left-[50%] top-[50%]"
        style={{ translate: "-50% -50%", aspectRatio: "1" }}
      >
        <motion.img
          className="w-[100%] h-[100%] absolute right-[0%] left-[0%] bottom-[0%] top-[-10%] overflow-visible "
          src="qnahub-logo-11.svg"
          alt="QnAHub Logo"
          animate={{
            y: [0, -40, 0], // 위로 30px 갔다가 다시 내려옴
          }}
          transition={{
            duration: 1.5, // 왕복 시간
            repeat: Infinity, // 무한 반복
            ease: "easeInOut", // 애니메이션 가속 및 감속 설정 : 천천히 빠르게 천천히
          }}
        />
      </div>
    </div>
  );
};
