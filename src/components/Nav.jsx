const nav = ({
  onClickHomepage,
  onClickAbout,
  onClickJoinUs,
  onClickArchives,
}) => {
  return (
    <>
      <div className="sticky-notes">
        <div className="note" id="homepage-note" onClick={onClickHomepage}>
          <p>HOME</p>
        </div>
        <div className="note" id="about-note" onClick={onClickAbout}>
          <p>ABOUT</p>
        </div>
        <div className="note" id="join-us-note" onClick={onClickJoinUs}>
          JOIN US
        </div>
        <div className="note" id="archives-note" onClick={onClickArchives}>
          <p>ARCHIVES</p>
        </div>
      </div>
    </>
  );
};

export default nav;
