import { makeStyles } from "@mui/styles";

export default makeStyles((theme)=>({
    services: {
        // height: 500,
        // background: '#4E9F3D',
        padding: '7rem 0 8rem',

        '& .service_item': {
            // height: '5rem',
            textAlign: 'center',
            // paddingBottom: 20,

            '& .service_item__container': {
                // border: '1px solid white',
                height: 150,
                padding: 20,
                borderRadius: 30,
                cursor: 'pointer',
                boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',

                '& .service_item': {
                    // boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
                },

                "&:hover": {
                    outline: '1px solid white',
                }
            },
        }
    }
}))