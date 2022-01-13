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
            <main>
            <section>
                <h2>例子1</h2>
                <Layout style={{height:500}} className='layout'>
                    <Header>header</Header>
                    <Content>content</Content>
                    <Footer>footer</Footer>
                </Layout>
            </section>


            <section>
                <h2>例子2</h2>
                <Layout style={{height:500}} className='layout'>
                    <Header>header</Header>
                    <Layout style={{height:500}}>
                        <Aside>aside</Aside>
                        <Content>content</Content>
                    </Layout>
                    <Footer>footer</Footer>
                </Layout>
            </section>

                <section>
                    <h2>例子3</h2>
                    <Layout style={{height:500}} className='layout'>
                        <Aside>aside</Aside>
                        <Layout>
                            <Header>header</Header>
                            <Content>content</Content>
                            <Footer>footer</Footer>
                        </Layout>
                    </Layout>
                </section>
            </main>
        </div>
    )
}
export default x;
