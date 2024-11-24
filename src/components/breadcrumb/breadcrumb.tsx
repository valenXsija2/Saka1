import Link from "next/link";
import { BreadcrumbsProps } from "./breadcrumb.type";

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  datas,
  variant = "medium",
  separator = "/",
}) => {
  const variantSize = {
    small: "text-sm py-1",
    medium: "text-md py-2",
    large: "text-lg py-3",
  };

  return (
    <nav aria-label="breadcrumb">
      <ol className={`flex space-x-3 ${variantSize[variant]}`}>
        {datas.map((item, index) => (
          <li key={index} className="flex items-center">
            <Link legacyBehavior href={item.path}>
              <a className="text-black font-bold">{item.title}</a>
            </Link>
            {index < datas.length - 1 && (
              <span className="mx-3">{separator}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
