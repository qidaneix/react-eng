import * as React from "react";
import * as ReactDOM from "react-dom";

interface Props {
  name: string;
}

class HelloMessage extends React.Component<Props, {}> {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

ReactDOM.render(<HelloMessage name="xiao" />, document.getElementById("app"));
