function ArticleCard({ image, title, description }) {
  return (
    <div className="project">
      <img
        className="project-image"
        src={image}
        alt={title}
      />

      <h3 className="project-title">{title}</h3>

      <p className="p1">{description}</p>
    </div>
  );
}

export default ArticleCard;