export interface BreadcrumbItem {
  title: string;
  path: string;
}

export interface BreadcrumbsProps {
  variant: "small" | "medium" | "large";
  datas: BreadcrumbItem[];
  separator?: string;
}