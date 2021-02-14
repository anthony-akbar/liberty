import React, {Component} from 'react';
import DriverListItem from "./DriverListItem/DriverListItem";

class DriverList extends Component {
    render() {
        return (
            <div>
                <DriverListItem data={this.props.data}/>
                <div>asdgdgg</div>
            </div>
        );
    }
}

export default DriverList;