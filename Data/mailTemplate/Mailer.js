
export const welcomeArr = {
    sub: "Craggy Cosmetics",
    body: "welcome to the Craggy Cosmetics"
};

export const orderComplete = {
    sub: "Craggy Cosmetics",
    body: "Thank you for your order! We know you’re going to love it. keep shoping with us."
};

export const otpTemp = () => {
    const otpVal = Math.floor(1000 + Math.random() * 9000);
    let ff = {
        otp: otpVal,
        sub: "Craggy Cosmetics",
        body: "Dear customer, the one time password (OTP) is " + otpVal + ". This OTP will expire in 10 minutes."
    }
    return ff
};

