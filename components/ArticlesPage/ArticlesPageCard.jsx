import Link from "next/link";

const ArticlesPageCard = ({ article }) => {
  return (
    <article className="flex flex-col rounded-3xl bg-darkgrey overflow-hidden">
      <img
        className="w-full h-52 object-cover"
        src={article.img}
        alt={article.title}
        width="1280"
        height="853"
      />
      <div className="grow flex flex-col p-8">
        <Link className="block font-medium" href={`/articles/${article.slug}`} scroll={false}>
          <h3 className="md:min-h-[56px] text-lg hover:text-darkblue">{article.title}</h3>
        </Link>
        <p className="grow my-4">{article.excerpt}</p>
        <time className="text-sm text-lightgrey/70">{article.createdAt}</time>
      </div>
    </article>
  );
};

export default ArticlesPageCard;
