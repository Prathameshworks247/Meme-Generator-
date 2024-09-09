import React from "react";
import memesData from "../memesData";
export default function Meme(){
    
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    
    
    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
            }
        )
        )
    }
    return  (
        <main>

            <form className="form row">
            <div className="label1 col-4">
                    <label>Top Text</label>
                        <input
                            type="text"
                            placeholder="Shut up"
                            className="form--input"
                        />
                    
                </div>
                <div className="label2 col-6">
                    <label>Bottom Text</label>
                    <input
                    
                            type="text"
                            placeholder="and take my money"
                            className="form--input"
                        />
                </div>
                <br />
                <br />
                <br />
                <br />
                <button type = "button" onClick={getMemeImage} className="btn col-11">Get a new meme image 🖼</button>

            </form>
            <div>

                <img className= "mx-auto d-block" src={meme.randomImage} />

            </div>
        </main>
    )
}

//States are a way for react to remember saved values from within a component.
//This is similar to  declaring variables from within a component, with a few added bonuses.

//I would use props instead of state anytime I want to pass data into a component so that component can determine what will get displayed on the screen.

//3. When would you want to use state instead of props?
// Anytime you want a component to maintain some values from
// within the component. (And "remember" those values even
// when React re-renders the component).