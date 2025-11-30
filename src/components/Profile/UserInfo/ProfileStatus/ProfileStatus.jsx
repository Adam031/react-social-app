import styles from './ProfileStatus.module.css';
import React from 'react'

export class ProfileStatus extends React.Component {
    state = {
        statusValue: this.props.status,
        editMode: false
    }

    activeEditMode = () => {
        this.setState({ editMode: !this.state.editMode });
    }

    exitEditMode = () => {
        this.setState({ editMode: !this.state.editMode });
        this.props.updateStatus(this.state.statusValue);
    }

    updateStatusValue = (e) => {
        this.setState({statusValue: e.target.value})
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({statusValue: this.props.status});
        }
    }

    render() {
        return (
            <div className={styles.profileStatus}>
                {this.state.editMode ?
                    <input type="text" value={this.state.statusValue} className={styles.statusInput}
                           onBlur={this.exitEditMode} onInput={this.updateStatusValue} autoFocus={true}/>
                :
                    <p className={styles.statusText} onDoubleClick={this.activeEditMode}>{this.state.statusValue || "No status"}</p>
                }
            </div>
        )
    }
}