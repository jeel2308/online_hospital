import React from "react";
import data from "../logic/logic";
import '../css/doctor.css';

class Doctor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url : "",
            name : ""
        };
    }
    componentDidMount() {
        const id = Number(this.props.match.params.id);
        const {url,name} = data(id);
        this.setState(()=>({
            url,name
        }));
    }
    render(){

        return(
          <div id="content">
              <img src={this.state.url} id="image" alt={'profile pic'} />
              <div id="info">
                  <h3 id="name">{this.state.name}</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa massa, vulputate eu neque quis, sollicitudin auctor nulla.
                      Morbi mauris augue, consequat nec velit a, interdum suscipit tortor.
                      Ut hendrerit tincidunt leo a gravida. Mauris non dapibus quam, a aliquet mi.
                      Aliquam massa turpis, tincidunt eu nibh nec, sagittis molestie turpis.
                      In convallis at felis in finibus. Maecenas vel blandit purus, vitae malesuada lorem.
                      Proin aliquet ligula eu ante interdum mollis. Integer id placerat enim, nec blandit quam.
                      Nunc dui lectus, lacinia eget est sed, sollicitudin hendrerit lectus.
                      Nullam volutpat gravida lectus nec dapibus. Aliquam ullamcorper gravida eros a sollicitudin.
                      Duis ac justo eget nisi mollis efficitur.</p>
              </div>
          </div>
        );
    }
}

export default Doctor;