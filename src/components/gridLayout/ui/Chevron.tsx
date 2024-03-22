/** @format */



type ChevronProps = {
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

export const LeftChevron = ({ onClick }: ChevronProps) => {
  return (
    <div
      onClick={onClick}
      className="fixed top-1/2 left-10 text-4xl text-white z-[100]  cursor-pointer">
      &larr;
    </div>
  );
};

export const RightChevron = ({ onClick }: ChevronProps) => {
  return (
    <div
      onClick={onClick}
      className="fixed top-1/2 right-10 text-4xl text-white z-[100]  cursor-pointer">
        &rarr;
    </div>
  );
};
