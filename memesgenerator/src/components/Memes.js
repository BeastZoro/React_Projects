import React, { useEffect, useState } from "react";

const memeUrl = 'https://api.imgflip.com/get_memes'

const Memes = () => {
  const [memes, setMemes] = useState({
    topText: "",
    bottomText: "",
    randomMeme: "",
  });

  const [memeImage, setMemeImage] = useState([])

  const getRandomMeme = () =>{
    const randome = Math.floor(Math.random() * memeImage.length)
    const randomUrl = memeImage[randome].url;
    setMemes(preState =>({
        ...preState,
        randomMeme : randomUrl
    }))
  }

  console.log(memeImage)

  useEffect(() =>{
     const getMemes = async () =>{
      const response = await fetch(memeUrl)
      const dataArray = await response.json()
      setMemeImage(dataArray.data.memes)
    } 
    getMemes()
  }, [])

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMemes((preState) => {
      return {
        ...preState,
        [name]: value,
      };
    });
  };

  // 
  return (
    <main>
      <div className="form">
        <input
          type="text"
          name="topText"
          value={memes.topText}
          onChange={handleChange}
        />

        <input
          type="text"
          name="bottomText"
          value={memes.bottomText}
          onChange={handleChange}
        />

        <button onClick={getRandomMeme}>Get Random Meme</button>
      </div>
      <div className="memes">
        <img src={memes.randomMeme} className="meme-img" />
        <h2 className="text top">{memes.topText}</h2>
        <h2 className="text bottom">{memes.bottomText}</h2>
      </div>
    </main>
  );
};

export default Memes;
