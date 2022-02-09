import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    dailyactivities: {
        // textAlign: 'center',
        // background: 'blue',
        margin: '0 auto',
        height: 500,
        padding: '50px 50px 0 50px',
        border: '1px solid orange',

        '& .dailyactivities_list_container': {

            '& .daily_lists': {
                listStyle: 'none',
                paddingLeft: 0,

                '& .daily_lists_item': {
                    marginBottom: 10,
                    cursor: 'pointer',

                    '&:hover': {
                        boderBottom: '1px solid orange',
                        background: 'gray',
                    }
                },
            }
        }
    }
}))