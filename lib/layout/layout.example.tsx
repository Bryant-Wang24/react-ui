import React from 'react'
import Layout from "./layout";
import Aside from "./aside";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";

const x: React.FC = () => {
    return (
        <div>
            <h1>第四个例子</h1>
            <Layout>
                <Aside>aside</Aside>
                <Layout>
                    <Header>header</Header>
                    <Content>content</Content>
                    <Footer>footer</Footer>
                </Layout>
            </Layout>
        </div>
    )
}
export default x;
