import { makeStyles } from "@mui/styles"

export default makeStyles((theme)=>({
    request: {
        // height: 400,
        background: '#39347D',
        color: 'white',
        padding: '100px 7%',

        '& .request_container': {
            paddingTop: 80,
            
            '& .request_container__download': {
                // border: '1px solid orange',
            }
        }
    },
    textField: {
        // borderWidth: "1px",
        borderColor: "white !important",
        color: 'white',
    },
    textInputColor: {
        multilineColor: 'white'
    }
}))