import { useState } from "react";

export interface ITwoProps {
  className?: string;
}

export const Two = ({ className, ...props }: ITwoProps): JSX.Element => {
  const [isClickedOne, setIsClickedOne] = useState(false);
  const [isClickedTwo, setIsClickedTwo] = useState(false);
  const [isClickedThree, setIsClickedThree] = useState(false);
  const [isClickedNo, setIsClickedNo] = useState(false);

  const handleClickOne = () => {
    setIsClickedOne(true);
    setTimeout(() => setIsClickedOne(false), 200);
  };

  const handleClickTwo = () => {
    setIsClickedTwo(true);
    setTimeout(() => setIsClickedTwo(false), 200);
  };

  const handleClickThree = () => {
    setIsClickedThree(true);
    setTimeout(() => setIsClickedThree(false), 200);
  };  

  const handleClickNo = () => {
    setIsClickedNo(true);
    setTimeout(() => setIsClickedNo(false), 200);
  };

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
            style={{ aspectRatio: "1" }}
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
            style={{ letterSpacing: "-0.025em" }}
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
        className="flex flex-col gap-3 items-start justify-start w-[544px] absolute left-[50%] top-96"
        style={{ translate: "-50%" }}
      >
        <div className="bg-[#2d2d32] rounded-[10px] pt-6 pr-6 pb-9 pl-6 flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 h-[116px] relative"
          onClick={handleClickOne}
          style={{
            backgroundColor: isClickedOne ? "#29292dff" : "#2d2d32",
          }}
          >
          <div
            className="text-[#eaeaea] text-left font-['Inter-SemiBold',_sans-serif] text-xl leading-7 font-semibold relative self-stretch flex items-center justify-start"
            style={{ 
              cursor: "default",
              letterSpacing: "-0.025em", 
              color: isClickedOne ? "#8b8b8bff" : "#eaeaea",
            }}
          >
            백엔드 트랙의 기술 스택, 최신 트렌드에 맞춰 업데이트될 <br />
            계획이 있나요?{" "}
          </div>
        </div>
        <div className="bg-[#2d2d32] rounded-[10px] pt-6 pr-6 pb-9 pl-6 flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 h-[116px] relative"
          onClick={handleClickTwo}
          style={{
            backgroundColor: isClickedTwo ? "#29292dff" : "#2d2d32",
          }}>
          <div
            className="text-[#eaeaea] text-left font-['Inter-SemiBold',_sans-serif] text-xl leading-7 font-semibold relative self-stretch flex items-center justify-start"
            style={{ 
              cursor: "default",

              letterSpacing: "-0.025em",
              color: isClickedTwo ? "#8b8b8bff" : "#eaeaea",
            }}
          >
            매년 달라지는 해커톤 심사 기준, 올해는 명확한 가이드라인이 미리
            공개되나요?{" "}
          </div>
        </div>
        <div className="bg-[#2d2d32] rounded-[10px] pt-6 pr-6 pb-9 pl-6 flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 h-[116px] relative"
          onClick={handleClickThree}
          style={{
            backgroundColor: isClickedThree ? "#29292dff" : "#2d2d32",
          }}>
          <div
            className="text-[#eaeaea] text-left font-['Inter-SemiBold',_sans-serif] text-xl leading-7 font-semibold relative self-stretch flex items-center justify-start"
            style={{ 
              cursor: "default",
              letterSpacing: "-0.025em",
              color: isClickedThree ? "#8b8b8bff" : "#eaeaea",
            }}
          >
            초기에 언급되었던 기업 협력 인턴십 프로그램, 현재 진행 상황이
            궁금합니다.{" "}
          </div>
        </div>
      </div>
      <div
        className="text-[#eaeaea] text-center font-['Inter-SemiBold',_sans-serif] text-3xl leading-9 font-semibold absolute left-[50%] top-[300px] flex items-end justify-center"
        style={{ letterSpacing: "-0.025em", translate: "-50%" }}
      >
        추가적으로 어떤 질문에 관심이 있나요?{" "}
      </div>
      <div
        onClick={handleClickNo}
        className="text-[#b0b0b0] text-right font-['Inter-SemiBold',_sans-serif] text-sm leading-5 font-semibold absolute left-[calc(50%_-_-205px)] top-[788px] flex items-end justify-end"
        style={{ 
          cursor: "default",
          letterSpacing: "-0.025em", 
          color: isClickedNo ? "#8b8b8bff" : "#b0b0b0",
        }}
      >
        관심 없어요{" "}
      </div>
    </div>
  );
};
