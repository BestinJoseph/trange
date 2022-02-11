import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    dailyactivities: {
        margin: '0 auto',

        '& .nav_header': {
            background: '#2f0670',
            display: 'flex',
            padding: 20,
            color: 'white',
        },
    },
    textarea: {
        width: '95.1%',
        height: '500px',
        borderRadius: 4,
        outline: 'none',
        border: '1px solid #767676',
        fontSize: '17px',
        padding: '2% !important',
        display: 'flex',
        margin: '0',
    }
}))