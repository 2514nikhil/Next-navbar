export default function TechPage({ params }) {
  const { tech } = params;
  return (
    <main style={{ padding: "120px 20px", minHeight: "80vh", fontSize: "1.6rem" }}>
      <h1>Web Development - {tech.toUpperCase()}</h1>
      <p>Details about {tech.toUpperCase()} stack.</p>
    </main>
  );
}
