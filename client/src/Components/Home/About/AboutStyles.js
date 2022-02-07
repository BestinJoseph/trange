import { makeStyles } from "@mui/styles";

export default makeStyles((theme)=>({
    about: {
        background: '#191919',
        // height: 800,
        color: 'white',
        paddingBottom: 150,

        '& .about_container': {

            '& .about_section_intro': {
                marginTop: 100,
                border: '.25px solid orange',
                borderRadius: 30,
                padding: 50,

            }
        }
    }
}))