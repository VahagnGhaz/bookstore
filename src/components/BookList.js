import React from 'react';
import {List} from 'antd'
import {Book} from './Book'
// import {getBooks} from "../services/bookService";
import book1 from "../assets/book1.jpg"
import book2 from "../assets/book2.jpg"   

const data = [{"bookId": "1",
                "name": "Clean Code",
                "price": "51.30",
                "image": book1,
                "author":"Robert Cecil Martin" ,
                "type":"programming",
                "description": "The first describes the principles, patterns, and practices of writing clean code. The second part consists of several case studies of increasing complexity."
            }, 
            {"bookId": "2",
                "name": "Intro to Algorithms",
                "price": "40.5",
                "image": book2   ,
                "author":"Thomas H. Cormen" ,
                "type":"programming",
                "description": "Some books on algorithms are rigorous but incomplete; others cover masses of material but lack rigor. Introduction to Algorithms uniquely combines rigor and comprehensiveness. The book covers a broad range of algorithms in depth, yet makes their design and analysis accessible to all levels of readers."
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