import React from 'react';
import styles from './overlay.module.css';

export default class Overlay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false
    };
  }

  componentDidMount() {
    window.addEventListener("message", (e) => {
      if (e.data && e.data.id === this.props.id) {
        if (e.data.message === 'highlight') {
          this.setState({ active: true });
        } else if (e.data.message === 'remove') {
          this.setState({ active: false });
        }
      }
    }, false);
  }

  render() {
    const { active } = this.state;
    return (
      <div className={`${styles.overlay} ${active ? styles.active : ''}`} />
    );
  }
}
