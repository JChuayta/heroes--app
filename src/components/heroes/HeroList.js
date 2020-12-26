import React, { useMemo } from 'react'
import { getHeroesbyPublisher } from '../../selectors/getHeroesbyPublisher';
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {
    
    const heroes = useMemo(() => getHeroesbyPublisher( publisher ), [publisher])
    
    return (
        <div className="card-columns animate__animated animate__fadeIn">
            {
                heroes.map( hero => (
                    <HeroCard 
                        key={ hero.id }
                        { ...hero }
                    />
                    
                ))
            } 
        </div>
    )
}
