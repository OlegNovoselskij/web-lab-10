import React from 'react';

const Spinner = () => {
    return (
        <div style={styles.spinnerContainer}>
            <div style={styles.spinner}></div>
        </div>
    );
};

const styles = {
    spinnerContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
    spinner: {
        border: '8px solid #f3f3f3', /* Light gray */
        borderTop: '8px solid #3498db', /* Blue */
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        animation: 'spin 2s linear infinite',
    },
};

export default Spinner;
