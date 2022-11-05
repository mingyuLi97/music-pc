export interface ISubNavItem {
  content: string;
  path: string;
  // 自定义行为
  action?: () => void;
}
