import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return "data";
}

export default async function SiteHomePage({
  params,
}: {
  params: { domain: string };
}) {
  const domain = decodeURIComponent(params.domain);

  if (!domain) {
    notFound();
  }

  return (
    <>
      <div className="mb-20 w-full">Domain: {domain}</div>
    </>
  );
}
