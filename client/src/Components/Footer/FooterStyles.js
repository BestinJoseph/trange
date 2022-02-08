import { makeStyles } from "@mui/styles"

export default makeStyles((theme)=>({
    footer: {

        '& .footer_container': {
            background: '#16213E',
            padding: '5rem 0 1rem',
            color: 'white',
        },

        '& .footer_reserved': {
            textAlign: 'center',
            padding: '.75rem 0',
        }
    }
}))
