import Loader from "../../components/loader/Loader"
import { ApodType } from "../../types/types"

interface PropsType {
    data: ApodType
}

const Apod = ({data}: PropsType) => {
    return (
        <>
            {!data && <Loader/>}
            {data && 
                <div>
                    <img src={data.url} alt="" />
                    <p>{data.date}</p>
                    <h2>{data.title}</h2>
                    <h3>{data.explanation}</h3>
                </div>
            }
        </>
    )
}

export default Apod