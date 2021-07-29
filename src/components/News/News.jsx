import React, { useState, useEffect, Fragment } from "react"
import { Container } from "react-bootstrap"
import { Swiper, SwiperSlide } from "swiper/react"
import { BsChevronLeft, BsChevronRight, BsArrowRight } from "react-icons/bs"
import "swiper/swiper.min.css"
import "swiper/components/navigation/navigation.min.css"
import "./news.css"
import SwiperCore, { Navigation } from "swiper/core"
import axios from "axios"
import { Link } from "react-router-dom"
import reactHtmlParser from "react-html-parser"
import { useApi } from "../../context/api"
import { useLang } from '../../context/language.jsx'
import { useTranslation } from "react-i18next";

SwiperCore.use([Navigation])

const News = () => {
  const { t } = useTranslation();

  const [articles, setArticles] = useState([])
  const [api] = useApi()
  const [lang] = useLang()
  
  async function getArticles(api) {
    const articleRes = await axios.get(api + "/articles")
    setArticles(articleRes.data)
  }

  useEffect(() => {
    getArticles(api)
  }, [api])

  function renderList(articles) {
    return articles.map((article, i) => <Fragment key ={i}>
	<SwiperSlide key={i}>
	  <div className="CartItem">
		<div className="cartImageBox">
		  <img
			src={api + '/images/' + article.newsImage}
			className="imageSection2"
			alt={article.title}
		  />
		</div>

		<h4 className="title">
		  {
		  article && article.title.length >= 50
			? (lang === 'ru' ?
			article.titleRu.substring(0, 50) + "..." :
			article.title.substring(0, 50) + "..."
			)
			: (lang === 'ru' ? article.titleRu : article.title)
			}
		</h4>
		<div className="desc">
		  {article.markdown.length >= 150
			? reactHtmlParser((lang === 'ru' ?
			article.markdownRu.substring(0, 150) + "..." :
			article.markdown.substring(0, 150) + "..." ))
			: reactHtmlParser(lang === 'ru' ? article.markdownRu : article.markdown)}
		</div>

		<hr />
		<div className="read-more">
		  <Link to={`/articles/${article._id}`}>
			{t("AboutCompany.readmore")}
			<BsArrowRight className="bsArrowRight" />
		  </Link>
		</div>
	  </div>
	</SwiperSlide>
  </Fragment>)
  }

  return (
    <div className="newsContent">
      <Container>
        <h2 className="MainTitle">{t("Menu.news")}</h2>
        <hr />
        <div className="MainContent">
          <div className="swiperArrows">
            <div className="arrows left">
              <BsChevronLeft className="bsIcon" />
            </div>
            <div className="arrows right">
              <BsChevronRight className="bsIcon" />
            </div>
          </div>

          <div className="swiperRow">
            <Swiper
              breakpoints={
                (true,
                {
                  // when window width is >= 320px
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  // when window width is >= 480px
                  480: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  // when window width is >= 640px
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  990: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                })
              }
              spaceBetween={30}
              slidesPerGroup={1}
              loop={true}
              centeredSlides={true}
              loopFillGroupWithBlank={true}
              navigation={
                (true,
                {
                  prevEl: ".swiperArrows .left",
                  nextEl: ".swiperArrows .right",
                })
              }
              className="newsSwiper"
            >
              {renderList(articles)}
            </Swiper>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default News
