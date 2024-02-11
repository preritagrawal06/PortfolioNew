import { createTheme } from "@mui/material";

const theme = createTheme({
    typography:{
        allVariants:{
            fontFamily:"'Noto Sans', sans-serif",
            color:'	#343434'
        }
    },
    components:{
        MuiButton:{
            defaultProps:{
                disableElevation: true,
                disableRipple: true
            },
            styleOverrides:{
                root:{
                    backgroundColor:"#343434",
                    borderRadius:0,
                    textTransform:"none",
                    ":hover":{
                        backgroundColor: "#343434"
                    }
                },
            }
        },
        MuiIconButton:{
            defaultProps:{
                disableRipple: true
            },
            styleOverrides:{
                root:{
                    border:"1px solid #343434",
                    borderRadius: 0,
                    color: "#343434",
                    transition:"all 0.2s ease-in",
                    ":hover":{
                        backgroundColor:"#F5F5F5"
                    },
                }
            }
        }
    }
})

export default theme