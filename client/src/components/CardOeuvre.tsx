type workType = {
  id: number;
  title: string;
  artist_title: string;
  image_id: string;
};

function cardOeuvre({ id, title, artist_title, image_id }: workType) {
  return (
    <>
      <div key={id} className="arts">
        <h2>{title}</h2>
        <p>{artist_title}</p>
        <img
          src={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`}
          alt={title}
        />
      </div>
    </>
  );
}
export default cardOeuvre;
