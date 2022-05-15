import React from "react";

interface InputProps {
    pattern: RegExp;
    name: string;
    value: string;

}
 
interface InputState {
    
}
 
class Input extends React.Component<InputProps, InputState> {

    constructor(props: InputProps) {
        super(props);
        this.state = { };
    }

    render() { 
        return ( <input /> );
    }

}
 
export default Input;