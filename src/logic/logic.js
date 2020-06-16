import img1 from "../images/clones.jpg";
import img2 from "../images/509623.jpg";
import img3 from "../images/Flash.jpg";

const list = [{
    url : img1,
    name : "Dr.Patel"
},{
    url : img2,
    name : "Dr.Rushabh"
},{
    url : img3,
    name : "Dr.Sarthik"
}
];

function data(index){
    return list[index];
}

export default data;