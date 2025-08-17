import { MainPageHeader } from './Header';
import { BannerSection } from './BannerSection';
import { QuestionInputSection } from './QuestionInputSection';
import { SectionHeader } from './SectionHeader';
import { NoticeItem } from './NoticeItem';
import { AnswerCard } from './AnswerCard';
import { TrendingQuestionCard } from './TrendingQuestionCard';
import { main, base } from '../../styles/tokens';
import { HotTopicCard } from './HotTopicCard'; 
import { CommunityPostCard } from './CommunityPostCard';

export const MainPage = () => {
  return (
    <div 
      className="relative overflow-hidden"
      style={{ 
        backgroundColor: base.colors.neutral.gray900, // #18181b
        height: main.sizes.pageHeight,
      }}
    >
      <MainPageHeader />
      <BannerSection />
      
      <div
        className="flex flex-col items-center justify-start absolute left-[50%]"
        style={{ 
          gap: main.spacing.contentGap, // gap-[120px]
          height: main.sizes.contentHeight, // h-[1828px]
          top: main.positions.pageTop, // top-[calc(50%_-_831px)]
          transform: main.positions.centerTransform, // translate(-50%)
        }}
      >
        <QuestionInputSection />
        
        {/* 3분할 메인 컨텐츠 */}
        {/* 메인 컨텐츠 컨테이너 */}
        <div 
          className="flex flex-row items-start justify-start relative"
          style={{ 
            width: main.sizes.containerWidth, // w-[1480px]
            gap: main.spacing.columnGap, // gap-16 (64px)
          }}
        >          {/* 좌측 컬럼: 공지사항 + 최근 올라온 답변 */}
          <div 
            className="flex flex-col items-start justify-start flex-1 relative"
            style={{ 
              gap: main.spacing.sectionGap,
              height: main.sizes.leftColumnHeight,
              maxWidth: main.sizes.columnWidth,
            }}
          >
            
            {/* 공지사항 섹션 */}
            <div 
              className="flex flex-col items-start justify-start self-stretch shrink-0 relative"
              style={{ gap: main.spacing.headerGap }}
            >
              <SectionHeader title="공지사항" arrowIcon="frame-350.svg" />
              <div 
                className="flex flex-col items-start justify-start self-stretch shrink-0 relative"
                style={{ gap: main.spacing.cardGap }}
              >
                <div 
                  className="flex flex-col items-start justify-start self-stretch shrink-0 relative"
                  style={{
                    gap: 0, // 공지사항 아이템들 사이 간격 없음
                    backgroundColor: base.colors.neutral.gray800,
                    borderRadius: main.borderRadius.card,
                    padding: main.spacing.noticePadding,
                  }}
                >
                  <NoticeItem
                    title="기업 협력 인턴십 프로그램, 10월 참여 기업 리스트 및 지원 절차 안내"
                    date="07/11"
                    hasIcon={true}
                  />
                  <NoticeItem
                    title="🏆 2025 하반기 'LION-THON' 개최! 세상을 바꾸는 AI 서비스에 도전하세요."
                    date="07/01"
                  />
                  <NoticeItem
                    title="축하해주세요! 11기 수료생, 'NEKAㄹAㅋㅜ배' 합격자 인터뷰 공개"
                    date="06/29"
                  />
                </div>
              </div>
            </div>

            {/* 최근 올라온 답변 섹션 */}
            <div 
              className="flex flex-col items-start justify-start self-stretch shrink-0 relative"
              style={{ gap: main.spacing.headerGap }}
            >
              <SectionHeader title="최근 올라온 답변" arrowIcon="frame-351.svg" />
              <div 
                className="flex flex-col items-start justify-start self-stretch shrink-0 relative"
                style={{ gap: main.spacing.cardGap }}
              >
                <AnswerCard
                  questionTitle="일부 VOD 강의의 퀄리티가 아쉽습니다. 업데이트 계획이 궁금합니다."
                  answerPreview="가장 만족도가 낮았던 'JPA 심화'와 '배포 자동화' 세션은 9월 중으로 전면 재촬영하여 교체할 것을 약속드립니다."
                  tags="#VOD #강의퀄리티 #학습경험 #콘텐츠업데이트"
                  timeAgo="2시간 전 답변됨"
                />
                <AnswerCard
                  questionTitle="자율적으로 진행되는 스터디, 학교별 지원 격차가 있는 것 같습니다."
                  answerPreview="이 문제를 해결하기 위해, 다음 달부터 모든 스터디 그룹에 온라인 화이트보드 툴 'Miro'의 유료 플랜을 공통으로 지원하겠습니다. 또한, 우수 스터디 그룹에 제공되던 오프라인 공간 대여비 지원도 예산을 증액하여 더 많은 팀이 혜택을 받을 수 있도록 개선하겠습니다."
                  tags="#스터디 #커뮤니티지원 #공정성 #학습환경"
                  timeAgo="3시간 전 답변됨"
                />
                <AnswerCard
                  questionTitle="수료 후 포트폴리오에 '멋쟁이사자처럼' 로고를 사용해도 되나요?"
                  answerPreview="물론입니다! 여러분은 저희의 자랑스러운 결과물이며, 여러분의 성장을 돕는 것이 저희의 역할입니다. 모든 수료생은 개인 포트폴리오 및 이력서에 멋쟁이사자처럼의 공식 로고와 수료 인증 마크를 자유롭게 사용하실 수 있습니다. 저희가 제작한 '포트폴리오용 공식 에셋 킷'을 곧 모든 분께 배포할 예정이니, 마음껏 활용하여 여러분의 멋진 여정을 알려주세요."
                  tags="#수료혜택 #포트폴리오 #브랜드가이드 #커리어"
                  timeAgo="3시간 전 답변됨"
                />
              </div>
            </div>
          </div>

          {/* 중앙 컬럼: 뜨고있는 질문 */}
          <div 
            className="flex flex-col items-start justify-start flex-1 relative"
            style={{ 
              gap: main.spacing.sectionGap,
              maxWidth: main.sizes.maxColumnWidth,
            }}
          >
            
            {/* 뜨고있는 질문 섹션 */}
            <div 
              className="flex flex-col items-start justify-start self-stretch shrink-0 relative"
              style={{ gap: main.spacing.headerGap }}
            >
              <SectionHeader title="뜨고 있는 질문" arrowIcon="frame-352.svg" />
              <div 
                className="flex flex-col items-start justify-start self-stretch shrink-0 relative"
                style={{ gap: main.spacing.questionCardGap }}
              >
                <TrendingQuestionCard
                  title="해커톤 수상팀, 작년과 동일한 아이디어인데 공정한 심사가 맞나요?"
                  hotCount={1}
                  tags={['해커톤', '공정성']}
                  status="new"
                  isHighlighted={true}
                />
                <TrendingQuestionCard
                  title="백엔드 트랙의 기술 스택, 최신 트렌드에 맞춰 업데이트될 계획이 있나요?"
                  hotCount={42}
                  tags={['커리큘럼', '기술스택']}
                  status="answered"
                  timeAgo="15분 전 질문됨"
                />
                <TrendingQuestionCard
                  title="매년 달라지는 해커톤 심사 기준, 올해는 명확한 가이드라인이 미리 공개되나요?"
                  hotCount={39}
                  tags={['해커톤', '심사기준']}
                  status="answered"
                  timeAgo="1시간 전 질문됨"
                />
                <TrendingQuestionCard
                  title="초기에 언급되었던 기업 협력 인턴십 프로그램, 현재 진행 상황이 궁금합니다."
                  hotCount={28}
                  tags={['기업협력', '인턴십']}
                  status="answered"
                  timeAgo="2일 전 질문됨"
                />
              </div>
            </div>
          </div>

          {/* 우측 컬럼: 대시보드 */}
          <div 
            className="flex flex-col items-start justify-start flex-1 relative"
            style={{ 
              gap: main.spacing.headerGap,
              maxWidth: main.sizes.maxColumnWidth,
            }}
          >
            <div 
              className="flex flex-col items-start justify-start self-stretch shrink-0 relative"
              style={{ gap: main.spacing.sectionGap }}
            >
              
              {/* 대시보드 섹션 */}
              <div 
                className="flex flex-col items-start justify-start self-stretch shrink-0 relative"
                style={{ gap: main.spacing.headerGap }}
              >
                <div 
                  className="flex flex-row items-center justify-start self-stretch shrink-0 relative"
                  style={{ 
                    paddingRight: main.spacing.dashboardHeaderPadding,
                    paddingLeft: main.spacing.dashboardHeaderPadding,
                    gap: main.spacing.dashboardHeaderGap,
                  }}
                >
                  <img
                    className="shrink-0 relative overflow-visible"
                    style={{ 
                      aspectRatio: "1",
                      width: main.sizes.dashboardIconSize,
                      height: main.sizes.dashboardIconSize,
                    }}
                    src="/div40.svg"
                    alt="Dashboard icon"
                  />
                  <div 
                    className="flex flex-row items-center justify-center flex-1 relative"
                    style={{ 
                      paddingRight: main.spacing.dashboardHeaderPadding,
                      paddingLeft: main.spacing.dashboardHeaderPadding,
                      gap: main.spacing.dashboardHeaderInnerGap,
                    }}
                  >
                    <div
                      className="text-left relative flex-1 flex items-center justify-start overflow-hidden"
                      style={{
                        color: base.colors.neutral.gray100,
                        fontSize: main.typography.fontSize.sectionTitle,
                        lineHeight: main.typography.lineHeight.sectionTitle,
                        letterSpacing: base.typography.letterSpacing.tight,
                        fontFamily: base.typography.fontFamily.primary,
                        fontWeight: main.typography.getDynamicWeight.sectionTitle(),
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      대시보드
                    </div>
                    <div
                      className="text-center relative flex items-end justify-center"
                      style={{ 
                        color: base.colors.neutral.gray100,
                        fontSize: main.typography.fontSize.sectionTitle,
                        lineHeight: main.typography.lineHeight.sectionTitle,
                        letterSpacing: base.typography.letterSpacing.tight,
                        fontFamily: base.typography.fontFamily.primary,
                        fontWeight: main.typography.getDynamicWeight.sectionTitle(),
                      }}
                    >
                      멋쟁이 사자처럼
                    </div>
                  </div>
                </div>
                <div 
                  className="bg-[#2d2d32] rounded-[10px] flex flex-col items-start justify-start self-stretch shrink-0 relative"
                  style={{ 
                    backgroundColor: base.colors.dashboard.containerBackground,
                    borderRadius: main.borderRadius.card,
                    height: main.sizes.dashboardHeight,
                    padding: main.sizes.dashboardContainerPadding,
                    gap: main.sizes.dashboardContainerGap,
                  }}
                >
                  {/* 첫 번째 행: 종합 신뢰도 지수 + 평균 답변 시간 */}
                  <div 
                    className="flex flex-row items-start justify-start self-stretch shrink-0 relative"
                    style={{ 
                      height: main.sizes.dashboardRowHeight,
                      gap: main.sizes.dashboardContainerGap,
                    }}
                  >
                    <div
                      className="rounded-[10px] border-solid border-[transparent] flex flex-col items-start justify-start self-stretch flex-1 relative"
                      style={{
                        backgroundColor: base.colors.dashboard.cardBackground,
                        borderRadius: main.borderRadius.card,
                        borderWidth: main.sizes.dashboardCardBorderWidth,
                        padding: main.sizes.dashboardCardPadding,
                        gap: main.sizes.dashboardCardGap,
                        boxShadow: main.shadows.dashboardCardInset,
                      }}
                    >
                      <div className="flex flex-col items-start justify-between self-stretch flex-1 relative">
                        <div 
                          className="flex flex-col items-start justify-start self-stretch shrink-0 relative"
                          style={{ gap: main.spacing.dashboardHeaderGap }}
                        >
                          <div
                            className="text-left relative"
                            style={{ 
                              color: base.colors.dashboard.titleText,
                              fontSize: main.typography.fontSize.dashboardTitle,
                              lineHeight: main.typography.lineHeight.dashboardTitle,
                              letterSpacing: base.typography.letterSpacing.tight,
                              fontFamily: base.typography.fontFamily.primary,
                              fontWeight: main.typography.getDynamicWeight.dashboardTitle(),
                            }}
                          >
                            종합 신뢰도 지수
                          </div>
                        </div>
                        <div 
                          className="flex flex-row items-end justify-between self-stretch flex-1 relative"
                          style={{ paddingRight: main.sizes.dashboardValuePaddingRight }}
                        >
                          <div
                            className="text-center relative flex items-end justify-center"
                            style={{ 
                              color: base.colors.dashboard.emojiText,
                              fontSize: main.typography.fontSize.dashboardEmoji,
                              letterSpacing: base.typography.letterSpacing.tight,
                              fontFamily: base.typography.fontFamily.primary,
                              fontWeight: main.typography.getDynamicWeight.dashboardEmoji(),
                              width: main.sizes.dashboardEmojiWidth,
                              height: main.sizes.dashboardEmojiHeight,
                            }}
                          >
                            🤩
                          </div>
                          <div 
                            className="flex flex-row items-center justify-start shrink-0 relative"
                            style={{ gap: main.sizes.dashboardValueGap }}
                          >
                            <div
                              className="text-center relative flex items-end justify-center"
                              style={{ 
                                color: base.colors.dashboard.valueText,
                                fontSize: main.typography.fontSize.dashboardValue,
                                letterSpacing: '-0.05em',
                                fontFamily: base.typography.fontFamily.primary,
                                fontWeight: main.typography.getDynamicWeight.dashboardValue(),
                              }}
                            >
                              92
                            </div>
                            <div
                              className="text-center relative flex items-end justify-center"
                              style={{ 
                                color: base.colors.dashboard.unitText,
                                fontSize: main.typography.fontSize.dashboardUnit,
                                letterSpacing: base.typography.letterSpacing.tight,
                                fontFamily: base.typography.fontFamily.primary,
                                fontWeight: main.typography.getDynamicWeight.dashboardUnit(),
                              }}
                            >
                              점
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="rounded-[10px] border-solid border-[transparent] flex flex-col items-start justify-start self-stretch flex-1 relative"
                      style={{
                        backgroundColor: base.colors.dashboard.cardBackground,
                        borderRadius: main.borderRadius.card,
                        borderWidth: main.sizes.dashboardCardBorderWidth,
                        padding: main.sizes.dashboardCardPadding,
                        gap: main.sizes.dashboardCardGap,
                        boxShadow: main.shadows.dashboardCardInset,
                      }}
                    >
                      <div className="flex flex-col items-start justify-between self-stretch flex-1 relative">
                        <div 
                          className="flex flex-col items-start justify-start self-stretch shrink-0 relative"
                          style={{ gap: main.spacing.dashboardHeaderGap }}
                        >
                          <div
                            className="text-left relative"
                            style={{ 
                              color: base.colors.dashboard.titleText,
                              fontSize: main.typography.fontSize.dashboardTitle,
                              lineHeight: main.typography.lineHeight.dashboardTitle,
                              letterSpacing: base.typography.letterSpacing.tight,
                              fontFamily: base.typography.fontFamily.primary,
                              fontWeight: main.typography.getDynamicWeight.dashboardTitle(),
                            }}
                          >
                            평균 답변 시간
                          </div>
                          <div
                            className="text-center relative flex items-end justify-center"
                            style={{ 
                              color: base.colors.dashboard.subtitleText,
                              fontSize: main.typography.fontSize.dashboardSubtitle,
                              lineHeight: main.typography.lineHeight.dashboardSubtitle,
                              letterSpacing: base.typography.letterSpacing.tight,
                              fontFamily: base.typography.fontFamily.primary,
                              fontWeight: main.typography.getDynamicWeight.dashboardSubtitle(),
                            }}
                          >
                            &lt;커뮤니티 목표 1주일&gt;
                          </div>
                        </div>
                        <div 
                          className="flex flex-row items-end justify-end self-stretch flex-1 relative"
                          style={{ paddingRight: main.sizes.dashboardValuePaddingRight }}
                        >
                          <div 
                            className="flex flex-row items-center justify-start shrink-0 relative"
                            style={{ gap: main.sizes.dashboardValueGap }}
                          >
                            <div
                              className="text-center relative flex items-end justify-center"
                              style={{ 
                                color: base.colors.dashboard.valueText,
                                fontSize: main.typography.fontSize.dashboardValue,
                                letterSpacing: '-0.05em',
                                fontFamily: base.typography.fontFamily.primary,
                                fontWeight: main.typography.getDynamicWeight.dashboardValue(),
                              }}
                            >
                              26
                            </div>
                            <div
                              className="text-center relative flex items-end justify-center"
                              style={{ 
                                color: base.colors.dashboard.unitText,
                                fontSize: main.typography.fontSize.dashboardUnit,
                                letterSpacing: base.typography.letterSpacing.tight,
                                fontFamily: base.typography.fontFamily.primary,
                                fontWeight: main.typography.getDynamicWeight.dashboardUnit(),
                              }}
                            >
                              시간
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 두 번째 컨테이너 */}
                  <div 
                    className="flex flex-col items-start justify-start self-stretch shrink-0 relative"
                    style={{ 
                      height: main.sizes.dashboardSecondContainerHeight,
                      gap: main.sizes.dashboardContainerGap,
                    }}
                  >
                    {/* 두 번째 행: 이달에 해결된 질문 + 답변 만족도 */}
                    <div 
                      className="flex flex-row items-start justify-start self-stretch shrink-0 relative"
                      style={{ 
                        height: main.sizes.dashboardRowHeight,
                        gap: main.sizes.dashboardContainerGap,
                      }}
                    >
                      <div
                        className="rounded-[10px] border-solid border-[transparent] flex flex-col items-start justify-start self-stretch flex-1 relative"
                        style={{
                          backgroundColor: base.colors.dashboard.cardBackground,
                          borderRadius: main.borderRadius.card,
                          borderWidth: main.sizes.dashboardCardBorderWidth,
                          padding: main.sizes.dashboardCardPadding,
                          gap: main.sizes.dashboardCardGap,
                          boxShadow: main.shadows.dashboardCardInset,
                        }}
                      >
                        <div className="flex flex-col items-start justify-between self-stretch flex-1 relative">
                          <div
                            className="text-left relative"
                            style={{ 
                              color: base.colors.dashboard.titleText,
                              fontSize: main.typography.fontSize.dashboardTitle,
                              lineHeight: main.typography.lineHeight.dashboardTitle,
                              letterSpacing: base.typography.letterSpacing.tight,
                              fontFamily: base.typography.fontFamily.primary,
                              fontWeight: main.typography.getDynamicWeight.dashboardTitle(),
                            }}
                          >
                            이달에 해결된 질문
                          </div>
                          <div 
                            className="flex flex-row items-end justify-end self-stretch flex-1 relative"
                            style={{ paddingRight: main.sizes.dashboardValuePaddingRight }}
                          >
                            <div 
                              className="flex flex-row items-center justify-start shrink-0 relative"
                              style={{ gap: main.sizes.dashboardValueGap }}
                            >
                              <div
                                className="text-center relative flex items-end justify-center"
                                style={{ 
                                  color: base.colors.dashboard.valueText,
                                  fontSize: main.typography.fontSize.dashboardValue,
                                  letterSpacing: '-0.05em',
                                  fontFamily: base.typography.fontFamily.primary,
                                  fontWeight: main.typography.getDynamicWeight.dashboardValue(),
                                }}
                              >
                                152
                              </div>
                              <div
                                className="text-center relative flex items-end justify-center"
                                style={{ 
                                  color: base.colors.dashboard.unitText,
                                  fontSize: main.typography.fontSize.dashboardUnit,
                                  letterSpacing: base.typography.letterSpacing.tight,
                                  fontFamily: base.typography.fontFamily.primary,
                                  fontWeight: main.typography.getDynamicWeight.dashboardUnit(),
                                }}
                              >
                                건
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="rounded-[10px] border-solid border-[transparent] flex flex-col items-start justify-start self-stretch flex-1 relative"
                        style={{
                          backgroundColor: base.colors.dashboard.cardBackground,
                          borderRadius: main.borderRadius.card,
                          borderWidth: main.sizes.dashboardCardBorderWidth,
                          padding: main.sizes.dashboardCardPadding,
                          gap: main.sizes.dashboardCardGap,
                          boxShadow: main.shadows.dashboardCardInset,
                        }}
                      >
                        <div className="flex flex-col items-start justify-between self-stretch flex-1 relative">
                          <div 
                            className="flex flex-col items-start justify-start self-stretch shrink-0 relative"
                            style={{ gap: main.spacing.dashboardHeaderGap }}
                          >
                            <div
                              className="text-left relative"
                              style={{ 
                                color: base.colors.dashboard.titleText,
                                fontSize: main.typography.fontSize.dashboardTitle,
                                lineHeight: main.typography.lineHeight.dashboardTitle,
                                letterSpacing: base.typography.letterSpacing.tight,
                                fontFamily: base.typography.fontFamily.primary,
                                fontWeight: main.typography.getDynamicWeight.dashboardTitle(),
                              }}
                            >
                              답변 만족도
                            </div>
                            <div
                              className="text-center relative flex items-end justify-center"
                              style={{ 
                                color: base.colors.dashboard.subtitleText,
                                fontSize: main.typography.fontSize.dashboardSubtitle,
                                lineHeight: main.typography.lineHeight.dashboardSubtitle,
                                letterSpacing: base.typography.letterSpacing.tight,
                                fontFamily: base.typography.fontFamily.primary,
                                fontWeight: main.typography.getDynamicWeight.dashboardSubtitle(),
                              }}
                            >
                              &lt;'도움됨' 평가 비율&gt;
                            </div>
                          </div>
                          <div 
                            className="flex flex-row items-end justify-end self-stretch flex-1 relative"
                            style={{ paddingRight: main.sizes.dashboardValuePaddingRight }}
                          >
                            <div 
                              className="flex flex-row items-center justify-start shrink-0 relative"
                              style={{ gap: main.sizes.dashboardValueGap }}
                            >
                              <div
                                className="text-center relative flex items-end justify-center"
                                style={{ 
                                  color: base.colors.dashboard.valueText,
                                  fontSize: main.typography.fontSize.dashboardValue,
                                  letterSpacing: '-0.05em',
                                  fontFamily: base.typography.fontFamily.primary,
                                  fontWeight: main.typography.getDynamicWeight.dashboardValue(),
                                }}
                              >
                                95
                              </div>
                              <div
                                className="text-center relative flex items-end justify-center"
                                style={{ 
                                  color: base.colors.dashboard.unitText,
                                  fontSize: main.typography.fontSize.dashboardUnit,
                                  letterSpacing: base.typography.letterSpacing.tight,
                                  fontFamily: base.typography.fontFamily.primary,
                                  fontWeight: main.typography.getDynamicWeight.dashboardUnit(),
                                }}
                              >
                                %
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 세 번째 행: AI 분석 현황 (큰 카드) */}
                    <div
                      className="rounded-[10px] border-solid border-[transparent] flex flex-col items-start justify-start self-stretch flex-1 relative"
                      style={{
                        backgroundColor: base.colors.dashboard.cardBackground,
                        borderRadius: main.borderRadius.card,
                        borderWidth: main.sizes.dashboardCardBorderWidth,
                        padding: main.sizes.dashboardCardPadding,
                        gap: main.sizes.dashboardCardGap,
                        boxShadow: main.shadows.dashboardCardInset,
                      }}
                    >
                      <div 
                        className="flex flex-col items-start justify-start self-stretch flex-1 relative"
                        style={{ 
                          paddingTop: main.sizes.dashboardAIPaddingTop,
                          paddingBottom: main.sizes.dashboardAIPaddingTop,
                          gap: main.spacing.dashboardHeaderGap,
                        }}
                      >
                        <div
                          className="text-left relative self-stretch"
                          style={{ 
                            color: base.colors.dashboard.titleText,
                            fontSize: main.typography.fontSize.dashboardTitle,
                            lineHeight: main.typography.lineHeight.dashboardTitle,
                            letterSpacing: base.typography.letterSpacing.tight,
                            fontFamily: base.typography.fontFamily.primary,
                            fontWeight: main.typography.getDynamicWeight.dashboardTitle(),
                          }}
                        >
                          AI 분석 현황
                        </div>
                        <div 
                          className="flex flex-row items-center justify-center self-stretch flex-1 relative"
                          style={{ 
                            paddingRight: main.sizes.dashboardValuePaddingRight,
                            paddingLeft: main.sizes.dashboardValuePaddingLeft,
                            gap: main.spacing.dashboardHeaderGap,
                          }}
                        >
                          <div
                            className="text-center relative flex-1 flex items-center justify-center overflow-hidden"
                            style={{
                              color: base.colors.dashboard.titleText,
                              fontSize: main.typography.fontSize.dashboardAIText,
                              lineHeight: main.typography.lineHeight.dashboardAIText,
                              letterSpacing: base.typography.letterSpacing.tight,
                              fontFamily: base.typography.fontFamily.primary,
                              fontWeight: main.typography.getDynamicWeight.dashboardAIText(),
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                            }}
                          >
                            "QnAHub AI가{' '}
                            <span 
                              style={{ 
                                color: base.colors.dashboard.aiHighlightText,
                                fontFamily: base.typography.fontFamily.primary,
                                fontWeight: main.typography.getDynamicWeight.dashboardAIHighlight(),
                                letterSpacing: base.typography.letterSpacing.tight,
                              }}
                            >
                              87
                            </span>
                            {' '}개의 질문을 종합중입니다..."
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
