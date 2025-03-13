import us_img from '../../assets/imgs/us.jpeg'


function Hero() {

    return(
        <>
            <div className="bg-[#FFF8E7] p-5 text-center border-1 border-[#E4C7B7]">
                <h2 className="title-parisienne">Forever Us...</h2>
                <img src={us_img}></img>
            </div>
        </>
    )
}

export default Hero