import React, { useState } from 'react';

interface Props{
    player: number;
}
function Turn({player}: Props){
    return <h1> Fuiyohhh {player==0 ? "X": "Y"} turn</h1>

}

export default Turn