import { makeStyles } from "@mui/styles"

export default makeStyles((theme)=>({
    footer: {

        '& .footer_container': {
            background: '#16213E',
            padding: '5rem 0 1rem',
            color: 'white',

            '& .footer_links_container': {

                '& .links_section': {

                    '& .link_ul': {
                        listStyle: 'none',
                        paddingLeft: 0,

                        '& .link_ul_li': {
                            marginBottom: 5,

                            '& .link_a': {
                                textDecoration: 'none',
                                cursor: 'pointer',

                                '&:hover': {
                                    color: 'white',
                                }
                            }
                        }
                    }
                }
            }
        },

        '& .footer_reserved': {
            textAlign: 'center',
            padding: '.75rem 0',
        }
    }
}))
