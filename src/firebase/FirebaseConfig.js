import firebase from "firebase";
import SimpleToast from "react-native-simple-toast";

class Firebase {
    constructor() {
        if (!firebase.apps.length) {
            //avoid re-initializing
            var firebaseConfig = {
                apiKey: "AIzaSyAFU4V-Cx8hqlH9dG5bwqy2tB-9kiYDd1U",
                authDomain: "mingoapp-4824a.firebaseapp.com",
                projectId: "mingoapp-4824a",
                storageBucket: "mingoapp-4824a.appspot.com",
                messagingSenderId: "438739938745",
                appId: "1:438739938745:web:3f9e3df5e81070d1c7da68",
                measurementId: "G-2YFBV94YJT"
            };
            // Initialize Firebase
            firebase.initializeApp(firebaseConfig);
        }
    }

    // login = async (user, success_callback, failed_callback) => {
    //     await firebase
    //         .auth()
    //         .signInWithEmailAndPassword(user.email, user.password)
    //         .then(success_callback, failed_callback);
    // };

    // createAccount = async (user) => {
    //     firebase
    //         .auth()
    //         .createUserWithEmailAndPassword(user.email, user.password)
    //         .then(
    //             function () {
    //                 var userf = firebase.auth().currentUser;
    //                 userf.updateProfile({displayName: user.name}).then(
    //                     function () {
    //                         alert(
    //                             "User " +
    //                                 user.name +
    //                                 " was created successfully.",
    //                         );
    //                     },
    //                     function (error) {
    //                         console.warn("Error update displayName.");
    //                     },
    //                 );
    //             },
    //             function (error) {
    //                 console.error("got error:" + error.message);
    //                 //SimpleToast.show("Create account failed.");
    //             },
    //         );
    // };

    // updateAvtar = async (uri) => {
    //     var userf = firebase.auth().currentUser;
    //     userf.updateProfile({avtar: uri}).then(
    //         function () {
    //             alert("User " + user.name + " was created successfully.");
    //         },
    //         function (error) {
    //             console.warn("Error update displayName.");
    //         },
    //     );
    // };

    // uploadImage = async (uri) => {
    //     try {
    //         const response = await fetch(uri);
    //         const blob = await response.blob();
    //         const ref = firebase.storage().ref("avatar").child(uuid.v4());
    //         const task = ref.put(blob);
    //         return new Promise((resolve, reject) => {
    //             task.on(
    //                 "state_changed",
    //                 () => {},
    //                 reject,
    //                 () => resolve(task.snapshot.downloadURL),
    //             );
    //         });
    //     } catch (err) {
    //         console.log("uploadImage error: " + err.message);
    //     }
    // };
}
const FirebaseConfig = new Firebase();
export default FirebaseConfig;
