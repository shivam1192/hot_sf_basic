import React, { useContext,useState } from 'react';
import { Container, Row,Col, Card, Button, Modal } from 'react-bootstrap';
import InfiniteScroll from "react-infinite-scroll-component";
import { DataContext } from '../Context/DataContext';
import '../App.css';
import { BiUpArrowAlt } from "react-icons/bi";


const ShowQuestion = () =>{
    const {data,setData,page,setPage} = useContext(DataContext)
    const [show, setShow] = useState(false);
    const [scrollTop, setscrollTop] = useState(0);

    
    const [pop,setPop] = useState({
        "tags": [
        "javascript",
        "loops",
        "object"
        ],
        "owner": {
        "reputation": 87,
        "user_id": 9676402,
        "user_type": "registered",
        "profile_image": "https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg?sz=128",
        "display_name": "Cody Smith",
        "link": "https://stackoverflow.com/users/9676402/cody-smith"
        },
        "is_answered": true,
        "view_count": 20,
        "accepted_answer_id": 65213724,
        "answer_count": 3,
        "score": 0,
        "last_activity_date": 1607505608,
        "creation_date": 1607504442,
        "question_id": 65213578,
        "content_license": "CC BY-SA 4.0",
        "link": "https://stackoverflow.com/questions/65213578/push-comma-separated-string-to-new-property-in-object",
        "title": "Push comma separated string to new property in object"
        });
  
    const handleClose = () => setShow(false);
    const handleShow = () =>{
        setShow(true);
    } 
    const onScroll = () => {
        const scrollY = window.scrollY 
        const scrollTop = this.myRef.current.scrollTop
        console.log(`onScroll, window.scrollY: ${scrollY} myRef.scrollTop: ${scrollTop}`)
        setscrollTop(scrollTop)
      }
    return(
        <>
            <Container>
                <Row>
                    <Col lg="12">
                                        {data?<>
                                            <InfiniteScroll
          dataLength={data.length}
          next={()=>{console.log("hellow orld")
          let p = page+1;
            setPage(p)
        }}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >   
                        {data.map((data,key)=>{
                            return (
                                <>
                                <Card onClick={() =>{
                                    handleShow()
                                    setPop(data)
                                }}>
                        <Card.Body>
                            <Row>
                                <Col lg="4" style={{textAlign:'center'}}>
                                <img src={data.owner.profile_image}/><br/><br/>
                                <h5>{data.owner.display_name}</h5>
                                </Col>
                                <Col lg="8">
                                <h5>{data.title}</h5>
                                {data.tags.map((tag)=>{
                                    return (
                                        <>
                                            <h5 style={{display:'inline', fontSize:'15px'}} className="tags">{tag}</h5>
                                        </>
                                    )
                                })}
                                <BiUpArrowAlt/>{data.score}
                                </Col>
                            </Row>
                        </Card.Body>
                        </Card>
                        <br/>
                        </>
                            )
                        })}
                        </InfiniteScroll>
                        </>:<>Loading..</>}
                    </Col>
                </Row>
            </Container>
            <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
                    <Modal.Title>{pop.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Row>
                                <Col lg="4" style={{textAlign:'center'}}>
                                <img src={pop.owner.profile_image}/><br/><br/>
                                <h5>{pop.owner.display_name}</h5>
                                </Col>
                                <Col lg="8">
                    <h5> Views:  {pop.view_count} Asked at:  10:12</h5>
                                    {pop.is_answered?<>Answered</>:<>Not Answered</>}<br/>
                                {pop.tags.map((tag)=>{
                                    return (
                                        <>
                                            <h5 style={{display:'inline', fontSize:'15px'}} className="tags">{tag}</h5>
                                        </>
                                    )
                                })}
                                <BiUpArrowAlt/>{pop.score}
                                </Col>
                            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="warning">
                <a href={pop.link}> View on Stackoverflow</a>
            </Button>
          </Modal.Footer>
        </Modal>
        </>
    )
}
export default ShowQuestion;

