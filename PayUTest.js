import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Payumoney, { HashGenerator } from 'react-native-payumoney'

const PayUTest = () => {

    const [paymentStatus, setPaymentStatus] = useState("");
    console.log('paymentStatus', paymentStatus)

    console.log("genetaredHash", HashGenerator({
        key: "QylhKRVd",
        amount: "10.0",
        email: "xyz@gmail.com",
        txnId: "1594976828726",
        productName: "product_info",
        firstName: "firstname",
        salt: "seVTUgzrgE",
    }));

    const pay = () => {
        setPaymentStatus("");
        const payData = {
            amount: '10.0',
            txnId: '1594976828726',
            productName: 'product_info',
            firstName: 'firstname',
            email: 'xyz@gmail.com',
            phone: '9639999999',
            merchantId: '5960507',
            key: 'QylhKRVd',
            successUrl: 'https://www.payumoney.com/mobileapp/payumoney/success.php',
            failedUrl: 'https://www.payumoney.com/mobileapp/payumoney/failure.php',
            isDebug: false,
            hash:
                '461d4002c1432b3393cf2bfaae7acc4c50601c66568fb49a4a125e060c3bfc0e489290e7c902750d5db3fc8be2f180daf4d534d7b9bef46fa0158a4c8a057b61',
        };
        Payumoney(payData).then((data) => {
            setPaymentStatus(`Success, code: ${data.code}`);
            console.log('success', data)
        }).catch((e) => {
            setPaymentStatus(`Failed, code: ${e.code}`);
            console.log('failed', e)
        })
    }
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', }} >
            <Text>PayUTest</Text>
            <Button
                title='Pay'
                onPress={() => pay()}
            />
            <Text>{paymentStatus}</Text>
        </View>
    )
}

export default PayUTest

const styles = StyleSheet.create({})