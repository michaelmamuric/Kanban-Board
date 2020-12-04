import React from 'react';
import { ListCheck } from 'react-bootstrap-icons';

// CSS in JS
const EmptyCSS = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: '15vh',
    alignItems: 'center'
}

const Empty = () => {
    return (
        <div style={EmptyCSS}>
            <ListCheck size={100} />
            <h5>No tasks found</h5>
        </div>
    )
}

export default Empty;