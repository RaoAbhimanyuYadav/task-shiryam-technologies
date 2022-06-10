import "./styles.css";
import Page from "./components/Page";
const DUMMY_DATA = [
  {
    page: "homepage",
    content: [
      { type: "h1", content: "I am 1st page", style: { color: "red" } },
      {
        type: "div",
        content: [
          { type: "h1", content: "hi everyone", style: { color: "red" } },
          { type: "h1", content: "I am Abhimanyu", style: { color: "red" } }
        ]
      },
      {
        type: "img",
        content: "",
        src:
          "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        altText: "image",
        style: { width: "90px" }
      },
      {
        type: "banner",
        content: "",
        src:
          "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        altText: "banner",
        style: { width: "500px" }
      }
    ]
  },
  {
    page: "homepage",
    content: [
      { type: "h1", content: "I am page 2", style: { color: "red" } },
      {
        type: "div",
        content: [
          { type: "h1", content: "Nice ", style: { color: "red" } },
          { type: "h1", content: "Good", style: { color: "red" } }
        ]
      },
      {
        type: "img",
        content: "",
        src:
          "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        altText: "image",
        style: { width: "90px" }
      },
      {
        type: "banner",
        content: "",
        src:
          "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        altText: "banner",
        style: { width: "500px" }
      }
    ]
  }
];

export default function App() {
  //i can use route to load content in differnet page
  return (
    <div className="App">
      {DUMMY_DATA.map((page) => (
        <Page content={page.content} />
      ))}
    </div>
  );
}
