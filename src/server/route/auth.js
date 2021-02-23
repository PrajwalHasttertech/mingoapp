export const authRoutes = {
    verifyOtp: {
        method: "POST",
        url: "auth/verifyOtp",
    },
    sendOtp: {
        method: "POST",
        url: "auth/sendOtp",
    },
    resendOtp: {
        method: "POST",
        url: "auth/resendOtp",
    },
};

export const authRouteNames = {
    verifyOtp: "verifyOtp",
    sendOtp: "sendOtp",
    resendOtp: "resendOtp",
};
