import Head from "next/head";

const Meta = ({ title, description }) => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="shortcut icon" href="/icon.png" type="image/png" />
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
};

Meta.defaultProps = {
  title: "WeGrow - Marketing solutions for your business",
  description:
    "We create marketing solutions that grow your business, help great brands scale with content marketing",
};

export default Meta;
