import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import  Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';
 //Accordion
const items = [
    {
        title: 'What is React',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'why use react',
        content: 'React is a favourit JS libarary among engineers',

    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    },
]

// Choose Color (dropdown)
const options =[
    {
        label:'The Color Red',
        value: 'red'
    },
    {
        label:'The Color Green',
        value: 'green'
    },
    {
        label: 'A Shade of Blue',
        value: 'blue'
    },
];

    // Router Mappings
    // const showAccordion = () => {
    //     if(window.location.pathname ==='/') {
    //         return <Accordion items={items} />;
    //     }
    // };


    // const showList = () => {       //wikipedia list api 
    //     if(window.location.pathname==='/list') {
    //         return <Search />;
    //     }
    // };

    // const showDropdown = () => {
    //     if(window.location.pathname==='/dropdown') {
    //         return <Dropdown  />;
    //     }
    // }
    // const ShowTranslate = () => {
    //     if(window.location.pathname==='/translate') {
    //         return <Translate />;
    //     }
    // }
        // eslint-disable-next-line 
        export default () => {
            const [selected, setSelected] = useState(options[0]);
        return (
            <div className='ui container'>
                <Header/>
                <Route path="/">
                    <Accordion  items={items}/>
                </Route>
                <Route path="/list"> 
                    <Search />
                </Route>
                <Route path="/dropdown"> 
                    <Dropdown 
                    label = "Select a Color"
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                    />
                </Route> 
                <Route path="/translate"> 
                    <Translate />
                </Route>   
            </div>
    );
    };

























