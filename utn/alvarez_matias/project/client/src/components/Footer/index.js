import { AppBar } from "@mui/material";


export default function Footer() {
    return (
        <AppBar position="static" sx={{
            minHeight: '4vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            bottom: 0,
        }}>
            Hecho por Matias
        </AppBar>
    )
}