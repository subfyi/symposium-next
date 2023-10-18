import Link from "next/link";

export default function Breadcrumb({children, className = 'breadcumb'}: { className?: string; children: React.ReactNode }) {
    return <div className={"mb-3 " + className}>
        <ul>
            <BreadcrumbItem title="Home" url="/"/>
            {children}
        </ul>
    </div>;
}

export function BreadcrumbItem({title, url}: { title: string, url: string }) {
    return <li>
        <Link href={url}>{title}</Link>
    </li>;
}
