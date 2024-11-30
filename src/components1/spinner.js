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
        width: '60px',
        height: '60px',
        border: '6px solid rgba(0, 0, 0, 0.1)', // Напівпрозорий бордюр
        borderTop: '6px solid #4CAF50', // Яскравий зелений акцент
        borderRadius: '50%',
        animation: 'spin 1s ease-in-out infinite', // Анімація
    },
};

// Додаємо стилі для анімації через @keyframes
const spinnerStyle = document.createElement('style');
spinnerStyle.innerHTML = `
@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}`;
document.head.appendChild(spinnerStyle);

export default Spinner;