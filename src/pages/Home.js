import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Button, Col, Row } from "antd";
import Galeri from '../components/Galeri';
import Navbar from '../components/Navbar';


const Home = () => {
    const color = ['#83d6a3', '#fc9b32']
    const [colorIndex, setcolorIndex] = useState(0)

    useEffect(() => {
        document.body.style.backgroundColor = color[colorIndex]

    }, [colorIndex])

    function handleChangeColorOrange(event) {
        setcolorIndex(1)
    }

    function handleChangeColorIjo(event) {
        setcolorIndex(0)
    }

    const Center = {
        textAlign: "center"
    }

    return (
        <>
            <Navbar></Navbar>
            <h1 style={Center}>Welcome</h1>
            {/* <Header name="asdasdasd" age={1} /> */}
            {/* 
            <Button onClick={handleChangeColorOrange} type="primary" style={{ backgroundColor: color[0], color: 'white' }}>
                Oren
            </Button>

            <Button onClick={handleChangeColorIjo} type="primary" style={{ backgroundColor: color[1], color: 'black' }}>
                Ijo
            </Button> */}

            {/* <Galeri /> */}
        </>
    )
}

export default Home;