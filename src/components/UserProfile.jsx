import UserDislike from './UserDislike';
import UserHeader from './UserHeader';
import UserPost from './UserPost';
import UserReaction from './UserReaction';
import UserTags from './UserTags';

const ProfileCard = ({ title, body, tags, likes, dislikes }) => {
  return (
    <div className="bg-gray-200 p-8 rounded-2xl shadow-md flex flex-col gap-8">
      <UserHeader title={title} />
      <UserPost body={body} />
      <div className="flex flex-col gap-4">
        <div className="flex justify-end">
          <UserTags tags={tags} />
        </div>
      </div>
      <div className="d-flex flex gap-6">
        <UserReaction likes={likes} />
        <UserDislike dislikes={dislikes} />
      </div>
    </div>
  );
};

export default ProfileCard;
