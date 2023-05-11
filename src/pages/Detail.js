import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { styled } from "styled-components";
import { Button, Card } from 'antd';
const ProfileCard = styled(Card)`
margin-top:10px;
margin-left:10px;
margin-right:10px;
width:300px;
`
function User() {
    const color = ['#fc9b32']
    const [colorIndex, setcolorIndex] = useState(0)
    const { id } = useParams()
    const [UserDetail, setUserDetail] = useState({})

    useEffect(() => {
        axios.get(`https://api.github.com/users/${id}`).then((data) => {
            setUserDetail(data.data)
        })
    }, []);

    useEffect(() => {
        document.body.style.backgroundColor = color[colorIndex]

    }, [colorIndex])
    return (
        <>
            <Navbar></Navbar>
            <div className="site-card-border-less-wrapper">
                <ProfileCard >
                    <img src={UserDetail.avatar_url} style={{ width: 100, borderRadius: 50 }}></img>
                    <h3>{UserDetail.name}</h3>
                </ProfileCard>
                <Link to={"/user"}>
                    <Button type='primary' style={{ marginLeft: 10, marginTop: 10 }}>Back</Button>
                </Link>
            </div>
        </>
    )
}

export default User