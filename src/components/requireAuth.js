import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (ChildComponent) => {
    class ComposedComponent extends Component {

    // When component just gets rendered
    componentDidMount() {
        this.shouldNavigateAway();
    }

    // Any time component receives new props
    componentDidUpdate() {
        this.shouldNavigateAway();
    }

    shouldNavigateAway() {
        if (!this.props.auth) {
        this.props.history.push('/');
        }
    }

    render() {
            // Must pass all props to child component
            return <ChildComponent {...this.props} />;
        }
    }

    function mapStateToProps(state) {
        return { auth: state.auth };
    }

    return connect(mapStateToProps)(ComposedComponent);
};