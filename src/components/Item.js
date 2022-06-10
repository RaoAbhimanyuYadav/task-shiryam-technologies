const Item = ({ data }) => {
  //we can add more switch statement according to data that is given by backend
  // switch (data.type) {
  //   case "h1":
  //     if (typeof data.content === "object") {
  //       return (
  //         <>
  //           {data.content.map((item) => (
  //             <Item data={item} />
  //           ))}
  //         </>
  //       );
  //     } else {
  //       return <h1 style={data.style}>{data.content}</h1>;
  //     }
  //   case "img":
  //     return <img src={data.src} style={data.style} alt={data.altText} />;
  //   case "banner":
  //     return <img src={data.src} style={data.style} alt={data.altText} />;
  //   default:
  //     return <></>;
  // }

  //Second approach
  let TagName = data.type;
  let dom = <></>;
  if (typeof data.content === "object") {
    dom = (
      <>
        {data.content.map((item) => (
          <Item data={item} />
        ))}
      </>
    );
  } else if (data.type === "img" || data.type === "banner") {
    return <img src={data.src} style={data.style} alt={data.altText}></img>;
  } else {
    dom = data.content;
  }

  return (
    <>
      {" "}
      <TagName style={data.style}> {dom}</TagName>
    </>
  );
};
export default Item;
