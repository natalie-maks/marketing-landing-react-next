import AboutSectionTopListItem from "./AboutSectionTopListItem";

const list = ["First line in the list", "Second line in the list", "Third line in the list"];

const AboutSectionTopList = () => {
  return (
    <ul className="flex flex-col space-y-3">
      {list.map((listItem) => (
        <AboutSectionTopListItem key={listItem} listItem={listItem} />
      ))}
    </ul>
  );
};

export default AboutSectionTopList;
