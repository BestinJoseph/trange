import { makeStyles } from "@mui/styles";

export default makeStyles((theme)=>({
    clients: {
        textAlign: 'center',
        // border: '1px solid orange',
        padding: '80px 0',
        display: 'block',
        background: '#eeeee4',

        '& .clients_container': {
            margin: '0 auto',
            width: '90vw',
            // border: '1px solid orange',
            paddingTop: 20
        }
    }
}))