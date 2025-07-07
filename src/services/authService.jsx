// services/authService.js
const mockUsers = [];

export const mockRegister = async (userData) => {
  const exists = mockUsers.find(u => u.email === userData.email);
  if (exists) throw new Error("User already exists");
  mockUsers.push(userData);
  return { user: userData };
};

export const mockLogin = async ({ email, password }) => {
  const user = mockUsers.find(u => u.email === email && u.password === password);
  if (!user) throw new Error("Invalid credentials");
  return { user };
};
