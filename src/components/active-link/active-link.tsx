'use client';

import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";

type TActiveLinkProps = {
  children: React.ReactNode;
} & LinkProps;

export function ActiveLink({
  children,
  href,
  ...rest
}: TActiveLinkProps) {
  const router = useRouter();
  const currentPath =
    router === href ||
    router === rest.as;
  return (
    <Link
      href={href}
      className={cn(
        "text-action-sm transition-colors hover:text-blue-200",
        currentPath ? "text-blue-200" : "text-gray-180"
      )}
    >
      {children}
    </Link>
  );
}
