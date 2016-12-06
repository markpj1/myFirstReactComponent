var USER_DATA = {
  name: 'Mark P Jaramillo',
  userName: 'markpj1',
  image: 'https://www.gravatar.com/avatar/75d83b844d6d4677effd78eec681c6ee?d=404&s=200'
};

var React = require('react');
var ReactDOM = require('react-dom');


var ProfilePic = React.createClass({
  render: function () {
    return <img src={this.props.imageUrl} style={{height:100, width: 100}}></img>
  }
});

var Link = React.createClass({
  changeURL: function () {
    window.location.replace(this.props.href)
  },
  render: function () {
    return (
      <span style={{ color: 'blue', cursor: 'pointer'}}
            onClick={this.changeURL}>
        {this.props.children}
      </span>
    )
  }
})

var ProfileLink = React.createClass({
  render: function () {
    return (
      <div>
        <Link href={'https://github.com/' + this.props.userName}>
          {this.props.userName}
        </Link>
      </div>
    )
  }
});

var ProfileName = React.createClass({
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
  <Avatar user={USER_DATA}/>,
  document.getElementById('app')
);
