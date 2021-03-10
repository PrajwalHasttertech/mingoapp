import { apiHandler, directApihandler } from "../server/apihandler";
import { routeNames } from "../server/route";
import SimpleToast from "react-native-simple-toast";
import { types } from "./types";

export const updateUser = (user) => {
  return {
    type: types.UpdateUser,
    value: user,
  };
};

const fetchData = async (routeName, data, a, b, c, d, e) => {
  try {
    const response = await apiHandler(routeName, data, a, b, c, d, e);
    //console.log(response)
    if (response.success) {
      return response;
    } else {
      //console.log(response)
      SimpleToast.show(response.message, SimpleToast.LONG);
    }
  } catch (error) {
    console.log(error);
  }
};

export const loadUser = (page, limit, routeName, query, queryValue) => {
  return async (dispatch, getState) => {
    const result = await fetchData(
      routeName,
      {},
      true,
      page * limit,
      limit,
      query,
      queryValue
    );
    if (!result) {
      return dispatch({
        type: types.AddUser,
        value: [],
      });
    } else {
      let data = [];
      if (query == "is_liked") {
        data = result.data.data.likes;
      } else {
        data = result.data.data.users;
      }
      //const { users } = result.data.data;
      console.log("data =>", data[0]);
      const len = data.length;
      //console.log(len);

      if (len == 0) {
        return dispatch({
          type: types.AddUser,
          value: data,
        });
      }
      data.forEach(async (element, index) => {
        try {
          // const result = await fetchData(
          //     routeNames.loadPhoto,
          //     true,
          //     0,
          //     1,
          //     "userId",
          //     element._id,
          // );
          const result = await directApihandler({
            method: "GET",
            url: "galleries?skip=0&limit=10&userId=" + element._id,
          });

          element.photo = result.data.data.galleries;

          if (index == len - 1)
            dispatch({
              type: page == 0 ? types.LoadUser : types.AddUser,
              value: data,
            });
        } catch (error) {
          console.log(error);
        }
      });

      return;
    }
  };
};
