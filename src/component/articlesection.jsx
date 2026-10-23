import ArticleCard from "./articlecard";

function Article() {
  const articles = [
    {
      id: 1,
      image: "/public/18491.jpg",
      title: "Smart Home IoT Project",
      description:
        "It is a smart home network where devices such as lights, fans, air conditioner and sensors communicate through a network. I implemented automation so that the home appliances work according to the defined readings."
    },
    {
      id: 2,
      image: "/public/business-messy-creative-strategy-education-occupation-concept.jpg",
      title: "Real Estate Database Management Project",
      description:
        "I designed and implemented a database system for a real estate company. I created entities such as Property, Owner, Customer and Employee along with relationships, constraints, triggers, stored procedures and functions."
    }
  ];

  return (
    <section id="work">
      <h2>My Articles</h2>

      <div className="projects-container">
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            image={article.image}
            title={article.title}
            description={article.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Article;