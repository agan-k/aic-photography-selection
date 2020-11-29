import React, { Component } from "react"

// =========== PHOTOGRAPHERS =============================
import Photogs from "./components/Photogs"
import Winogrand from "./components/Winogrand/Winogrand"
import Arbus from "./components/Arbus/Arbus"
import Koudelka from "./components/Koudelka/Koudelka"
import Friedlander from "./components/Friedlander/Friedlander"
import Bresson from "./components/Bresson/Bresson"
import Evans from "./components/Evans/Evans"
import Frank from "./components/Frank/Frank"
import Leiter from "./components/Leiter/Leiter"
import Davidson from "./components/Davidson/Davidson"
import Mann from "./components/Mann/Mann"
import Model from "./components/Model/Model"
import Bravo from "./components/Bravo/Bravo"
import Levitt from "./components/Levitt/Levitt"
import Brandt from "./components/Brandt/Brandt"

// =======================================================
import Home from "./components/Home"
import Links from "./components/Links"
import Header from "./components/Header"
import Footer from "./components/Footer"

import axios from "axios"
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import photogsData from './components/photogsData'
import './SharedStyle.css'

class App extends Component {
  constructor() {
    super()
     this.state = {        
         selectPhotog: null,
         collection_api: null,
         collection: [],
         
         winogrand_collection: [],
         arbus_collection: [],
         koudelka_collection: [],
         friedlander_collection: [],
         bresson_collection: [],
         frank_collection: [],
         evans_collection: [],
         leiter_collection: [],
         davidson_collection: [],
         mann_collection: [],
         model_collection: [],
         bravo_collection: [],
         levitt_collection: [],
         brandt_collection: []
    }
  }

   componentDidMount() {
      axios
         .get(
            "https://aggregator-data.artic.edu/api/v1/artworks/search?q=winogrand&limit=50"
         )
         .then((response) => {
            this.setState({
               winogrand_collection: response.data.data,
            });
            console.log(response);
         }); 
    
      axios
      .get(
        "https://aggregator-data.artic.edu/api/v1/artworks/search?q=diane%20arbus&limit=5"
      )
      .then((response) => {
        this.setState({
          arbus_collection: response.data.data,
        });
        console.log(response);
      });
    
      axios
      .get(
        "https://aggregator-data.artic.edu/api/v1/artworks/search?q=josef%20koudelka"
      )
      .then((response) => {
        this.setState({
          koudelka_collection: response.data.data,
        });
        console.log(response);
      });
    
      axios
      .get(
        "https://aggregator-data.artic.edu/api/v1/artworks/search?q=lee%20friedlander&limit=49"
      )
      .then((response) => {
        this.setState({
          friedlander_collection: response.data.data,
        });
        console.log(response);
      });
    
      axios
      .get(
        "https://aggregator-data.artic.edu/api/v1/artworks/search?q=bresson&limit=47"
      )
      .then((response) => {
        this.setState({
          bresson_collection: response.data.data,
        });
        console.log(response);
      });
    
      axios
      .get(
        "https://aggregator-data.artic.edu/api/v1/artworks/search?q=robert%20frank&limit=48"
      )
      .then((response) => {
        this.setState({
          frank_collection: response.data.data,
        });
        console.log(response);
      });
    
      axios
      .get(
        "https://aggregator-data.artic.edu/api/v1/artworks/search?q=walker%20evans&limit=48"
      )
      .then((response) => {
        this.setState({
          evans_collection: response.data.data,
        });
        console.log(response);
      });
    
      axios
      .get(
        "https://aggregator-data.artic.edu/api/v1/artworks/search?q=saul%20leiter&limit=7"
      )
      .then((response) => {
        this.setState({
          leiter_collection: response.data.data,
        });
        console.log(response);
      });
    
      axios
      .get(
        "https://aggregator-data.artic.edu/api/v1/artworks/search?q=bruce%20davidson"
      )
      .then((response) => {
        this.setState({
          davidson_collection: response.data.data,
        });
        console.log(response);
      });
     
      axios
      .get(
        "https://aggregator-data.artic.edu/api/v1/artworks/search?q=sally%20mann&limit=16"
      )
      .then((response) => {
        this.setState({
          mann_collection: response.data.data,
        });
        console.log(response);
      });
     
      axios
      .get(
        "https://aggregator-data.artic.edu/api/v1/artworks/search?q=lisette%20model&limit=6"
      )
      .then((response) => {
        this.setState({
          model_collection: response.data.data,
        });
        console.log(response);
      });
     
      axios
      .get(
        "https://aggregator-data.artic.edu/api/v1/artworks/search?q=manuel%20alvarez%20bravo"
      )
      .then((response) => {
        this.setState({
          bravo_collection: response.data.data,
        });
        console.log(response);
      });
     
      axios
      .get(
        "https://aggregator-data.artic.edu/api/v1/artworks/search?q=helen%20levitt"
      )
      .then((response) => {
        this.setState({
          levitt_collection: response.data.data,
        });
        console.log(response);
      });
      axios
      .get(
        "https://aggregator-data.artic.edu/api/v1/artworks/search?q=bill%20brandt&limit=50"
      )
      .then((response) => {
        this.setState({
          brandt_collection: response.data.data,
        });
        console.log(response);
      });

  }
   render() {
      const photogs_list = photogsData.map(item => 
         <li onClick={() => this.handleSelectPhotog(item)}
            style={{
               color: 'grey',
               cursor: 'pointer',
            
            }}>
            <Link to='/photogs'>{item.name}</Link>
         </li>
      )
      const photog = photogsData.map(item => 
         <div style={{ width: '80vw', margin: '0 auto' }}>
            <h1>{item.name}</h1>
            <img src={item.bio_pic} style={{ height: '5em' }} />
            {item.about_body.map(item =>
            <p>{item}</p>)}
         </div>
      )
    return (
       <div className="App">
          <div className='layout'>
         <Header />

               
               <Switch>
                  <Route exact path="/">
                     <Home collection={this.state.frank_collection}/>
                  </Route>
                  
                  <Route exact path="/photogs">
                     <Photogs
                        selectPhotog={this.state.selectPhotog}
                        collection={this.state.winogrand_collection}
                        photog={photog}
                        collection_api={this.state.collection_api}
                     />
                  </Route>
                  


                  <Route path="/winogrand">
                  <Winogrand collection={this.state.winogrand_collection} />
                  </Route>
                  <Route path="/arbus">
                  <Arbus collection={this.state.arbus_collection} />
                  </Route>
                  <Route path="/koudelka">
                  <Koudelka collection={this.state.koudelka_collection} />
                  </Route>
                  <Route path="/friedlander">
                  <Friedlander collection={this.state.friedlander_collection} />
                  </Route>
                  <Route path="/bresson">
                  <Bresson collection={this.state.bresson_collection} />
                  </Route>
                  <Route path="/frank">
                  <Frank collection={this.state.frank_collection} />
                  </Route>
                  <Route path="/evans">
                  <Evans collection={this.state.evans_collection} />
                  </Route>
                  <Route path="/leiter">
                  <Leiter collection={this.state.leiter_collection} />
                  </Route>
                  <Route path="/davidson">
                  <Davidson collection={this.state.davidson_collection} />
                  </Route>
                  <Route path="/mann">
                  <Mann collection={this.state.mann_collection} />
                  </Route>
                  <Route path="/model">
                  <Model collection={this.state.model_collection} />
                  </Route>
                  <Route path="/bravo">
                  <Bravo collection={this.state.bravo_collection} />
                  </Route>
                  <Route path="/levitt">
                  <Levitt collection={this.state.levitt_collection} />
                  </Route>
                  <Route path="/brandt">
                  <Brandt collection={this.state.brandt_collection} />
                  </Route>

                  <Route path="/Links">
                  <Links />
                  </Route>
               </Switch>
            <Footer />
          </div>
       
      </div>
    );
  }
}
export default App;
