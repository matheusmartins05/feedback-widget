interface TypesFeedbackProps{
    imgFeedback: string
    nameFeedback: string
}

export default function TypesFeedback({imgFeedback, nameFeedback} : TypesFeedbackProps){
    return(
        <div>
            <img src={imgFeedback} alt={nameFeedback} />
            <h3>{nameFeedback}</h3>
        </div>
    )
}