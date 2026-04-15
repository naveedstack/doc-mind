import { type NavItem } from "@/types";

export const APP_NAME = "Study Sanctuary";
export const APP_TAGLINE = "Focused Curator";

export const NAV_ITEMS: NavItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: "dashboard" },
  { label: "Library", href: "/library", icon: "menu_book" },
  { label: "Sessions", href: "/sessions", icon: "timer" },
];

export const SECONDARY_NAV_ITEMS: NavItem[] = [
  { label: "Settings", href: "#", icon: "settings" },
  { label: "Help", href: "#", icon: "help_outline" },
];

export const PLACEHOLDER_USER = {
  id: "1",
  name: "Naveed",
  email: "naveed@university.edu",
  avatarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNKmP7PUHMQP9aV9OrEFjy2Ip-0WfP2c856cnlz8UAPeNjfm_RKc-8JwTisF8Eb9QXcRnA-Rxh6HRFenikJB5YE5uEgRVCZu2UPNHeQeXEMC0_nB6jjEwTvAOOYioBJ9iXSKFuEYh4Pxv6jwxTjhcKZEeZ2zT1b6wW1a2Gy254x_AEuQy-q4xIJSr_E0uPul4ZnWUk55LQqEuizvh1OCYTMqks2Fe_2jsSn8g7SMMNksJywuC7R4PV85NAbcN4btiBKVoauJLDxdv4",
  role: "premium" as const,
};

export const PLACEHOLDER_DOCUMENTS = [
  {
    id: "1",
    title: "Quantum Mechanics Basics.pdf",
    fileType: "pdf" as const,
    status: "ready" as const,
    sizeBytes: 4200000,
    tags: ["Physics"],
    addedAt: "Oct 24, 2023",
  },
  {
    id: "2",
    title: "Macroeconomic Trends 2024.docx",
    fileType: "docx" as const,
    status: "processing" as const,
    sizeBytes: 12800000,
    tags: ["Economics"],
    addedAt: "Today",
    progressPercent: 66,
  },
  {
    id: "3",
    title: "Philosophy of Mind - Notes.txt",
    fileType: "txt" as const,
    status: "ready" as const,
    sizeBytes: 156000,
    tags: ["Philosophy"],
    addedAt: "Oct 21, 2023",
  },
  {
    id: "4",
    title: "Advanced Calculus Vol II.pdf",
    fileType: "pdf" as const,
    status: "ready" as const,
    sizeBytes: 25100000,
    tags: ["Mathematics"],
    addedAt: "Oct 18, 2023",
  },
];

export const PLACEHOLDER_SESSIONS = [
  {
    id: "1",
    title: "Neural Networks & Deep Learning Architectures",
    description: "Focusing on backpropagation and gradient descent optimization techniques...",
    status: "in_progress" as const,
    startedAt: "Oct 24, 2023 • 2:15 PM",
    thumbnailUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0ohVJhQt6i5O6ZUHy7YCLxygSm7S0CZC1moTY0K8u36pmIYSZPXp3r1m_jcAcHudRXicwbTidzI60qL8AxvRz6Vip9GHOZgH-u40wk_X0ijcYbaXUEbWi6v8OGUA-IoyEWtwI28V9d-Q11ouJkLl9po9vXzgB9-WGC50DdcK75ONCSwEw_dcLXAaFarmxVjspxz8p6ctL1bwm4eMf9tWiD68Oic3NrY9_yXSCVcPYwhpb7UHprDMmbbGi72LXLfOV_fYOJu2iDH6U",
  },
  {
    id: "2",
    title: "Advanced Microeconomics: Game Theory",
    status: "completed" as const,
    startedAt: "Oct 22, 2023 • 10:30 AM",
    durationMinutes: 45,
    insightsCount: 4,
  },
  {
    id: "3",
    title: "Modern Philosophy: The Existential Turn",
    description: "Exploration of Kierkegaard and Sartre's theories on individual agency...",
    status: "completed" as const,
    startedAt: "Oct 21, 2023 • 4:45 PM",
    thumbnailUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAu4xRkHupJ0ARugO_qqKc7vdbq5eQ_ocDDlyjjNYqYRSpUb3ad6T1rJzIFNrIKqEssFTFOr10w1LT_2H4OkPjGGs1BL4pvc9ZXO1wYhbWMLlc0NiFbKv4NKy4KZ0xapH9iMKo-woUT46S2RHSZSRLHVCupedcQCjk-KwawANIWIFfaFvXUjjkZ6UjnZ3nxKBqNeKKnTfl66ufBFCDbdHSf6dlTRl1xdytEqN0s1fthtcIY0-fCwXtst-s3XaViBomGmTA3Lqu41ksF",
  },
  {
    id: "4",
    title: "Rust Memory Management: Borrow Checker",
    status: "completed" as const,
    startedAt: "Oct 20, 2023 • 9:00 AM",
    durationMinutes: 120,
  },
];

export const PLACEHOLDER_CHAT_SESSIONS = [
  {
    id: "ethics-neural-networks",
    title: "The Ethics of Neural Networks",
    lastMessage: "Discussing the implications of cognitive automation in higher education...",
    lastActiveAt: "2m ago",
    status: "active" as const,
  },
  {
    id: "roman-architecture",
    title: "Roman Architecture: Vitruvian Principles",
    lastActiveAt: "1h ago",
    status: "previous" as const,
  },
  {
    id: "late-capitalism",
    title: "Late Capitalism Analysis",
    lastActiveAt: "Oct 12",
    status: "previous" as const,
  },
];

export const PLACEHOLDER_MESSAGES = [
  {
    id: "1",
    role: "user" as const,
    content: "Can you help me synthesize the relationship between Bentham's panopticon and modern algorithmic surveillance? I'm particularly interested in how the concept of 'unverifiable visibility' translates to data harvesting.",
    timestamp: "14:22",
  },
  {
    id: "2",
    role: "ai" as const,
    content: "",
    timestamp: "14:23",
    citations: [
      { id: "c1", type: "pdf" as const, author: "Foucault, M. (1975)", title: "Discipline and Punish" },
      { id: "c2", type: "web" as const, author: "Zuboff, S. (2019)", title: "The Age of Surveillance Capitalism" },
    ],
  },
];
