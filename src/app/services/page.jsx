import Link from "next/link";

export default function Services() {
  return (
    <main
      className="main-content"
      style={{ padding: "120px 20px", minHeight: "80vh", fontSize: "1.6rem" }}
    >
      <h1>Our Services</h1>
      <ul style={{ listStyle: "none", padding: 0, fontSize: "1.2rem" }}>
        <li>
          <Link href="/services/web-development">Web Development</Link>
        </li>
        <li>
          <Link href="/services/seo">SEO</Link>
        </li>
        <li>
          <Link href="/services/consulting">Consulting</Link>
        </li>
      </ul>
    </main>
  );
}
