export const useActiveMenuItem = () =>
  useState<string>("activeMenuItem", () => "home");
