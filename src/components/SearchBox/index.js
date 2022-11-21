import React, { useState } from 'react';
import { Col, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';

function SearchBox(props) {
    const defaultSearch = {
        sellType: 0,
        houseType: 0,
        searchText: '',
        location: 'all',
        price: {
            from: 0,
            to: 0
        },
        status: 'all'
    }
    const [sellType, setSellType] = useState(defaultSearch.sellType)
    const [houseType, setHouseType] = useState(defaultSearch.houseType)
    const [searchText, setSearchText] = useState(defaultSearch.searchText)
    const [location, setLocation] = useState(defaultSearch.location)
    const [price, setPrice] = useState(defaultSearch.price)
    const [status, setStatus] = useState(defaultSearch.status)

    const handleClickSellType = (id) => {
        setSellType(id)
    }

    const isActiveTab = (id) => {
        return Number(id) === sellType
    }


    return (
        <div className='search-box mt-5'>
            <Nav tabs>
                <NavItem>
                    <NavLink
                        className={`${isActiveTab(0) ? 'active' : ''}`}
                        onClick={() => handleClickSellType(0)}
                    >
                        Nhà đất bán
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={`${isActiveTab(1) ? 'active' : ''}`}
                        onClick={() => handleClickSellType(1)}
                    >
                        Nhà đất cho thuê
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={`${isActiveTab(2) ? 'active' : ''}`}
                        onClick={() => handleClickSellType(2)}
                    >
                        Dự án
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={sellType}>
                <TabPane tabId={0}>
                    <Row>
                        <Col sm="12">
                            <h4>
                                Tab 1 Contents
                            </h4>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId={1}>
                    2
                </TabPane>
                <TabPane tabId={2}>
                    3
                </TabPane>
            </TabContent>
        </div>
    );
}

export default SearchBox;