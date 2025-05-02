import { useEffect, useState } from "react";
import CardOeuvre from "./CardOeuvre";
import "../styles/galerie.css";

type workType = {
  id: number;
  title: string;
  artist_title: string;
  image_id: string;
};

function cardListOeuvre() {
  const [works, setWorks] = useState<workType[]>([]);
  const [filter, setFilter] = useState<workType[]>([]);
  const categories = works.map((w) => w.artist_title);

  const uniqueSet = new Set(categories);
  const extractedArts = [...uniqueSet];

  useEffect(() => {
    fetch("https://api.artic.edu/api/v1/artworks?page=2&limit=30")
      .then((response) => response.json())
      .then((data) => setWorks(data.data))
      .catch(() => {
        "Erreur lors du chargement";
      });
  }, []);

  return (
    <>
      {" "}
      <h2>Exposition</h2>
      <div className="filterContainer">
        {extractedArts.map((e) => (
          <button
            type="button"
            className="filterButton"
            key={e}
            onClick={() => setFilter(works.filter((w) => w.artist_title === e))}
          >
            {e}
          </button>
        ))}
      </div>
      <div>
        {(filter.length > 0 ? filter : works).map((w) => (
          <CardOeuvre
            key={w.id}
            id={w.id}
            artist_title={w.artist_title}
            title={w.title}
            image_id={w.image_id}
          />
        ))}
      </div>
    </>
  );
}

export default cardListOeuvre;
