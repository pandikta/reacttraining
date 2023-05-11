import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

function User() {
    const color = ['#fc9b32']
    const [colorIndex, setcolorIndex] = useState(0)

    useEffect(() => {
        document.body.style.backgroundColor = color[colorIndex]

    }, [colorIndex])
    return (
        <>
            <Navbar></Navbar>
            <Header></Header>
        </>
    )
}

export default User