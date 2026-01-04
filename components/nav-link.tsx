import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends Omit<LinkProps, "className"> {
    className?: string;
    activeClassName?: string;
    inactiveClassName?: string;
    children?: React.ReactNode;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
    ({ className, activeClassName, inactiveClassName, href, ...props }, ref) => {
        const pathname = usePathname();
        const isActive = pathname === href;

        return (
            <Link
                ref={ref}
                href={href}
                className={cn(className, isActive ? activeClassName : inactiveClassName)}
                {...props}
            />
        );
    },
);

NavLink.displayName = "NavLink";

export { NavLink };
