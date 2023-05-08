import AboutSectionTopListItem from "./AboutSectionTopListItem";

const list = ["All Digital Tools", "Best Solutions", "Fastest Results"];

const AboutSectionTopList = () => {
  return (
    <ul className="flex flex-col space-y-3 mt-8">
      {list.map((listItem) => (
        <AboutSectionTopListItem key={listItem} listItem={listItem} />
      ))}
    </ul>
  );
};

export default AboutSectionTopList;
