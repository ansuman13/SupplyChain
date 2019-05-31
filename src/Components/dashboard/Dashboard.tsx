import React from 'react'

export interface DashboardProps {
    
}
 
export interface DashboardState {
    
}
 
class Dashboard extends React.Component<DashboardProps, DashboardState> {
    constructor(props: DashboardProps) {
        super(props);
        this.state = { 
            sidebarLinks:['Products',]
    };
    }
    render() { 
        return ( 
            <h1>Dashboard contents here.</h1>
         );
    }
}
 
export default Dashboard;