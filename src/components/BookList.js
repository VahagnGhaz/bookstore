import React from 'react';
import {List} from 'antd'
import {Book} from './Book'
// import {getBooks} from "../services/bookService";

const data = [{"bookId": "1",
                "name": "Effective C++",
                "price": "51.30",
                "image": "https://img3.doubanio.com/view/subject/m/public/s27272780.jpg",
                "author":"梅耶" ,
                "description": "大师名著纵横二十载, 稳居任一荐书单三甲, 称职程序员傍身绝学, 通向C++精微奥妙之门。"
            }, 
            {"bookId": "2",
                "name": "C++",
                "price": "22",
                "image": "https://img3.doubanio.com/view/subject/m/public/s27272780.jpg",
                "author":"vahag" ,
                "description": "aa"
            }, ];

export class BookList extends React.Component{

    constructor(props) {
        super(props);
        this.state = {books:[]};
    }

    componentDidMount() {

        this.setState({books:data});
        // const callback =  (data) => {
        //    this.setState({books:data});
        // };
        // getBooks({"search":null}, callback);
    }

    render() {
        return (
            <List
                grid={{gutter: 10, column: 4}}
                dataSource={this.state.books}
                pagination={{
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize: 16,
                }}

                renderItem={item => (
                    <List.Item>
                        <Book info={item} />
                    </List.Item>
                )}
            />
        );
    }

}