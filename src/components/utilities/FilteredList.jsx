function FilterdList({
  category,
  currentCategory,
  setCurrentCategory,
  defaultСategory,
}) {
  return (
    <div className="flex gap-4 items-center pb-8 flex-wrap justify-center md:justify-start px-4 md:px-0">
      {[...new Set(category), defaultСategory].map((elem, index) => (
        <button
          key={index}
          onClick={() => setCurrentCategory(elem)}
          className={
            elem === currentCategory
              ? `accent rounded-md py-2 px-4 border-4 border-secondary shadow-lg transition-all`
              : `rounded-md py-2 px-4 border-4 hover:bg-[rgba(0,0,0,0.25)] transition-all`
          }
        >
          {elem}
        </button>
      ))}
    </div>
  );
}

export default FilterdList;
