import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useLocation } from "react-router";
import "./Singlepage.css";
import "./styles.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Context } from "../../context/Context";
import "font-awesome/css/font-awesome.min.css";
import CKEditor from "react-ckeditor-component";
import { ckEditorConfig } from "../../ckEditorConfig";
import {ckEditorRuConfig} from "../../ckEditorRuConfig"
import reactHtmlParser from "react-html-parser";
import { BsEye } from "react-icons/bs"; 
import facebookIcon from "../../assets/FB.svg";
import okIcon from "../../assets/OK.svg";
import twitterIcon from "../../assets/Twitter.svg";
import whatsappIcon from "../../assets/Whatsapp.svg";
import telegramIcon from "../../assets/TG.svg";
import { useApi } from '../../context/api'
import { useLang } from '../../context/language'
import {
  FacebookShareButton,
  OKShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

const SinglePage = () => {
  const [api] = useApi()
  const [lang] = useLang()
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const { user } = useContext(Context);
  const [updateMode, setUpdateMode] = useState(false);
  const [title, setTitle] = useState();
  const [titleRu, setTitleRu] = useState("");
  const [markdown, setDesc] = useState("");
  const [markdownRu, setDescRu] = useState("");
  const [data, setData] = useState({})

  const handleDelete = async () => {
    try {
      await axios.delete(
        `${api}/articles/${data._id}`,
        {
          data: { username: user.username },
        }
      );
      window.location.replace("/");
    } catch (err) {}
  };
  const handleUpdate = async () => {
    try {
      await axios.put(
        `${api}/articles/${data._id}`,
        {
          username: user.username,
          title: title || data.title,
          titleRu: titleRu || data.titleRu,
          markdownRu: markdownRu || data.markdownRu,
          markdown: markdown || data.markdown,
        }
      );
      setUpdateMode(false);
    } catch (err) {}
  };

  useEffect(() => {
    const getNews = async () => {
      const res = await axios.get(
        `${api}/articles/` + path
      );
      setData(res.data)
    }; 
    getNews();
  }, [path,api]);

  return (
    <div className="singlePageContent">
      {
        data && <Container>
        <Row>
          <Col>
            <div className="newsImage">
              <img src={`${api}/images/${data.newsImage}`} alt="" />
            </div>

            {updateMode ? (
             <>
			  <input
                type="text"
                defaultValue={data.title}
                className="singlePostTitleInput"
                autoFocus
                onChange={(e) => setTitle(e.target.value)}
              /> 
			  
			  <input
              type="text"
              defaultValue={data.titleRu}
              className="singlePostTitleInput"
              autoFocus
              onChange={(e) => setTitleRu(e.target.value)}
            />
			 </>
            ) : (
              <h1 className="newsTitle">
                {data && (lang === 'uz' ? data.title : data.titleRu)}
                {data.username === user?.username && (
                  <div className="singlePostEdit">
                    <Button
                      variant="outline-primary"
                      className="singlePostIcon"
                      onClick={() => setUpdateMode(true)}
                    >
                      edit
                    </Button>
                    <Button
                      variant="outline-danger"
                      className="singlePostIcon"
                      onClick={handleDelete}
                    >
                      delete
                    </Button>
                  </div>
                )}
              </h1>
            )}

            <div className="singlePostInfo">
              <span className="singlePostAuthor">
                <BsEye size={20} />
                <span id="result" >
                   0
                </span>
              </span>
              <span className="singlePostDate">
                {new Date(data.createdAt).toDateString()}
              </span>
            </div>

            {updateMode ? (
              <>
			  <div
              style={{
                minWidth: "950px",
                maxWidth: "1200px",
              }}
            >
              { data &&
				  <CKEditor
				  config={ckEditorConfig}
				  content={markdown || data.markdown}
				  events={{
					change: (event) => setDesc(event.editor.getData()),
				  }}
				  />
			  }
            </div> 
            <div
              style={{
                minWidth: "950px",
                maxWidth: "1200px",
              }}
            >
              { data &&
				  <CKEditor
				  config={ckEditorRuConfig}
				  content={markdownRu || data.markdownRu}
				  events={{
					change: (event) => setDescRu(event.editor.getData()),
				  }}
				/>
			  }
            </div>
			</>
            ) : (
              data && <div className="newsContent">{reactHtmlParser(lang === 'uz' ? data.markdown : data.markdownRu)}</div>
            )}
            {updateMode && (
              <Button className="singlePostButton" onClick={handleUpdate}>
                Update
              </Button>
            )}
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="shareContent">
              <h4 className="shareText">Поделиться</h4>
              <div className="shareIcons">
                <FacebookShareButton
                  className="socialShare telegramIcon"
                  url={`https://conas.uz/articles/${data._id}`}
                >
                  <img src={facebookIcon} alt="" />
                </FacebookShareButton>
                <OKShareButton
                  className="socialShare okIcon"
                  url={`https://conas.uz/articles/${data._id}`}
                >
                  <img src={okIcon} alt="" />
                </OKShareButton>
                <TwitterShareButton
                  className="socialShare twitterIcon"
                  url={`https://conas.uz/articles/${data._id}`}
                >
                  <img src={twitterIcon} alt="" />
                </TwitterShareButton>
                <WhatsappShareButton
                  className="socialShare whatsappIcon"
                  url={`https://conas.uz/articles/${data._id}`}
                >
                  <img src={whatsappIcon} alt="" />
                </WhatsappShareButton>
                <TelegramShareButton
                  className="socialShare whatsappIcon"
                  url={`https://conas.uz/articles/${data._id}`}
                >
                  <img src={telegramIcon} alt="" />
                </TelegramShareButton>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      }
    </div>
  );
};

export default SinglePage;
