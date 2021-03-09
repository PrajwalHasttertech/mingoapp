import { authRouteNames, authRoutes } from "./auth";
import { userRouteNames, userRoutes } from "./user";

export const routeNames = {
    ...authRouteNames,
    ...userRouteNames,
};

export const route = {
    ...authRoutes,
    ...userRoutes,
};
