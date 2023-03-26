import React from 'react';
import {Layout, Carousel} from 'antd'
import {HeaderInfo} from "../components/HeaderInfo";
import {SideBar} from "../components/SideBar";
import '../css/bookDetail.css'
import { useSearchParams } from 'react-router-dom';
import BookDetail from '../components/BookDetail';
import book1 from "../assets/book1.jpg"
import book2 from "../assets/book2.jpg"   


const { Header, Content, Footer } = Layout;

const data_list = [{"bookId": "1",
                "name": "Clean Code",
                "price": "51.30",
                "image": book1,
                "author":"Robert Cecil Martin" ,
                "type":"Programming",
                "inventory": 79,
                "description": "The first describes the principles, patterns, and practices of writing clean code. The second part consists of several case studies of increasing complexity."
            }, 
            {"bookId": "2",
                "name": "Intro to Algorithms",
                "price": "40.5",
                "image": book2   ,
                "author":"Thomas H. Cormen" ,
                "type":"Programming",
                "inventory": 13,
                "description": "Some books on algorithms are rigorous but incomplete; others cover masses of material but lack rigor. Introduction to Algorithms uniquely combines rigor and comprehensiveness. The book covers a broad range of algorithms in depth, yet makes their design and analysis accessible to all levels of readers."
            }, ];

// class BookView extends React.Component{

//     constructor(props) {
//         super(props);

//         this.state = {books:null};
//     }

//     componentDidMount(){
//         // let user = localStorage.getItem("user");
        
//         this.setState({user:user});
//         const { id } = this.props.location.query;
//         // const location = useLocation();
//         // const searchParams = new URLSearchParams(location.search);
//         // const id = searchParams.get('id');

//         // const query = this.props.location.search;
//         // const arr = query.split('&');
//         // const bookId = arr[0].substr(4);
//         // this.setState({bookInfo: data})
//         // getBook(bookId, (data) => {this.setState({bookInfo: data})})
//     }

//     render(){
//         return(
        //     <Layout className="layout">

        //         <Header>
        //             <HeaderInfo />
        //         </Header>
        //         <Layout>
        //             <SideBar />
        //             <Content style={{ padding: '0 50px' }}>
        //                 <div className="home-content">
        //                     <BookDetail info={data} />

        //                     <div className={"foot-wrapper"}>
        //                     </div>
        //                 </div>
        //             </Content>
        //         </Layout>
        //     </Layout>
        // );
//     }
// }

// export default BookView;


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