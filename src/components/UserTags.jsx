const UserTags = ( {tags} ) => {
  return (
    <div>
      {tags.map((tag) => (
        <span key={tag} className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-2 rounded-full dark:bg-gray-700 dark:text-gray-300">
          {tag}
        </span>
      ))}
    </div>
  );
};

export default UserTags;
