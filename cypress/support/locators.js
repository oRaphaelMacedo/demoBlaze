const locators = {

    LOGIN:
    {
        LOGIN_BUTON: "#login2",
        USER_FILD: "#loginusername",
        PASSWORD_FILD: "#loginpassword",
        POPUP_EXIST: "#logInModal > .modal-dialog > .modal-content > .modal-body > form > :nth-child(1)",
        SIGN_IN: "#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
    },

    ORDER:
    {
        NAME: "#name",
        COUNTRY: "#country",
        CITY: "#city",
        CARD: "#card",
        MONTH: "#month",
        YEAR: "#year"
    }
    
};

export default locators;