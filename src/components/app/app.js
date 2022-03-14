import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import AnimalsList from "../animals-list/animals-list";
import AnimalsAddForm from "../animals-add-form/animals-add-form";
import AnimalsDeleteForm from "../animals-delete-form/animals-delete-form";

import "./app.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //database emulation
            data: [
                { name: "Ляля", kindOfAnimal: "Морской лев", treatment: false, id: 1 },
                { name: "Чемал", kindOfAnimal: "Белый кит", treatment: false, id: 2 },
                { name: "Сева", kindOfAnimal: "Дельфин", treatment: true, id: 3 },
                { name: "Артём", kindOfAnimal: "Дельфин", treatment: true, id: 4 },
                { name: "Ая", kindOfAnimal: "Белый кит", treatment: false, id: 5 },
                { name: "Тика", kindOfAnimal: "Морж", treatment: true, id: 6 },
                { name: "Мэри", kindOfAnimal: "Морской лев", treatment: false, id: 7 },
                { name: "Нюша", kindOfAnimal: "Дельфин", treatment: false, id: 8 },
            ],
        };
        this.maxId = 9;
    }

    //adds animals to the list, no protecting against invalid input
    addItem = (name, kindOfAnimal) => {
        const newItem = {
            name: name,
            kindOfAnimal: kindOfAnimal,
            treatment: false,
            id: this.maxId++,
        };

        this.setState(({ data }) => ({
            data: [...data, newItem],
        }));
    };

    //removes animal from the list
    deleteItem = (name, kindOfAnimal) => {
        this.state.data.forEach((item) => {
            if (item.name === name && item.kindOfAnimal === kindOfAnimal) {
                this.setState(({ data }) => ({
                    data: data.filter((elem) => elem.name !== name),
                }));
            }
        });
    };

    //check if an animal is on the list, returns true or false
    checkAvailability = (name, kindOfAnimal) => {
        //construction that checks for the presence of the desired object in the array
        const itemExists = this.state.data.find(
            (animal) => animal.name === name && animal.kindOfAnimal === kindOfAnimal
        );

        if (itemExists) {
            return true;
        } else {
            return false;
        }
    };

    render() {
        return (
            <div className="app">
                <AppInfo />

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>

                <AnimalsList data={this.state.data} />
                <AnimalsAddForm onAdd={this.addItem} onCheck={this.checkAvailability} />
                <AnimalsDeleteForm onDelete={this.deleteItem} onCheck={this.checkAvailability} />
            </div>
        );
    }
}

export default App;
