// Importing React and Component from react module
import React, { Component } from "react";
// declaring a variable using different todo, and this is a list of dummy todso activities as we are not going to use database systmes like sql or mongodb in this tutorial; kindda like we did in the FastAPI crash course.  
import Modal from "./components/Modal" //add this after modal creation



const tasks = [
  {
    id: 1,
    title: "Call Clients",
    description: "Call clients for overdue invoices.",
    completed: true
  },
  {
    id: 2,
    title: "Dunning",
    description: "Sending dunning letters to clients for uncollected cash.",
    completed: false
  },
  {
    id: 3,
    title: "Order Release",
    description: "Check out customers accounts and release or block orders accordingly.",
    completed: true
  },
  {
    id: 4,
    title: "Weekly Reports",
    description: "Sending the weekly reports for overdue invoices.",
    completed: false
  },
];
// create a class based component called App; you can use [statless] functional component if you like
class App extends Component {
  // first of all we need a constructor for props
  constructor(props) {
    super(props);
    this.state = {
      modal: false, //add this after modal creation
      viewCompleted: false,
      activeItem: {  //add this after modal creation
        title: "", //add this after modal creation
        description: "", //add this after modal creation
        completed: false  //add this after modal creation
      },//add this after modal creation
      taskList: tasks
    };
  }
  ////add this after modal creation
  toggle = () => {//add this after modal creation
    this.setState({ modal: !this.state.modal });//add this after modal creation
  };
  handleSubmit = item => {//add this after modal creation
    this.toggle();//add this after modal creation
    alert("save" + JSON.stringify(item));//add this after modal creation
  };
  handleDelete = item => {//add this after modal creation
    alert("delete" + JSON.stringify(item));//add this after modal creation
  };
  createItem = () => {//add this after modal creation
    const item = { title: "", description: "", completed: false };//add this after modal creation
    this.setState({ activeItem: item, modal: !this.state.modal });//add this after modal creation
  };
  editItem = item => {//add this after modal creation
    this.setState({ activeItem: item, modal: !this.state.modal });//add this after modal creation
  };
  ////add this after modal creation



  // next we need to set completed tasks to check if a task is completed then viewcompleted is set to true, by default viewcompleted is set to false (above), we will do that by creating a property displaycompleted and assign it to an arrow function expression that takes status as a parameter 
  displayCompleted = status => {
    if (status) {
      return this.setState({ viewCompleted: true });
    }
    return this.setState({ viewCompleted: false });
  };

  // here simply we are going to assign an arrow function that must return one of 2 scnearios: either a task completed then we should see complete on the screen, otherwise we will see incomplete.
  renderTabList = () => {
    return (
      // my-5 margin y to set both top and bottom ,  mx is for right and left 
      <div className="my-5 tab-list">
        <span
          onClick={() => this.displayCompleted(true)}
          className={this.state.viewCompleted ? "active" : ""}
        >
          Completed
            </span>
        <span
          onClick={() => this.displayCompleted(false)}
          className={this.state.viewCompleted ? "" : "active"}
        >
          Incompleted
            </span>
      </div>
    );
  };




  // -I- Start by this for visual effects to viewer
  // then we'll create a third property renderItems, assigned to a function
  // we'll pass viewCompleted variable which by default is set to false, to this.state
  // we'll declare a new variable newItems and assign it to a filter the taskList using filter which is an array method {or higher order function} that calls a callback function in this case it takes item as a parameter to set item.completed to viewcompleted.
  renderItems = () => {
    const { viewCompleted } = this.state;
    const newItems = this.state.taskList.filter(
      item => item.completed == viewCompleted
    );
    // and then we want to return newItems while mapping each item , and map is another array function which calls a callback function taking item as a parameter 
    // we will return here the key and title, each item has an id as we have defined it in the tasks array, and we want to display the item description which will span around the title 
    return newItems.map(item => (
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span
          className={`todo-title mr-2 ${this.state.viewCompleted ? "completed-todo" : ""
            }`}
          title={item.description}
        >
          {item.title}
        </span>
        <span>
          {/* mr stands for margin right */}
          {/* mb stands for margin bottom */}
          <button className="btn btn-info mr-2"> Edit </button>
          <button className="btn btn-danger">Delete </button>
        </span>
      </li>
    ));
  };

  render() {
    return (
      <main className="content">
        <h1 className="text-black text-uppercase text-center my-4">Task Manager</h1>
        <div className="row ">
          {/* grid system in bootstrap */}
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <div className="">
                <button className="btn btn-primary">Add task</button>
              </div>
              {this.renderTabList()}
              <ul className="list-group list-group-flush">
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
        {this.state.modal ? (
          <Modal activeItem={this.state.activeItem} toggle={this.toggle} onSave={this.handleSubmit} />
        ) : null}
      </main>
    );
  }
}
export default App;