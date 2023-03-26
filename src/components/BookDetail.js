import React from 'react';
import "../css/bookDetail.css"
import { List, Descriptions, Button } from 'antd';
import { Link } from 'react-router-dom';

export default class BookDetail extends React.Component {


    render() {

        const { info } = this.props;

        if (info == null) {
            return null;
        }

        return (
            <div className="content">
                <Button type="primary">
                    <Link to="/">Back</Link>
                </Button>
                <List
                    grid={{ gutter: 16, column: 2 }}
                    dataSource={[
                        {
                            title: '',
                            content: <img alt="book cover" src={info.image} style={{ width: '100%' }} />,
                        },
                        {
                            title: 'Name',
                            content: info.name,
                        },
                        {
                            title: 'Author',
                            content: info.author,
                        },
                        {
                            title: 'Type',
                            content: info.type,
                        },
                        {
                            title: 'Price',
                            content: <span className="price">{'¥' + info.price}</span>,
                        },
                        {
                            title: 'State',
                            content: info.inventory !== 0 ? (
                                <span>
                                    In stock <span className="inventory">{info.inventory} left</span>
                                </span>
                            ) : (
                                <span className="status">Sold Out</span>
                            ),
                        },
                        {
                            title: 'Introduction',
                            content: info.description,
                        },
                    ]}
                    renderItem={(item) => (
                        <List.Item>
                            <Descriptions title={item.title} bordered>
                                <Descriptions.Item span={3}>{item.content}</Descriptions.Item>
                            </Descriptions>
                        </List.Item>
                    )}
                />

                <div className="button-groups">
                    <Button type="danger" icon="shopping-cart" size="large">
                        Add to Cart
                    </Button>
                    <Button type="danger" icon="pay-circle" size="large" style={{ marginLeft: '15%' }} ghost>
                        Buy it now
                    </Button>
                </div>
            </div>
        );

    }

}
