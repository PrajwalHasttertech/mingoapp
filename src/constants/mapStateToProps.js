export const findNearestMapStateToProps = (props) => {
    //console.log(props);
    const {userReducer} = props;
    const {selectedIndex} = userReducer;
    return {
        userById: props.userReducer.userReducerById,
        user: props.userReducer.userReducerId,
    };
};

export const likeNearestMapStateToProps = (props) => {
    //console.log(props);
    const {likeReducer} = props;
    const {likeReducerId, likeReducerById} = likeReducer;
    return {
        userById: likeReducerById,
        user: likeReducerId,
    };
};

export const discoverPartnerMapStateToProps = (props) => {
    const {userReducer, likeReducer} = props;

    // if (likeReducer.updateLikeReducer) {
    //     const {likeReducerById, likeReducerId} = likeReducer;
    //     const {selectedIndex, userId} = likeReducerId;
    //     const user = userId.slice(selectedIndex);

    //     return {
    //         user,
    //         userById: likeReducerById,
    //     };
    // } else {
    const {userReducerById, userReducerId} = userReducer;
    const {selectedIndex, userId} = userReducerId;
    const user = userId.slice(selectedIndex);

    return {
        user,
        userById: userReducerById,
    };
};
