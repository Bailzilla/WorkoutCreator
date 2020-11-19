import React from 'react';
import Card from './Card';

const CardList = ({ routine }) => {
    return(
        <div>
            {
                routine.map((lift, i) => {
                    return (
                        <Card
                            pic={routine[i].src}
                            name={routine[i].name}
                            />
                    );
                })
            }
        </div>
    );
}

export default CardList;