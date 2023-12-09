import React, { ReactNode } from 'react';
import './Body.scss';
export interface BodyProps {
    children: ReactNode;
}
const Body:React.FC<BodyProps> = ( {children} ) => (
    <React.Fragment>
        <div className="body">
            {children}
        </div>
    </React.Fragment>
);

export default Body;