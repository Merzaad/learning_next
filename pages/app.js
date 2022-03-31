import * as React from "react"
import Box from "@mui/material/Box"
import LoadingButton from '@mui/lab/LoadingButton'

const styles = {
  loadingButton : {
    fontSize: '25px',
    color: '#141E27',
    background: '#E2D784',
    transitionDuration: '0.3s',
    ':hover': {
      background: '#141E27',
      color:'#E2D784',
    }
  },
  box: {
    width: '50%',
    fontSize:'25px',
    fontFamily: 'arial',
    textAlign: "center",
    border: "1px solid black",
    borderRadius: "10px",
    margin: "auto",
    padding: "20px",
    background: '#203239',
    color: 'white',
    transition: 'width 1s',
    '@media only screen and (max-width: 600px)':{
      width: '80%'
    }
  },
}

const App = () => {
  const [title, setTitle] = React.useState("zero")
  const [count, setCount] = React.useState(0)

  const delay = () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(1), 2000)
    })

  const clickHandler = async () => {
    if (title === "counting") return
    setTitle("counting")
    const res = await delay()
    setCount((prev) => prev + res)
    setTitle("done")
  }

  React.useEffect(() => {
    console.log("counted")
  }, [count])

  return (
    <Box
      sx={styles.box}
    >
      <h1>{title}</h1>
      <p>{count}</p>
       <LoadingButton
        sx={styles.loadingButton}
        onClick={clickHandler}
        loading={title === 'counting'}
        loadingPosition="center"
        variant="contained"
      >
        +1
      </LoadingButton>
    </Box>
  )
}
export default App

