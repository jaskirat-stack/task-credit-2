function Gallery() {
  const images = [
    {
      id: 1,
      src: "/public/double-exposure-caucasian-man-virtual-reality-vr-headset-is-presumably-gamer-hacker-cracking-code-into-secure-network-server-with-lines-code.jpg",
      alt: "Technology"
    },
    {
      id: 2,
      src: "/public/business-people-working-laptop-meeting.jpg",
      alt: "Business meeting"
    },
    {
      id: 3,
      src: "/public/3d-rendering-biorobots-concept.jpg",
      alt: "Robotics"
    }
  ];

  return (
    <section id="gallery">
      <h2>Gallery</h2>

      <div className="gallery">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
          />
        ))}
      </div>
    </section>
  );
}

export default Gallery;