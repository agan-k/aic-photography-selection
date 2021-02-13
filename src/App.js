import React, { Component } from "react"
import axios from "axios"
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import photogsData from './components/photogsData'
import './SharedStyle.css'

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

const url_collection_query = 'https://api.artic.edu/api/v1/artworks/search?q='
const collection_query_fields = 'fields=id,title,date_display,artist_display,place_of_origin,description,thumbnail,image_id'

class App extends Component {
  constructor() {
    super()
     this.state = {        
         selectPhotog: null,
         collection_api: null,
         collection: [],
         //artists
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
            `${url_collection_query}winogrand&limit=50&${collection_query_fields}`
         )
         .then((response) => {
            this.setState({
               winogrand_collection: response.data.data,
            });
            console.log(response);
         }); 

      axios
         .get(
           `${url_collection_query}diane%20arbus&limit=5&${collection_query_fields}`
         )
         .then((response) => {
           this.setState({
             arbus_collection: response.data.data
           });
           console.log(response);
         });
    
      axios
         .get(
            `${url_collection_query}josef%20koudelka&${collection_query_fields}`
         )
         .then((response) => {
         this.setState({
            koudelka_collection: response.data.data,
         });
         console.log(response);
         });
    
      axios
      .get(
         `${url_collection_query}lee%20friedlander&limit=49&${collection_query_fields}`
      )
      .then((response) => {
        this.setState({
          friedlander_collection: response.data.data,
        });
        console.log(response);
      });
    
      axios
      .get(
         `${url_collection_query}bresson&limit=47&${collection_query_fields}`
      )
      .then((response) => {
        this.setState({
          bresson_collection: response.data.data,
        });
        console.log(response);
      });
    
      axios
      .get(
         `${url_collection_query}robert%20frank&limit=48&${collection_query_fields}`
      )
      .then((response) => {
        this.setState({
          frank_collection: response.data.data,
        });
        console.log(response);
      });
    
      axios
      .get(
         `${url_collection_query}walker%20evans&limit=48&${collection_query_fields}`
      )
      .then((response) => {
        this.setState({
          evans_collection: response.data.data,
        });
        console.log(response);
      });
    
      axios
      .get(
         `${url_collection_query}saul%20leiter&limit=7&${collection_query_fields}`
      )
      .then((response) => {
        this.setState({
          leiter_collection: response.data.data,
        });
        console.log(response);
      });
    
      axios
      .get(
         `${url_collection_query}bruce%20davidson&${collection_query_fields}`
      )
      .then((response) => {
        this.setState({
          davidson_collection: response.data.data,
        });
        console.log(response);
      });
     
      axios
      .get(
         `${url_collection_query}sally%20mann&limit=16&${collection_query_fields}`
      )
      .then((response) => {
        this.setState({
          mann_collection: response.data.data,
        });
        console.log(response);
      });
     
      axios
      .get(
         `${url_collection_query}lisette%20model&limit=6&${collection_query_fields}`
      )
      .then((response) => {
        this.setState({
          model_collection: response.data.data,
        });
        console.log(response);
      });
     
      axios
      .get(
         `${url_collection_query}manuel%20alvarez%20bravo&${collection_query_fields}`
      )
      .then((response) => {
        this.setState({
          bravo_collection: response.data.data,
        });
        console.log(response);
      });
     
      axios
      .get(
         `${url_collection_query}helen%20levitt&${collection_query_fields}`
      )
      .then((response) => {
        this.setState({
          levitt_collection: response.data.data,
        });
        console.log(response);
      });
      axios
      .get(
         `${url_collection_query}bill%20brandt&limit=50&${collection_query_fields}`
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

      const image_id = this.state.arbus_collection[0]
      console.log(this.state.arbus_collection[0])
    return (
       <div className="App">
          <div className='layout'>
             
         <Header />
               
               <Switch>
                  <Route exact path="/">
                     <Home collection={this.state.levitt_collection}/>
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
