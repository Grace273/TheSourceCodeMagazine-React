import logo from "../assets/images/logo.png";
import rippedCorner from "../assets/images/bg-images/ripped-corner.png";
import rippedPage from "../assets/images/bg-images/ripped-page.png";

const BackgroundOverlay = ({ onClickLogo }) => {
  return (
    <>
      <img id="logo" alt="logo" src={logo} width="100%" onClick={onClickLogo} />
      <img id="ripped-page" alt="ripped page" src={rippedPage} />
      <img id="ripped-corner" alt="ripped page" src={rippedCorner} />
    </>
  );
};

export default BackgroundOverlay;
