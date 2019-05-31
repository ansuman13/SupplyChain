import React, { Component } from 'react';
 
// we will get this from API call 
const details = [
    {
        id: 1,
        name: "Kathmandu",
        area: [
            {
                id: 1,
                cityId: 1,
                name: "Balaju",
                parent_id: "root"
                
            },
            {
                id: 2,
                cityId: 1,
                name: "Baneshowr",
                parentId: "root"
            }
        ]
    },    
    {
        id: 2,
        name: "Bhaktapur",
        area: [
            {
                id: 1,
                cityId: 2,
                name: "Baneshowr",
                parentId: "root"
            },
            {
                id: 3,
                cityId: 2,
                name: "Shakhamul",
                parentId: "root"
            }
        ]
    },
    {
        id: 3,
        name: "Lalitpur",
        area: [
            {
                id: 1,
                cityId: 3,
                name: "Pulchowk",
                parentId: "root"
            },
            {
                id: 3,
                cityId: 3,
                name: "Sanepa",
                parentId: "root"
            }
        ]
    },
    {
        id: 4,
        name: "Mustang",
        area: [
            {
                id: 1,
                cityId: 3,
                name: "Pulchowk",
                parentId: "root"
            },
            {
                id: 3,
                cityId: 3,
                name: "Sanepa",
                parentId: "root"
            }
        ]
    },
    {
        id: 5,
        name: "Bheri",
       
        
    },
]

class FilteredList extends Component{
    
    state={
        initialItems: [
          "Kathmandu",
          "Butwal",
          "Narangardh",
          "Birgunj",
          "Bhairawa",
          "Mahendranagar",
          "Lalitpu",
        ],
        items: [],
        selectedItems:[]
      }

    filterList = (event) =>{
        var updatedList = this.state.initialItems;
        updatedList = updatedList.filter(function(item){
            return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
            });
      this.setState({items: updatedList});
    }
    

    componentWillMount= function(){
        this.setState({items: this.state.initialItems})
      }

    render= function(){
        
        const style ={
            width:'20%'
        }

        return (
          <div className="filter-list" style={style}>
            <form>
                <fieldset className="form-group">
                <input type="text" className="form-control form-control-lg" placeholder="Search" onChange={this.filterList}/>
                </fieldset>
            </form>
          <List items={this.state.items} />
          </div>
        );
      }
}

class List extends Component{
    render= function(props){
        return (
          <ul className="list-group">
          {
            this.props.items.map(function(item) {
              return <li className="list-group-item" data-category={item}
              key={item}
              onClick={()=>console.log('clicked',item)}
              >{item}</li>
            })
           }
          </ul>
        )  
      }
}
  
  export default FilteredList;

