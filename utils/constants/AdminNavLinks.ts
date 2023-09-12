import { LinkType } from "@/libs/interfaces/link.interface";
import {
  DashboardIcon,
  InquiriesIcon,
  PackagesIcon,
  UsersIcon,
} from "@/components/icons";
export const AdminNavLinks: LinkType[] = [
  {
    href: "/admin/dashboard",
    label: "dashboard",
    icon: DashboardIcon,
  },
  {
    href: "/admin/packages",
    label: "packages",
    icon: PackagesIcon,
  },
  {
    href: "/admin/inquiries",
    label: "inquiries",
    icon: InquiriesIcon,
  },
  {
    href: "/admin/users",
    label: "users",
    icon: UsersIcon,
  },
];
