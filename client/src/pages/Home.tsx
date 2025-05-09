import Devanture from "../assets/images/Devanture.png";
import "../styles/home.css";
import { useEffect, useState } from "react";

type imageType = {
  image_id: string;
  title: string;
};

const Home = () => {
  const [unavoidable, setUnavoidable] = useState<imageType[]>([]);
  const [draw, setDraw] = useState(0);
  const imageUrl =
    unavoidable.length > 0
      ? `https://www.artic.edu/iiif/2/${unavoidable[draw].image_id}/full/300,/0/default.jpg`
      : "";

  useEffect(() => {
    fetch("https://api.artic.edu/api/v1/artworks?page=4&limit=5")
      .then((response) => response.json())
      .then((data) => setUnavoidable(data.data))
      .catch(() => {
        "Erreur lors du chargement";
      });
  }, []);

  useEffect(() => {
    if (unavoidable.length > 0) {
      const painting = (draw + 1) % unavoidable.length;
      const defilement = setInterval(() => setDraw(painting), 4000);
      return () => clearInterval(defilement);
    }
  }, [draw, unavoidable]);

  return (
    <>
      <div className="home-description">
        <img src={Devanture} alt="Devanture Codex Art" />
        <p>
          Fondée en 2019, la galerie Codex Art est née d’un désir profond de
          contribuer activement au développement de la culture artistique, en
          créant un pont entre passé et présent. Située au cœur de la ville,
          elle se veut un lieu d’échange, de découverte et de transmission,
          dédié à tous les passionnés d’art, qu’ils soient amateurs curieux ou
          collectionneurs avertis. La mission de Codex Art est double : faire
          connaître l’art contemporain en mettant en lumière des artistes
          émergents ou confirmés, et valoriser le patrimoine artistique en
          exposant également des œuvres anciennes, parfois méconnues du grand
          public. À travers cette approche, la galerie permet à chacun de mieux
          comprendre l’évolution des styles, des techniques et des sensibilités
          artistiques à travers les époques. Chaque exposition est pensée comme
          une invitation à explorer l’histoire de l’art sous toutes ses formes,
          en tissant des liens entre les œuvres d’hier et celles d’aujourd’hui.
          Plus qu’un simple espace d’exposition, Codex Art est un lieu vivant,
          un carrefour culturel où se rencontrent les talents, les idées et les
          regards, au service de la beauté et de la réflexion.
        </p>
      </div>

      <div className="home-images">
        <h1>Nos incontournables</h1>
        <div>
          {unavoidable.length > 0 && (
            <img
              className="caroussel"
              src={imageUrl}
              alt={unavoidable[draw].title}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
