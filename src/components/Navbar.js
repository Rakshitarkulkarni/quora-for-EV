import React, { useState } from 'react';
import HomeIcon from '@material-ui/icons/Home';
import FeaturedPlayListOutlinedIcon from '@material-ui/icons/FeaturedPlayListOutlined';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar, Button } from '@material-ui/core';
import LanguageIcon from '@material-ui/icons/Language';
import '../css/Navbar.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import db, { auth } from '../firebase';
import Modal from 'react-modal';
import PeopleAltOutlined from '@material-ui/icons/PeopleAltOutlined';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Input } from '@material-ui/core';
import firebase from 'firebase';

function Navbar() {
    const user = useSelector(selectUser);
    const [openModal, setOpenModal] = useState(false);
    const [input, setInput] = useState("")
    const [inputUrl, setInputUrl] = useState("")
    
    const handleQuestion = (e) => {
      e.preventDefault()

      setOpenModal(false)
      
      db.collection('questions').add({
        question : input,
        imageUrl : inputUrl,
        timestamp : firebase.firestore.FieldValue.serverTimestamp(),
        user : user,
      });

      setInput("");
      setInputUrl("");
    };

    return (
        <div className = "qHeader">
            <div className = "qHeader_logo">
                <img 
                src ='data:image/jpg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4QC8RXhpZgAASUkqAAgAAAAGABIBAwABAAAAAQAAABoBBQABAAAAVgAAABsBBQABAAAAXgAAACgBAwABAAAAAgAAABMCAwABAAAAAQAAAGmHBAABAAAAZgAAAAAAAABgAAAAAQAAAGAAAAABAAAABgAAkAcABAAAADAyMTABkQcABAAAAAECAwAAoAcABAAAADAxMDABoAMAAQAAAP//AAACoAQAAQAAAPQBAAADoAQAAQAAAPQBAAAAAAAA/+EN82h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLyc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpBdHRyaWI9J2h0dHA6Ly9ucy5hdHRyaWJ1dGlvbi5jb20vYWRzLzEuMC8nPgogIDxBdHRyaWI6QWRzPgogICA8cmRmOlNlcT4KICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0nUmVzb3VyY2UnPgogICAgIDxBdHRyaWI6Q3JlYXRlZD4yMDIxLTA5LTIxPC9BdHRyaWI6Q3JlYXRlZD4KICAgICA8QXR0cmliOkV4dElkPmI0YWQ0ODhiLTA1ZmEtNDI2Ni04NDJlLTQ1NGIwYmRlNGI1YTwvQXR0cmliOkV4dElkPgogICAgIDxBdHRyaWI6RmJJZD41MjUyNjU5MTQxNzk1ODA8L0F0dHJpYjpGYklkPgogICAgIDxBdHRyaWI6VG91Y2hUeXBlPjI8L0F0dHJpYjpUb3VjaFR5cGU+CiAgICA8L3JkZjpsaT4KICAgPC9yZGY6U2VxPgogIDwvQXR0cmliOkFkcz4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6ZGM9J2h0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvJz4KICA8ZGM6dGl0bGU+CiAgIDxyZGY6QWx0PgogICAgPHJkZjpsaSB4bWw6bGFuZz0neC1kZWZhdWx0Jz5RdW9yYSBvbiBFVjwvcmRmOmxpPgogICA8L3JkZjpBbHQ+CiAgPC9kYzp0aXRsZT4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6cGRmPSdodHRwOi8vbnMuYWRvYmUuY29tL3BkZi8xLjMvJz4KICA8cGRmOkF1dGhvcj5Tb3diaGFneWEgSmFuYXJkaGFuPC9wZGY6QXV0aG9yPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczp4bXA9J2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8nPgogIDx4bXA6Q3JlYXRvclRvb2w+Q2FudmE8L3htcDpDcmVhdG9yVG9vbD4KIDwvcmRmOkRlc2NyaXB0aW9uPgo8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg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'
                alt=" "
                />
            </div>
            <div className = "qHeader_icons">
                <div className = "qHeader_icon">
                    <HomeIcon />
                </div>

            <div className = "qHeader_icon">
                <FeaturedPlayListOutlinedIcon />
            </div>
            <div className = "qHeader_icon">
                <AssignmentTurnedInOutlinedIcon />
            </div>
            <div className = "qHeader_icon">
                <PeopleAltOutlinedIcon />
            </div>
            <div className = "qHeader_icon">
                <NotificationsOutlinedIcon />
            </div>
            <div className = "qHeader_input">
                <SearchIcon />
                <input type = "text" placeholder ="Search Quora" />
            </div>
            </div>
            <div  className = 'qHeader_Rem'>
                <div className = 'qHeader_avatar'>
                  <Avatar onClick = {() => auth.signOut()} src = {user.photo} />
            </div>
                <LanguageIcon />
                <Button onClick = {() => setOpenModal(true)}>Add Question</Button>
                 <Modal
                   isOpen = {openModal}
                   onRequestClose = {() => setOpenModal(false)}
                   shouldCloseOnOverlayClick = {false}
                   style = {{
                     overlay: {
                       width: 700,
                       height: 600,
                       backgroundColor: "rgba(0,0,0,0.8)",
                       zIndex:"1000",
                       top: "50%",
                       left:"50%",
                       marginTop: "-300px",
                       marginLeft: "-350px",
                     },  
                   }}
                 >
                   <div className = "modal_title">
                      <h5>Add Question</h5>
                      
                      <div className = "modal_info">
                          <Avatar 
                             className = "avatar" 
                             src = {user.photo}
                             />
                             <p>{user.displayName ? user.displayName : 
                             user.email} asked</p>
                            <div className = "modal_scope">
                               <PeopleAltOutlined />
                               <p>Public</p>
                               <ExpandMore />
                            </div>
                       </div>
                       <div className = "modal_FieldLink">
                           <Input 
                             required
                             value =  {input}
                             onChange= {(e) => setInput(e.target.value)}
                             type = "text"
                             placeholder = "Start your question with 'What', 'How', 'Why' etc."
                           />
                        </div>
                        
                        <div className = "modal_buttons">
                           <button onClick = {() => setOpenModal(false)}>Close</button>
                           <button onClick = {handleQuestion} 
                           type = "submit" className = "add">Add Question</button>
                        </div>
                       
                    </div>
                 </Modal>
                
             </div>

        </div>
    )
}

export default Navbar
