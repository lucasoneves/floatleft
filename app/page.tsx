import Image from "next/image";
import { Hero } from "@/components/Hero";
import { Article } from "@/components/Article";

const ARTICLES = [
  {
    title: "O que são Pure functions (Funções Puras) em Javascript",
    author: "Lucas Neves",
    content: "<p>O que são 'Pure functions (Funç</p>",
    tags: ["javascript"],
    date: new Date(),
    id: "d4aa92cc-e88f-4adf-af1a-ce2d9764091e",
    thumb: "",
  },
  {
    title: "Como fazer chamadas Http com Next.js v13",
    author: "Lucas Neves",
    content: "",
    tags: ["javascript", "next"],
    date: new Date(),
    id: "f8520d7e-9fa5-459d-a07c-b78994b56fca",
    thumb: "",
  },
  {
    title: "O que são Pure functions (Funções Puras) em Javascript",
    author: "Lucas Neves",
    content: "<p>O que são 'Pure functions (Funç</p>",
    tags: ["javascript"],
    date: new Date(),
    id: "d4aa92cc-e88f-4adf-af1a-ce2d9764091e",
    thumb: "",
  },
];

export default function Home() {
  return (
    <main className="main">
      <Hero />
      {ARTICLES.map((article) => (
        <Article key={article.id} title={article.title} thumb={article.thumb} />
      ))}
    </main>
  );
}
