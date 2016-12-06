var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var styles = require('../styles');
var UserDetails = require('./UserDetails');
var UserDetailsWrappers = require('./UserDetailsWrappers');
var MainContainer = require('./MainContainer');
var Loading = require('./Loading');

function ConfirmBattle (props) {
  return props.isLoading === true
    ? <Loading text='Waiting' speed={300} />
    :<MainContainer>
    <h1>Confirm Players</h1>
    <div className="col-sm-8 col-sm-offset-2">
      <UserDetailsWrappers header="Player One">
        <UserDetails info={props.playersInfo[0]}/>
      </UserDetailsWrappers>
      <UserDetailsWrappers header="Player Two">
        <UserDetails info={props.playersInfo[1]}/>
      </UserDetailsWrappers>
    </div>
    <div className="col-sm-8 col-sm-offset-2">
      <div className="col-sm-12" style={styles.space}>
        <button type="button" className="btn btn-lg btn-success" onClick={props.onInitiateBattle}>
          Initiate Battle
        </button>
      </div>
      <div className="col-sm-12" style={styles.space}>
        <Link to='/playerOne'>
          <button type="button" className="btn btn-lg btn-danger">
            Reselect Players
          </button>
        </Link>
      </div>
    </div>
</MainContainer>

};

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onInitiateBattle: PropTypes.func.isRequired,
  playersInfo: PropTypes.array.isRequired
}

module.exports = ConfirmBattle;
