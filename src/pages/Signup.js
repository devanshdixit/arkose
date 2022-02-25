import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Link } from 'react-router-dom'

const theme = createTheme()

export default function Login() {
   const handleSubmit = (event) => {
      event.preventDefault()
      const data = new FormData(event.currentTarget)
      // eslint-disable-next-line no-console
      console.log({
         email: data.get('email'),
         password: data.get('password')
      })
   }

   return (
      <ThemeProvider theme={theme}>
         <Container component="main" maxWidth="sm">
            <CssBaseline />
            <Box
               sx={{
                  marginTop: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  width: '60ch'
               }}
            >
               <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                  <LockOutlinedIcon />
               </Avatar>
               <Typography component="h1" variant="h5">
                  Sign Up
               </Typography>
               <Box
                  component="form"
                  onSubmit={handleSubmit}
                  noValidate
                  sx={{ mt: 1, width: '60ch' }}
               >
                  <TextField
                     margin="normal"
                     required
                     fullWidth
                     id="name"
                     label="Name"
                     name="email"
                     autoComplete="email"
                     autoFocus
                  />
                  <TextField
                     margin="normal"
                     required
                     fullWidth
                     id="email"
                     label="Email Address"
                     name="email"
                     autoComplete="email"
                     autoFocus
                  />
                  <TextField
                     margin="normal"
                     required
                     fullWidth
                     name="password"
                     label="Password"
                     type="password"
                     id="password"
                     autoComplete="current-password"
                  />
                  <TextField
                     margin="normal"
                     required
                     fullWidth
                     name="password"
                     label="Confirm Password"
                     type="password"
                     id="password"
                     autoComplete="current-password"
                  />
                  <TextField
                     margin="normal"
                     required
                     fullWidth
                     name="Address"
                     label="Address"
                     type="textarea"
                     id="address"
                     autoComplete="current-password"
                     multiline
                     rows={4}
                  />

                  <Button
                     type="submit"
                     fullWidth
                     variant="contained"
                     sx={{ mt: 3, mb: 2 }}
                     style={{ background: '#ff631b' }}
                  >
                     Sign Up
                  </Button>
                  <div style={{ textAlign: 'center', marginBottom: '100px' }}>
                     <Link to="/login" variant="body2">
                        {'Already have an account? Sign in'}
                     </Link>
                  </div>
               </Box>
            </Box>
         </Container>
      </ThemeProvider>
   )
}
