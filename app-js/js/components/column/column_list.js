import React, { Component } from 'react';
import { connect } from 'react-redux';
import reorder from '../../common/reorder';
import ColumnCard from './column_card';
import { updateColumnPosition } from '../../actions/columns';

class ColumnkList extends Component {
  componentDidMount() {
    this.reorder = reorder.bind(this);
    this.reorder(this.props.updateColumnPosition, 'js-drag-column');
  }

  columnList() {
    if (this.props.columns) {
      return this.props.columns.map((col, i)=> <ColumnCard column={col} key={col.id} pos={i} />);
    }
  }

  render() {
    return (
      <div className="row">{this.columnList()}</div>
    );
  }
}

export default connect(null, { updateColumnPosition })(ColumnkList);
