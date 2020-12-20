import React, { Component } from 'react';
import './RecentTransaction.css';
import { connect } from 'react-redux';
import { store } from "../_helpers/store";
import moment from 'moment';

class RecentTransaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [],
      'active': 0,
      isDate: false,
      isBeneficiary: false,
      isAmount: false,
      beforeFilteredArr: []
    };
    store.subscribe(() => {
      this.setState({
        arr: store.getState().users.remainingAmount,
        beforeFilteredArr: store.getState().users.remainingAmount
      })
    });
  }

  filteredOption(index, btn) {
    this.setState({ 'active': index });
    console.log({ index, btn })
    if (btn == 'date') {
      this.setState(prevState => ({
        isDate: !prevState.isDate
      }), () => {
        this.sortASCDEC(this.state.isDate, 'date');
      });
    } else if (btn == 'toAcount') {
      this.setState(prevState => ({
        isBeneficiary: !prevState.isBeneficiary
      }), () => {
        this.sortASCDEC(this.state.isBeneficiary, 'toAcount');
      });

    } else {
      this.setState(prevState => ({
        isAmount: !prevState.isAmount
      }), () => {
        this.sortASCDEC(this.state.isAmount, 'amount');
      });
    }
  }

  sortASCDEC(order, param) {
    switch (order) {
      case true: return this.setState({
        param: this.state.arr.sort((a, b) => {
          if (param == 'date')
            return new Date(a.date) - new Date(b.date);
          if (param == 'toAcount')
            return a[param].localeCompare(b[param])
          if (param == 'amount')
            return a[param] - b[param]
        })
      })
      case false: return this.setState({
        param: this.state.arr.sort((a, b) => {
          if (param == 'date')
            return new Date(b.date) - new Date(a.date);
          if (param == 'toAcount')
            return b[param].localeCompare(a[param])
          if (param == 'amount')
            return b[param] - a[param]
        })
      })
    }
  }

  searchResult = (e) => {
    console.log(e.target.value);
    let anyValue = e.target.value
    let beforefilteredData = this.state.beforeFilteredArr;
    if (anyValue) {
      this.setState({
        arr: this.state.arr.filter((item, index) => {
          return item.toAcount.toLocaleLowerCase().includes(anyValue) ? item : ''
        })
      })

    } else {
      this.setState({
        arr: beforefilteredData
      })
    }
  }

  render() {
    const random = () => Math.floor(Math.random() * 255);
    var current = this.state.active;
    var getClass = function (name, index) {
      if (index === current)
        return name + ' active';
      return name;
    };

    return (
      <div className="recent-trans">
        <section className="common-header">
          <div className="custom-icon"><i className="fa fa-shopping-bag" aria-hidden="true"></i></div>
          <div>Recent Transaction</div>
        </section>
        <section className="search-header">
          <section className="input-fields">
            <input type="text" placeholder="search by name..." onChange={this.searchResult.bind(this)} />
          </section>
          <section className="sorted-sec">
            <label>Sort by</label>
            <div className="btn-group">
              <button onClick={this.filteredOption.bind(this, 0, "date")} className={getClass("date", 0)}>
                DATE
                <i
                  className={this.state.isDate === true
                    ? "fa fa-sort-asc"
                    : "fa fa-sort-desc"
                  }
                  aria-hidden="true">
                </i>
              </button>
              <button onClick={this.filteredOption.bind(this, 1, "toAcount")} className={getClass("beneficiary", 1)}>BENEFICIARY
              <i
                  className={this.state.isBeneficiary === true
                    ? "fa fa-sort-asc"
                    : "fa fa-sort-desc"
                  }
                  aria-hidden="true">
                </i>
              </button>
              <button onClick={this.filteredOption.bind(this, 2, "amount")} className={getClass("amount", 2)}>AMOUTN
              <i
                  className={this.state.isAmount === true
                    ? "fa fa-sort-asc"
                    : "fa fa-sort-desc"
                  }
                  aria-hidden="true">
                </i>
              </button>
            </div>
          </section>
        </section>
        <section className="wrap-table">
          {
            this.state.arr && this.state.arr.length > 0 ?
              this.state.arr.map((item, i) => {
                return (
                  <section key={i} className="table-body" style={{ borderLeft: `10px solid rgb(${random()}, ${random()}, ${random()})` }}>
                    <section className="date">{moment(item.date).format('MMM DD')}</section>
                    <section className="image">
                      <img src={require('../assets/icons/amazon-online-store.png').default} />
                    </section>
                    <section className="desc">
                      <div className="title">{item.toAcount}</div>
                      <div className="sub-title">{item.subTitle}</div>
                    </section>
                    <section className="amount">${item.amount}</section>
                  </section>)
              })
              : <section className="notransaction">No Transaction Found</section>
          }
        </section>
      </div>
    );
  }
}


function mapStateToProps(state) {
  let addItem = state.users.remainingAmount;
  return { addItem }
}

const mapDispatchToProps = {
};

export default RecentTransaction = connect(mapStateToProps, mapDispatchToProps)(RecentTransaction);