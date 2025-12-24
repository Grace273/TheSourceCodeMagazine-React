import { useState } from "react";
import "./App.css";
import StartPage from "./components/pages/StartPage";
import AboutPage from "./components/pages/AboutPage";
import JoinUsPage from "./components/pages/JoinUsPage";
import ArchivesPage from "./components/pages/ArchivesPage";
import MenuPage from "./components/pages/MenuPage";

function App() {
  const [homePageVisible, setHomePageVisibility] = useState(true);
  const [aboutPageVisible, setAboutPageVisibility] = useState(false);
  const [joinUsPageVisible, setJoinUsPageVisibility] = useState(false);
  const [archivesPageVisible, setArchivesPageVisibility] = useState(false);
  const [menuPageVisible, setMenuPageVisibility] = useState(false);

  const showHome = () => {
    if (setHomePageVisibility) {
      window.location.reload();
    }
    setHomePageVisibility(true);
    setAboutPageVisibility(false);
    setJoinUsPageVisibility(false);
    setArchivesPageVisibility(false);
    setMenuPageVisibility(false);
  };

  const showAbout = () => {
    setHomePageVisibility(false);
    setAboutPageVisibility(true);
    setJoinUsPageVisibility(false);
    setArchivesPageVisibility(false);
    setMenuPageVisibility(false);
  };

  const showJoinUs = () => {
    setHomePageVisibility(false);
    setAboutPageVisibility(false);
    setJoinUsPageVisibility(true);
    setArchivesPageVisibility(false);
    setMenuPageVisibility(false);
  };

  const showArchives = () => {
    setHomePageVisibility(false);
    setAboutPageVisibility(false);
    setJoinUsPageVisibility(false);
    setArchivesPageVisibility(true);
    setMenuPageVisibility(false);
  };

  const showMenuPage = () => {
    setHomePageVisibility(false);
    setAboutPageVisibility(false);
    setJoinUsPageVisibility(false);
    setArchivesPageVisibility(false);
    setMenuPageVisibility(true);
    console.log("click");
  };

  return (
    <>
      {homePageVisible && (
        <StartPage
          onClickHomepage={showHome}
          onClickAbout={showAbout}
          onClickJoinUs={showJoinUs}
          onClickArchives={showArchives}
          onClickMenu={showMenuPage}
        />
      )}
      {aboutPageVisible && (
        <AboutPage
          onClickHomepage={showHome}
          onClickAbout={showAbout}
          onClickJoinUs={showJoinUs}
          onClickArchives={showArchives}
          onClickMenu={showMenuPage}
        />
      )}
      {joinUsPageVisible && (
        <JoinUsPage
          onClickHomepage={showHome}
          onClickAbout={showAbout}
          onClickJoinUs={showJoinUs}
          onClickArchives={showArchives}
          onClickMenu={showMenuPage}
        />
      )}
      {archivesPageVisible && (
        <ArchivesPage
          onClickHomepage={showHome}
          onClickAbout={showAbout}
          onClickJoinUs={showJoinUs}
          onClickArchives={showArchives}
          onClickMenu={showMenuPage}
        />
      )}
      {menuPageVisible && (
        <MenuPage
          onClickHomepage={showHome}
          onClickAbout={showAbout}
          onClickJoinUs={showJoinUs}
          onClickArchives={showArchives}
        />
      )}
    </>
  );
}

export default App;
