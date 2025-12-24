import pooja from "../assets/images/execs/pooja.jpg";
import elise from "../assets/images/execs/elise.jpg";
import shana from "../assets/images/execs/shana.jpg";
import isla from "../assets/images/execs/isla.jpg";
import stefan from "../assets/images/execs/stefan.jpg";
import grace from "../assets/images/execs/grace.jpg";

const MeetTheTeam = () => {
  return (
    <section class="photo-grid">
      <img src={pooja} alt="Editor in chief Pooja Mangra" width="100%" />
      <img src={elise} alt="Puzzle Editor Elise Corbin" width="100%" />
      <img src={shana} alt="Managing Editor Shana Rosenberg" width="100%" />

      <img src={isla} alt="Social Media Manager Isla Parekh" width="100%" />
      <img src={stefan} alt="Editor Stefan Barna" width="100%" />
      <img src={grace} alt="Web Dev Grace Wang" width="100%" />

      <div id="maya-temp">
        <img
          src="https://picsum.photos/seed/8/800/600"
          alt="Web Dev Maya Dowman"
          width="100%"
        />
        <div id="overlay-maya">Maya Dowman, Web Dev</div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
