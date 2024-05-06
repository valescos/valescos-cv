function ExperienceItem({ date, name, position, responsibilities }) {
  return (
    <div className="flex flex-col justify-between sm:flex-row border-2 p-4 mb-4 rounded-md">
      <div>
        <p className="font-bold text-lg pb-4">{name}</p>
        <p className="pb-4">
          <span className="accent px-4 py-2 rounded-md text-white">
            {position}
          </span>
        </p>
        <ul className="list-disc marker:text-secondary">
          {responsibilities.map((responsibility, index) => (
            <li className="ml-5" key={index}>
              {responsibility}
            </li>
          ))}
        </ul>
      </div>
      <div className="text-right text-3xl md:text-4xl sm:self-end">{date}</div>
    </div>
  );
}

export default ExperienceItem;
