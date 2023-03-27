import React from 'react';
import { Layout } from 'antd'
import { useSearchParams } from 'react-router-dom';
import BookDetail from '../components/BookDetail';
import book1 from "../assets/book1.jpg"
import book2 from "../assets/book2.jpg" 
import '../css/book.css'

const { Content } = Layout;

const data_list = [{
  "bookId": "1",
  "name": "Clean Code",
  "price": "51.30",
  "image": book1,
  "author": "Robert Cecil Martin",
  "type": "Programming",
  "inventory": 79,
  "description": "The first describes the principles, patterns, and practices of writing clean code. The second part consists of several case studies of increasing complexity."
},
{
  "bookId": "2",
  "name": "Intro to Algorithms",
  "price": "40.5",
  "image": book2,
  "author": "Thomas H. Cormen",
  "type": "Programming",
  "inventory": 13,
  "description": "Some books on algorithms are rigorous but incomplete; others cover masses of material but lack rigor. Introduction to Algorithms uniquely combines rigor and comprehensiveness. The book covers a broad range of algorithms in depth, yet makes their design and analysis accessible to all levels of readers."
},];


function BookDetails() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  let data = null;
  if (id === '1') {
    data = data_list[0];
  } else if (id === '2') {
    data = data_list[1];
  } else {
    return <div>Invalid book ID</div>;
  }
  // render book details using the id parameter

  return (
    <Layout className="layout">
      <Layout>
        <Content style={{ padding: '0 50px' }}>
          <div className="home-content">
            <BookDetail info={data} />
            <div className={"foot-wrapper"}>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default BookDetails;