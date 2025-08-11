export interface IHeaderProps {
  className?: string;
}

export const Header = ({ className = "" }: IHeaderProps): React.JSX.Element => {
  return (
    <div className={`pt-1.5 pr-6 pb-1.5 pl-6 flex flex-row items-center justify-between h-[60px] absolute right-0 left-0 top-0 overflow-hidden z-50 ${className}`}>
      <div className="flex flex-row gap-[9px] items-center justify-start shrink-0 relative">
        <img
          className="shrink-0 w-[30px] h-[30px] relative overflow-visible"
          style={{ aspectRatio: "1" }}
          src="/div11.svg"
          alt="QnAHub Logo"
        />
        <div
          className="text-[#ffffff] text-left font-['Inter',_sans-serif] text-xl leading-5 font-bold relative flex items-center justify-start"
          style={{ letterSpacing: "-0.025em" }}
        >
          QnAHub
        </div>
      </div>
    </div>
  );
};
