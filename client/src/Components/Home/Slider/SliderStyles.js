import { makeStyles } from "@mui/styles"

export default makeStyles((theme)=>({
    slider: {
        height: '100vh',
        background: '#191919',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',

        '& .container': {
            // display: 'flex',
            marginTop: 60,

            '& .content_section': {
                // border: '1px solid orange',
                display: 'flex',
                alignItems: 'center',
                
                '& .content_container': {
                    // border: '1px solid orange',
                    width: 500
                }
            },

            '& .images_section': {
                // border: '1px solid orange',
                display: 'flex',
                justifyContent: 'flex-end',

                '& .image_container': {
                    height: '60vh',
                    width: 440,
                    background: 'white',
                    borderRadius: 30,
                    position: 'relative',
                    overflow: 'hidden',

                    '& .bg_slide_image': {
                        position: 'relative',
                        height: '100%',
                    },

                    '& .slide_content': {
                        position: 'absolute',
                        zIndex: 5,
                        height: '100%',
                        width: '100%',

                        '& .slide_inner_content': {
                            padding: 40, 
                            height: '100%',
                            // border: '1px solid orange',

                            '& .slide_footer': {
                                height: '82%',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'flex-end',
                            }
                        }
                    }
                },
            }
        }
    }
}))