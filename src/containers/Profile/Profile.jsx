import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loadProfile } from "../../actions/profileActions";
import PropTypes from "prop-types";
import("./Profile.sass");

export class Profile extends Component {
    static propTypes = {
        name: PropTypes.string,
        content: PropTypes.string,
        loadProfile: PropTypes.func.isRequired
    };
    componentDidMount() {
        this.props.loadProfile();
    }
    render() {
        const { name, content } = this.props;
        return (
            <div className="profile">
                <b>{name}</b>: {content}
            </div>
        );
    }
}

const mapStateToProps = ({ profileReducer }) => ({
    name: profileReducer.profile.name,
    content: profileReducer.profile.content
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ loadProfile }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
