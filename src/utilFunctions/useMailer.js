import axios from "axios"

const useMailer = () => {
    const mailTemplate = (props) => {
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                url: 'https://craggycosmetic.com/api/user/mail/',
                data: {
                    to: props.to,
                    from: props.from,
                    sub: props.sub,
                    body: props.body
                },
                headers: {
                    'Content-Type': 'application/json',
                    'consumer_key': '3b137de2b677819b965ddb7288bd73f62fc6c1f04a190678ca6e72fca3986629'
                }
            }).then((res) => {
                resolve(res.data);
            })
        });
    }
    return {
        mailTemplate: mailTemplate
    }
}
export default useMailer
