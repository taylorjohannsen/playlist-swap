import React from 'react'
import './App.scss'

type State = {
    cat: string,
    bloop: string
}

type Props = {
    meow: string,
    dog?: string
}

class App extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            cat: 'meow',
            bloop: 'ayay'
        }
    }
    
    render() {
        return (
            <div>
                <div className="cat">{this.state.cat}</div>
                <div className="cat">{this.state.bloop}</div>
            </div>
        )
    }
}


export default App
