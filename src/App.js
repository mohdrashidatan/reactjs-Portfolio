import React, { Component} from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';

class App extends Component {
    state = {displayBio:false};

    // constructor() {
    //     // sub class 
    //     super();
    //     this.state = {displayBio:false};
    //     console.log('Component this', this);

    //     this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    // }

    toggleDisplayBio = () =>  {
        this.setState({displayBio: !this.state.displayBio});
    }

    render() {
        return (
            <div>
                <h1>Hello</h1>
                <p>i am Rashid; a born again programmer</p>
                <p>Looking forwared to create a deployable project during my life time</p>
                {
                this.state.displayBio ? (
                    <div>
                        <p>I live in Singapore and code ever dya</p>
                        <p>I also a practising bookkeeper</p>
                        <button onClick={this.toggleDisplayBio}>Show Less</button>
                    </div>
                ) : (
                    <div>
                        <button onClick={this.toggleDisplayBio}>Read More</button>
                    </div>
                )
                }
                <hr/>
                <Projects/>
                <hr/>
                <SocialProfiles/>
            </div>

        )
    }

}

export default App;