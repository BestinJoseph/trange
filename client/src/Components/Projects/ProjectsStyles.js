import { makeStyles } from "@mui/styles";

export default makeStyles( (theme) => ({
    projects: {
        marginTop: 180,
        
        '& .project_content_ul': {
            marginBottom: 80,
            listStyle: 'none',
            paddingLeft: 0,
            
        }
    }
}))