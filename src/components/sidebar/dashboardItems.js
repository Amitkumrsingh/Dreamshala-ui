import {
  Home,
  Edit3,
  BookOpen,
  Briefcase,
  Calendar,
  CheckSquare,
  CreditCard,
  Grid,
  Heart,
  Layout,
  List,
  Map,
  ShoppingCart,
  PieChart,
  Sliders,
  Users,
} from "react-feather";

const pagesSection = [
  // {
  //   href: "/dashboard",
  //   icon: Sliders,
  //   title: "Dashboard",
  //   children: [
  //     {
  //       href: "/dashboard/default",
  //       title: "Default",
  //     },
  //     {
  //       href: "/dashboard/analytics",
  //       title: "Analytics",
  //     },
  //     {
  //       href: "/dashboard/saas",
  //       title: "SaaS",
  //     },
  //   ],
  // },
  // {
  //   href: "/pages",
  //   icon: Layout,
  //   title: "Pages",
  //   children: [
  //     {
  //       href: "/pages/profile",
  //       title: "Profile",
  //     },
  //     {
  //       href: "/pages/settings",
  //       title: "Settings",
  //     },
  //     {
  //       href: "/pages/pricing",
  //       title: "Pricing",
  //     },
  //     {
  //       href: "/pages/chat",
  //       title: "Chat",
  //     },
  //     {
  //       href: "/pages/blank",
  //       title: "Blank Page",
  //     },
  //   ],
  // },
  // {
  //   href: "/projects",
  //   icon: Briefcase,
  //   title: "Projects",
  //   badge: "8",
  // },
  // {
  //   href: "/orders",
  //   icon: ShoppingCart,
  //   title: "Orders",
  // },
  // {
  //   href: "/invoices",
  //   icon: CreditCard,
  //   title: "Invoices",
  //   children: [
  //     {
  //       href: "/invoices",
  //       title: "List",
  //     },
  //     {
  //       href: "/invoices/detail",
  //       title: "Detail",
  //     },
  //   ],
  // },
  // {
  //   href: "/tasks",
  //   icon: CheckSquare,
  //   title: "Tasks",
  //   badge: "17",
  // },
  // {
  //   href: "/calendar",
  //   icon: Calendar,
  //   title: "Calendar",
  // },
  // {
  //   href: "/auth",
  //   icon: Users,
  //   title: "Auth",
  //   children: [
  //     {
  //       href: "/auth/sign-in",
  //       title: "Sign In",
  //     },
  //     {
  //       href: "/auth/sign-up",
  //       title: "Sign Up",
  //     },
  //     {
  //       href: "/auth/reset-password",
  //       title: "Reset Password",
  //     },
  //     {
  //       href: "/auth/404",
  //       title: "404 Page",
  //     },
  //     {
  //       href: "/auth/500",
  //       title: "500 Page",
  //     },
  //   ],
  // },
  {
    href: "/college",
    title: "College",
    icon: Home,
    children: [
      {
        href: "/college/add-new-college",
        title: "Add new college",
        // children: [
        //   {
        //     href: "",
        //     title: "About",
        //     step: 0,
        //   },
        //   {
        //     href: "",
        //     title: "Contact Details",
        //     step: 1,
        //   },
        //   {
        //     href: "",
        //     title: "Management Contact",
        //     step: 2,
        //   },
        //   { href: "/college/add-new-college/exams", title: "Exams" },
        //   {
        //     href: "/college/add-new-college/courses-and-fees",
        //     title: "Courses and Fees",
        //   },
        //   { href: "/college/add-new-college/photos", title: "Photos" },
        //   { href: "/college/add-new-college/results", title: "Results" },
        //   { href: "/college/add-new-college/faculties", title: "Faculties" },
        //   { href: "/college/add-new-college/reviews", title: "Reviews" },
        //   { href: "/college/add-new-college/videos", title: "Videos" },
        //   {
        //     href: "/college/add-new-college/study-material",
        //     title: "Study Material",
        //   },
        //   { href: "/college/add-new-college/location", title: "Location" },
        //   {
        //     href: "/college/add-new-college/company-details",
        //     title: "Company Details",
        //   },
        //   { href: "/college/add-new-college/checklist", title: "Checklist" },
        //   {
        //     href: "/college/add-new-college/frequently-asked-questions",
        //     title: "Frequently Asked Questions",
        //   },
        // ],
      },
      {
        href: "/college/update-college",
        title: "Update college",
      },
      {
        href: "/college/delete-college",
        title: "Delete college",
      },
    ],
  },
  {
    href: "/coaching",
    title: "Coaching",
    icon: BookOpen,
    children: [
      {
        href: "/coaching/add-new-coaching",
        title: "Add new Coaching",
      },
      {
        href: "/coaching/update-coaching",
        title: "Update Coaching",
      },
      {
        href: "/coaching/delete-coaching",
        title: "Delete Coaching",
      },
    ],
  },
  {
    href: "/exam",
    title: "Exam",
    icon: Edit3,
    children: [
      {
        href: "/exam/add-new-exam",
        title: "Add new exam",
      },
      {
        href: "/exam/update-exam",
        title: "Update exam",
      },
      {
        href: "/exam/delete-exam",
        title: "Delete exam",
      },
    ],
  },
];

const elementsSection = [
  {
    href: "/components",
    icon: Grid,
    title: "Components",
    children: [
      {
        href: "/components/alerts",
        title: "Alerts",
      },
      {
        href: "/components/accordion",
        title: "Accordion",
      },
      {
        href: "/components/avatars",
        title: "Avatars",
      },
      {
        href: "/components/badges",
        title: "Badges",
      },
      {
        href: "/components/buttons",
        title: "Buttons",
      },
      {
        href: "/components/cards",
        title: "Cards",
      },
      {
        href: "/components/chips",
        title: "Chips",
      },
      {
        href: "/components/dialogs",
        title: "Dialogs",
      },
      {
        href: "/components/lists",
        title: "Lists",
      },
      {
        href: "/components/menus",
        title: "Menus",
      },
      {
        href: "/components/pagination",
        title: "Pagination",
      },
      {
        href: "/components/progress",
        title: "Progress",
      },
      {
        href: "/components/snackbars",
        title: "Snackbars",
      },
      {
        href: "/components/tooltips",
        title: "Tooltips",
      },
    ],
  },
  {
    href: "/charts",
    icon: PieChart,
    title: "Charts",
    children: [
      {
        href: "/charts/chartjs",
        title: "Chart.js",
      },
      {
        href: "/charts/apexcharts",
        title: "ApexCharts",
      },
    ],
  },
  {
    href: "/forms",
    icon: CheckSquare,
    title: "Forms",
    children: [
      {
        href: "/forms/pickers",
        title: "Pickers",
      },
      {
        href: "/forms/selection-controls",
        title: "Selection Controls",
      },
      {
        href: "/forms/selects",
        title: "Selects",
      },
      {
        href: "/forms/text-fields",
        title: "Text Fields",
      },
      {
        href: "/forms/editors",
        title: "Editors",
      },
      {
        href: "/forms/formik",
        title: "Formik",
      },
    ],
  },
  {
    href: "/tables",
    icon: List,
    title: "Tables",
    children: [
      {
        href: "/tables/simple-table",
        title: "Simple Table",
      },
      {
        href: "/tables/advanced-table",
        title: "Advanced Table",
      },
      {
        href: "/tables/data-grid",
        title: "Data Grid",
      },
    ],
  },
  {
    href: "/icons",
    icon: Heart,
    title: "Icons",
    children: [
      {
        href: "/icons/material-icons",
        title: "Material Icons",
      },
      {
        href: "/icons/feather-icons",
        title: "Feather Icons",
      },
    ],
  },
  {
    href: "/maps",
    icon: Map,
    title: "Maps",
    children: [
      {
        href: "/maps/google-maps",
        title: "Google Maps",
      },
      {
        href: "/maps/vector-maps",
        title: "Vector Maps",
      },
    ],
  },
];

const docsSection = [
  {
    href: "/documentation/welcome",
    icon: BookOpen,
    title: "Documentation",
  },
  {
    href: "/changelog",
    icon: List,
    title: "Changelog",
    badge: "v4.4.1",
  },
];

const navItems = [
  {
    title: "Pages",
    pages: pagesSection,
  },
  // {
  //   title: "Elements",
  //   pages: elementsSection,
  // },
  // {
  //   title: "Mira Pro",
  //   pages: docsSection,
  // },
];

export default navItems;
