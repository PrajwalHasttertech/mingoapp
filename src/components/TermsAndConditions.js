import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import { colors, fs16, fs21, FontFamily, fs12, globalWidth, globalHeight, fs14 } from '../constants/Dimensions';
import WrappedText from '../screens/components/WrappedText';



const TermsAndCondition = () => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    return (
        <View style={styles.container}>

            <View>
                <Text style={{ textAlign: 'center', marginTop: 10 }}>
                    Mingo - Terms and Conditions of Use
                </Text>
                <WrappedText
                    containerStyle={{
                        // alignSelf: "center",
                        marginTop: globalHeight * 0.1,
                        marginLeft: globalHeight * 0.3,
                        marginRight: globalHeight * 0.3,
                    }}
                    text={"Hello everyone! Welcome to Daytte's Terms and Conditions of Use (hereinafter referred to as 'Terms'). Our solicitors insist that we impose rules on users to protect all our hard work. This is a contract between you and the Daytte Group (described below), and we want you to understand your rights and our rights before using the Daytte application ('App'). Please take a moment to read these terms before using the application, because once you access, view or use the application, you will be legally bound by these terms (so it is best to read these terms first!) "}
                    textStyle={{ color: colors.termsAndcondition, fontSize: fs12 }}
                />

                <WrappedText
                    containerStyle={{
                        // alignSelf: "center",
                        marginTop: globalHeight * 0.1,
                        marginLeft: globalHeight * 0.5,
                        marginRight: globalHeight * 0.3,
                    }}
                    text={"1.	Mingo Rules"}
                    textStyle={{ color: colors.black, fontSize: fs14 }}
                />

                <WrappedText
                    containerStyle={{
                        // alignSelf: "center",
                        marginTop: globalHeight * 0.1,
                        marginLeft: globalHeight * 0.3,
                        marginRight: globalHeight * 0.3,
                    }}
                    text={"Before using our awesome app, you need to register for an account ('Account'). In order to create an account, you must: "}
                    textStyle={{ color: colors.termsAndcondition, fontSize: fs12 }}
                />

                <WrappedText
                    containerStyle={{
                        // alignSelf: "center",
                        marginTop: globalHeight * 0.1,
                        marginLeft: globalHeight * 0.5,
                        marginRight: globalHeight * 0.3,
                    }}
                    text={"1.	Be at least 18 years old; and 2.	The use of this application is permitted by law according to the laws of your country/region."}
                    textStyle={{ color: colors.termsAndcondition, fontSize: fs12 }}
                />

                <WrappedText
                    containerStyle={{
                        // alignSelf: "center",
                        marginTop: globalHeight * 0.1,
                        marginLeft: globalHeight * 0.5,
                        marginRight: globalHeight * 0.3,
                    }}
                    text={"2.	The use of this application is permitted by law according to the laws of your country/region."}
                    textStyle={{ color: colors.termsAndcondition, fontSize: fs12 }}
                />

                <WrappedText
                    containerStyle={{
                        // alignSelf: "center",
                        marginTop: globalHeight * 0.1,
                        marginLeft: globalHeight * 0.3,
                        marginRight: globalHeight * 0.3,
                    }}
                    text={" You can create an account by manually registering or using your social media login details. If you use social media login information to create an account, you authorize us to access, display and use certain information in your social media account (such as profile picture, relationship status, location and information about your connections). For more information about what information we use and how to use it, please review our privacy policy."}
                    textStyle={{ color: colors.termsAndcondition, fontSize: fs12 }}
                />

                <WrappedText
                    containerStyle={{
                        // alignSelf: "center",
                        marginTop: globalHeight * 0.1,
                        marginLeft: globalHeight * 0.3,
                        marginRight: globalHeight * 0.3,
                    }}
                    text={"Unfortunately, we don’t allow you to use another person’s account without permission – Doing that will be unfair."}
                    textStyle={{ color: colors.termsAndcondition, fontSize: fs12 }}
                />

                <WrappedText
                    containerStyle={{
                        // alignSelf: "center",
                        marginTop: globalHeight * 0.1,
                        marginLeft: globalHeight * 0.3,
                        marginRight: globalHeight * 0.3,
                    }}
                    text={"Mingo will bring you great fun, but if you have information that you need to leave, you can delete your account at any time by logging in and going to the 'Settings' page and clicking the 'Delete Account' link. Your account will be deleted immediately, but it may take a while for your content (defined below) to be completely deleted from the app. If you find that you miss us and decide to restore your account (you can do this within 30 days of deactivating your account), we will save your profile information. If you delete your account and try to create a new account with the same credentials within the same time period, we will reactivate your account for you. We reserve the right to terminate or suspend any account at any time at our sole discretion, or use any operational, technical, legal or other means to enforce these terms (including but not limited to blocking specific IP addresses) without any responsibility. You need to be notified in advance."}
                    textStyle={{ color: colors.termsAndcondition, fontSize: fs12 }}
                />

                <WrappedText
                    containerStyle={{
                        // alignSelf: "center",
                        marginTop: globalHeight * 0.1,
                        marginLeft: globalHeight * 0.3,
                        marginRight: globalHeight * 0.3,
                    }}
                    text={"You must not access, tamper with or use the application or non-public areas of our system either of your account or of any other users. If you have not registered for an account, you may not be able to access some parts of the application."}
                    textStyle={{ color: colors.termsAndcondition, fontSize: fs12 }}
                />

                <WrappedText
                    containerStyle={{
                        // alignSelf: "center",
                        marginTop: globalHeight * 0.1,
                        marginLeft: globalHeight * 0.5,
                        marginRight: globalHeight * 0.3,
                    }}
                    text={"2.	Content Type"}
                    textStyle={{ color: colors.black, fontSize: fs14 }}
                />

                <WrappedText
                    containerStyle={{
                        // alignSelf: "center",
                        marginTop: globalHeight * 0.1,
                        marginLeft: globalHeight * 0.3,
                        marginRight: globalHeight * 0.3,
                    }}
                    text={"You can access three types of content on the app: "}
                    textStyle={{ color: colors.termsAndcondition, fontSize: fs12 }}
                />

                <WrappedText
                    containerStyle={{
                        // alignSelf: "center",
                        marginTop: globalHeight * 0.1,
                        marginLeft: globalHeight * 0.5,
                        marginRight: globalHeight * 0.3,
                    }}
                    text={"1.	Content uploaded and provided by you ('Your Content'); "}
                    textStyle={{ color: colors.termsAndcondition, fontSize: fs12 }}
                />

                <WrappedText
                    containerStyle={{
                        // alignSelf: "center",
                        marginTop: globalHeight * 0.1,
                        marginLeft: globalHeight * 0.5,
                        marginRight: globalHeight * 0.3,
                    }}
                    text={"2.	The use of this application is permitted by law according to the laws of your country/region."}
                    textStyle={{ color: colors.termsAndcondition, fontSize: fs12 }}
                />

                <WrappedText
                    containerStyle={{
                        // alignSelf: "center",
                        marginTop: globalHeight * 0.1,
                        marginLeft: globalHeight * 0.5,
                        marginRight: globalHeight * 0.3,
                    }}
                    text={"3.	Content provided by Mingo Group ('Our Content')."}
                    textStyle={{ color: colors.termsAndcondition, fontSize: fs12 }}
                />

                <WrappedText
                    containerStyle={{
                        // alignSelf: "center",
                        marginTop: globalHeight * 0.1,
                        marginLeft: globalHeight * 0.3,
                        marginRight: globalHeight * 0.3,
                    }}
                    text={"There is some content restriction on Mingo"}
                    textStyle={{ color: colors.termsAndcondition, fontSize: fs12 }}
                />

                <WrappedText
                    containerStyle={{
                        // alignSelf: "center",
                        marginTop: globalHeight * 0.1,
                        marginLeft: globalHeight * 0.3,
                        marginRight: globalHeight * 0.3,
                    }}
                    text={"We hope that users can express their ideas as much as possible and publish various content on Mingo, but we must impose restrictions on certain content, including:"}
                    textStyle={{ color: colors.black, fontSize: fs14 }}
                />

                <WrappedText
                    containerStyle={{
                        // alignSelf: "center",
                        marginTop: globalHeight * 0.1,
                        marginLeft: globalHeight * 0.5,
                        marginRight: globalHeight * 0.3,
                    }}
                    text={"•	Contains language or images that may be considered offensive or may be harassing, frustrating, embarrassing, frightening or annoying to other people; "}
                    textStyle={{ color: colors.termsAndcondition, fontSize: fs12 }}
                />

                <WrappedText
                    containerStyle={{
                        // alignSelf: "center",
                        marginTop: globalHeight * 0.1,
                        marginLeft: globalHeight * 0.5,
                        marginRight: globalHeight * 0.3,
                    }}
                    text={"•	Obscenity, pornography, violence or otherwise offend human dignity; "}
                    textStyle={{ color: colors.termsAndcondition, fontSize: fs12 }}
                />

                <WrappedText
                    containerStyle={{
                        // alignSelf: "center",
                        marginTop: globalHeight * 0.1,
                        marginLeft: globalHeight * 0.5,
                        marginRight: globalHeight * 0.3,
                    }}
                    text={"•	Abuse, insult or threaten, discriminate against or promote or encourage racism, sexism, hatred or bigotry;"}
                    textStyle={{ color: colors.termsAndcondition, fontSize: fs12 }}
                />

                <WrappedText
                    containerStyle={{
                        // alignSelf: "center",
                        marginTop: globalHeight * 0.1,
                        marginLeft: globalHeight * 0.5,
                        marginRight: globalHeight * 0.3,
                    }}
                    text={"•	Defamation or libel; "}
                    textStyle={{ color: colors.termsAndcondition, fontSize: fs12 }}
                />

                <WrappedText
                    containerStyle={{
                        // alignSelf: "center",
                        marginTop: globalHeight * 0.1,
                        marginLeft: globalHeight * 0.5,
                        marginRight: globalHeight * 0.3,
                    }}
                    text={"•	Related to commercial activities (including but not limited to sales, competitions and advertisements, links to other websites or payphone numbers);"}
                    textStyle={{ color: colors.termsAndcondition, fontSize: fs12 }}
                />

                <WrappedText
                    containerStyle={{
                        // alignSelf: "center",
                        marginTop: globalHeight * 0.1,
                        marginLeft: globalHeight * 0.5,
                        marginRight: globalHeight * 0.3,
                    }}
                    text={"•	Involving the transmission of 'spam' or 'spam'; "}
                    textStyle={{ color: colors.termsAndcondition, fontSize: fs12 }}
                />

                <WrappedText
                    containerStyle={{
                        // alignSelf: "center",
                        marginTop: globalHeight * 0.1,
                        marginLeft: globalHeight * 0.5,
                        marginRight: globalHeight * 0.3,
                    }}
                    text={"•	Contains spyware, adware, viruses, corrupted files, worms or other malicious code designed to disrupt, destroy or restrict any software, hardware, telecommunications, networks, servers or other equipment, Trojan horses or any other material , Interfere with, mistakenly intercept or deprive any data or personal information from Mingo or other sources;"}
                    textStyle={{ color: colors.termsAndcondition, fontSize: fs12 }}
                />

                <WrappedText
                    containerStyle={{
                        // alignSelf: "center",
                        marginTop: globalHeight * 0.1,
                        marginLeft: globalHeight * 0.5,
                        marginRight: globalHeight * 0.3,
                    }}
                    text={"•	Show another person created or circulate without the consent of others."}
                    textStyle={{ color: colors.termsAndcondition, fontSize: fs12 }}
                />

                <WrappedText
                    containerStyle={{
                        // alignSelf: "center",
                        marginTop: globalHeight * 0.1,
                        marginLeft: globalHeight * 0.5,
                        marginRight: globalHeight * 0.3,
                    }}
                    text={"Mingo has a zero tolerance policy for such content."}
                    textStyle={{ color: colors.termsAndcondition, fontSize: fs12 }}
                />

                <WrappedText
                    containerStyle={{
                        // alignSelf: "center",
                        marginTop: globalHeight * 0.1,
                        marginLeft: globalHeight * 0.3,
                        marginRight: globalHeight * 0.3,
                    }}
                    text={"Your Content"}
                    textStyle={{ color: colors.black, fontSize: fs14 }}
                />

                <WrappedText
                    containerStyle={{
                        // alignSelf: "center",
                        marginTop: globalHeight * 0.1,
                        marginLeft: globalHeight * 0.5,
                        marginRight: globalHeight * 0.3,
                    }}
                    text={"Since your content is unique, you are responsible and liable for your content, and will compensate us for any claims related to your content, defend, publish and protect us from harm. "}
                    textStyle={{ color: colors.termsAndcondition, fontSize: fs12 }}
                />

                <WrappedText
                    containerStyle={{
                        // alignSelf: "center",
                        marginTop: globalHeight * 0.1,
                        marginLeft: globalHeight * 0.5,
                        marginRight: globalHeight * 0.3,
                    }}
                    text={"You must not display any personal contact information or bank information (such as name, home address or pin code, phone number, email address, URL, credit/debit card or other bank) related to you or any other person on your profile page Information) details). If you do choose to disclose any personal information about yourself to other users via email or other means, you are responsible for the consequences. We encourage you to disclose detailed information about yourself to third parties online, as in any other situation."}
                    textStyle={{ color: colors.termsAndcondition, fontSize: fs12 }}
                />
                <WrappedText
                    containerStyle={{
                        // alignSelf: "center",
                        marginTop: globalHeight * 0.1,
                        marginLeft: globalHeight * 0.5,
                        marginRight: globalHeight * 0.3,
                    }}
                    text={"Since Mingo is a public community, your content will be immediately shown to other users of the app globally-so before publishing, make sure you can easily share your content. Therefore, you agree that other users and anyone who accesses, participates in, or sends links to the application (for example, individuals who obtain links to user profiles or other Mingo users from users) can view your content. By uploading your content on Mingo, you represent and assure us that you have all the necessary rights and permissions to do so, and automatically grant us a non-exclusive, royalty-free, permanent, global, and use in any way Permission for your content (including (but not limited to) editing, copying, modifying, adapting, translating, reformatting, creating derivative works from other works, incorporating them into other works, advertising, distributing, and other means to the public) Provide such content, whether in whole or in part or in any form or media currently known or developed in the future)."}
                    textStyle={{ color: colors.termsAndcondition, fontSize: fs12 }}
                />

                <WrappedText
                    containerStyle={{
                        // alignSelf: "center",
                        marginTop: globalHeight * 0.1,
                        marginLeft: globalHeight * 0.5,
                        marginRight: globalHeight * 0.3,
                    }}
                    text={"Without your further approval, we may assign and/or sublicense the above license to our branches and successors. "}
                    textStyle={{ color: colors.termsAndcondition, fontSize: fs12 }}
                />

                <WrappedText
                    containerStyle={{
                        // alignSelf: "center",
                        marginTop: globalHeight * 0.1,
                        marginLeft: globalHeight * 0.5,
                        marginRight: globalHeight * 0.3,
                    }}
                    text={"We have the right to delete, edit, restrict or block access to any of your content at any time, and we have no obligation to display or view your content."}
                    textStyle={{ color: colors.termsAndcondition, fontSize: fs12 }}
                />

                <WrappedText
                    containerStyle={{
                        // alignSelf: "center",
                        marginTop: globalHeight * 0.1,
                        marginLeft: globalHeight * 0.3,
                        marginRight: globalHeight * 0.3,
                    }}
                    text={"Other User Content"}
                    textStyle={{ color: colors.black, fontSize: fs14 }}
                />

                <WrappedText
                    containerStyle={{
                        // alignSelf: "center",
                        marginTop: globalHeight * 0.1,
                        marginLeft: globalHeight * 0.5,
                        marginRight: globalHeight * 0.3,
                    }}
                    text={"Other members of Mingo will also share content through the app. Member content belongs to the user who publishes the content, is stored on our server, and is displayed through the application under the guidance of the user who provides the member content. "}
                    textStyle={{ color: colors.termsAndcondition, fontSize: fs12 }}
                />

                <WrappedText
                    containerStyle={{
                        // alignSelf: "center",
                        marginTop: globalHeight * 0.1,
                        marginLeft: globalHeight * 0.5,
                        marginRight: globalHeight * 0.3,
                    }}
                    text={"You have no rights to the membership content of other users, and you can only view the personal information of other Mingo users if your use of the personal information of other Mingo users meets the purpose of allowing people to know each other. You must not use the information of other users for commercial purposes, spam, harass or constitute illegal threats. If you misuse the information of other users, we reserve the right to terminate your account."}
                    textStyle={{ color: colors.termsAndcondition, fontSize: fs12 }}
                />

                <WrappedText
                    containerStyle={{
                        // alignSelf: "center",
                        marginTop: globalHeight * 0.1,
                        marginLeft: globalHeight * 0.3,
                        marginRight: globalHeight * 0.3,
                    }}
                    text={"Our Content"}
                    textStyle={{ color: colors.black, fontSize: fs14 }}
                />

                <WrappedText
                    containerStyle={{
                        // alignSelf: "center",
                        marginTop: globalHeight * 0.1,
                        marginLeft: globalHeight * 0.5,
                        marginRight: globalHeight * 0.3,
                    }}
                    text={"You may wonder what the rest of the content on Mingo will look like. Well, it belongs to us! Any other text, content, graphics, user interface, trademarks, logos, sounds, illustrations, and other intellectual property rights appearing on Mingo are owned, controlled or licensed by us, and are protected by copyright, trademark and other intellectual property laws. All rights, ownership and interest in our content always remain with us."}
                    textStyle={{ color: colors.termsAndcondition, fontSize: fs12 }}
                />

                <WrappedText
                    containerStyle={{
                        // alignSelf: "center",
                        marginTop: globalHeight * 0.1,
                        marginLeft: globalHeight * 0.5,
                        marginRight: globalHeight * 0.3,
                    }}
                    text={"In the following circumstances, we grant you a non-exclusive, limited, personal, non-transferable, and revocable permission to access and use 'our content', but no sub-license rights:"}
                    textStyle={{ color: colors.termsAndcondition, fontSize: fs12 }}
                />

                <WrappedText
                    containerStyle={{
                        // alignSelf: "center",
                        marginTop: globalHeight * 0.1,
                        marginLeft: globalHeight * 0.5,
                        marginRight: globalHeight * 0.3,
                    }}
                    text={"1.	Unless the application function allows, you may not use, sell, modify or distribute our content; "}
                    textStyle={{ color: colors.termsAndcondition, fontSize: fs12 }}
                />

                <WrappedText
                    containerStyle={{
                        // alignSelf: "center",
                        marginTop: globalHeight * 0.1,
                        marginLeft: globalHeight * 0.5,
                        marginRight: globalHeight * 0.3,
                    }}
                    text={"2.	You must not use our name in meta tags, keywords and/or hidden text; "}
                    textStyle={{ color: colors.termsAndcondition, fontSize: fs12 }}
                />

                <WrappedText
                    containerStyle={{
                        // alignSelf: "center",
                        marginTop: globalHeight * 0.1,
                        marginLeft: globalHeight * 0.5,
                        marginRight: globalHeight * 0.3,
                    }}
                    text={"3.	You may not create derivative works from our content in any way or make commercial use of our content in whole or in part; and "}
                    textStyle={{ color: colors.termsAndcondition, fontSize: fs12 }}
                />
                <WrappedText
                    containerStyle={{
                        // alignSelf: "center",
                        marginTop: globalHeight * 0.1,
                        marginLeft: globalHeight * 0.5,
                        marginRight: globalHeight * 0.3,
                    }}
                    text={"4.	You can only use our content for legitimate purposes."}
                    textStyle={{ color: colors.termsAndcondition, fontSize: fs12 }}
                />

                <WrappedText
                    containerStyle={{
                        // alignSelf: "center",
                        marginTop: globalHeight * 0.1,
                        marginLeft: globalHeight * 0.3,
                        marginRight: globalHeight * 0.3,
                    }}
                    text={"Mingo reserves all other rights. "}
                    textStyle={{ color: colors.termsAndcondition, fontSize: fs12 }}
                />

                <WrappedText
                    containerStyle={{
                        // alignSelf: "center",
                        marginTop: globalHeight * 0.1,
                        marginLeft: globalHeight * 0.3,
                        marginRight: globalHeight * 0.3,
                    }}
                    text={"3.	Limitations on the App"}
                    textStyle={{ color: colors.black, fontSize: fs14 }}
                />

                <WrappedText
                    containerStyle={{
                        // alignSelf: "center",
                        marginTop: globalHeight * 0.1,
                        marginLeft: globalHeight * 0.3,
                        marginRight: globalHeight * 0.3,
                    }}
                    text={"You agree: "}
                    textStyle={{ color: colors.black, fontSize: fs14 }}
                />

                <WrappedText
                    containerStyle={{
                        // alignSelf: "center",
                        marginTop: globalHeight * 0.1,
                        marginLeft: globalHeight * 0.3,
                        marginRight: globalHeight * 0.3,
                    }}
                    text={"•	   	Comply with all applicable laws, including but not limited to privacy laws, intellectual property laws, anti-spam laws, equal opportunities laws and regulatory requirements; \n •	   Use your real name on personal data;\n •	   Use the service in a professional way."}
                    textStyle={{ color: colors.termsAndcondition, fontSize: fs12 }}
                />

                <WrappedText
                    containerStyle={{
                        // alignSelf: "center",
                        marginTop: globalHeight * 0.1,
                        marginLeft: globalHeight * 0.3,
                        marginRight: globalHeight * 0.3,
                    }}
                    text={"You agree for the following that you will not "}
                    textStyle={{ color: colors.black, fontSize: fs14 }}
                />

                <WrappedText
                    containerStyle={{
                        // alignSelf: "center",
                        marginTop: globalHeight * 0.1,
                        marginLeft: globalHeight * 0.3,
                        marginRight: globalHeight * 0.3,
                    }}
                    text={"•   	Acting in an illegal or unprofessional manner, including dishonesty, abusive or discrimination; \n•	     Misrepresenting your identity, your current or previous position, qualifications, or affiliation with an individual or entity; \n•	     Disclosing information that you do not agree to disclose; \n•	     Create or operate pyramid schemes, fraud or other similar practices."}
                    textStyle={{ color: colors.termsAndcondition, fontSize: fs12 }}
                />

                <WrappedText
                    containerStyle={{
                        // alignSelf: "center",
                        marginTop: globalHeight * 0.1,
                        marginLeft: globalHeight * 0.3,
                        marginRight: globalHeight * 0.3,
                    }}
                    text={"We don't like users performing poorly in the Mingo community-users should not do bad things to other users. Therefore, you can report any abuse or complaint about member content by contacting us, outlining abuse and/or complaints by sending an email to help@Mingo.com.  You can also report users directly from your profile or chat by clicking the 'Block and Report' link."}
                    textStyle={{ color: colors.termsAndcondition, fontSize: fs12 }}
                />

                <WrappedText
                    containerStyle={{
                        // alignSelf: "center",
                        marginTop: globalHeight * 0.1,
                        marginLeft: globalHeight * 0.3,
                        marginRight: globalHeight * 0.3,
                    }}
                    text={"In addition, we don’t want users to behave badly towards Mingo-we have been working hard during the creation process, so scraping or copying any part of the app without our prior consent is expressly prohibited. "}
                    textStyle={{ color: colors.termsAndcondition, fontSize: fs12 }}
                />

                <WrappedText
                    containerStyle={{
                        // alignSelf: "center",
                        marginTop: globalHeight * 0.1,
                        marginLeft: globalHeight * 0.3,
                        marginRight: globalHeight * 0.3,
                    }}
                    text={"4.	Privacy"}
                    textStyle={{ color: colors.black, fontSize: fs14 }}
                />

                <WrappedText
                    containerStyle={{
                        // alignSelf: "center",
                        marginTop: globalHeight * 0.1,
                        marginLeft: globalHeight * 0.3,
                        marginRight: globalHeight * 0.3,
                    }}
                    text={"For information about how Mingo collects, uses, and shares your personal data, please review our privacy policy-this is important and allows you to read before you start using our App. By using Mingo, you agree that we can use the user data in accordance with our privacy policy."}
                    textStyle={{ color: colors.termsAndcondition, fontSize: fs12 }}
                />

                <WrappedText
                    containerStyle={{
                        // alignSelf: "center",
                        marginTop: globalHeight * 0.1,
                        marginLeft: globalHeight * 0.3,
                        marginRight: globalHeight * 0.3,
                    }}
                    text={"5.	Third-party platforms; quality service; in-app purchase"}
                    textStyle={{ color: colors.black, fontSize: fs14 }}
                />

                <WrappedText
                    containerStyle={{
                        // alignSelf: "center",
                        marginTop: globalHeight * 0.1,
                        marginLeft: globalHeight * 0.3,
                        marginRight: globalHeight * 0.3,
                    }}
                    text={"The App may be dependent on and/or interoperate with third-party owned and/or operated platforms and services, e.g., Apple (iTunes, etc.), Google, Facebook, Twitter, etc. (each, a “Third Party Platform”) and may require that you be a registered member of such Third Party Platforms and provide certain account credentials and other information in order to access the App. By using the App, you agree to comply with any applicable terms, conditions or requirements promulgated by any provider of a Third Party Platform (e.g., Facebook’s Terms of Use, iTunes Store Terms of Use, etc.).\n\n Taking into account subscription fees or other fees ('premium services'), including the ability to purchase products, services and enhanced features, such as extending the scope of matching, we may provide certain products and/or services to users of the app ('in-app commodity'). If you choose to use commercial services or purchase in-app products, you acknowledge and agree that other terms may apply to your use, access and purchase of such commercial services and in-app products, and these additional terms are in the following ways Incorporated into this article reference. You can purchase commercial services and in-app products through the following payment methods \n\na) Purchase through Apple App Store, Google Play or other mobile or web application platforms or storefronts (each 'third-party store') authorized by us, \n\n (b) Pay with your credit card, debit card, net banking or any other payment gateways the account will be processed by a third-party processor, or \n\n  (c) Pay with a cash card by visiting a third party store. Once you request commercial services or In App products, you authorize us to charge the amount based on the payment method you choose, and your payment is non-refundable. If we do not receive payment from your selected payment method, you agree to pay immediately according to our requirements. If you want to cancel or change your advanced payment method at any time, you can do so through the 'Payment Settings' option under your profile or visit your nearest cash card center. Your subscription to the Mingo premium service will automatically renew until you decide to cancel under such terms. If the terms and conditions of the third-party store conflict with these terms, the terms and conditions of the third-party store or service provider shall prevail. We do not assume any responsibility or assume any responsibility for the goods or services you obtain through third-party stores, our third-party service providers or other websites or web pages. We encourage you to conduct investigations that you consider necessary or appropriate before conducting any online transactions with any third party. \n\nIf you choose to purchase in-app products, you will be prompted to enter the details of the account ('your mobile platform account') of the third-party store you are using (for example, Android, Apple, etc.). The mobile platform account will be based on the time of purchase The terms disclosed to you and the general terms that apply to all other in-app purchases made through your mobile platform, charge an account for premium services and/or in-app products (for example, Android, Apple, etc.). Premium services and in-app products may include one-time purchases and monthly subscriptions (for example, one-month subscription, three-month subscription, six-month subscription, etc.) to provide other account functions.\n\nAt the end of the free trial period (if any), you will be charged the subscription price, and you will continue to be charged until you cancel the subscription. Please note that for premium services and in-app products purchased by subscription, your subscription will be automatically renewed during the same subscription period as the original purchase (for example, if you purchased in-app products with a six-month subscription , The subscription will automatically renew for six months). To avoid additional costs, you must cancel the subscription before the free trial period, subscription period or renewal expires in accordance with the terms and conditions of your mobile platform account and any applicable third-party terms and conditions. Pricing may vary due to many factors, such as (but not limited to) promotional offers, membership bonuses and other discounts applicable to your age group. \n\n  (d) In any case, we are not responsible for any payment processing errors (including card processing, identity verification, analysis and regulatory compliance) or fees or other service-related issues (including problems caused by incorrect account information) , Nor assume any responsibility for products or goods obtained through mobile platform accounts or third-party stores. In addition, Mingo does not guarantee that product descriptions or other content and products will be available, accurate, complete, reliable, current or error-free. Descriptions and images of products or services (including premium services or in-app products) and references to them do not mean that we or any of our affiliates endorse such products or services. In addition, Mingo and its third-party operating service providers reserve the right to change product descriptions, images and references for any reason or without prior notice. Restrict the available quantity of any product; redeem or impose conditions on any coupons, coupon codes, promotional codes or other similar promotions; prohibit any user from making any or all transactions; and/or refuse to provide any product to any user. In addition, if we terminate your use or registration of the application due to your violation of these terms, you are not entitled to a refund of any unused portion of the fee, payment or other consideration. We recommend that you read the terms and conditions of the applicable third-party payment processor, third-party store or mobile platform account before purchasing any in-app products or premium services. "}
                    textStyle={{ color: colors.termsAndcondition, fontSize: fs12 }}
                />

                <WrappedText
                    containerStyle={{
                        // alignSelf: "center",
                        marginTop: globalHeight * 0.1,
                        marginLeft: globalHeight * 0.3,
                        marginRight: globalHeight * 0.3,
                    }}
                    text={"6.	Push notifications; location-based features"}
                    textStyle={{ color: colors.black, fontSize: fs14 }}
                />

                <WrappedText
                    containerStyle={{
                        // alignSelf: "center",
                        marginTop: globalHeight * 0.1,
                        marginLeft: globalHeight * 0.3,
                        marginRight: globalHeight * 0.3,
                    }}
                    text={"We may provide you with emails, text messages, push notifications, alerts, and other messages related to the application and/or Mingo services, such as enhancements, offers, products, events, and other promotions. After downloading the app, you will be asked to accept or decline the push notification/alert. If you decline, you will not receive any push notifications/alerts. If you decline, you will not receive any push notifications/alerts. If you accept, the push notification/alert will be sent to you automatically. If you no longer want to receive push notifications/alerts from this app, you can opt out by changing the notification settings on your mobile device. For other types of messaging or communications, such as emails, text messages, etc., you can follow the specific instructions contained in such communications, or by emailing your request to us, feedback or feedback to help@Mingo.com. To unsubscribe or opt-out.The application may allow you to access or provide you with an opportunity to view certain content and receive other products, services and/or other materials based on your location. To provide you with these opportunities, the app will use one or more reference points (such as GPS, Bluetooth, and/or software in your mobile device) to determine your location. If you have set your mobile device to disable GPS, Bluetooth, or other location determination software, or you have not authorized the app to access your location data, you will not be able to access such location-specific content, products, services, and materials. For more information on how the app uses and retains your information, please read the privacy policy. (provide the link)"}
                    textStyle={{ color: colors.termsAndcondition, fontSize: fs12 }}
                />

                <WrappedText
                    containerStyle={{
                        // alignSelf: "center",
                        marginTop: globalHeight * 0.1,
                        marginLeft: globalHeight * 0.3,
                        marginRight: globalHeight * 0.3,
                    }}
                    text={"7.	Disclaimer"}
                    textStyle={{ color: colors.black, fontSize: fs14 }}
                />

                <WrappedText
                    containerStyle={{
                        // alignSelf: "center",
                        marginTop: globalHeight * 0.1,
                        marginLeft: globalHeight * 0.3,
                        marginRight: globalHeight * 0.3,
                    }}
                    text={"Cheer up, this may seem daunting, but it is important! \n\nThe application, website, our content and membership content are provided to you 'as is' without any express or implied warranty, including but not limited to specific uses, titles, or non-infringement.\n\nIt should be applicable laws that do not allow the exclusion of express or implied warranties before this, and then we grant the minimum express or implied warranties required by applicable laws. Any advice or information, whether oral or written, does not constitute any guarantee, representation or guarantee that is not expressly stated in this section.\n\nIn addition, we do not make any guarantees that the application or site will be uninterrupted, safe or error-free, or that your use of the application or site will meet your expectations, or that the application, site, our content, any Member content or, therefore, any part is correct, accurate or reliable. You use the application or website at your own risk. Your interaction with other members is entirely your responsibility. Exclusive groups are not responsible for the actions of any users. The bubble does not affect the criminal background of its members.\n\nFor any direct, indirect, incidental, secondary, special or punitive damage, including but not limited to, loss of data, income, profit or goodwill, property loss or damage, property loss or any damage claimed in the country, We are not responsible for any parties that are caused by your access to or use of the application, website, our content or any member content, whether due to contract violation, infringement (including negligence), proprietary rights infringement, product liability or other reasons.\n\nEven if we are told that such damage may occur, the above rules will apply. If you are dissatisfied with the application or website in any way, your only exclusive remedy is to stop using the application and website."}
                    textStyle={{ color: colors.termsAndcondition, fontSize: fs12 }}
                />

                <WrappedText
                    containerStyle={{
                        // alignSelf: "center",
                        marginTop: globalHeight * 0.1,
                        marginLeft: globalHeight * 0.3,
                        marginRight: globalHeight * 0.3,
                    }}
                    text={"8.	Indemnity"}
                    textStyle={{ color: colors.black, fontSize: fs14 }}
                />

                <WrappedText
                    containerStyle={{
                        // alignSelf: "center",
                        marginTop: globalHeight * 0.1,
                        marginLeft: globalHeight * 0.3,
                        marginRight: globalHeight * 0.3,
                    }}
                    text={"All actions and information posted on Mingo are still your responsibility. Therefore, you agree to indemnify, defend, release and hold to us and our partners, licensors, affiliates, contractors, officers, directors, employees, representatives and agents, and are free from third-party claims, Compensation for damages (actual and/or consequently, litigation, lawsuits, demands, losses, liabilities, costs and expenses (including reasonable legal fees) incurred by us due to the following reasons: \n\n  •	Any of your negligence or intentional misconduct.\n  •	Your access and use of the application.\n  •	You upload or submit content to the app.\n  •	Your violation of these terms.\n  •	You violate any law or the rights of any third party. \n\nWithout your prior consent, we reserve the exclusive right to resolve damage and pay any and all claims or causes of action that we raise. If we request, you will cooperate fully and reasonably according to our requirements when we defend any related claims."}
                    textStyle={{ color: colors.termsAndcondition, fontSize: fs12 }}
                />

                <WrappedText
                    containerStyle={{
                        // alignSelf: "center",
                        marginTop: globalHeight * 0.1,
                        marginLeft: globalHeight * 0.3,
                        marginRight: globalHeight * 0.3,
                    }}
                    text={"9.	Third party App Stores"}
                    textStyle={{ color: colors.black, fontSize: fs14 }}
                />

                <WrappedText
                    containerStyle={{
                        // alignSelf: "center",
                        marginTop: globalHeight * 0.1,
                        marginLeft: globalHeight * 0.3,
                        marginRight: globalHeight * 0.3,
                    }}
                    text={"If you download the application from a third-party store, the following additional terms and conditions apply to you. If the other terms and conditions of these terms are less restrictive than or conflict with the terms and conditions in this section, the more restrictive or conflicting terms and conditions in this section will apply, but only apply to these terms. Apps and third-party stores. You acknowledge and agree: \n\n    1.	The third-party store provider is not obligated to provide any maintenance and support services for the application. Mingo is fully responsible for any product guarantees (whether express or implied by law), but they cannot be effectively denied. The third-party store provider does not assume any guarantee obligations for this application, and any other claims, losses, liabilities, damages, costs or expenses arising from non-compliance with any guarantees will be solely borne by Mingo Group.\n\n\  2.	Mingo (not the provider of third-party stores) is responsible for resolving any claims that you or any third party may have against the app or your own and/or use of the app, including but not limited to: (i) product liability claims; (ii) Any claim that the application does not comply with any applicable laws or regulations; (iii) claims arising from consumer protection or similar regulations; and/or (iv) intellectual property infringement claims. \n\n   3.	The third-party store provider and its subsidiaries are the third-party beneficiaries of this agreement. After you accept these terms, the third-party store provider from which the application is obtained will have the right (and be deemed to have accepted the right.) Enforce these terms against you as your third-party beneficiary."}
                    textStyle={{ color: colors.termsAndcondition, fontSize: fs12 }}
                />

                <WrappedText
                    containerStyle={{
                        // alignSelf: "center",
                        marginTop: globalHeight * 0.1,
                        marginLeft: globalHeight * 0.3,
                        marginRight: globalHeight * 0.3,
                    }}
                    text={"10.	Miscellaneous"}
                    textStyle={{ color: colors.black, fontSize: fs14 }}
                />

                <WrappedText
                    containerStyle={{
                        // alignSelf: "center",
                        marginTop: globalHeight * 0.1,
                        marginLeft: globalHeight * 0.3,
                        marginRight: globalHeight * 0.3,
                    }}
                    text={"Before using Mingo, we need to mention some other things. Please bear with us, we are almost done! \n\nFirst, the standard terms at the end of most contracts (boring, we know)\n\nThese terms (we may modify from time to time) constitute the entire agreement between you and Mingo. This clause supersedes all previous agreements, representations and arrangements (written or oral) between us. Nothing in this clause shall limit or exclude any liability for fraudulent misrepresentation.\n\nMingo has taken reasonable measures to ensure the timeliness, availability, correctness and completeness of the information contained on Mingo, and provides the information in an ‘as is’ and ‘available’ manner. Mingo does not provide any warranties or representations (whether express or implied) for the information contained on Mingo. Use Mingo and the materials available on it at your own risk. Mingo is not responsible for any losses caused by incorrect transmission, usage data or user content.\n\n You are responsible for taking all necessary precautions to ensure that any material you obtain from Mingo is free of viruses or other harmful ingredients. You accept that you will not provide Mingo with uninterrupted or error-free information, may not be able to correct defects, or Mingo or the servers that make it available are free of viruses or bugs, spyware, Trojan horses or any similar malware. Mingo is not responsible for any damage to your computer hardware, computer software or other equipment or technology, including but not limited to any security breach or any virus, error, tampering, fraud, error, omission, interruption, defect caused Damage, operation or transmission delay, computer line or network failure or any other technical or other failures.\n\n The terms and conditions are subjected to changed in intervals \n\n As Mingo grows, we may have to make changes to these terms, so we reserve the right to modify, modify or change the terms at any time (‘changes’). If you do, the changes will be posted on this page with the effective date of the update indicated at the bottom of the terms. In some cases, we may send you an email to notify you of changes. You should check this page regularly for any changes-we want our users to be as informed as possible.\n\n If you continue to use Mingo after any changes, it means that you accept the changes and you will be legally bound by the new updated terms. If you do not accept any changes to the terms, you should stop using Mingo immediately (well, this is difficult!).\n\n Failure or delay in exercising any rights, powers or privileges under these Terms shall not waive such rights or accept any changes in these Terms, and neither party shall unilaterally or partially exercise any rights, further exercise of rights or privileges, or any other rights, the exercise of power or privilege. \n\n  By using this application, you agree and confirm that Mingo is a global application running through servers located in many countries/regions of the world, including in India. If you live in a country/region with data protection laws, your personal data storage may not provide you with the same protection as your country/region of residence. By submitting your personal information, or choosing to upgrade the services you use, or by using the applications available on Mingo, you agree to transfer your personal information to any such personal data for storage and processing. Country and destination. \n\n The application may contain links to third-party websites or resources. In this case, you acknowledge and agree that we are not responsible for the following matters: \n\n     •	The availability or accuracy of such websites or resources; or \n\n     •	The content, products or services provided on such websites or resources.\n\nLinking to such sites or resources does not imply any endorsement. You acknowledge that you take full responsibility for the use of such websites or resources and assume all risks. Without our prior written permission, it is expressly prohibited to frame, inline or otherwise associate with the application. \n\nThese terms and any rights and licenses granted under this agreement may not be transferred or transferred by you, but may be transferred by us without restriction."}
                    textStyle={{ color: colors.termsAndcondition, fontSize: fs12 }}
                />

                <WrappedText
                    containerStyle={{
                        alignSelf: "center",
                        marginTop: globalHeight * 0.1,
                        marginLeft: globalHeight * 0.3,
                        marginRight: globalHeight * 0.3,
                    }}
                    text={"\n\nThanking You\n\nMingo Group\n\n"}
                    textStyle={{ color: colors.black, fontSize: fs14 }}
                />

                <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                    <WrappedText
                        containerStyle={{
                            alignSelf: "center",
                            marginTop: globalHeight * -0.45,
                            marginLeft: globalHeight * 0.3,
                            marginRight: globalHeight * 0.3,
                        }}
                        text={"\n\nAgree terms & condition "}
                        textStyle={{ color: colors.black, fontSize: fs14 }}
                    />
                    <CheckBox
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    />
                </View>

            </View>
        </View>
    )
}
export default TermsAndCondition;
const styles = StyleSheet.create({})