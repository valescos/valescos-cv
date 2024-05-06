import ExperienceItem from "./ExperienceItem";

function Experience() {
  const previousEmployments = [
    {
      id: 4,
      name: "Журнал «Leaders Today»",
      position: "Дизайнер-верстальщик",
      date: "2018–2023",
      responsibilities: [
        "дизайн и вёрстка глянцевого журнала",
        "разработка рекламных макетов",
        "ретушь фотографий",
      ],
    },
    {
      id: 3,
      name: "Телесемь",
      position: "Дизайнер по рекламе",
      date: "2014–2017",
      responsibilities: ["разработка рекламных макетов"],
    },
    {
      id: 2,
      position: "Дизайнер-верстальщик",
      name: "Газета Авто-Стоп",
      date: "2010–2013",
      responsibilities: ["вёрстка газеты", "разработка рекламных макетов"],
    },
    {
      id: 1,
      name: "Справочник по недвижимости",
      position: "Дизайнер-верстальщик",
      date: "2007–2008",
      responsibilities: [
        "вёрстка многостраничного справочника",
        "разработка рекламных макетов",
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {previousEmployments.map((employment, index) => (
        <ExperienceItem key={employment.id} index={index} {...employment} />
      ))}
    </div>
  );
}

export default Experience;
