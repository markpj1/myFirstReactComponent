var React = require('react');
var PropTypes = React.PropTypes;

function UserDetailsWrappers (props) {
  return (
    <div className="col-sm-6">
      <p className="lead">{props.header}</p>
      {props.children}
    </div>
  )
}

module.exports = UserDetailsWrappers;
