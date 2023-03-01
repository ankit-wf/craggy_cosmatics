import axios from "axios"


const useMailer = (data) => {

    console.log('daaaata', data)

    // const data = axios({
    //     method: 'post',
    //     url: 'https://craggycosmetic.com/api/user/mail/',
    //     data: {
    //         to: data.to,
    //         from: data.from,
    //         sub: data.sub,
    //         body: data.body
    //     },
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'consumer_key': '3b137de2b677819b965ddb7288bd73f62fc6c1f04a190678ca6e72fca3986629'
    //     }
    // }).then((res) => {
    //     console.log(res.data)
    // })

    // return data


}

export default useMailer


// const onSubmit = (data) => {
//     var otpVal = Math.floor(1000 + Math.random() * 9000);
//     dispatch(loginActions.otp(
//         {
//             otp: otpVal
//         }
//     ));
//     axios({
//         method: 'post',
//         url : 'https://craggycosmetic.com/api/user/auth/',
//         data: {
//             to: data.email,
//             otp: otpVal
//         },
//         headers: {
//             'Content-Type': 'application/json',
//             'consumer_key': '3b137de2b677819b965ddb7288bd73f62fc6c1f04a190678ca6e72fca3986629'
//         }
//     }).then((res) => {
//         // console.log(res.data)
//         if (res.data.status === 200) {
//             reset();
//             navigation.navigate('SignupOtpScreen', { email: data.email })
//         }
//         timeout()
//     })
// }