# Teamtreehouse - React 

## Webpack Basics

  - similar to gulp or grunt

- #### Common build tasks
  - module loading (require and import statements) [prevent dependency errors]
  - concatenation (combining several files into one) [fast loading]
  - minification (create the smallest file possible) [fast loading]
  
- #### Install webpack

  ```bash
  npm install webpack --save-dev  
  touch webpack.config.js
  npm install
  ```

- #### Configure webpack

  - webpack.config.json
    - `entry` tells webpack while file to start the dependency tree
    - `output` where your production bundle will be places
    - `module` customize webpack with loaders (plugins)

- #### Run webpack
  - package.json
  
    ```bash
    "scripts": {
      "build": "webpack --optimize-minimize"
    },
    ```
    
 - `npm run build`

- #### install babel compiler

  - package.json

    ```bash
    npm install --save-dev babel-loader babel-core babel-preset-es2015 webpack 
    ```

  - webpack.config.json
  
    ```js
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015']
          }
        }
      ]
    },
    ```
  
  - [github](https://github.com/babel/babel-loader)
  
- #### install webpack dev server

  - automates `npm run build` and browser refresh by watching
  
  - `npm install --save-dev webpack-dev-server`

    ```js
    "scripts": {
      "build": "webpack --optimize-minimize",
      "start": "webpack-dev-server"
    },
    ```
  
  - `npm run start`
  
  - `http://localhost:8080/`

- #### install webpack sass loader

  - [github](https://github.com/jtangelder/sass-loader)
  
  - package.json
  
    ```bash
    npm install --save-dev style-loader css-loader sass-loader
    ```

  - webpack.config.json
  
    ```js
    module: {
      loaders: [
        {
          test: /\.scss$/,
          loaders: ["style-loader", "css-loader", "sass-loader"]
        }  
      ]
    },
    ```
  - index.js
    
    ```js
    import "./styles.scss"
    ```

- #### webpack image loader

  - [github](https://github.com/thetalecrafter/img-loader)
  
  - package.json
  
    ```bash
    npm install --save-dev img-loader url-loader
    ```

  - webpack.config.json
  
    ```js
    module: {
      loaders: [
        {
          test: /\.png$/,
          loaders: ["url-loader", "img-loader"]
        }  
      ]
    },
    ```

  - styles.scss
    
    ```css
    background-image: url(me.png);
    ```

## Webpack Setup

- #### starter webpack

  - [github](https://github.com/facebookincubator/create-react-app)
  
    ```bash
    npm install -g create-react-app
    ```

- #### Webpack dependenices
  
  - node

  - npm

- #### node package manager
  
  - package.json
  
    ```sh
    npm init - y
    ```
  
- #### node dependencies

  - package.json

    ```sh
    npm install --save react react-dom # react syntax
    npm install --save-dev webpack # package loader
    npm install --save-dev webpack-dev-server # package loader listener
    npm install --save-dev babel-core babel-loader # transform js files
    npm install --save-dev babel-preset-react babel-preset-es2015 #js to react, js6 to js5
    npm install --save-dev style-loader css-loader #css in bundleJS, css to DOM
    npm install --save-dev react-hot-loader # live reload with state
    npm install --save-dev standard-loader standard # coding standard 
    ```

  - index.html
  
    ```html
    <script src="bundle.js"></script>
    ```
    
  - app.js  

    ```js
    import React from 'react'
    import ReactDOM from 'react-dom'
    ```
    ```

- #### babel

  - .babelrc
  
    ```sh
    touch .babelrc
    ```

    ```js
    {
      "presets": ["react", "es2015"]
    }
    ```

- #### webpack
 
 - webpack.config.js
 
    ```sh
    touch webpack.config.js
    ```

    ```js
    module.exports = {
      entry: './app.js',
      output: {
        path: 'build',
        filename: 'bundle.js',
      },
      module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ['react-hot', 'babel-loader'],
          },
          {
            test: /\.css$/,
            loader: 'style-loader!css-loader',
          },       
        ],
      },
    }
    ```
   
  - index.html
  
    ```html
    <script src="bundle.js"></script>
    ```
    
  - app.js  

    ```js
    import React from 'react'
    import ReactDOM from 'react-dom'
    import './css/style.css'
    ```   
   
  - package.json
  
    ```js
    "scripts": {
      "build": "webpack",
      "start": "open http://localhost:8080/webpack-dev-server/ && webpack-dev-server --progress --inline --hot --history-api-fallback",
    },
    ```
    
    ```bash
    npm run build
    npm start
    ```
    
    ```html
    http://localhost:8080/
    http://localhost:8080/webpack-dev-server/
    ```
    
## React Basics

- #### ReactDOM.render (virtualDOM, realDOM)

  ```js
  ReactDOM.render(<h1>hello</h1>, document.getElementById('container')) //
  ```

- #### React Component with JSX multi line virual DOM return

  ```js
  function Application() {
    return ( //
      <div className="application">
        <h1>hello from react</h1>
        <p>I was rendered from the Application component</p>
      </div>
    );
  }

  ReactDOM.render(<Application />, document.getElementById('container'))
  ```

- #### **props** properties to customize components

  ```js
  function Application(props) { //
    return (
      <div className="scoreboard">
        <header className="header">
          <h1>{props.title}</h1> //
        </header>

        <div className="players">
          <div className="player">
            <div className="player-name">
              Ethan Neff
            </div>
            <div className="player-score">
              <div className="counter">
                <button className="counter-action decrement"> - </button>
                <div className="counter-score"> 31 </div>
                <button className="counter-action increment"> + </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  ReactDOM.render(<Application title="My Scoreboard" />, document.getElementById('container')); //
  ```

- #### **propTypes** property object of all the object the component can take
  
  - best to have for each component
  
  - Props passed to a component should not be changed by that component
    
  ```js
  Application.propTypes = {
    title: React.PropTypes.string.isRequired,
  }

  ReactDOM.render(<Application title={"3"} />, document.getElementById('container'));
  ```

- #### **deafaultTypes** default properties 

  ```js
  Application.defaultProps = {
    title: "Scoreboard"
  }
  ```

- #### **decomposing components** allow for abstraction and reuse

  ```js
  function Header(props) {
    return (
      <div className="header">
        <h1>{props.title}</h1>
      </div>
    )
  }
  Header.propTypes = {
    title: React.PropTypes.string.isRequired,
  }

  function Player(props) {
    return (
      <div className="player">
        <div className="player-name">{props.name}</div>
        <div className="player-score">
          <Counter score={props.score} />
        </div>
      </div>
    )
  }
  Player.propTypes = {
    name: React.PropTypes.string.isRequired,
    score: React.PropTypes.number.isRequired,
  }
  function Application(props) {
    return (
      <div className="scoreboard">
        <Header title={props.title} />
        <div className="players">
          <Player name="ethan neff" score="33" />
          <Player name="samantha zapalac" score="64" />    
        </div>
      </div>
    );
  }
  Application.propTypes = {
    title: React.PropTypes.string.isRequired,
  }
  Application.defaultProps = {
    title: "Scoreboard"
  }
  ReactDOM.render(<Application />, document.getElementById('container'));
  ```

- #### loops and lists in JSX
  
  ```js
  var PLAYERS = [
    {
      name: 'ethan neff',
      score: 33,
      id: 1,
    },
    {
      name: 'chuck norris',
      score: 123,
      id: 2,
    },
    {
      name: 'luke skywalker',
      score: 22,
      id: 3,
    },
  ]

  function Header(props) {
    return (
      <div className="header">
        <h1>{props.title}</h1>
      </div>
    )
  }
  Header.propTypes = {
    title: React.PropTypes.string.isRequired,
  }

  function Player(props) {
    return (
      <div className="player">
        <div className="player-name">{props.name}</div>
        <div className="player-score">
          <Counter score={props.score} />
        </div>
      </div>
    )
  }
  Player.propTypes = {
    name: React.PropTypes.string.isRequired,
    score: React.PropTypes.number.isRequired,
  }

  function Counter(props) {
    return (
      <div className="counter">
        <button className="counter-action decrement"> - </button>
        <div className="counter-score"> {props.score} </div>
        <button className="counter-action increment"> + </button>
      </div>
    )
  }
  Player.propTypes = {
    score: React.PropTypes.number.isRequired,
  }

  function Application(props) {
    return (
      <div className="scoreboard">
        <Header title={props.title} />
        <div className="players">
          {props.players.map(function(player) {
            return <Player name={player.name} score={player.score} key={player.id} />
          })}   
        </div>
      </div>
    );
  }
  Application.propTypes = {
    title: React.PropTypes.string.isRequired,
    players: React.PropTypes.arrayOf(React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      score: React.PropTypes.number.isRequired,
      id: React.PropTypes.number.isRequired,
    })).isRequired,
  }
  Application.defaultProps = {
    title: "Scoreboard"
  }
  
  ReactDOM.render(<Application players={PLAYERS} />, document.getElementById('container'));
  ```

- #### Creating Component Class (adding state to make dynamic)
  
  ```js
  var Counter = React.createClass({
    propTypes: {
      score: React.PropTypes.number.isRequired,
    },

    render: function() {
      return (
        <div className="counter">
          <button className="counter-action decrement"> - </button>
          <div className="counter-score"> {this.props.score} </div>
          <button className="counter-action increment"> + </button>
        </div>
      );
    }
  });
  ```
  
- #### Managing state (complicated applications use Redux)

  ```js
  var Counter = React.createClass({
    propTypes: {
      initialScore: React.PropTypes.number.isRequired
    },

    getInitialState() {
      return {
        score: this.props.initialScore
      }
    },
    incrementScore(event) {
      this.setState({
        score: (this.state.score + 1)
      });
    },
    decrementScore(event) {
      this.setState({
        score: (this.state.score - 1)
      });
    },

    render: function() {
      return (
        <div className="counter">
          <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
          <div className="counter-score"> {this.state.score} </div>
          <button className="counter-action increment" onClick={this.incrementScore}> + </button>
        </div>
      );
    }
  }); 
  ```

- #### Unidirectional Data Flow
 
  - **application state** changes to the entire application (the data used for the page) (aggrigate)
  
  - **component state** changes to the isolated component itself (to function, not visible outside component)
 
  - **state** is a property that changes
   
  - data flows from **parent to child** via **properties**
  
  - data flows from **child to parent** via callback functions to properties of the components
  
  - want to concentrate our application state high in our virtual DOM tree

  ```js
  var PLAYERS = [
    {
      name: "Jim Hoskins",
      score: 31,
      id: 1,
    },
    {
      name: "Andrew Chalkley",
      score: 35,
      id: 2,
    },
    {
      name: "Alena Holligan",
      score: 42,
      id: 3,
    },
  ];

  function Header(props) {
    return (
      <div className="header">
        <h1>{props.title}</h1>
      </div>
    );
  }
  Header.propTypes = {
    title: React.PropTypes.string.isRequired,
  };

  function Counter(props) {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={function() {props.onChange(-1)}}> - </button>
        <div className="counter-score"> {props.score} </div>
        <button className="counter-action increment" onClick={function() {props.onChange(1)}}> + </button>
      </div>
    )
  }
  Counter.propTypes = {
    score: React.PropTypes.number.isRequired,
    onChange: React.PropTypes.func.isRequired,
  };

  function Player(props) {
    return (
      <div className="player">
        <div className="player-name">
          {props.name}
        </div>
        <div className="player-score">
          <Counter score={props.score} onChange={props.onScoreChange} />
        </div>
      </div>
    );
  }  
  Player.propTypes = {
    name: React.PropTypes.string.isRequired,
    score: React.PropTypes.number.isRequired,
    onScoreChange: React.PropTypes.func.isRequired,
  }

  var Application = React.createClass({
    propTypes: {
      title: React.PropTypes.string,
      initialPlayers: React.PropTypes.arrayOf(React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        score: React.PropTypes.number.isRequired,
        id: React.PropTypes.number.isRequired,
      })).isRequired,
    },
    getDefaultProps: function() {
      return {
        title: "Scoreboard",
      }
    },
    getInitialState: function() {
      return {
        players: this.props.initialPlayers
      };
    },
    onScoreChange: function(index, delta) {
      this.state.players[index].score += delta // update
      this.setState(this.state) // render
    },
    
    render: function() {
      return (
        <div className="scoreboard">
          <Header title={this.props.title} />
        
          <div className="players">
            {this.state.players.map(function(player, index) {
              return (
                <Player 
                  name={player.name}
                  score={player.score}
                  onScoreChange={function(delta) {this.onScoreChange(index, delta)}.bind(this)}
                  key={player.id} />
              )
            }.bind(this))}
          </div>
        </div>
      );
    }
  });

  ReactDOM.render(<Application initialPlayers={PLAYERS}/>, document.getElementById('container'));
  ```

- #### complete

  ```js
  var PLAYERS = [
    {
      name: "Jim Hoskins",
      score: 31,
      id: 1,
    },
    {
      name: "Andrew Chalkley",
      score: 35,
      id: 2,
    },
    {
      name: "Alena Holligan",
      score: 42,
      id: 3,
    },
  ];
  var nextId = 4;
    
  var AddPlayerForm = React.createClass({
    propTypes: {
      onAdd: React.PropTypes.func.isRequired,
    },
    getInitialState: function() {
      return {
        name: "",
      };
    },
    onNameChange: function(e) {
      this.setState({name: e.target.value});
    },
    onSubmit: function(e) {
      e.preventDefault();
    
      this.props.onAdd(this.state.name);
      this.setState({name: ""});
    },
    render: function() {
      return (
        <div className="add-player-form">
          <form onSubmit={this.onSubmit}>
            <input type="text" value={this.state.name} onChange={this.onNameChange} />
            <input type="submit" value="Add Player" />
          </form>
        </div>
      ); 
    }
  });
    
  function Stats(props) {
    var totalPlayers = props.players.length;
    var totalPoints = props.players.reduce(function(total, player){
      return total + player.score;
    }, 0);
    
    return (
      <table className="stats">
        <tbody>
          <tr>
            <td>Players:</td>
            <td>{totalPlayers}</td>
          </tr>
          <tr>
            <td>Total Points:</td>
            <td>{totalPoints}</td>
          </tr>
        </tbody>
      </table>
    )  
  }
    
  Stats.propTypes = {
    players: React.PropTypes.array.isRequired,
  };

  function Header(props) {
    return (
      <div className="header">
        <Stats players={props.players}/>
        <h1>{props.title}</h1>
        <Stopwatch />
      </div>
    );
  }
  Header.propTypes = {
    title: React.PropTypes.string.isRequired,
    players: React.PropTypes.array.isRequired,
  };

  function Counter(props) {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={function() {props.onChange(-1);}} > - </button>
        <div className="counter-score"> {props.score} </div>
        <button className="counter-action increment" onClick={function() {props.onChange(1);}}> + </button>
      </div>
    );
  }
  Counter.propTypes = {
    score: React.PropTypes.number.isRequired,
    onChange: React.PropTypes.func.isRequired,
  }
    
  var Stopwatch = React.createClass({
    getInitialState: function() {
      return {
        running: false,
        elapsedTime: 0,
        previousTime: 0,
      }
    },
    componentDidMount: function() {
      this.interval = setInterval(this.onTick,100)
    },
    componentWillUnmount: function() {
      clearInterval(this.interval)
    },
    onTick: function() {
      if (!this.state.running) return

      var now = Date.now()
      this.setState({
        previousTime: now,
        elapsedTime: this.state.elapsedTime + (now - this.state.previousTime)
      })
    },
    onStart: function() {
      this.setState({
        running: true,
        previousTime: Date.now(),
      })
    },
    onStop: function() {
      this.setState({running: false})
    },
    onReset: function() {
      this.setState({
        elapsedTime: 0,
        previousTime: Date.now(),
      })
    },
    render: function() {
      var seconds = Math.floor(this.state.elapsedTime/1000)
    
      return (
        <div className="stopwatch">
          <h2>Stopwatch</h2>
          <div className="stopwatch-time">{seconds}</div>
          { this.state.running ? <button onClick={this.onStop}>Stop</button> :  <button onClick={this.onStart}>Start</button> }
          <button onClick={this.onReset}>Reset</button>
        </div>
      )
    }
  })

  // non-state component
  function Player(props) {
    return (
      <div className="player">
        <div className="player-name">
          <a className="remove-player" onClick={props.onRemove}>✖</a>
          {props.name}
        </div>
        <div className="player-score">
          <Counter score={props.score} onChange={props.onScoreChange} />
        </div>
      </div>
    );
  }
  Player.propTypes = {
    name: React.PropTypes.string.isRequired,
    score: React.PropTypes.number.isRequired,
    onScoreChange: React.PropTypes.func.isRequired,
    onRemove: React.PropTypes.func.isRequired,
  };

  // main application
  var Application = React.createClass({
    propTypes: {
      title: React.PropTypes.string,
      initialPlayers: React.PropTypes.arrayOf(React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        score: React.PropTypes.number.isRequired,
        id: React.PropTypes.number.isRequired,
      })).isRequired,
    },
    getDefaultProps: function() {
      return {
        title: "Scoreboard",
      }
    },
    getInitialState: function() {
      return {
        players: this.props.initialPlayers,
      };
    },

    onScoreChange: function(index, delta) { // custom listener from component
      this.state.players[index].score += delta;
      this.setState(this.state);
    },
    onPlayerAdd: function(name) { // custom listener from component
      this.state.players.push({
        name: name,
        score: 0,
        id: nextId,
      });
      this.setState(this.state);
      nextId += 1;
    },
    onRemovePlayer: function(index) { // custom listener from component
      this.state.players.splice(index, 1);
      this.setState(this.state);
    },
    
    render: function() {
      return (
        <div className="scoreboard">
          <Header title={this.props.title} players={this.state.players} />
        
          <div className="players">
            {this.state.players.map(function(player, index) {
              return (
                <Player 
                  onScoreChange={function(delta) {this.onScoreChange(index ,delta)}.bind(this)}
                  onRemove={function() {this.onRemovePlayer(index)}.bind(this)}
                  name={player.name} 
                  score={player.score} 
                  key={player.id} />
              );
            }.bind(this))}
          </div>
          <AddPlayerForm onAdd={this.onPlayerAdd} />
        </div>
      );
    }
  });  

  // output to screen
  ReactDOM.render(<Application initialPlayers={PLAYERS}/>, document.getElementById('container'));
  ```

- [React Dev Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)

## React Router

 - controls history, url scheme, single page application

- #### install

  ```js
  npm install --save react-router
  ```

- #### components

  - Router, Route, hashHistory

- #### hashHistory

  ```js
  // Libs
  import React from 'react';
  import { render } from 'react-dom';
  import { Router, Route, hashHistory } from 'react-router';

  // CSS
  import './css/style.css';

  // Components
  import App from './components/App';
  import Home from './components/Home';
  import About from './components/About';

  // Render
  render((
    <Router history={hashHistory}>
      <Route path="/" component={Home} />
      <Route path="about" component={About} />
    </Router>
  ), document.getElementById('root') );
  ```

  ```
  http://localhost:8080/#/
  ```

- #### nested routes

  - `<Route component={App}>` to nest

  ```js
  // Render
  render((
    <Router history={hashHistory}>
      <Route component={App}>
        <Route path="/" component={Home} />
        <Route path="about" component={About} />
        <Route path="courses" component={Courses} />
        <Route path="teachers" component={Teachers} />
      </Route>
    </Router>
  ), document.getElementById('root') );
  ```

  - `{ this.props.children }` to pass component

  ```js
  import React, { Component } from 'react';

  class App extends Component {
    render() {
      return (
        <div className="container">
          <header>
            <span className="icn-logo"><i className="material-icons">code</i></span>
            <ul className="main-nav">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/teachers">Teachers</a></li>
              <li><a href="/courses">Courses</a></li>
            </ul>       
          </header>
          { this.props.children }
        </div>
      );
    }
  }

  export default App;
  ```

- #### router.js

  ```js
  // Libs
  import React from 'react';
  import { render } from 'react-dom';
  import { Router, Route, hashHistory } from 'react-router';

  // CSS
  import './css/style.css';

  // Routes
  import routes from './router'

  // Render
  render(routes, document.getElementById('root') );
  ```

  ```js
  // Libs
  import React from 'react';

  // Components
  import App from './components/App';
  import Home from './components/Home';
  import About from './components/About';
  import Courses from './components/Courses';
  import Teachers from './components/Teachers';

  // Routes
  const routes = (
    <Router history={hashHistory}>
      <Route component={App}>
        <Route path="/" component={Home} />
        <Route path="about" component={About} />
        <Route path="courses" component={Courses} />
        <Route path="teachers" component={Teachers} />
      </Route>
    </Router>
  )

  export default routes;
  ```

- #### navigating routes

  - `Link` element

  ```js
  import React, { Component } from 'react';
  import { Link } from 'react-router';

  class App extends Component {
    render() {
      return (
        <div className="container">
          <header>
            <span className="icn-logo"><i className="material-icons">code</i></span>
            <ul className="main-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/teachers">Teachers</Link></li>
              <li><Link to="/courses">Courses</Link></li>
            </ul>
          </header>
          { this.props.children }
        </div>
      );
    }
  }

  export default App;
  ```

- #### browser history
  
  ```js
  // Libs
  import React from 'react';
  import { Router, Route, browserHistory } from 'react-router';

  // Components
  import App from './components/App';
  import Home from './components/Home';
  import About from './components/About';
  import Courses from './components/Courses';
  import Teachers from './components/Teachers';

  // Routes
  const routes = (
    <Router history={browserHistory}>
      <Route component={App}>
        <Route path="/" component={Home} />
        <Route path="about" component={About} />
        <Route path="courses" component={Courses} />
        <Route path="teachers" component={Teachers} />
      </Route>
    </Router>
  )

  export default routes;
  ```

  ```json
  "start": "open http://localhost:8080/webpack-dev-server/ && webpack-dev-server --progress --inline --hot --history-api-fallback"
  ```

- #### active links

  ```js
  import React, { Component } from 'react';
  import NavLink from './NavLink';

  class App extends Component {
    render() {
      return (
        <div className="container">
          <header>
            <span className="icn-logo"><i className="material-icons">code</i></span>
            <ul className="main-nav">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/teachers">Teachers</NavLink></li>
              <li><NavLink to="/courses">Courses</NavLink></li>
            </ul>
          </header>
          { this.props.children }
        </div>
      );
    }
  }

  export default App;
  ```

  ```js
  // Lib
  import React, { Component } from 'react';
  import { Link } from 'react-router';

  const NavLink = props => (
    <Link {...props} activeClassName="active" />
    )

  export default NavLink
  ```

- #### Index Routes and Redirects

  ```js
  // Libs
  import React from 'react';
  import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

  // Components
  import App from './components/App';
  import Home from './components/Home';
  import About from './components/About';
  import Courses from './components/Courses';
  import Teachers from './components/Teachers';
  import CoursesCSS from './components/courses/CSS';
  import CoursesHTML from './components/courses/HTML';
  import CoursesJavaScript from './components/courses/JavaScript';

  // Routes
  const routes = (
    <Router history={browserHistory}>
      <Route component={App}>
        <Route path="/" component={Home} />
        <Route path="about" component={About} />
        <Route path="teachers" component={Teachers} />
        <Route path="courses" component={Courses}>
          <IndexRedirect to="html" />
          <Route path="css" component={CoursesCSS} />
          <Route path="html" component={CoursesHTML} />
          <Route path="javascript" component={CoursesJavaScript} />
        </Route>
      </Route>
    </Router>
  )

  // Public
  export default routes;
  ```

- #### 404 error routes

  ```js
  <Route path="*" component={NotFound} />
  ```

- #### passing props to routes

  ```js
  <Route path="about" component={About} title="About" />
  ```

  ```js
  {this.props.route.title}
  ```

- #### routes with parameters

  - route

  ```js
  <Route path="featured/:topic/:name" component={Featured} />
  ```

  - from component

  ```js
  <Link to="featured/HTML/Tommy Wingo">Tommy Wingo</Link>
  ```

  - to component

  ```js
  import React from 'react';

  const Featured = props => {
    let topic = props.params.topic
    let name = props.params.name
    return (
      <div className="main-content">
        <h2>{name}</h2>
      </div>
    );
  }

  export default Featured;
  ```

- #### navigate routes programmatically

  ```js
  import { Link, browserHistory } from 'react-router';

  class Home extends Component {

    handleSubmit(event) {
      event.preventDefault()
      let teacherName = event.target.elements[0].value
      let teacherTopic = event.target.elements[1].value
      let path = `featured/${teacherTopic}/${teacherName}`
      browserHistory.push(path)
    }

    render() {
      return (
        <div className="main-content home">
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Topic" />
            <button type="submit">Go</button>
          </form>
        </div>
      );
    }
  }

  export default Home;
  ```

## Redux

  - maintains application state in a scalable way


