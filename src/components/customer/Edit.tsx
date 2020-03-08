// import required modules
import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import axios from 'axios';

// define data types of input fields
export interface IValues {
    [key: string]: any;
}

// declare expected type for object state
export interface IFormState {
    id: number,
    customer: any;
    values: IValues[];
    submitSuccess: boolean;
    loading: boolean;
}

// make class to extend react component to edit customer objects
class EditCustomer extends React.Component<RouteComponentProps<any>, IFormState> {
    constructor(props: RouteComponentProps) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            customer: {},
            values: [],
            loading: false,
            submitSuccess: false,
        }
    }

    // check network request from client side to match customer with their data in db
    // customers matched by id then display info on form
    public componentDidMount(): void {
        axios.get(`http://localhost:5000/customers/${this.state.id}`).then(data => {
            this.setState({ customer: data.data });
        })
    }
    
    // add method to process submission and handle changes to values in fields
    // use Promise<void> for future-like object as placeholder for async api result, object in ready state
    private processFormSubmission = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        this.setState({ loading: true });
        axios.patch(`http://localhost:5000/customers/${this.state.id}`, this.state.values).then(data => {
            this.setState({ submitSuccess: true, loading: false })
            setTimeout(() => {
                this.props.history.push('/');
            }, 1500)
        })
    }
    private setValues = (values: IValues) => {
        this.setState({ values: { ...this.state.values, ...values } });
    }

    // handle changes
    private handleInputChanges = (e:React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        this.setValues({ [e.currentTarget.id]: e.currentTarget.value})
    }

    // add method to render the Edit component
    public render() {
        const { submitSuccess, loading } = this.state;
        return (
            <div className="App">
                {this.state.customer &&
                    <div>
                        < h1 > CRM App</h1>
                        <p> Built with React.js and TypeScript by @sojackyso </p>

                        <div>
                            <div className={"col-md-12 form-wrapper"}>
                                <h2> Edit Customer </h2>
                                {submitSuccess && (
                                    <div className="alert alert-info" role="alert">
                                        Customer details have been successfully edited. </div>
                                )}
                                <form id={"create-post-form"} onSubmit={this.processFormSubmission} noValidate={true}>
                                    <div className="form-group col-md-12">
                                        <label htmlFor="first_name"> First Name </label>
                                        <input type="text" id="first_name" defaultValue={this.state.customer.first_name} onChange={(e) => this.handleInputChanges(e)} name="first_name" className="form-control" placeholder="Enter customer's first name" />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label htmlFor="last_name"> Last Name </label>
                                        <input type="text" id="last_name" defaultValue={this.state.customer.last_name} onChange={(e) => this.handleInputChanges(e)} name="last_name" className="form-control" placeholder="Enter customer's last name" />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label htmlFor="email"> Email </label>
                                        <input type="email" id="email" defaultValue={this.state.customer.email} onChange={(e) => this.handleInputChanges(e)} name="email" className="form-control" placeholder="Enter customer's email address" />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label htmlFor="phone"> Phone </label>
                                        <input type="text" id="phone" defaultValue={this.state.customer.phone} onChange={(e) => this.handleInputChanges(e)} name="phone" className="form-control" placeholder="Enter customer's phone number" />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label htmlFor="address"> Address </label>
                                        <input type="text" id="address" defaultValue={this.state.customer.address} onChange={(e) => this.handleInputChanges(e)} name="address" className="form-control" placeholder="Enter customer's address" />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label htmlFor="description"> Description </label>
                                        <input type="text" id="description" defaultValue={this.state.customer.description} onChange={(e) => this.handleInputChanges(e)} name="description" className="form-control" placeholder="Enter Description" />
                                    </div>
                                    <div className="form-group col-md-4 pull-right">
                                        <button className="btn btn-success" type="submit">
                                            Edit Customer </button>
                                        {loading &&
                                            <span className="fa fa-circle-o-notch fa-spin" />
                                        }
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}
export default withRouter(EditCustomer)