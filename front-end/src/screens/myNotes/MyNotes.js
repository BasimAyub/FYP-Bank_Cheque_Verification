import { React, useEffect, useState } from "react";
import MainPage from "../mainPage";
import { Link } from "react-router-dom";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import axios from "axios"
const MyNotes = () => {

  const [notes, setNotes] = useState([]);
  
  const fetchNotes=async ()=>{
    const {data} = await axios.get("/api/users/notes")
    setNotes(data);
  }

  useEffect(() => {
    fetchNotes();
  }, []);

  function deleteHandler(id) {
    if (window.confirm("Are you sure")) {
      console.log(id);
    }
  }
  return (
    <MainPage title="Welcome back user">
      <Link to="createNote">
        <Button>Create a new note</Button>
      </Link>
      {notes.map((note) => (
        <Accordion key={note._id}>
          <Accordion.Item eventKey={note._id}>
            <Card>
              <Accordion.Header>
                <Card.Header style={{ display: "flex" }}>
                  <span
                    style={{
                      color: "black",
                      textDecoration: "none",
                      flex: 1,
                      cursor: "pointer",
                      alignSelf: "center",
                      fontSize: 18,
                    }}
                  >
                    {note.title}
                  </span>
                  <div>
                    <Button href={`/notes/${note._id}`}>Edit</Button>
                    <Button
                      variant="danger"
                      onClick={() => {
                        deleteHandler(note._id);
                      }}
                    >
                      Delete
                    </Button>
                  </div>
                </Card.Header>
              </Accordion.Header>
              <Accordion.Body>
                <Card.Body>
                  <h4>
                    <Badge style={{ color: "white" }}>{note.category}</Badge>
                  </h4>
                  <blockquote className="blockquote mb-0">
                    <p>{note.content}</p>
                    <footer className="blockquote-footer">
                      Created on- Date
                    </footer>
                  </blockquote>
                </Card.Body>
              </Accordion.Body>
            </Card>
          </Accordion.Item>
        </Accordion>
      ))}
    </MainPage>
  );
};

export default MyNotes;
