import React from 'react';
import { connect } from "react-redux";
import { HOME_PAGE_LOADED } from '../actions/actionTypes';
import { Button, Container } from '@material-ui/core';
import WTextField from '../component/WTextField';
import WCheckbox from '../component/WCheckbox';
import WSelect from '../component/WSelect';
import WDatePicker from '../component/WDatePicker';

const mapStateToProps = state => ({
    appName: state.common.appName,
    token: state.common.token
});

const mapDispatchToProps = dispatch => ({
    onLoad: (tab, pager, payload) =>
        dispatch({ type: HOME_PAGE_LOADED, tab, pager, payload }),
});

const genderTypes = [
    {
        "code": "M",
        "description": "Male"
    },
    {
        "code": "F",
        "description": "Female"
    },
    {
        "code": "O",
        "description": "Other(s)"
    }
]

class Home extends React.Component {
    constructor() {
        super();
        this.state = { FirstName: '', LastName: '', Gender: '', BirthDate: null, Agree: false };
    }

    setFirstName = (value) => {
        this.setState({ ...this.state, FirstName: value });
        console.log(this.state);
    }

    setLastName = (value) => {
        this.setState({ ...this.state, LastName: value });
        console.log(this.state);
    }

    onGenderChange = (value) => {
        this.setState({ ...this.state, Gender: value });
        console.log(this.state);
    }

    setBirthDate = (value) => {
        this.setState({ ...this.state, BirthDate: new Date(value) });
        console.log(this.state);
    }

    getAgree = (value) => {
        this.setState({ ...this.state, Agree: value });
        console.log(this.state);
    }

    submitData = (value) => {
        console.log(this.state);
        alert("Registration successful.")
    }

    render() {
        return (
            <Container fixed className="page_container">
                <div className="App">
                    <h3>Registration</h3>
                    <form noValidate>
                        <div className="form-group">
                            <WTextField name="FirstName" id="FirstName" placeholder="First name"
                                label="First name" onChange={this.setFirstName} />
                        </div>
                        <div className="form-group">
                            <WTextField name="LastName" id="LastName" placeholder="Last name"
                                label="Last name" onChange={this.setLastName} />
                        </div>
                        <div className="form-group">
                            <WSelect options={genderTypes} valueField="code" displayField="description"
                                name="Gender" id="Gender"
                                label="Select Gender" onChange={this.onGenderChange} />
                        </div>
                        <div className="form-group">
                            <div className="dateRange_div">
                                <WDatePicker placeHolder="Birth Date" label="Birth Date" name="BirthDate" id="BirthDate"
                                    onChange={this.setBirthDate} />
                            </div>
                        </div>
                        <div className="form-group">
                            <WCheckbox label="I agree to the terms of service" onChange={this.getAgree} checked={false} />
                        </div>

                        <div>
                            <Button variant="contained" color="secondary" onClick={this.submitData}>
                                Submit
                        </Button>
                        </div>
                    </form>
                </div>
            </Container>
        )
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);