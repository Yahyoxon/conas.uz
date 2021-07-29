import React, { useContext, useState } from "react";
import "./write.css";
import axios from "axios";
import { Context } from "../../context/Context";
import { Container, Row, Col } from "react-bootstrap";
import NavbarAdmin from "../../components/NavbarAdmin/NavbarAdmin";
import { FcAddImage } from "react-icons/fc";
import CKEditor from "react-ckeditor-component";
import {ckEditorConfig} from "../../ckEditorConfig";
import {ckEditorRuConfig} from "../../ckEditorRuConfig";
import { useApi } from "../../context/api";
export default function Write() {
  const [title, setTitle] = useState("");
  const [titleRu, setTitleRu] = useState("");
  const [markdown, setDesc] = useState("");
  const [markdownRu, setDescRu] = useState("");
  const [file, setFile] = useState(null);
  const [tabTapped, setTabTapped] = useState('uz');
  const [api] = useApi()
  
  const { user } = useContext(Context);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newArticle = {
      username: user.username,
      title,
	  titleRu,
      markdown,
	  markdownRu
    };
  
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newArticle.newsImage = filename;
      try {
        await axios.post(api + "/images/", data)
      } catch (err) {
        console.log("Rasmni yuklashda muammo bor!!!");
      }
    }
    try {
      const res = await axios.post(api+"/articles/", newArticle);
        window.location.replace("/articles/" + res.data._id);
      } catch (err) {
      }
    };

    return (
      <>
      <NavbarAdmin />
      <Container>
        <Row>
          <Col>
            <div className="write">

				<div className="tab-bar">
					<button className={`tab-bar-item ${tabTapped === 'uz' ? 'active' : ''}`} onClick={()=>{setTabTapped('uz')}}>UZ</button>
					<button className={`tab-bar-item ${tabTapped === 'ru' ? 'active' : ''}`} onClick={()=>{setTabTapped('ru')}}>RU</button>
				</div>

              {file && (
                <img
                className="writeImg"
                src={URL.createObjectURL(file)}
                alt=""
                />
                )}
				
              <form className="writeForm" onSubmit={handleSubmit}>
				
				<div className="uzLanguage" style={{display: tabTapped === 'uz' ? 'block' : 'none'}}>
				<div className="writeFormGroup">
                  <label htmlFor="fileInput">
                    <FcAddImage style={{ color: "blue", fontSize: "50px" }} />
                    <i className="writeIcon">Добавить баннер</i>
                  </label>
                  <input
                    type="file"
                    id="fileInput"
                    style={{ display: "none" }}
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                  <input
                    type="text"
                    placeholder="Title (uz)"
                    className="writeInput"
                    autoFocus={true}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div
                  style={{
                    minWidth: "950px",
                    maxWidth: "1200px",
                  }}
                >
                  <CKEditor
                    config={ckEditorConfig}
                    content={markdown}
                    events={{
                      change: event => setDesc(event.editor.getData()),
                    }}
                  />
                </div>
				</div>

				<div className="ruLanguage" style={{display: tabTapped === 'ru' ? 'block' : 'none'}}>


				<div className="writeFormGroup">
                  <label htmlFor="fileInput">
                    <FcAddImage style={{ color: "blue", fontSize: "50px" }} />
                    <i className="writeIcon">Добавить баннер</i>
                  </label>
                  <input
                    type="file"
                    id="fileInput"
                    style={{ display: "none" }}
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                  <input
                    type="text"
                    placeholder="Title (ru)"
                    className="writeInput"
                    autoFocus={true}
                    onChange={(e) => setTitleRu(e.target.value)}
                  />
                </div>
                <div
                  style={{
                    minWidth: "950px",
                    maxWidth: "1200px",
                  }}
                >
                  <CKEditor
                    config={ckEditorRuConfig}
                    content={markdownRu}
                    events={{
                      change: event => setDescRu(event.editor.getData()),
                    }}
                  />
                </div>


				</div>
                <button className="writeSubmit" type="submit">
                  Публиковать
                </button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
