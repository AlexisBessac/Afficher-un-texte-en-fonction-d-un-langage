import { createContext, useState, useContext } from "react";


const LanguageContext = createContext(null);


function getHelloText(language) {
 switch (language) {
   case "Francais":
     return "Bonjour";
   case "English":
     return "Hello";
   case "Deutsch":
     return "Hallo";
   default:
     return "Hello";
 }
}


function ButtonLanguage({ text }) {
 const { setLanguage } = useContext(LanguageContext);
 const onClick = () => setLanguage(text);
 return <button style={{ marginTop: '10px' }} variant="contained" color="primary" size="medium"  onClick={onClick}>{text}</button>;
}


function HelloText() {
 const { language } = useContext(LanguageContext);
 return <h1>{getHelloText(language)}</h1>;
}


function App() {
 const [language, setLanguage] = useState("English");


 return (
   <LanguageContext.Provider
     value={{
       language: language,
       setLanguage: (languageNew) => setLanguage(languageNew),
     }}
   >
     <div>
       <ButtonLanguage text="Francais" />
       <ButtonLanguage text="English" />
       <ButtonLanguage text="Deutsch" />
     </div>
     <HelloText />
   </LanguageContext.Provider>
 );
}


export default App;

