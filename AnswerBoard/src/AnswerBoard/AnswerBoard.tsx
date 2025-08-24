import React, { useEffect, useRef, useState } from "react";

export interface IAnswerBoardProps {
  className?: string;
}

type TabType = "전체" | "최근" | "HOT";

export const AnswerBoard = ({
  className,
  ...props
}: IAnswerBoardProps): JSX.Element => {
  const [activeTab, setActiveTab] = useState<TabType>("전체");

  // 커스텀 스크롤 연동용 상태 및 ref
  const listRef = useRef<HTMLDivElement>(null);
  const [thumbTop, setThumbTop] = useState(0);
  const [thumbHeight, setThumbHeight] = useState(40);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartY = useRef(0);
  const scrollStartTop = useRef(0);

  // 예시 데이터
  const allAnswers = [
    {
      title: "✅ 일부 VOD 강의의 퀄리티가 아쉽습니다. 업데이트 계획이 궁금합니다.",
      content:
        "📍 가장 만족도가 낮았던 'JPA 심화'와 '배포 자동화' 세션은 9월 중으로 전면 재촬영하여 교체할 것을 약속드립니다. 또한, 앞으로 제작되는 모든 VOD는 전문 스튜디오에서 녹화하여 퀄리티를 보장하겠습니다. 여러분의 학습 경험을 최우선으로 생각하며, 꾸준히 개선해 나가겠습니다.",
      tags: "#VOD #강의퀄리티 #학습경험 #콘텐츠업데이트",
      time: "2시간 전 답변됨",
      icon: "frame-600.svg",
      type: "최근",
    },
    {
      title: "✅ 자율적으로 진행되는 스터디, 학교별 지원 격차가 있는 것 같습니다.",
      content:
        "📍 이 문제를 해결하기 위해, 다음 달부터 모든 스터디 그룹에 온라인 화이트보드 툴 'Miro'의 유료 플랜을 공통으로 지원하겠습니다. 또한, 우수 스터디 그룹에 제공되던 오프라인 공간 대여비 지원도 예산을 증액하여 더 많은 팀이 혜택을 받을 수 있도록 개선하겠습니다.",
      tags: "#스터디 #커뮤니티지원 #공정성 #학습환경",
      time: "3시간 전 답변됨",
      icon: "frame-601.svg",
      type: "전체",
    },
    {
      title: "✅ 수료 후 포트폴리오에 '멋쟁이사자처럼' 로고를 사용해도 되나요?",
      content:
        "📍 물론입니다! 여러분은 저희의 자랑스러운 결과물이며, 여러분의 성장을 돕는 것이 저희의 역할입니다. 모든 수료생은 개인 포트폴리오 및 이력서에 멋쟁이사자처럼의 공식 로고와 수료 인증 마크를 자유롭게 사용하실 수 있습니다. 저희가 제작한 '포트폴리오용 공식 에셋 킷'을 곧 모든 분께 배포할 예정이니, 마음껏 활용하여 여러분의 멋진 여정을 알려주세요.",
      tags: "#VOD #강의퀄리티 #학습경험 #콘텐츠업데이트",
      time: "4시간 전 답변됨",
      icon: "frame-602.svg",
      type: "HOT",
    },
  ];

  // 탭별 필터링
  const filteredAnswers =
    activeTab === "전체"
      ? allAnswers
      : allAnswers.filter((a) => a.type === activeTab);

  // 커스텀 스크롤 thumb 계산
  const updateThumb = () => {
    const list = listRef.current;
    if (!list) return;
    const { scrollTop, scrollHeight, clientHeight } = list;
    const ratio = clientHeight / scrollHeight;
    setThumbHeight(Math.max(30, clientHeight * ratio));
    setThumbTop((scrollTop / scrollHeight) * clientHeight);
  };

  useEffect(() => {
    updateThumb();
  }, [filteredAnswers.length]);

  // 드래그로 스크롤
  const handleThumbMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStartY.current = e.clientY;
    scrollStartTop.current = thumbTop;
    document.body.style.userSelect = "none";
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      const list = listRef.current;
      if (!list) return;
      const { scrollHeight, clientHeight } = list;
      const deltaY = e.clientY - dragStartY.current;
      const maxThumbTop = clientHeight - thumbHeight;
      let newThumbTop = scrollStartTop.current + deltaY;
      newThumbTop = Math.max(0, Math.min(maxThumbTop, newThumbTop));
      setThumbTop(newThumbTop);
      // 실제 스크롤 위치로 변환
      list.scrollTop = (newThumbTop / clientHeight) * scrollHeight;
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      document.body.style.userSelect = "";
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, thumbHeight]);

  // 리스트 휠 스크롤 막고, 커스텀 스크롤로만 동작
  const handleWheel = (e: React.WheelEvent) => {
    const list = listRef.current;
    if (!list) return;
    e.preventDefault();
    const { scrollTop, scrollHeight, clientHeight } = list;
    let newScrollTop = scrollTop + e.deltaY;
    newScrollTop = Math.max(0, Math.min(scrollHeight - clientHeight, newScrollTop));
    list.scrollTop = newScrollTop;
    updateThumb();
  };

  // 리스트 스크롤 시 thumb 위치 갱신
  const handleScroll = () => {
    updateThumb();
  };

  return (
    <div className={"bg-[#18181b] h-[1080px] relative " + className}>
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
        className="bg-[#2d2d32] rounded-[10px] flex flex-row items-start justify-between h-[832px] absolute right-[281px] left-[281px] top-[124px] overflow-hidden"
        style={{ boxShadow: "10px 10px 10px 0px rgba(0, 0, 0, 0.30)" }}
      >
        <div className="flex flex-row gap-0 items-center justify-start self-stretch flex-1 relative">
          <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 w-[185px] relative">
            <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
              <div className="pt-[18px] pr-6 pb-[18px] pl-6 flex flex-row gap-5 items-center justify-start self-stretch shrink-0 h-20 relative overflow-hidden">
                <div
                  className="text-[#eaeaea] text-left font-['Inter-SemiBold',_sans-serif] text-xl leading-8 font-semibold relative flex items-center justify-start"
                  style={{ letterSpacing: "-0.05em" }}
                >
                  🏠{" "}
                </div>
                <div
                  className="text-[#eaeaea] text-left font-['Inter-SemiBold',_sans-serif] text-xl leading-8 font-semibold relative flex items-center justify-start"
                  style={{ letterSpacing: "-0.05em" }}
                >
                  홈{" "}
                </div>
              </div>
              <div className="pt-[18px] pr-6 pb-[18px] pl-6 flex flex-row gap-5 items-center justify-start self-stretch shrink-0 h-20 relative overflow-hidden">
                <div
                  className="text-[#eaeaea] text-left font-['Inter-SemiBold',_sans-serif] text-xl leading-8 font-semibold relative flex items-center justify-start"
                  style={{ letterSpacing: "-0.05em" }}
                >
                  📢{" "}
                </div>
                <div
                  className="text-[#eaeaea] text-left font-['Inter-SemiBold',_sans-serif] text-xl leading-8 font-semibold relative flex items-center justify-start"
                  style={{ letterSpacing: "-0.05em" }}
                >
                  공지사항{" "}
                </div>
              </div>
              <div
                className="bg-[rgba(24,24,27,0.50)] pt-[18px] pr-6 pb-[18px] pl-6 flex flex-row gap-5 items-center justify-start self-stretch shrink-0 h-20 relative overflow-hidden"
                style={{
                  boxShadow:
                    "inset 2px 2px 2px 0px rgba(0, 0, 0, 0.40), inset -0.5px -1px 1px 0px rgba(255, 255, 255, 0.25)",
                }}
              >
                <div
                  className="text-[#eaeaea] text-left font-['Inter-SemiBold',_sans-serif] text-xl leading-8 font-semibold relative flex items-center justify-start"
                  style={{ letterSpacing: "-0.05em" }}
                >
                  ✅{" "}
                </div>
                <div
                  className="text-[#eaeaea] text-left font-['Inter-SemiBold',_sans-serif] text-xl leading-8 font-semibold relative flex items-center justify-start"
                  style={{ letterSpacing: "-0.05em" }}
                >
                  올라온 답변{" "}
                </div>
              </div>
              <div className="pt-[18px] pr-6 pb-[18px] pl-6 flex flex-row gap-5 items-center justify-start self-stretch shrink-0 h-20 relative overflow-hidden">
                <div
                  className="text-[#eaeaea] text-left font-['Inter-SemiBold',_sans-serif] text-xl leading-8 font-semibold relative flex items-center justify-start"
                  style={{ letterSpacing: "-0.05em" }}
                >
                  ❓{" "}
                </div>
                <div
                  className="text-[#eaeaea] text-left font-['Inter-SemiBold',_sans-serif] text-xl leading-8 font-semibold relative flex items-center justify-start"
                  style={{ letterSpacing: "-0.05em" }}
                >
                  생성된 질문{" "}
                </div>
              </div>
              <div className="pt-[18px] pr-6 pb-[18px] pl-6 flex flex-row gap-5 items-center justify-start self-stretch shrink-0 h-20 relative overflow-hidden">
                <div
                  className="text-[#eaeaea] text-left font-['Inter-SemiBold',_sans-serif] text-xl leading-8 font-semibold relative flex items-center justify-start"
                  style={{ letterSpacing: "-0.05em" }}
                >
                  👥{" "}
                </div>
                <div
                  className="text-[#eaeaea] text-left font-['Inter-SemiBold',_sans-serif] text-xl leading-8 font-semibold relative flex items-center justify-start"
                  style={{ letterSpacing: "-0.05em" }}
                >
                  커뮤니티{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="pt-2 flex flex-col gap-0 items-start justify-start self-stretch flex-1 relative">
            <div className="pr-6 pl-6 flex flex-row items-center justify-between self-stretch shrink-0 h-12 relative">
              <div className="flex flex-row gap-2.5 items-center justify-start shrink-0 relative">
                {(["전체", "최근", "HOT"] as TabType[]).map((tab) => (
                  <div
                    key={tab}
                    className={
                      (activeTab === tab
                        ? "bg-[#204efb] "
                        : "bg-[#2d2d32] ") +
                      "rounded-[10px] pt-2.5 pr-3.5 pb-2.5 pl-3.5 flex flex-row gap-2.5 items-center justify-center shrink-0 h-8 relative cursor-pointer"
                    }
                    style={{
                      boxShadow:
                        "0px 4px 4px 0px rgba(0, 0, 0, 0.25), inset 1px 1px 1px 0px rgba(255, 255, 255, 0.15)",
                    }}
                    onClick={() => setActiveTab(tab)}
                  >
                    <div
                      className="text-[#ffffff] text-left font-['Inter-SemiBold',_sans-serif] text-sm leading-5 font-semibold relative flex items-center justify-start"
                      style={{ letterSpacing: "-0.025em" }}
                    >
                      {tab === "HOT" ? "🔥HOT" : tab}
                    </div>
                  </div>
                ))}
              </div>
              <div
                className="bg-[#18181b] rounded-[10px] pt-2.5 pr-2.5 pb-2.5 pl-6 flex flex-row gap-2.5 items-center justify-start shrink-0 h-9 relative"
                style={{
                  boxShadow:
                    "0px 4px 4px 0px rgba(0, 0, 0, 0.25), inset 1px 1px 1px 0px rgba(255, 255, 255, 0.15)",
                }}
              >
                <input
                  className="text-[#b0b0b0] text-left font-['Inter-Medium',_sans-serif] text-sm leading-5 font-medium relative flex-1 h-5 min-w-[144px] max-h-5 flex items-center justify-start overflow-hidden focus:outline-none"
                  style={{
                    letterSpacing: "-0.025em",
                    textOverflow: "ellipsis",
                    backgroundColor: "#000000",
                  }}
                  placeholder="검색"
                />
                <button
                  className="flex flex-col gap-0 items-center justify-center shrink-0 w-[22px] h-[22px] relative overflow-visible"
                >
                  <img src="frame-620.svg" alt="검색" />
                </button>
              </div>
            </div>
            {/* 커스텀 스크롤만 사용: overflow-hidden */}
            <div
              ref={listRef}
              onScroll={handleScroll}
              onWheel={handleWheel}
              className="flex flex-col gap-3.5 items-start justify-start self-stretch flex-1 relative overflow-hidden"
              style={{ boxShadow: "-4px 0px 4px 0px rgba(0, 0, 0, 0.25)" }}
              tabIndex={0}
            >
              {filteredAnswers.map((answer, idx) => (
                <div
                  key={idx}
                  className="bg-[#2d2d32] rounded-[10px] pt-6 pr-6 pb-9 pl-6 flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative"
                  style={{
                    boxShadow:
                      "0px -4px 10px 0px rgba(0, 0, 0, 0.25),  0px 4px 10px 0px rgba(0, 0, 0, 0.25),  4px 0px 10px 0px rgba(0, 0, 0, 0.35)",
                  }}
                >
                  <div className="flex flex-col gap-12 items-start justify-start self-stretch shrink-0 relative">
                    <div className="flex flex-col gap-9 items-start justify-start self-stretch shrink-0 relative">
                      <div className="flex flex-col gap-5 items-start justify-start self-stretch shrink-0 relative">
                        <div className="flex flex-row items-center justify-between self-stretch shrink-0 relative">
                          <div
                            className="text-[#eaeaea] text-left font-['Inter-SemiBold',_sans-serif] text-lg leading-7 font-semibold relative flex items-end justify-start"
                            style={{ letterSpacing: "-0.025em" }}
                          >
                            {answer.title}
                          </div>
                          <img
                            className="flex flex-col gap-0 items-center justify-center shrink-0 w-7 h-7 relative overflow-visible"
                            src={answer.icon}
                          />
                        </div>
                      </div>
                      <div
                        className="text-[#eaeaea] text-left font-['Inter-Medium',_sans-serif] text-sm leading-5 font-medium relative w-[620px] max-h-[60px] overflow-hidden"
                        style={{
                          letterSpacing: "-0.025em",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {answer.content}
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-between self-stretch shrink-0 h-5 relative">
                      <div
                        className="text-[#b0b0b0] text-left font-['Inter-Medium',_sans-serif] text-xs leading-5 font-medium relative flex-1 h-5 overflow-hidden"
                        style={{
                          letterSpacing: "-0.025em",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {answer.tags}
                      </div>
                      <div
                        className="text-[#b0b0b0] text-right font-['Inter-Medium',_sans-serif] text-xs leading-5 font-medium relative flex-1 max-w-[100px] overflow-hidden"
                        style={{
                          letterSpacing: "-0.025em",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {answer.time}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-[#2d2d32] pt-[17px] pr-[355px] pb-[17px] pl-[355px] flex flex-row gap-2.5 items-center justify-center self-stretch shrink-0 h-7 relative">
              <div className="flex flex-row gap-4 items-center justify-start shrink-0 relative">
                <div
                  className="text-[#eaeaea] text-left font-['Inter-Medium',_sans-serif] text-xs leading-5 font-medium relative flex items-center justify-start"
                  style={{ letterSpacing: "-0.025em" }}
                >
                  &lt;&lt;{" "}
                </div>
                <div
                  className="text-[#eaeaea] text-left font-['Inter-Medium',_sans-serif] text-xs leading-5 font-medium relative flex items-center justify-start"
                  style={{ letterSpacing: "-0.025em" }}
                >
                  &lt;{" "}
                </div>
                <div
                  className="text-[#204efb] text-left font-['Inter-Bold',_sans-serif] text-xs leading-5 font-bold relative flex items-center justify-start"
                  style={{ letterSpacing: "-0.025em" }}
                >
                  1{" "}
                </div>
                <div
                  className="text-[#eaeaea] text-left font-['Inter-Medium',_sans-serif] text-xs leading-5 font-medium relative flex items-center justify-start"
                  style={{ letterSpacing: "-0.025em" }}
                >
                  2{" "}
                </div>
                <div
                  className="text-[#eaeaea] text-left font-['Inter-Medium',_sans-serif] text-xs leading-5 font-medium relative flex items-center justify-start"
                  style={{ letterSpacing: "-0.025em" }}
                >
                  3{" "}
                </div>
                <div
                  className="text-[#eaeaea] text-left font-['Inter-Medium',_sans-serif] text-xs leading-5 font-medium relative flex items-center justify-start"
                  style={{ letterSpacing: "-0.025em" }}
                >
                  4{" "}
                </div>
                <div
                  className="text-[#eaeaea] text-left font-['Inter-Medium',_sans-serif] text-xs leading-5 font-medium relative flex items-center justify-start"
                  style={{ letterSpacing: "-0.025em" }}
                >
                  5{" "}
                </div>
                <div
                  className="text-[#eaeaea] text-left font-['Inter-Medium',_sans-serif] text-xs leading-5 font-medium relative flex items-center justify-start"
                  style={{ letterSpacing: "-0.025em" }}
                >
                  &gt;{" "}
                </div>
                <div
                  className="text-[#eaeaea] text-left font-['Inter-Medium',_sans-serif] text-xs leading-5 font-medium relative flex items-center justify-start"
                  style={{ letterSpacing: "-0.025em" }}
                >
                  &gt;&gt;{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 커스텀 스크롤바 */}
        <div className="bg-[rgba(24,24,27,0.50)] flex flex-col items-start justify-between self-stretch shrink-0 w-4 relative">
          <div
            className="bg-[#2d2d32] rounded-[50%] shrink-0 w-4 h-4 relative"
            style={{ boxShadow: "2px 2px 4px 0px rgba(0, 0, 0, 0.50)" }}
          ></div>
          <div
            className="bg-[#2d2d32] rounded-[50%] shrink-0 w-4 h-4 relative"
            style={{ boxShadow: "2px 2px 4px 0px rgba(0, 0, 0, 0.50)" }}
          ></div>
          {/* 스크롤 thumb */}
          <div
            className="bg-[#2d2d32] rounded-[22px] absolute left-0 cursor-pointer"
            style={{
              top: thumbTop + 16, // 16은 위쪽 원 높이
              height: thumbHeight,
              width: 16,
              boxShadow: "2px 2px 4px 0px rgba(0, 0, 0, 0.50)",
              transition: isDragging ? "none" : "top 0.1s",
              zIndex: 10,
            }}
            onMouseDown={handleThumbMouseDown}
          >
            <div className="flex flex-col items-start justify-between self-stretch shrink-0 relative h-full">
              <div
                className="bg-[#18181b] rounded-tl rounded-tr shrink-0 w-3 h-[5px] relative"
                style={{
                  boxShadow:
                    "inset -0.5px -0.5px 1px 0px rgba(255, 255, 255, 0.35)",
                }}
              ></div>
              <div
                className="bg-[#18181b] rounded-br rounded-bl shrink-0 w-3 h-[5px] relative"
                style={{
                  boxShadow:
                    "inset -0.5px -0.5px 1px 0px rgba(255, 255, 255, 0.35)",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-[#18181b] rounded-[10px] pt-3 pr-5 pb-3 pl-5 flex flex-row gap-2.5 items-start justify-center absolute right-[361px] top-[204px] overflow-hidden"
        style={{ boxShadow: "4px 4px 10px 0px rgba(0, 0, 0, 0.35)" }}
      >
        <button
          className="text-[#eaeaea] text-left font-['Inter-SemiBold',_sans-serif] text-sm leading-5 font-semibold relative flex items-center justify-start"
          style={{ letterSpacing: "-0.05em" }}
        >
          이의 신청{" "}
        </button>
      </div>
    </div>
  );
};