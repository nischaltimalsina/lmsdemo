import {
    BsGrid,
    BsBarChart,
    BsSliders,
    BsLaptop,
    BsCalendarCheck,
    BsPersonCheck,
    BsClipboard,
    BsCashStack,
    BsPersonBadge,
    BsGear,
  } from "react-icons/bs";
  
  export const AdminNavOptions = [
    {
      id: "001",
      icon: <BsGrid />,
      url: "/",
      label: "Dashboard",
    },
    {
      id: "002",
      icon: <BsBarChart />,
      url: "/overview",
      label: "Overview",
      subNav:[
        {url:"/overview/home", label:"Home"},
        {url:"/overview/students-reports", label:"Students Reports"},
        {url:"/overview/staffs-reports", label:"Staffs REports"},
        {url:"/overview/settings", label:"Settings"},
      ]
    },
    {
      id: "003",
      icon: <BsSliders />,
      url: "/modules",
      label: "Modules",
      subNav:[
        {url:"/modules/home", label:"Home"},
        {url:"/modules/students-reports", label:"Question"},
        {url:"/modules/staffs-reports", label:"Routine"},
        {url:"/modules/settings", label:"Settings"},
      ]
    },
    {
      id: "004",
      icon: <BsLaptop />,
      url: "/courses",
      label: "Courses",
    },
    {
      id: "005",
      icon: <BsCashStack />,
      url: "/finance",
      label: "Finance",
    },
    {
      id: "006",
      icon: <BsPersonBadge />,
      url: "/profile",
      label: "Profile",
    },
    {
      id: "007",
      icon: <BsGear />,
      url: "/settings",
      label: "Settings",
    },
  ];
  export const StaffNavOptions = [
    {
      id: "011",
      icon: <BsGrid />,
      url: "/",
      label: "Dashboard",
    },
    {
      id: "012",
      icon: <BsPersonCheck />,
      url: "/attendance",
      label: "Attendance",
    },
    {
      id: "013",
      icon: <BsCalendarCheck />,
      url: "/time-table",
      label: "Timetable",
    },
    {
      id: "014",
      icon: <BsLaptop />,
      url: "/courses",
      label: "Courses",
    },
    {
      id: "015",
      icon: <BsBarChart />,
      url: "/overview",
      label: "Overview",
    },
    {
      id: "016",
      icon: <BsClipboard />,
      url: "/questions",
      label: "Questions",
    },
    {
      id: "017",
      icon: <BsCashStack />,
      url: "/finance",
      label: "Finance",
    },
    {
      id: "018",
      icon: <BsPersonBadge />,
      url: "/profile",
      label: "Profile",
    },
    {
      id: "019",
      icon: <BsGear />,
      url: "/settings",
      label: "Settings",
    },
  ];
  
  export const StudentNavOptions = [
    {
      id: "021",
      icon: <BsGrid />,
      url: "/",
      label: "Dashboard",
    },
    {
      id: "022",
      icon: <BsCalendarCheck />,
      url: "/time-table",
      label: "Timetable",
    },
    {
      id: "023",
      icon: <BsLaptop />,
      url: "/courses",
      label: "Courses",
    },
    {
      id: "024",
      icon: <BsBarChart />,
      url: "/overview",
      label: "Overview",
    },
    {
      id: "006",
      icon: <BsCashStack />,
      url: "/finance",
      label: "Finance",
    },
    {
      id: "007",
      icon: <BsPersonBadge />,
      url: "/profile",
      label: "Profile",
    },
    {
      id: "008",
      icon: <BsGear />,
      url: "/settings",
      label: "Settings",
    },
  ];
  