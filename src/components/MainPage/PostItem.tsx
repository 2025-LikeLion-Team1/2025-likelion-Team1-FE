import { main, base } from '../../styles/tokens';

interface PostItemProps {
  author: string;
  title: string;
  content: string;
  tags: string;
  likes: number;
  comments: number;
  timeAgo: string;
  isNotice?: boolean;
}

export const PostItem = ({ 
  author, 
  title, 
  content, 
  tags, 
  likes, 
  comments, 
  timeAgo, 
  isNotice = false 
}: PostItemProps) => {
  return (
    <div className="bg-[#2d2d32] rounded-[10px] flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
      <div className="bg-[#18181b] rounded-[10px] border-solid border-[#2d2d32] border-[6px] pt-4 pr-6 pb-4 pl-6 flex flex-col gap-5 items-start justify-start self-stretch shrink-0 relative">
        <div className="flex flex-col gap-5 items-start justify-start self-stretch shrink-0 relative">
          <div className="flex flex-col gap-1.5 items-start justify-start self-stretch shrink-0 relative">
            <div className="flex flex-col gap-5 items-start justify-start self-stretch shrink-0 relative">
              {isNotice && (
                <div className="pt-1 pb-1 flex flex-row gap-2.5 items-center justify-start shrink-0 relative overflow-hidden">
                  <img
                    className="shrink-0 w-4 h-4 relative overflow-visible"
                    style={{ aspectRatio: "1" }}
                    src="/group-30.svg"
                    alt="Notice"
                  />
                </div>
              )}
              {author && (
                <div
                  className="text-[#b0b0b0] text-left text-sm leading-5 font-semibold relative self-stretch flex items-end justify-start"
                  style={{ 
                    letterSpacing: base.typography.letterSpacing.tight,
                    fontFamily: base.typography.fontFamily.primary,
                    fontWeight: main.typography.getDynamicWeight.body() // 동적 계산
                  }}
                >
                  {author}
                </div>
              )}
            </div>
            <div className="flex flex-col gap-5 items-start justify-start self-stretch shrink-0 relative">
              <div
                className="text-[#eaeaea] text-left text-lg leading-7 font-semibold relative self-stretch flex items-end justify-start"
                style={{ 
                  letterSpacing: base.typography.letterSpacing.tight,
                  fontFamily: base.typography.fontFamily.primary,
                  fontWeight: main.typography.getDynamicWeight.postTitle() // 동적 계산
                }}
              >
                {title}
              </div>
            </div>
          </div>
          {content && (
            <div
              className="text-[#eaeaea] text-left text-sm leading-5 font-medium relative w-[100%] h-10 max-w-[364px] max-h-[60px] overflow-hidden"
              style={{
                letterSpacing: base.typography.letterSpacing.tight,
                textOverflow: "ellipsis",
                fontFamily: base.typography.fontFamily.primary,
                fontWeight: main.typography.getDynamicWeight.body() // 동적 계산
              }}
            >
              {content}
            </div>
          )}
        </div>
        {tags && (
          <div className="flex flex-row gap-5 items-center justify-start self-stretch shrink-0 h-5 relative">
            <div
              className="text-[#b0b0b0] text-left text-xs leading-5 font-medium relative flex-1 h-5 overflow-hidden"
              style={{
                letterSpacing: base.typography.letterSpacing.tight,
                textOverflow: "ellipsis",
                fontFamily: base.typography.fontFamily.primary,
                fontWeight: main.typography.getDynamicWeight.meta() // 동적 계산
              }}
            >
              {tags}
            </div>
          </div>
        )}
      </div>
      <div className="bg-[#2d2d32] rounded-br-[10px] rounded-bl-[10px] pt-3 pr-6 pb-4 pl-6 flex flex-row items-center justify-between self-stretch shrink-0 relative">
        <div className="flex flex-row gap-5 items-center justify-start shrink-0 relative">
          {(likes > 0 || comments > 0) && (
            <>
              <div
                className="text-[#eaeaea] text-left text-lg leading-5 font-medium relative flex items-center justify-start"
                style={{ 
                  letterSpacing: base.typography.letterSpacing.tight,
                  fontFamily: base.typography.fontFamily.primary,
                  fontWeight: main.typography.getDynamicWeight.body() // 동적 계산
                }}
              >
                😍 {likes}
              </div>
              <div
                className="text-[#eaeaea] text-left text-lg leading-5 font-medium relative flex items-center justify-start"
                style={{ 
                  letterSpacing: base.typography.letterSpacing.tight,
                  fontFamily: base.typography.fontFamily.primary,
                  fontWeight: main.typography.getDynamicWeight.body() // 동적 계산
                }}
              >
                💬 {comments}
              </div>
            </>
          )}
        </div>
        <div
          className="text-[#b0b0b0] text-right text-xs leading-5 font-medium relative flex-1 max-w-[100px] flex items-center justify-end overflow-hidden"
          style={{
            letterSpacing: base.typography.letterSpacing.tight,
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            fontFamily: base.typography.fontFamily.primary,
            fontWeight: main.typography.getDynamicWeight.meta() // 동적 계산
          }}
        >
          {timeAgo}
        </div>
      </div>
    </div>
  );
};
