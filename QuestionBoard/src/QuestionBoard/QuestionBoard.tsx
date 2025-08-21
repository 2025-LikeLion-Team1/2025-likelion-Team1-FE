import React, { useEffect, useRef, useState } from "react";

export interface IQuestionBoardProps {
  className?: string;
}

type TabType = "전체" | "최근" | "HOT";

interface Question {
  title: string;
  content: string;
  tags: string;
  time: string;
  icon: string;
  type: TabType;
  likes: number;
  liked: boolean;
}

export const QuestionBoard = ({ className }: IQuestionBoardProps): JSX.Element => {
  const [activeTab, setActiveTab] = useState<TabType>("전체");
  const [search, setSearch] = useState("");
  const listRef = useRef<HTMLDivElement>(null);
  const [thumbTop, setThumbTop] = useState(0);
  const [thumbHeight, setThumbHeight] = useState(40);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartY = useRef(0);
  const scrollStartTop = useRef(0);

  // 예시 데이터
  const [allQuestions, setAllQuestions] = useState<Question[]>([
    {
      title: "해커톤 수상팀, 작년과 동일한 아이디어인데 공정한 심사가 맞나요?",
      content: "작년과 동일한 아이디어로 수상한 팀이 있습니다. 심사 기준이 궁금합니다.",
      tags: "#해커톤 #공정성",
      time: "새 질문",
      icon: "frame-600.svg",
      type: "HOT",
      likes: 39,
      liked: false,
    },
    {
      title: "백엔드 트랙의 기술 스택, 최신 트렌드에 맞춰 업데이트될 계획이 있나요?",
      content: "기술 스택이 최신 트렌드에 맞게 업데이트되는지 궁금합니다.",
      tags: "#커리큘럼 #기술스택",
      time: "15분 전 질문됨",
      icon: "frame-600.svg",
      type: "HOT",
      likes: 12,
      liked: false,
    },
    {
      title: "매년 달라지는 해커톤 심사 기준, 올해는 명확한 가이드라인이 미리 공개되나요?",
      content: "올해 해커톤 심사 기준이 미리 공개되는지 궁금합니다.",
      tags: "#해커톤 #심사기준",
      time: "1시간 전 질문됨",
      icon: "frame-600.svg",
      type: "최근",
      likes: 7,
      liked: false,
    },
    {
      title: "초기에 언급되었던 기업 협력 인턴십 프로그램, 현재 진행 상황이 궁금합니다.",
      content: "기업 협력 인턴십 프로그램의 현재 진행 상황을 알고 싶습니다.",
      tags: "#기업협력 #인턴십",
      time: "2일 전 질문됨",
      icon: "frame-600.svg",
      type: "전체",
      likes: 3,
      liked: false,
    },
    {
      title: "최근 게시물 예시",
      content: "이 게시물은 최근 탭에서만 보입니다.",
      tags: "#최근 #예시",
      time: "10분 전 질문됨",
      icon: "frame-600.svg",
      type: "최근",
      likes: 5,
      liked: false,
    },
  ]);

  // 탭별 필터링 및 검색
  const filteredQuestions = allQuestions.filter((q) => {
    const matchTab = activeTab === "전체" ? true : q.type === activeTab;
    const matchSearch =
      search.trim() === "" ||
      q.title.includes(search) ||
      q.content.includes(search) ||
      q.tags.includes(search);
    return matchTab && matchSearch;
  });

  // 좋아요 토글 핸들러
  const handleLike = (idx: number) => {
    setAllQuestions((prev) =>
      prev.map((q, i) =>
        i === idx
          ? {
              ...q,
              liked: !q.liked,
              likes: q.liked ? q.likes - 1 : q.likes + 1,
            }
          : q
      )
    );
  };

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
  }, [filteredQuestions.length]);

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
    <div className={"bg-[#18181b] h-[1080px] relative " + (className || "")}> 
      {/* 헤더 */}
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
            QnAHub
          </div>
        </div>
        <div className="flex flex-row gap-6 items-center justify-end shrink-0 relative">
          <div
            className="text-[#b0b0b0] text-right font-['Inter-Bold',_sans-serif] text-xs leading-5 font-bold relative flex items-center justify-end"
            style={{ letterSpacing: "-0.025em" }}
          >
            https://qnahub.xyz/likelion_univ
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
      {/* 메인 컨텐츠 */}
      <div
        className="bg-[#2d2d32] rounded-[10px] flex flex-row items-start justify-between h-[832px] absolute right-[281px] left-[281px] top-[124px] overflow-hidden"
        style={{ boxShadow: "10px 10px 10px 0px rgba(0, 0, 0, 0.30)" }}
      >
        {/* 사이드바 */}
        <div className="flex flex-row gap-0 items-center justify-start self-stretch flex-1 relative">
          <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 w-[185px] relative">
            <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
              {/* ...기존 사이드바 메뉴... */}
              <div className="pt-[18px] pr-6 pb-[18px] pl-6 flex flex-row gap-5 items-center justify-start self-stretch shrink-0 h-20 relative overflow-hidden">
                <div className="text-[#eaeaea] text-left font-['Inter-SemiBold',_sans-serif] text-xl leading-8 font-semibold relative flex items-center justify-start" style={{ letterSpacing: "-0.05em" }}>🏠</div>
                <div className="text-[#eaeaea] text-left font-['Inter-SemiBold',_sans-serif] text-xl leading-8 font-semibold relative flex items-center justify-start" style={{ letterSpacing: "-0.05em" }}>홈</div>
              </div>
              <div className="pt-[18px] pr-6 pb-[18px] pl-6 flex flex-row gap-5 items-center justify-start self-stretch shrink-0 h-20 relative overflow-hidden">
                <div className="text-[#eaeaea] text-left font-['Inter-SemiBold',_sans-serif] text-xl leading-8 font-semibold relative flex items-center justify-start" style={{ letterSpacing: "-0.05em" }}>📢</div>
                <div className="text-[#eaeaea] text-left font-['Inter-SemiBold',_sans-serif] text-xl leading-8 font-semibold relative flex items-center justify-start" style={{ letterSpacing: "-0.05em" }}>공지사항</div>
              </div>
              <div className="pt-[18px] pr-6 pb-[18px] pl-6 flex flex-row gap-5 items-center justify-start self-stretch shrink-0 h-20 relative overflow-hidden">
                <div className="text-[#eaeaea] text-left font-['Inter-SemiBold',_sans-serif] text-xl leading-8 font-semibold relative flex items-center justify-start" style={{ letterSpacing: "-0.05em" }}>✅</div>
                <div className="text-[#eaeaea] text-left font-['Inter-SemiBold',_sans-serif] text-xl leading-8 font-semibold relative flex items-center justify-start" style={{ letterSpacing: "-0.05em" }}>올라온 답변</div>
              </div>
              <div className="bg-[rgba(24,24,27,0.50)] pt-[18px] pr-6 pb-[18px] pl-6 flex flex-row gap-5 items-center justify-start self-stretch shrink-0 h-20 relative overflow-hidden" style={{ boxShadow: "inset 2px 2px 2px 0px rgba(0, 0, 0, 0.40), inset -0.5px -1px 1px 0px rgba(255, 255, 255, 0.25)" }}>
                <div className="text-[#eaeaea] text-left font-['Inter-SemiBold',_sans-serif] text-xl leading-8 font-semibold relative flex items-center justify-start" style={{ letterSpacing: "-0.05em" }}>❓</div>
                <div className="text-[#eaeaea] text-left font-['Inter-SemiBold',_sans-serif] text-xl leading-8 font-semibold relative flex items-center justify-start" style={{ letterSpacing: "-0.05em" }}>생성된 질문</div>
              </div>
              <div className="pt-[18px] pr-6 pb-[18px] pl-6 flex flex-row gap-5 items-center justify-start self-stretch shrink-0 h-20 relative overflow-hidden">
                <div className="text-[#eaeaea] text-left font-['Inter-SemiBold',_sans-serif] text-xl leading-8 font-semibold relative flex items-center justify-start" style={{ letterSpacing: "-0.05em" }}>👥</div>
                <div className="text-[#eaeaea] text-left font-['Inter-SemiBold',_sans-serif] text-xl leading-8 font-semibold relative flex items-center justify-start" style={{ letterSpacing: "-0.05em" }}>커뮤니티</div>
              </div>
            </div>
          </div>
          {/* 메인 리스트 및 검색/탭 */}
          <div className="pt-2 flex flex-col gap-0 items-start justify-start self-stretch flex-1 relative">
            <div className="pr-6 pl-6 flex flex-row items-center justify-between self-stretch shrink-0 h-12 relative">
              {/* 탭 */}
              <div className="flex flex-row gap-2.5 items-center justify-start shrink-0 relative">
                {(["전체", "최근", "HOT"] as TabType[]).map((tab) => (
                  <div
                    key={tab}
                    className={
                      (activeTab === tab ? "bg-[#204efb] " : "bg-[#2d2d32] ") +
                      "rounded-[10px] pt-2.5 pr-3.5 pb-2.5 pl-3.5 flex flex-row gap-2.5 items-center justify-center shrink-0 h-8 relative cursor-pointer focus:outline-none"
                    }
                    style={{
                      boxShadow:
                        "0px 4px 4px 0px rgba(0, 0, 0, 0.25), inset 1px 1px 1px 0px rgba(255, 255, 255, 0.15)",
                    }}
                    onClick={() => setActiveTab(tab)}
                    tabIndex={0}
                  >
                    <div className="text-[#ffffff] text-left font-['Inter-SemiBold',_sans-serif] text-sm leading-5 font-semibold relative flex items-center justify-start" style={{ letterSpacing: "-0.025em" }}>
                      {tab === "HOT" ? "🔥HOT" : tab}
                    </div>
                  </div>
                ))}
              </div>
              {/* 검색창 */}
              <div className="bg-[#18181b] rounded-[10px] pt-2.5 pr-2.5 pb-2.5 pl-6 flex flex-row gap-2.5 items-center justify-start shrink-0 h-9 relative" style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25), inset 1px 1px 1px 0px rgba(255, 255, 255, 0.15)" }}>
                <input
                  className="text-[#b0b0b0] text-left font-['Inter-Medium',_sans-serif] text-sm leading-5 font-medium relative flex-1 h-5 min-w-[144px] max-h-5 flex items-center justify-start overflow-hidden focus:outline-none"
                  style={{
                    letterSpacing: "-0.025em",
                    textOverflow: "ellipsis",
                    backgroundColor: "#000000",
                  }}
                  placeholder="검색"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button
                  className="flex flex-col gap-0 items-center justify-center shrink-0 w-[22px] h-[22px] relative overflow-visible focus:outline-none"
                  tabIndex={0}
                  type="button"
                  onClick={() => setSearch("")}
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
              {filteredQuestions.map((question, idx) => {
                // 실제 인덱스 찾기 (필터링 후이므로)
                const realIdx = allQuestions.findIndex(
                  (q) => q.title === question.title && q.time === question.time
                );
                return (
                  <div
                    key={idx}
                    className={
                      "bg-[#2d2d32] rounded-[10px] pt-6 pr-6 pb-9 pl-6 flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative transition-shadow duration-150 " +
                      (question.liked ? "ring-2 ring-[#204efb] ring-offset-2" : "")
                    }
                    style={{
                      boxShadow:
                        "0px -4px 10px 0px rgba(0, 0, 0, 0.25),  0px 4px 10px 0px rgba(0, 0, 0, 0.25),  4px 0px 10px 0px rgba(0, 0, 0, 0.35)",
                    }}
                  >
                    <div className="flex flex-col gap-6 items-start justify-start self-stretch shrink-0 relative">
                      <div className="flex flex-col gap-5 items-start justify-start self-stretch shrink-0 relative">
                        <div className="flex flex-row items-center justify-between self-stretch shrink-0 relative">
                          <div className="text-[#eaeaea] text-left font-['Inter-SemiBold',_sans-serif] text-lg leading-7 font-semibold relative flex items-end justify-start" style={{ letterSpacing: "-0.025em" }}>{question.title}</div>
                          <div className="flex flex-row items-center gap-2">
                            <button
                              className={
                                "focus:outline-none select-none transition-transform duration-100 flex items-center justify-center " +
                                (question.liked ? "scale-110" : "opacity-60 hover:opacity-100")
                              }
                              style={{
                                background: "none",
                                border: "none",
                                padding: 0,
                                cursor: "pointer"
                              }}
                              onClick={() => handleLike(realIdx)}
                              aria-label={question.liked ? "좋아요 취소" : "좋아요"}
                            >
                              <span
                                style={{
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  width: '2.2rem',
                                  height: '2.2rem',
                                  borderRadius: '50%',
                                  border: 'none',
                                  filter: question.liked ? 'drop-shadow(0 0 8px #ff9800) drop-shadow(0 0 2px #fff176)' : 'none',
                                  color: question.liked ? '#ff9800' : '#bdbdbd',
                                  fontWeight: question.liked ? 700 : 400,
                                  fontSize: '1.7rem',
                                  lineHeight: 1,
                                  transition: 'filter 0.15s, color 0.15s'
                                }}
                              >
                                🔥
                              </span>
                            </button>
                            <span className={
                              "text-base font-semibold min-w-[24px] text-center select-none transition-colors duration-100 " +
                              (question.liked ? "text-[#204efb]" : "text-white")
                            }>
                              {question.likes}
                            </span>
                            <img className="flex flex-col gap-0 items-center justify-center shrink-0 w-7 h-7 relative overflow-visible" src={question.icon} />
                          </div>
                        </div>
                      </div>
                      <div className="text-[#eaeaea] text-left font-['Inter-Medium',_sans-serif] text-sm leading-5 font-medium relative w-[620px] max-h-[60px] overflow-hidden" style={{ letterSpacing: "-0.025em", textOverflow: "ellipsis" }}>{question.content}</div>
                      <div className="flex flex-row items-start justify-between self-stretch shrink-0 h-5 relative">
                        <div className="text-[#b0b0b0] text-left font-['Inter-Medium',_sans-serif] text-xs leading-5 font-medium relative flex-1 h-5 overflow-hidden" style={{ letterSpacing: "-0.025em", textOverflow: "ellipsis" }}>{question.tags}</div>
                        <div className="text-[#b0b0b0] text-right font-['Inter-Medium',_sans-serif] text-xs leading-5 font-medium relative flex-1 max-w-[100px] overflow-hidden" style={{ letterSpacing: "-0.025em", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{question.time}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* 커스텀 스크롤바 */}
        <div className="bg-[rgba(24,24,27,0.50)] flex flex-col items-start justify-between self-stretch shrink-0 w-4 relative">
          <div className="bg-[#2d2d32] rounded-[50%] shrink-0 w-4 h-4 relative" style={{ boxShadow: "2px 2px 4px 0px rgba(0, 0, 0, 0.50)" }}></div>
          <div className="bg-[#2d2d32] rounded-[50%] shrink-0 w-4 h-4 relative" style={{ boxShadow: "2px 2px 4px 0px rgba(0, 0, 0, 0.50)" }}></div>
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
              <div className="bg-[#18181b] rounded-tl rounded-tr shrink-0 w-3 h-[5px] relative" style={{ boxShadow: "inset -0.5px -0.5px 1px 0px rgba(255, 255, 255, 0.35)" }}></div>
              <div className="bg-[#18181b] rounded-br rounded-bl shrink-0 w-3 h-[5px] relative" style={{ boxShadow: "inset -0.5px -0.5px 1px 0px rgba(255, 255, 255, 0.35)" }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
