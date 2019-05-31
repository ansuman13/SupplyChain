import React from 'react'
import Select from 'react-select'
import { ValueContainer } from 'react-select/lib/components/containers';

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

var temp_options:Array<Object> = []


let selectedOption:Array<Object> = [
  ]

interface selectedValue{
    value:number
}

interface MyState{
    options:Array<Object>
    second_option:Array<Object>
}

interface MyProps{

}
class MyComponent extends React.Component<MyProps, MyState>{
    constructor(props:any){
        super(props)
        this.state = {
            options:[{"value":0, "label":'----'}],
            second_option:[{"value":0, "label":'----'}]
        }

    }
    fetchData = () => {
        fetch('http://192.168.1.172:9090/address/cities', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'credentials':'include',
                'Access-Control-Allow-Origin':'*'
            },
            // body: JSON.stringify({
            //     "organizationName": 'test',
            //     "regNo": '123',
            //     "user": 'a1',
            //     "address": 'add1',
            //     "password": '123',
            //     "repassword": '123',
            //     "email": "ansuman13@gmail.com",
            //     "regDoc": '1234567890',
            //     "type": '123'
            // })
        }).then((res)=>{
            return res.json()
        }).then(function(res){
            if(res.response === 200){
                console.log('res',res)
            }
            else{
                console.log('res',res)
            }
        })
    }

    
    componentDidMount() {
        this.fetchData()
        for(let item in details){
            let new_item = {"value":details[item].id, "label":details[item].name}
            temp_options.push(new_item)
            this.setState({options:temp_options})
        }
    }

    

    changeLocality = (e:any) =>{
        console.log('clicked',e)
        for(let item in details){
                if(details[item].id === e.value){
                    let area_list:any = details[item].area
                    selectedOption = []
                    for(let area in area_list){
                        console.log('area_list',area_list)
                        let new_item= {"value":area_list[area].id,"label":area_list[area].name}
                        selectedOption.push(new_item)
                    }
                }
        }
        console.log('selected option:',selectedOption)
        this.setState({options:this.state.options,
            second_option:selectedOption
        })
    }
        
    
    changeSubLocality= () => {
        console.log('change this maybe')
    }
    
    
   
    render(){
        return(
        <div className="row">   
            <div className="col-sm-6">
                City:<Select options={this.state.options}  onChange={this.changeLocality}/>
            </div>
            <div className="col-sm-6">
                Locality:<Select options={selectedOption} noOptionsMessage={() => 'No city selected'} onChange={this.changeSubLocality} />
            </div>
            {/* <div className="col-sm-6">
                Sub-Locality:<Select options={selectedOption} noOptionsMessage={() => 'No city selected'} onChange={this.changeSubLocality} />
            </div> */}
        </div>
        )
    }
        
    
}


export default MyComponent
