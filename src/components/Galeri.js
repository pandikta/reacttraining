import { Card, Col, Row } from 'antd'
import React from 'react'
import { css, styled } from "styled-components";
const WrapperCard = styled(Card)`
${({ isGenap }) => isGenap ? css`background-color:blue` : css`background-color:green`
    }
`
const Galeri = () => {
    const Arr = [1, 2, 3, 4, 5, 6]
    const isGenap = (val) => {
        return val % 2
    }
    return (
        <Row>
            {
                Arr.map((item, key) => (
                    <Col span={8}>
                        <WrapperCard isGenap={isGenap(key)} >
                            <h1>asd</h1>
                        </WrapperCard>
                    </Col>
                )
                )
            }
        </Row >
    )
}

export default Galeri