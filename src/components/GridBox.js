import PropTypes from 'prop-types';
import styles from './GridBox.module.css';

function GridBox({
  children,
}) {
  return (
    <main className={styles.gridbox}>
      {children}
    </main>
  );
}

GridBox.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default GridBox;
