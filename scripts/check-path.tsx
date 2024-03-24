import { usePathname } from "next/navigation";

export function CheckPath (path: string): boolean {
  const pathname = usePathname();

  if (path === "/" && pathname !== path) {
    return false;
  }
  return pathname.startsWith(path);
};
