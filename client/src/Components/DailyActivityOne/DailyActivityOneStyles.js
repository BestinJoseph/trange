import { makeStyles } from "@mui/styles";

export default makeStyles((theme)=>({
    dailyactivityone: {
        margin: '0 auto',

        '& .nav_header': {
            background: '#2f0670',
            display: 'flex',
            padding: 20,
            color: 'white',
        },

        '& .activity_container': {
            padding: 20,

            '& .activity_lists_container': {
                

                '& .activities_lists': {
                    listStyle: 'none',
                    padding: 0,

                    '& .list_item': {
                        color: '#2f0670',
                        // borderBottom: '3px solid #2f0670',
                        boxShadow: '0.5px 3px 0px #Cacacb',
                        padding: '15px 15px',
                        marginBottom: '15px',
                        borderRadius: 8,

                    }
                }
            }
        }
    }
}))