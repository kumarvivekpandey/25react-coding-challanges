import { useEffect, useState } from "react"
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs"
import './styles.css';

export default function Imageslider({ url, limit = 5, page = 1 }) {
    const [image, setImage] = useState([])
    const [currentslide, setCurrentSlide] = useState(0)
    const [errormessage, setErrorMessage] = useState(0)
    const [loading, setLoading] = useState(0)
    async function fetchImages(geturl) {
        try {
            setLoading(true)
            const response = await fetch(`${geturl}?page=${page}&limit=${limit}`);
            const data = await response.json()
            if (data) {
                setImage(data)
                setLoading(false)
            }

        }
        catch (e) {
            setErrorMessage(e.message)
            setLoading(false)
        }
    }
    function handleprevious() {
        setCurrentSlide(currentslide === 0 ? image.length - 1 : currentslide - 1)
    }
    function handlenext() {
        setCurrentSlide(currentslide === image.length - 1 ? 0 : currentslide + 1)
    }

    useEffect(() => {
        if (url !== '')
            fetchImages(url)

    }, [url])
   
    if (loading) {
        return <div> Loading... </div>
    }
    if (errormessage) {
        return <div>we got error{errormessage} </div>
    }
    return (
        <div className="container">
            <BsArrowLeftCircleFill onClick={handleprevious} className="arrow arrow-left" />
            {image && image.length ?
                image.map((imageItem, index) => (
                    <img key={imageItem.id}
                        alt={imageItem.author} src={imageItem.download_url}
                        className={currentslide === index ? "imgg" : "imgg hide-imgg"} />
                ))

                : null

            }<BsArrowRightCircleFill onClick={handlenext} className="arrow arrow-right" />
            <span className="circle-indicator">
                {
                    image && image.length ?
                        image.map((_, index) => (
                            <button key={index}
                                className={
                                    currentslide === index ? "current-indicator" : "current-indicator inactive-indicator"
                                }
                                onClick={() => setCurrentSlide(index)}> </button>
                        )) : null
                }
            </span>

        </div>
    )

}