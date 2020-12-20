import React, { Component } from 'react';
import './PreView.css';
import { connect } from 'react-redux';
import { userActions } from '../_actions'

class PreView extends Component {
  handleClose = () => {
    this.props.onSelectClose(false);
  }

  transferMoney = () => {
    this.props.removeAount(this.props.allState);
    this.handleClose();
  }

  render() {
    const { fromAcount, toAcount, amount } = this.props.allState;
    return (
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close" onClick={this.handleClose} >&times;</span>
          <section className="preview">
            <h4>Preview Details</h4>
            <hr />
            <section className="container-wrap">
              <section>FROM ACOUNT</section>
              <section>${fromAcount}</section>
            </section>
            <section className="container-wrap">
              <section>TO ACOUNT</section>
              <section>{toAcount}</section>
            </section>
            <section className="container-wrap">
              <section>AMOUNT</section>
              <section>${amount}</section>
            </section>
          </section>
          <hr />
          <section className="trans-btn">
            <button className="btn btn-primary transfer" onClick={this.transferMoney}>Transfer</button>
          </section>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {}
}

const mapDispatchToProps = {
  removeAount: userActions.removeAount
};

// export default PreView = connect(mapStateToProps, mapDispatchToProps)(PreView);

export default connect(mapStateToProps, mapDispatchToProps)(PreView);

// const connectedPreView = connect(mapStateToProps, mapDispatchToProps)(PreView);
// export { connectedPreView as PreView };