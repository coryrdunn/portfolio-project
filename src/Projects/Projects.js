import React from 'react';
import Nav from '../Nav';

class Projects extends React.Component {
    constructor(props) {
        super(props);

        this.state={};
    }

    render() {
        return (
            <div>
                <Nav />
                <h1>Projects</h1>
            </div>
        )
    }
};

export default Projects;