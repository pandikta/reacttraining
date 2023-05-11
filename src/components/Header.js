import React, { useEffect, useState } from 'react'
import { Typography, Card, Row, Col } from "antd";
import axios from 'axios';
import { styled } from "styled-components";
import { Link } from 'react-router-dom';

const { title, Text } = Typography
const ProfileCard = styled(Card)`
margin-top:10px;
margin-left:10px;
margin-right:10px
`


export const Header = ({ name, age }) => {
    // const [counterAge, setCounterAge] = useState(age)
    // const [employee, setEmployee] = useState({ name: "asd", alamat: "xx" })
    const [user, setUser] = useState([])
    // const handleCounterAge = (event) => {
    //     setCounterAge((prevstate) => prevstate + 1)
    // }

    // const handleSetStateObject = (val) => {
    //     setEmployee((prevstate) => ({ ...prevstate, alamat: val.target.value }))
    // }

    useEffect(() => {
        axios.get("https://api.github.com/users").then((data) => {
            setUser(data.data)
        }).catch((err) => {
            console.log(err);
        })
    }, [])
    // console.log(user);
    return (

        <>
            <Row>
                {
                    user.map((item, key) => (
                        <Col span={6}>
                            <div className="site-card-border-less-wrapper">
                                <Link to={`/user/${item.login}`}>
                                    <ProfileCard >
                                        <img src={item.avatar_url} style={{ width: 100, borderRadius: 50 }}></img>
                                        <h3>{item.login}</h3>
                                    </ProfileCard>
                                </Link>
                            </div>
                        </Col >
                    ))
                    // user.map((item, key) => (
                    //     <Col span={6}>
                    //         <div className="site-card-border-less-wrapper">
                    //             <ProfileCard title={user.name} bordered={false} style={{ width: 300 }}>
                    //                 <img src={user.avatar_url} style={{ width: 80 }}></img>
                    //                 <p>Github Url : <a href={user.html_url}>{user.html_url}</a></p>
                    //             </ProfileCard>
                    //         </div>
                    //     </Col>
                    // )
                    // )
                }
            </Row >
            {/* <div className="site-card-border-less-wrapper">
                <ProfileCard title={user.name} bordered={false} style={{ width: 300 }}>
                    <img src={user.avatar_url} style={{ width: 80 }}></img>
                    <p>Github Url : <a href={user.html_url}>{user.html_url}</a></p>
                </ProfileCard>
            </div> */}
            {/* 
            <div>Nama : {name}</div>
            <div>Umur : {counterAge}</div>
            <Button type="primary" onClick={handleCounterAge}>Coba Klik Saya !</Button>
            <h1>Employee</h1>
            <Text>
                nama : {employee.name}
            </Text>
            <Text>
                alamat : {employee.alamat}
            </Text>
            <Input type="text" onChange={handleSetStateObject} />
            <Input type="text" /> */}
        </>
    )
}


export default Header