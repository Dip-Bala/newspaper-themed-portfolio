import React from 'react'
import LatestNewsComp from '../components/latestnews/LatestNewsComp'

const news = [
    "Dipanwita graduated from Indira Gandhi Delhi Technical University for Women with a B.Tech degree in Electronics and Communication Engineering -- Artificial Intelligence this May of 2025. Many nany congratulations to her.",
    `Dipanwita's Research paper on the title "Audio Deepfake Detection using MFCC Features and CNN-BiLSTM" got accepted in the conference ISCAI`
]
export default function LatestNews(){
    return (
        <div>
            {
                news.map((n) => {
                    return <LatestNewsComp text={n} /> 
                })
            }
        </div>
    )
}