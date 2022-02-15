import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    dailyactivities: {
        // textAlign: 'center',
        // background: 'blue',
        margin: '0 auto',
        // height: 500,
        // border: '1px solid orange',

        '& .nav_header': {
            background: '#2f0670',
            display: 'flex',
            justifyContent: 'space-between',
            padding: 20,
            color: 'white',
        },

        '& .dailyactivities_list_container': {
            padding: '25px 25px 0 25px',

            '& .daily_lists': {
                listStyle: 'none',
                paddingLeft: 0,
                margin: 0,

                '& .daily_lists_item': {
                    marginBottom: 10,
                    // cursor: 'pointer',
                    // border: '.5px solid #2f0670',
                    boxShadow: '0px 0px 5px #Cacacb',
                    padding: '20px',
                    borderRadius: 5,
                    display: 'flex',
                    justifyContent: 'space-between',

                    '& .daily_lists_item_link': {
                        textDecoration: 'none',
                        color: 'black',
                        fontWeight: 600,
                    },

                    // '&:hover': {
                    //     boderBottom: '1px solid orange',
                    //     // boxShadow: '5px 10px #888888',
                    //     background: '#Efe8fd',
                    // }
                },
            }
        }
    }
}))