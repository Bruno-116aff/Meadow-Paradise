import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  // Catch-all маршрут для SPA - любой путь отображает главную страницу
  route("*", "routes/home.tsx")
] satisfies RouteConfig;
