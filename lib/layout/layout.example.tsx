import React from 'react'
import Layout from "./layout";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";
import Aside from "./aside";

const x: React.FC = () => {
    return (
        <div>
            <h1>第四个例子</h1>
            <Layout style={{height:500}} className='layout'>
                <Aside>aside</Aside>
                <Header>header</Header>
                <Content>content</Content>
                <Footer>footer</Footer>
            </Layout>
        </div>
    )
}
export default x;
