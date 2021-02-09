import React from 'react';
import s from './Main.module.css';

class ProfileStatus extends React.Component {

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    state = {
        editMode: false,
        status: this.props.status
    }

    activteEditMode = () => {
        this.setState ({
            editMode: true
        })
    }

    deactivteEditMode = () => {
        this.setState ({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div className={s.status}>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick= {this.activteEditMode}>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur= {this.deactivteEditMode} value= {this.state.status}/>
                </div>

                }
            </div>
        )
    }
}

export default ProfileStatus;