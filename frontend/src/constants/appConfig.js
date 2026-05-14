/**
 * APP GLOBAL CONFIGURATION
 */

export const ThemeColors = {
  primary: "#1B8E5F", // TUP Green
  secondary: "#E9F5EF", // TUP Soft Green
  accent: "#0A1D2D", // TUP Navy
  background: "#F8FAFB"
};

export const NavigationLinks = [
  { label: "Home", path: "/", icon: "Home" },
  { label: "Policies", path: "/guide", icon: "BookText" },
  { label: "AI Chat", path: "/chat", icon: "Bot" },
  { label: "Profile", path: "/profile", icon: "User" }
];

export const AdminLinks = [
  { label: "Analytics", path: "/admin/analytics", icon: "LayoutDashboard" },
  { label: "Content Management", path: "/admin/content", icon: "FileEdit" },
  { label: "System Settings", path: "/admin/settings", icon: "Settings" }
];