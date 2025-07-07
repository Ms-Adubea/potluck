// components/SidebarMenuItems.js
export const getSidebarItems = (role) => {
  switch (role) {
    case "potlucky":
      return ["Order Food", "My Orders", "Favorites", "Profile"];
    case "potchef":
      return ["Upload Meal", "Orders", "Earnings", "Profile"];
    case "franchisee":
      return ["Approve Meals", "Stock Alerts", "Reports"];
    case "main-admin":
      return ["Users", "Recipes", "Hygiene", "Announcements"];
    case "territorial-manager":
      return ["Orders", "User Feedback", "Territory Reports"];
    case "super-agent":
      return ["Dashboard", "Analytics", "Users", "Payments", "Reports"];
    default:
      return [];
  }
};
