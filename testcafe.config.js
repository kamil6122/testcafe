module.exports = {
    userVariables: {
        email: 'a@a.com',
        password: 'Haslo123!',
    },

    baseUrl: 'https://dev1.kambit.pl:8598/pl/app/participants/(mainApp:participants-index/participant-edit/0/0//appSidebar:participants)',

    src: ['all.testcafe.js'],

    speed: 0.5,

    hostname: 'localhost',

    browsers: ['firefox --ignore-certificate-errors --allow-running-insecure-content --live'],

    disableMultipleWindows: true,

    disablePageCaching: true,

    skipJsErrors: true,

    selectorTimeout: 120000,

    assertionTimeout: 7000,

    pageLoadTimeout: 20000,

    stopOnFirstFail: true,
};
