import React from 'react';

interface Props {
    isFilled: () => void;
    value: string; 
}

function Squares({ isFilled, value }: Props) {
    return (
        <button className="square" onClick={isFilled}>
            {value}
        </button>
    );
}

export default Squares;
