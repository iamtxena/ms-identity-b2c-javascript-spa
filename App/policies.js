/**
 * Enter here the user flows and custom policies for your B2C application
 * To learn more about user flows, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/user-flow-overview
 * To learn more about custom policies, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview
 */
const b2cPolicies = {
    names: {
        signUpSignIn: "B2C_1A_SignUpOrSignInWithPhoneOrEmail",
        // signUpSignIn: "B2C_1A_SignUpOrSignInWithPhone",
        // signUpSignIn: "B2C_1A_SignUpOrSignInWithPhoneOrEmail",
        forgotPassword: "b2c_1_reset",
        editProfile: "b2c_1_edit_profile"
    },
    authorities: {
        signUpSignIn: {
            authority: "https://demossa.b2clogin.com/demossa.onmicrosoft.com/B2C_1A_SignUpOrSignInWithPhoneOrEmail",
            // authority: "https://demossa.b2clogin.com/demossa.onmicrosoft.com/B2C_1_signupsignin_covid",
            // https://demossa.b2clogin.com/demossa.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1A_SignUpOrSignInWithPhone&client_id=0688c6b4-1c28-4b9a-a353-cb0356cb999e&nonce=defaultNonce&redirect_uri=https%3A%2F%2Flocalhost%3A5000&scope=openid&response_type=id_token&prompt=login
            // authority: "https://demossa.b2clogin.com/demossa.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1A_SignUpOrSignInWithPhone&client_id=3cb0611b-ce94-4298-81f0-d7670158b989&nonce=defaultNonce&redirect_uri=http%3A%2F%2Flocalhost%3A6420&scope=openid&response_type=id_token&prompt=login",
        },
        forgotPassword: {
            authority: "https://demossa.b2clogin.com/demossa.onmicrosoft.com/b2c_1_reset",
        },
        editProfile: {
            authority: "https://demossa.b2clogin.com/demossa.onmicrosoft.com/b2c_1_edit_profile"
        }
    },
    authorityDomain: "demossa.b2clogin.com"
}