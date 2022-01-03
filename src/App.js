import {React, useEffect, useState} from 'react'
import apiaudio from 'apiaudio'

apiaudio.configure({ apiKey: "1bbba608c42f4c1388e3a2144a2d9720" });

const App = ()=> {
  
  const [formData, setFormData] = useState({
    text: "",
    speaker: "",
    template: ""
  })

  const handleChange = (e)=> {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData)
  };
  
  const speaker = ["ryan", "libby", "aria", "guy", "david", "elvira","matthias", "ingrid", "pauline", "henri", "alena", "dmitry"]
  const speakers = speaker.map(element => {
    return (
    <option value={element}>{element.toUpperCase()}</option>)})
  const template = ["copacabana", "breakingnews", "hautecuisine", "openup", "curtaincall", "fairytale", "hotwheels"]
  const templates = template.map(element => {
    return (
    <option value={element}>{element.toUpperCase()}</option>)})
  
  useEffect(()=> 
  
  async function audioAds() {
    
    const text = `
    <<soundSegment::intro>>
    <<sectionName::hello>> 
    If you have any plans for today, cancel them, this really is the final call!  
    <<soundSegment::main>>
    <<sectionName::main1>> 
    We're clearing out all remaining 2021 Sords at Ottawa's top volume Sord dealers. These are the last days for clear out pricing and amazing clear out incentives. Zero percent financing for up to 84 months, and up to 7700 in cash price adjustments on all 2021 Sords at Sord on Bank street! Pick one of the 92 Santa Fays in stock, a family-sized SUV with all-wheel drive and back-up cameras from just $85 weekly, zero down!
    It's the easiest time to get into a new Sord, but these deals won't be around for long, ONLY until midnight TONIGHT! At Bank street Sord, better cars for passionate car drivers. <break time="1s"/>
    `;
    try {
      const script = await apiaudio.Script.create({
        scriptText: text,
      });
      console.log(script);
  
    } catch (e) {
      console.error(e);
    }
  }
  
  )
  return (
    <>
      <h1>BUILD AUDIO IN SECONDS</h1>
      <span>Type Anything and choose your speaker</span>
      <input type="text" name="text" placeholder="kindly enter your text here"  value={formData.text} onChange={handleChange}/>
      <select name="speaker" value={formData.speaker} onChange={handleChange}>
        {speakers}
      </select>
      <span>Choose a template and create your audio</span>
      <select name="template"  value={formData.template} onChange={handleChange}>
        {templates}
      </select>
    </>
  )
}

export default App;
