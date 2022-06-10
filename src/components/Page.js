import Item from "./Item";
const Page = ({ content }) => {
  return (
    <div>
      {content.map((item) => (
        <Item data={item} />
      ))}
    </div>
  );
};
export default Page;
