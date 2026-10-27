function FeaturedTutorials() {
  const tutorials = [
    {
      id: 1,
      title: "frontend development",
      src: "/19197868.jpg",
      description: "learn basics of frontend development"
    },
    {
      id: 2,
      title: "JavaScript Basics",
      src:"/20945805.jpg",
      description: "Learn basics of javascript"
    },
    {
      id: 3,
      title: "Cyber Security",
      src: "/cybersecurity-data-protection-concept.jpg",
      description: "Learn the basics of cyber security"
    }
  ];

  return (
    <section id="tutorials">
      <h2>Featured Tutorials</h2>

      <div className="projects-container">
        {tutorials.map((tutorial) => (
          <div className="article-card" key={tutorial.id}>
            <h3>{tutorial.title}</h3>
            <img src={tutorial.src} alt={tutorial.title} />
            <p>{tutorial.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedTutorials;