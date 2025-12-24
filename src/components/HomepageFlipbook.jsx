import HTMLFlipBook from "react-pageflip";
import flipbookData from "../data/flipbookData.json";
const HomepageFlipbook = () => {
  return (
    <>
      <HTMLFlipBook
        width={300}
        height={500}
        maxShadowOpacity={0.7}
        drawShadow={true}
        mobileScrollSupport={true}
        // size={"stretch"}
      >
        {/* Data should be a JSON object */}
        {flipbookData.pages.map((page, index) => (
          <img src={page.src} alt={page.alt} key={index} />
        ))}
      </HTMLFlipBook>
    </>
  );
};

export default HomepageFlipbook;
