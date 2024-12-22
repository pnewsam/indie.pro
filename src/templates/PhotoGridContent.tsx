const Photo = () => {
  return (
    <picture className="w-full h-auto border border-neutral-300 aspect-square bg-gray-200 rounded-md">
      <img src="/images/profile.jpg" alt="Profile" />
    </picture>
  );
};

export const PhotoGridContent = () => {
  return (
    <div className="grid grid-cols-4 items-center gap-4">
      {Array.from({ length: 10 }).map((_, index) => (
        <Photo key={index} />
      ))}
    </div>
  );
};
