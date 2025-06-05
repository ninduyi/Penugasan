const ProfileHeader = ({title}) => {
  return (
    <div className="flex gap-6 items-center">
      
      <div>
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
    </div>
  );
};

export default ProfileHeader;
