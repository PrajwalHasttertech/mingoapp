import { authRouteNames, authRoutes } from "./auth";
import { userRouteNames, userRoutes } from "./user";
import { likeRouteNames, likeRoutes } from "./like";

export const routeNames = {
    ...authRouteNames,
    ...userRouteNames,
    ...likeRouteNames,
};

export const route = {
    ...authRoutes,
    ...userRoutes,
    ...likeRoutes,
};
