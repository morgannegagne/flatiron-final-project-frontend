import React from 'react'
import { connect } from 'react-redux'
import { createList, showAllLists } from '../actions/lists'
import ListCard from '../components/ListCard'
import SpotCard from '../components/SpotCard'
import { Button, Popup, Form, Input } from 'semantic-ui-react'

class ListsContainer extends React.Component{

  state = {
    name: '',
    open: false
  }

  handleChange = (e) => {
    this.setState({name: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createList(this.state.name)
    this.setState({name: '', open: false})
  }

  handleShowAllLists = () => {
    this.props.showAllLists()
  }

  handleOpen = () => {
    this.setState({open: true})
  }

  handleClose = () => {
    this.setState({open: false})
  }

  render(){

    const lists = this.props.lists.map(list => <ListCard key={`list-${list.id}`} list={list} /> )
    const { activeList } = this.props
    return(
      <div className="side-panel-item">
        {
          activeList ?
          <div>
            <div className="side-panel-subheader">
              <h3>{activeList.name}</h3>
            </div>
            <a onClick={this.handleShowAllLists}>Back to all Lists</a>
            <div className="spot-container">
              {activeList.spots.map(spot => <SpotCard spot={spot} {...spot}/>)}
            </div>
          </div>
          :
          <div>
          <div style={{width: "90%", margin: "auto"}}>
            <Popup
              trigger={<Button fluid>New List</Button>}
              content={
                <Form onSubmit={this.handleSubmit}>
                  <Input type="text" value={this.state.name} onChange={this.handleChange} placeholder="Name..."/>
                  <Button onClick={this.handleSubmit}>Create New List</Button>
                </Form>
              }
              open={this.state.open}
              onOpen={this.handleOpen}
              onClose={this.handleClose}
              on="click"
              basic
              />

          </div>
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
