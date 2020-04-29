import React, { Component } from "react"

export default class Logs extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <ul>
                    {this.props.logs.map((log, i) => {
                        return <li key={i}>{log}</li>
                    })}
                </ul>
            </div>
        )
    }
}
