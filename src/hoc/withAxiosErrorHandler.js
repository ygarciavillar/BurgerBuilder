import React, { Component } from 'react'
import Modal from '../components/UI/Modal/Modal'

class AxiosErrorHandler extends Component {

    constructor(props) {
        super(props)
        this.state = {
            error: null
        }

        this.reqInterceptor = this.props.axios.interceptors.request.use(req => {
            this.setState({ error: null });
            return req;
        });

        this.resInterceptor = this.props.axios.interceptors.response.use(res => res,
            error => {
                this.setState({ error: error });
            });
    }

    componentWillUnmount() {
        this.props.axios.interceptors.request.eject(this.reqInterceptor);
        this.props.axios.interceptors.response.eject(this.resInterceptor);
    }

    errorConfirmedHandler = () => {
        this.setState({ error: null })
    }

    render() {
        const C = this.props.component
        return (
            <React.Fragment>
                <Modal isOpen={this.state.error} modalClosed={this.errorConfirmedHandler}>
                    {this.state.error ?
                        <p style={{ color: 'red', fontSize: '1.2rem', textAlign: 'center' }}>
                            {this.state.error.message}</p>
                        : null}
                </Modal>
                <C {...this.props} />
            </React.Fragment>

        )
    }
}


export const withAxiosErrorHandler =
    (component, axios) => props => <AxiosErrorHandler component={component} axios={axios}{...props} />


