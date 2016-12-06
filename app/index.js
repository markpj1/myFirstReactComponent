var USER_DATA = {
  name: 'Mark P Jaramillo',
  userName: 'markpj1',
  image: 'https://www.gravatar.com/avatar/75d83b844d6d4677effd78eec681c6ee?d=404&s=200'
}
//FIRST
//Focused
//Independent
//Reusable
//Small
//Testable

var React = require('react');
var ReactDOM = require('react-dom');

var ProfilePic = React.createClass ({
  render: function () {
    return <img src={this.props.imageUrl} style={{height: 100, width: 100}}></img>
  }
});

var ProfileLink = React.createClass ({
  render: function () {
    return (
           <div>
              <a href={'https://github.com/' + this.props.userName}>
                {this.props.userName}
              </a>
            </div>
    )
  }
});

var ProfileName = React.createClass ({
  render: function () {
    return <div>{this.props.name}</div>
  }
});

var Avatar = React.createClass({
  render: function () {
    return (
      <div>
        <ProfilePic imageUrl={this.props.user.image} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink userName={this.props.user.userName} />
      </div>
    );
  }
});

ReactDOM.render(
  <Avatar user={USER_DATA} />,
  document.getElementById('app')
);
