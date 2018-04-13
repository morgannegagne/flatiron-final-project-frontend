import React from 'react'
import { connect } from 'react-redux'
import { createList, showAllLists } from '../actions/lists'
import ListCard from '../components/ListCard'

class ListsContainer extends React.Component{

  state ={
    name: ''
  }

  handleChange = (e) => {
    this.setState({name: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createList(this.state.name)
    this.setState({name: ''})
  }

  handleShowAllLists = () => {
    this.props.showAllLists()
  }

  render(){
    const lists = this.props.lists.map(list => <ListCard key={`list-${list.id}`} list={list} /> )
    const { activeList } = this.props
    return(
      <div>
        {
          activeList ?
          <div>
            <button onClick={this.handleShowAllLists}>Back to all Lists</button>
            <h3>{activeList.name}</h3>
            {activeList.spots.map(spot => <div>{spot.place.name}</div>)}
          </div>
          :
          <div>
            ADD LIST
            <form onSubmit={this.handleSubmit}>
              <input type="text" value={this.state.name} onChange={this.handleChange} placeholder="Name..." />
              <input type="submit"/>
            </form>
            {lists}
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists.lists,
  activeList: state.lists.activeList
})

export default connect(mapStateToProps, { createList, showAllLists })(ListsContainer);
