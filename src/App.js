
import Main from './Main';
import './styles.css';
import * as actionCreators from './redux/actions';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

function mapStateToProps(state,ownProps){
  return {
    posts : state.posts,
    comments : state.comments
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators,dispatch)
}




const App = withRouter(connect(mapStateToProps,mapDispatchToProps)(Main))
  

export default App;
