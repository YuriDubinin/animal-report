import { Component } from "react";

import "./animals-delete-form.css";

class AnimalsDeleteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            kindOfAnimal: "",
        };
    }

    //instant adding data from the form to the state
    onValueChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    //remove animal from the list
    onSubmit = (event) => {
        event.preventDefault();

        this.props.onDelete(this.state.name, this.state.kindOfAnimal);

        this.setState({
            name: "",
            kindOfAnimal: "",
        });
    };

    render() {
        const { name, kindOfAnimal } = this.state;

        return (
            <div className="app-add-form">
                <h3>Удалить</h3>
                <form className="add-form d-flex" onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        className="form-control new-post-label"
                        placeholder="Имя"
                        name="name"
                        value={name}
                        onChange={this.onValueChange}
                    />
                    <input
                        type="text"
                        className="form-control new-post-label"
                        placeholder="Вид"
                        name="kindOfAnimal"
                        value={kindOfAnimal}
                        onChange={this.onValueChange}
                    />

                    <button type="submit" className="btn btn-outline-light">
                        Удалить
                    </button>
                </form>
            </div>
        );
    }
}

export default AnimalsDeleteForm;
