import React, { Component } from "react";
import { View } from "react-native";
import SimpleToast from "react-native-simple-toast";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Loader } from "../screens/components";
import {
  apiHandleDirect,
  apiHandler,
  apiHandler1,
  directApihandler,
} from "./apiHandler";
import { route, routeNames } from "./route";

export class DataHandling extends Component {
  state = {
    isLoading: false,
  };

  setLoader = (isLoading) => {
    this.setState({ isLoading });
  };

  fetchData = async (routeName, data) => {
    try {
      console.log(routeName, data);
      const response = await apiHandler(routeName, data);
      //console.log(response)
      if (response.success) {
        return response;
      } else {
        //console.log(response)
        this.setState({ isLoading: false });
        SimpleToast.show(response.message, SimpleToast.LONG);
      }
    } catch (error) {
      console.log(error);
    }
  };

  makeDirectApiCall = async (data) => {
    try {
      const id = await AsyncStorage.getItem("id");
      const routes = { ...route[routeNames.updateUser] };
      routes.url = routes.url + "/" + id;

      const response = await directApihandler(routes, data);
      if (response.success) {
        return response;
      } else {
        this.setState({ isLoading: false });
        SimpleToast.show(response.message, SimpleToast.LONG);
      }
    } catch (error) {
      console.log(error);
    }
  };

  makeApiRequest = async (routeDetail, data) => {
    try {
      routeDetail.data = data;
      const result = await apiHandleDirect(routeDetail);
      console.log(result);
      if (result.success) {
        return result;
      } else {
        this.setState({ isLoading: false });
        SimpleToast.show(result.message, SimpleToast.LONG);
      }
    } catch (error) {
      console.log(error);
    }
  };

  returnLoader = () => {
    return this.state.isLoading ? <Loader /> : <View />;
  };

  showToast = (messge) => {
    SimpleToast.show(messge);
  };
}
