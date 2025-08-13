import React from 'react';

interface CommunityPostCardProps {
  id: number;
  username: string;
  title: string;
  content: string;
  tags: string[];
  likeCount: number;
  commentCount: number;
  timeAgo: string;
}

export const CommunityPostCard: React.FC<CommunityPostCardProps> = ({
  username,
  title,
  content,
  tags,
  likeCount,
  commentCount,
  timeAgo,
}) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <div className="text-gray-400 text-sm mb-2">{username}</div>
      <div className="text-white font-bold mb-2">{title}</div>
      <div className="text-gray-300 mb-3">{content}</div>
      <div className="flex gap-2 mb-3">
        {tags.map((tag, index) => (
          <span key={index} className="text-blue-400 text-sm">#{tag}</span>
        ))}
      </div>
      <div className="flex justify-between items-center text-sm text-gray-400">
        <div className="flex gap-4">
          <span>👍 {likeCount}</span>
          <span>💬 {commentCount}</span>
        </div>
        <span>{timeAgo}</span>
      </div>
    </div>
  );
};