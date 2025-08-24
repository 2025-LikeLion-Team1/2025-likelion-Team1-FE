import { useState } from "react";

export interface IOneProps {
  className?: string;
}

export const One = ({ className, ...props }: IOneProps): JSX.Element => {
  const [isClickedYes, setIsClickedYes] = useState(false);
  const [isClickedNo, setIsClickedNo] = useState(false);
  const handleClickYes = () => {
    setIsClickedYes(true);
    setTimeout(() => setIsClickedYes(false), 200);
  };

  const handleClickNo = () => {
    setIsClickedNo(true);
    setTimeout(() => setIsClickedNo(false), 200);
  };

  return (
    <div
      className={
        "bg-[#18181b] min-h-screen relative overflow-hidden " + className
      }
    >
      <div className="pt-1.5 pr-6 pb-1.5 pl-6 flex flex-row items-center justify-between absolute right-0 left-0 top-0 overflow-hidden">
        <div className="flex flex-row gap-[9px] items-center justify-start shrink-0 relative">
          <img
            className="shrink-0 w-[30px] h-[30px] relative overflow-visible"
            style={{ aspectRatio: "1" }}
            src="/div0.svg"
            alt="logo"
          />
          <div
            className="text-[#ffffff] text-left font-inter font-bold text-xl leading-5 relative flex items-center justify-start"
            style={{ letterSpacing: "-0.025em" }}
          >
            QnAHub{" "}
          </div>
        </div>
        <div className="flex flex-row gap-6 items-center justify-end shrink-0 relative">
          <div
            className="text-[#b0b0b0] text-right font-inter font-bold text-xs leading-5 relative flex items-center justify-end"
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
              src="/clip-path-group0.svg"
              alt="clip-path"
            />
          </div>
        </div>
      </div>
      <div
        className="flex flex-col gap-3 items-start justify-start w-[544px] h-52 absolute left-[50%] top-[444px]"
        style={{ translate: "-50%" }}
      >
        <div className="bg-[#2d2d32] rounded-[10px] pt-6 pr-6 pb-9 pl-6 flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 h-[116px] relative">
          <div
            className="text-[#eaeaea] text-left font-inter font-semibold text-xl leading-7 relative self-stretch flex items-center justify-start "
            style={{ 
              marginTop: "-0.2em",
              marginBottom: "0.5em",
              marginLeft: "3.3em",
              letterSpacing: "-0.025em",
              lineHeight: "1.8em",
              textAlign: "center",
            }}
          >
            해커톤 수상팀, 작년과 동일한 아이디어인데 
            <br></br>
            공정한 심사가 맞나요?{" "}
          </div>
        </div>
        <div className="flex flex-row gap-3 items-center justify-center self-stretch flex-1 relative">
          <div 
            onClick={handleClickYes}  // 부모 div에 클릭 이벤트
            className="bg-[#204efb] rounded-[10px] flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 w-[336px] relative"
            style={{
              backgroundColor: isClickedYes ? "#1b3edb" : "#204efb",
            }}
            >
              
            <div
              className="text-[#ffffff] text-center font-inter font-semibold text-xl leading-7 relative self-stretch flex items-center justify-center"
              style={{ 
                letterSpacing: "-0.025em",
                color: isClickedYes ? "#b0b0b0" : "#ffffffff"
               }}
            >
              추천할게요{" "}
            </div>
          </div>
          <div className="bg-[#2d2d32] rounded-[10px] flex flex-col gap-2.5 items-center justify-center self-stretch flex-1 relative"
            style={{
              backgroundColor: isClickedNo ? "#1e1e22ff" : "#2d2d32"
            }}          
          >
            <div
              onClick={handleClickNo} 
              className="text-[#eaeaea] text-center font-inter font-semibold text-xl leading-7 relative self-stretch flex items-center justify-center"
              style={{ 
                letterSpacing: "-0.025em",
                color: isClickedNo ? "#b0b0b0" : "#eaeaea",   // 클릭 시 글자색 변경
              }}
            >
              아니요{" "}
            </div>
          </div>
        </div>
      </div>
      <div
  className="text-[#eaeaea] text-center font-inter font-semibold text-3xl leading-9 absolute left-[50%] top-[300px] flex items-end justify-center"
        style={{ letterSpacing: "-0.025em", translate: "-50%" }}
      >
        보내주신 질문을 대신하여 비슷한 질문을 추천하시겠어요?{" "}
      </div>
      <div
  className="text-[#b0b0b0] text-center font-inter font-semibold text-xl leading-7 absolute left-[50%] top-[356px] flex items-end justify-center"
        style={{ letterSpacing: "-0.05em", translate: "-50%" }}
      >
        기존 질문을 추천하여 중복되는 질문을 흡수할게요{" "}
      </div>
    </div>
  );
};
