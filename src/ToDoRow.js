import React, {Component} from 'react';

export class ToDoRow extends Component {
    //Below we define the value for the onChange event property as a callback()
    //This is How child components are able to communicate with parents as the cannot update the value of props passed to them from a parent component bacause React only supports a one way data flow (from parent to child). However, the parent can provide a function property (prop) that children can call upon whenever something important happens

    //Two different types of props:
    //data props - allows the parent to pass data in the child
    //function props - allows the child to communicate with the parent

    render = () =>
        <tr>
            <td>
                {this.props.item.action}
            </td>
            <td>
                <input type="checkbox" checked={this.props.item.done}
                
                    onChange = { () => this.props.callback(this.props.item)}/>
            </td>
        </tr>
}