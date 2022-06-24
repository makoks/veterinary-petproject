import React from 'react';
import './App.css';
import '@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css';
import MainPage from "./components/MainPage/MainPage";
import FormPage from "./components/FormPage/FormPage";
import Navigation from "./components/Navigation/Navigation";
import 'antd/dist/antd.css';
import {
    Switch,
    Route
} from "react-router-dom";
import {Layout} from 'antd';

const { Header, Content, Footer } = Layout;

const App = () => {
    return (
        <Layout className="layout">
            <Header>
                <Navigation/>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <div className="site-layout-content">
                    <Switch>
                        <Route path='/main'>
                            <MainPage/>
                        </Route>
                        <Route path='/form'>
                            <FormPage/>
                        </Route>
                    </Switch>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>©2022 Created by grekova-web</Footer>
        </Layout>
    );
};

export default App;
