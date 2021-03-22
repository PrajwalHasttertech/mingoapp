import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  StatusBar,
  Alert,
  Text,
} from "react-native";
import { colors } from "../../../constants/Dimensions";
import {
  FontFamily,
  globalHeight,
  fs22,
  fs14,
  paddingTop,
  commonStyle,
  globalWidth,
  fs13,
  fs17,
  Align,
  colorTransparency,
} from "../../../constants/Dimensions";
import {
  WrappedRectangleButton,
  WrappedText,
  WrappedRoundButton,
  WrappedTextInput,
} from "../../components";
import { Photo, Edit } from "../../../icons";
import ImagePicker from "react-native-image-picker";
import { FlatList } from "react-native-gesture-handler";
import { DataHandling } from "../../../server/DatahandlingHoc";
import { routeNames } from "../../../server/route";
// import { Storage } from "../../../localstorage/storage";
import PassionPhoto from "./components/passionPhoto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { directApihandler } from "../../../server/apihandler";

const TitleIcon = ({ text, onPress }) => {
  return (
    <View
      style={[
        Align.fdr,
        { justifyContent: "space-between", ...Align.mv },
        Align.aic,
      ]}
    >
      <WrappedText
        text={text}
        textStyle={{ color: "#273d52", fontSize: fs17 }}
        fontFamily={FontFamily.FontsFreeNetSFProDisplayMedium}
      />
      <WrappedRoundButton
        buttonSource={Edit}
        onPress={() => {
          onPress();
        }}
        height={globalHeight * 0.7}
        style={{ height: globalHeight * 0.3, width: globalHeight * 0.3 }}
      />
    </View>
  );
};

const ShowDetail = ({ text }) => {
  return (
    <WrappedText
      text={text}
      textStyle={{ color: "#273d52" + colorTransparency[20] }}
      fontFamily={FontFamily.FontsFreeNetSFProDisplayMedium}
    />
  );
};

class AddPassionPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoList: [],
      twoPhoto: [],
      shortDescription: "",
      interestedIn: "",
      institute: "",
      passion: "",
      gender: "",
      firstname: "",
      lastname: "",
      name: "",
      dob: "",
      error: {},
      setting:
        (props.route && props.route.params && props.route.params.setting) ||
        false,
      userDetail: {},
    };
  }


  count = 0;

  imagePicking = () => {
    const options = {
      title: "Select Avatar",
      storageOptions: {
        skipBackup: true,
        path: "images",
      },
      quality: 0.3,
      maxWidth: 1000,
      maxHeight: 1000,
    };
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.custcomButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        if (this.count < 2) {
          this.setState((prevState) => {
            prevState.twoPhoto.push(
              "data:" + response.type + ";base64," + response.data
            );

            return prevState;
          });
          this.count++;
        } else {
          this.count++;
          this.setState((prevState) => {
            prevState.photoList.push(
              "data:" + response.type + ";base64," + response.data
            );

            return prevState;
          });
        }
        //this.sendProfileI0,50mageToServer(response)
      }
    });
  };

  removeImage = (first, index) => {
    this.count--;
    if (first) {
      this.setState((prevState) => {
        const { twoPhoto, photoList } = prevState;
        twoPhoto.splice(index, 1);
        if (photoList.length > 0) {
          twoPhoto.push(photoList[0]);
          photoList.shift();
        }

        return { twoPhoto, photoList };
      });
    } else {
      this.setState((prevState) => {
        const { photoList } = prevState;
        photoList.splice(index, 1);
        return photoList;
      });
    }
  };

  uploadPhotoToServer = async () => {
    alert('done')
    // try {
    //   this.setState({ isLoading: true });
    //   const { twoPhoto, photoList } = this.state;

    //   const uid = await Storage.getItem("id");

    //   const result = await this.fetchData(routeNames.sendPhoto, {
    //     userId: uid,
    //     galleries: [...twoPhoto, ...photoList],
    //   });

    //   if (result) {
    //     // let uploadUrl = await FirebaseConfig.uploadImage(twoPhoto[0]);
    //     // await FirebaseConfig.updateAvtar(uploadUrl);
    //     await Storage.addItemToUserDetail({ profileImg: "available" });
    //     this.props.navigation.replace("bottomTab");
    //     this.setState({ isLoading: false });
    //   }
    // } catch (error) {
    //   console.log(error);
    // }

  };

  fetchUserDetail = async (id) => {
    try {
      this.setLoader(true);
      const result = await directApihandler({
        method: "GET",
        url: "users/" + id,
      });
      if (result) {
        console.log(result.data.data.user);
        this.setState({ ...result.data.data.user });
        this.setLoader(false);
      } else {
        this.setLoader(false);
      }
    } catch (error) {
      console.log(error);
      this.setLoader(false);
    }
  };

  fetchUserPhoto = async (id) => {
    try {
      this.setLoader(true);
      const result = await directApihandler({
        method: "GET",
        url: "galleries?skip=0&limit=10&userId=" + id,
      });
      if (result) {
        const { galleries } = result.data.data;
        console.log(galleries);
        const twoPhoto = galleries.slice(0, 2);
        const photoList = galleries.slice(2);
        this.setState({ twoPhoto, photoList });
        this.setLoader(false);
      } else {
        this.setLoader(false);
      }
    } catch (error) {
      console.log(error);
      this.setLoader(false);
    }
  };

  deletePhoto = async (id) => {
    try {
      this.setLoader(true);
      const result = await directApihandler({
        method: "DELETE",
        url: "galleries/" + id,
      });
      if (result) {
        console.log(result);
        this.setLoader(false);
      } else {
        this.setLoader(false);
      }
    } catch (error) {
      console.log(error);
      this.setLoader(false);
    }
  };

  render() {
    const {
      photoList,
      twoPhoto,
      shortDescription,
      institute,
      setting,
      error,
      firstname,
      lastname,
      gender,
      dob,
      interestedIn,
      passion,
    } = this.state;

    const detail = [
      {
        name: "Short Description",
        value: shortDescription,
        navigateTo: "shortDescription",
        data: shortDescription,
      },
      {
        name: "Institute",
        value: institute ? institute.name : undefined,
        navigateTo: "universityScreen",
      },
      {
        name: "Passion",
        value:
          passion.length > 0
            ? passion.reduce((curr, ind) => curr + ind.name + ", ", "")
            : "",
        navigateTo: "passionScreen",
      },
      {
        name: "Gender",
        value: gender,
        navigateTo: "genderScreen",
      },
      {
        name: "Name",
        value: firstname.toUpperCase() + " " + lastname.toUpperCase(),
        navigateTo: "signUpScreen",
        data: {
          firstName: firstname,
          lastName: lastname,
          dob: new Date(dob),
        },
      },
      {
        name: "Interested in",
        value: interestedIn.toUpperCase(),
        navigateTo: "interestedInScreen",
      },
    ];

    return (
      <View style={[styles.container]}>
        <StatusBar backgroundColor={colors.white} barStyle="dark-content" hidden={false} translucent={true} />
        {/* <Text>Hai</Text> */}

        <ScrollView
          style={{
            // flex: 1,

            marginBottom: globalHeight * 1.2,
          }}
          showsVerticalScrollIndicator={false}
        >
          <ScrollView
            style={{
              //height: globalHeight * 6,
              width: "100%",
              paddingHorizontal: "5%",
              paddingBottom: "5%",
              backgroundColor: "#f7f8fa",
            }}
            showsVerticalScrollIndicator={false}
          >
            {/* <WrappedText
              containerStyle={{
                alignSelf: "center",
                marginTop: globalHeight * 0.5,
              }}
              text={setting ? "Update Photo's" : "Add Photos"}
              textStyle={styles.textStyle1}
              fontFamily={FontFamily.FontsFreeNetSFProDisplayRegular}
            /> */}
            {!setting && (
              <WrappedText
                containerStyle={{
                  alignSelf: "center",
                  marginTop: globalHeight * 0.1,
                }}
                text={"Add at least 2 photos to continue"}
                textStyle={styles.textStyle2}
                fontFamily={FontFamily.FontsFreeNetSFProDisplayRegular}
              />
            )}
            <View style={{ marginTop: globalHeight * 0.2 }} />
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <View
                style={[commonStyle.borderedContainer, styles.photoContainer]}
              >
                <WrappedRoundButton
                  buttonSource={Photo}
                  containerStyle={styles.photo}
                  style={styles.photo}
                  onPress={() => {
                    this.imagePicking();
                  }}
                />
                <WrappedText
                  text={"Add Photo"}
                  textColor={"#707070"}
                  textStyle={{
                    color: "#707070",
                    fontSize: fs13,
                  }}
                  fontFamily={FontFamily.FontsFreeNetSFProDisplayMedium}
                />
              </View>

              {twoPhoto.map((photo, index) => {
                return (
                  <PassionPhoto
                    imageSource={{
                      uri: setting ? photo.imgPath : photo,
                    }}
                    imageStyle={[
                      styles.photoContainer,
                      { marginLeft: globalWidth * 0.3 },
                    ]}
                    onCancelPress={() => {
                      if (this.state.setting) {
                        this.deletePhoto(photo._id);
                      }
                      this.removeImage(true, index);
                    }}
                  />
                );
              })}
            </View>
            <FlatList
              data={photoList}
              horizontal={false}
              numColumns={3}
              renderItem={({ item, index }) => {
                return (
                  <PassionPhoto
                    imageSource={{
                      uri: setting ? item.imgPath : item,
                    }}
                    imageStyle={[
                      styles.photoContainer,
                      {
                        marginLeft: index % 3 == 0 ? 0 : globalWidth * 0.3,
                      },
                    ]}
                    onCancelPress={() => {
                      this.removeImage(false, index);
                    }}
                  />
                );
              }}
              columnWrapperStyle={{
                marginTop: globalHeight * 0.2,
              }}
              keyExtractor={(item, index) => index.toString()}
            />
            {setting && (
              <WrappedRectangleButton
                onPress={() => {
                  if (setting) {
                    this.props.navigation.goBack();
                  } else {
                    this.onSignUp();
                    if (this.count < 2) {
                      this.showToast(
                        "Please upload atleast 2 photo of your's."
                      );
                    } else if (this.count > 8) {
                      this.showToast("Please choose best 8 photo of your's.");
                    } else {
                      this.uploadPhotoToServer();
                    }
                  }
                }}
                backgroundColor={"#FC5185"}
                textColor={"#ffffff"}
                buttonText={"Update Media"}
              />
            )}
          </ScrollView>
          {setting && (
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ paddingHorizontal: "5%", marginTop: "5%" }}
            >
              {detail.map((item) => {
                if (item.value) {
                  return (
                    <View>
                      <TitleIcon
                        text={item.name}
                        // onPress={() => {
                        //   this.props.navigation.replace("shortDescription", {
                        //     update: true,
                        //   });
                        // }}
                        onPress={() => {
                          this.props.navigation.navigate(item.navigateTo, {
                            update: true,
                            data: item.data,
                          });
                        }}
                      />
                      <ShowDetail text={item.value} />
                    </View>
                  );
                } else {
                  return <View />;
                }
              })}
            </ScrollView>
          )}
        </ScrollView>
        <View style={styles.button}>
          <WrappedRectangleButton
            onPress={() => {
              alert('hai')
              // if (setting) {
              //   this.props.navigation.goBack();
              // } else {
              //   if (this.count < 2) {
              //     this.showToast("Please upload atleast 2 photo of your's.");
              //   } else if (this.count > 8) {
              //     this.showToast("Please choose best 8 photo of your's.");
              //   } else {
              //     this.uploadPhotoToServer();
              //   }
              // }

            }}
            backgroundColor={colors.textColor}
            textColor={"#ffffff"}
            buttonText={"Continue"}
          />
        </View>
        {/* {this.returnLoader()} */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  button: {
    position: "absolute",
    bottom: globalHeight * 0.4,
    left: "5%",
    right: "5%",
  },
  headerContainer: {
    elevation: 2,
    paddingVertical: "2%",
    backgroundColor: "#ffffff",
    justifyContent: "center",
  },
  textStyle1: {
    fontSize: fs22,
  },
  textStyle2: {
    fontSize: fs14,
    color: colors.addImagesTextColor,
  },
  photo: {
    height: globalWidth * 1.8,
    width: globalWidth * 1.8,
    borderRadius: 0,
    resizeMode: "contain",
    backgroundColor: null,
  },
  photoContainer: {
    height: globalWidth * 2.6,
    width: globalWidth * 2.6,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#8d9fb3",
    borderRadius: globalHeight * 0.1,
    borderWidth: 2,
    paddingHorizontal: "2%",
    backgroundColor: null,
  },
  textContainer: {
    height: globalHeight * 0.6,
    borderRadius: globalHeight * 0.06,
    color: "#ffffff",
  },
  textInput: {
    color: "#ffffff",
  },
});

export default AddPassionPhoto;
