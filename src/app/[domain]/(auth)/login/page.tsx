export default function LoginPage({ params }: { params: { domain: string } }) {
  const domain = decodeURIComponent(params.domain);
  return <div>Login from subdomian: {domain}</div>;
}
