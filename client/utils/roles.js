export const UserRoles = {
  USER: 'User',
  MANAGER: 'Manager',
};

export const AdminRole = {
  ADMIN: 'Admin',
};

export const AllRoles = {
  ...UserRoles,
  ...AdminRole,
};
