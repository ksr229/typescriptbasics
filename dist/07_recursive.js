var testRecurssive = function (matchTxt) {
    try {
        return matchTxt.includes("test") ? true : false; //ternary operator
    }
    catch (e) {
        console.log("Something went wrong: " + e);
    }
    return false;
};
if (testRecurssive("test")) {
    console.log("input string contains test");
}
else {
    console.log("input string does not contain test");
}
/**
 * Unable to find a solution for stopping the recurssive function from running infinitely in case of the
 * the Alfie bot. matchText.
 * Keep it simple.
 * Smoke test(PROD/TEST)- Just Check the Account Balance.
 * Regression test()- Account Balance check and upate Phone number
 */ 
