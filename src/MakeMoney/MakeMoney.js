import React from 'react';
import { connect } from 'react-redux';
import PreView from '../PreView/PreView';
import './MakeMoney.css';
import { store } from "../_helpers/store";

export default class MakeMoney extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fromAcount: '5824.76',
      toAcount: '',
      amount: '',
      submitted: false,
      preView: false,
      date: new Date()
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onSubmitButton = this.onSubmitButton.bind(this);
    this.handleClose = this.handleClose.bind(this);

    store.subscribe(() => {
      console.log(store.getState().users.remainingAmount)
      this.setState({
        fromAcount: store.getState().users.remainingAmount[0].fromAcount
      })
    });
  }

  componentDidMount() {
    // this.props.getTransactionDetails();
    console.log(this.props)
  }

  handleClose = (param) => {
    this.setState({ preView: param, toAcount: '', amount: '' });
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ submitted: true });
  }

  onSubmitButton() {
    if (this.state.toAcount && this.state.amount) {
      this.setState({
        preView: true,
      });
    }
  }

  render() {
    const { fromAcount, toAcount, amount, submitted } = this.state;
    return (
      <div>
        <section className="common-header">
          <div className="custom-icon"><i className="fa fa-refresh" aria-hidden="true"></i></div>
          <div>Make a Money</div>
        </section>
        <div className="money-body col-lg-12">
          <form name="form" onSubmit={this.handleSubmit}>
            {/* <div className={'form-group' + (submitted && !fromAcount ? ' has-error' : '')}> */}
            <div className={'form-group'}>
              <label htmlFor="fromAcount">From Acount</label>
              <input type="text" placeholder={`Free Checking(4692) - $${fromAcount}`} disabled className="custom-form-control" name="fromAcount" onChange={this.handleChange} />
              {/* {submitted && !fromAcount &&
                <div className="help-block">From Acount is required</div>
              } */}
            </div>
            <div className={'form-group' + (submitted && !toAcount ? ' has-error' : '')}>
              <label htmlFor="toAcount">To Acount</label>
              <input type="toAcount" className="custom-form-control" name="toAcount" value={toAcount} onChange={this.handleChange} />
              {submitted && !toAcount &&
                <div className="help-block">To Acount is required</div>
              }
            </div>
            <div className={'form-group' + (submitted && !amount ? ' has-error' : '')}>
              <label htmlFor="amount">Amount</label>
              <input type="amount" className="custom-form-control" name="amount" value={amount} onChange={this.handleChange} />
              {submitted && !amount &&
                <div className="help-block">Amount is required</div>
              }
            </div>
            <div className="form-group submit-button">
              <button className="btn btn-primary submit" onClick={this.onSubmitButton}>SUBMIT</button>
              {this.state.preView ?
                <PreView onSelectClose={this.handleClose} allState={this.state} /> :
                null
              }
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function mapState(state) {
  console.log(state)
}

const actionCreators = {
  // getTransactionDetails: userActions.removeAount,

};

const connectedMakeMoneyPage = connect(mapState, actionCreators)(MakeMoney);
export { connectedMakeMoneyPage as MakeMoney };