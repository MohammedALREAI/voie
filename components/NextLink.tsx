import Link from "next/link";

export function NextLink({
  href,
  children,
  ...rest
}: {
  href: string;
  className: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href}>
      <a {...rest}>{children}</a>
    </Link>
  );
}
