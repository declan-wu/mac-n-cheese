import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class promotionItem extends Component {
  // state = {  order: 0, imgsrc: "../../public/Logos/McDs.png", title: 'Free Big Mac with any $20+ purchase', expiry: '1 week'};

  constructor(props) {
    super(props);

    this.state = {
      order: this.props.order,
      imgsrc: this.props.imgsrc,
      text: this.props.text,
      expiry: this.props.expiry,
      nextref: this.props.nextref,
    };
  }

  render() {
    return (
      <div className="mx-5 px-5 py-5 text-left media ">
        <Link to={this.state.nextref}>
          <img
            src={this.state.imgsrc}
            className="photo small align-self-start mr-3 table-dark Aliphoto"
            alt="..."
          />
        </Link>
        <div className="mx-3 pl-2 media-body align-baseline text-light textblock bg-success">
          <h5 className=" display-4  text-lg-left mt-0 ">{this.state.text}</h5>

          {/*<p>{this.state.text}</p>*/}
          <p align={"right"} className={"bg-danger px-5"}>
            {" "}
            Expiry date in {this.state.expiry}
          </p>

          {/*<a className="stretched-link">Go somewhere</a>*/}
        </div>
      </div>
    );
  }
}

export default connect()(promotionItem);
