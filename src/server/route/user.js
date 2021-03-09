export const userRoutes = {
    updateUser: {
        method: "PATCH",
        url: "users",
    },
    getPassion: {
        method: "GET",
        url: "passion",
    },
    sendPhoto: {
        method: "POST",
        url: "galleries/upload",
    },
    loadUser: {
        method: "GET",
        url: "users",
    },
    loadPhoto: {
        method: "GET",
        url: "galleries",
    },
    getInstitute: {
        method: "GET",
        url: "institution",
    },
};

export const userRouteNames = {
    updateUser: "updateUser",
    getPassion: "getPassion",
    sendPhoto: "sendPhoto",
    loadUser: "loadUser",
    loadPhoto: "loadPhoto",
    getInstitute: "getInstitute",
};
