// This page is for mobile users to navigate
import Footer from "../Footer";
import logo from "../../assets/images/logo.png";

const MenuPage = ({
  onClickHomepage,
  onClickAbout,
  onClickJoinUs,
  onClickArchives,
}) => {
  return (
    <div className="body" id="menu-page-container">
      <div id="button-container">
        <a href="index.html">
          <img id="logo" alt="title" src={logo} width="100%" />
        </a>

        <div onClick={onClickHomepage}>
          <div class="note-menu" id="homepage-note">
            HOME
          </div>
        </div>
        <div onClick={onClickAbout}>
          <div class="note-menu" id="about-note">
            ABOUT
          </div>
        </div>
        <div onClick={onClickJoinUs}>
          <div class="note-menu" id="join-us-note">
            JOIN US
          </div>
        </div>
        <div onClick={onClickArchives}>
          <div class="note-menu" id="archives-note">
            ARCHIVES
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MenuPage;
