
export const welcomeArr = {
    sub: "craggy app",
    body: "welcome to the craggy app"
};

export const otpTemp = () => {


    const otpVal = Math.floor(1000 + Math.random() * 9000);

    let ff = {
        sub: "craggy app",
        body: "Dear customer, the one time password (OTP) is " + otpVal + ". This OTP will expire in 10 minutes."

    }

    return ff
};

