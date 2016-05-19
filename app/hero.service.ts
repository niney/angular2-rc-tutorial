import { Injectable } from '@angular/core';
import { Hero } from './hero'
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
    
    getHero(id: Number) {
        return Promise.resolve(HEROES).then(
            heroes => heroes.filter(hero => hero.id === id)[0]
        );
    }
    
    getHeroes() {
        // return HEROES;
        return Promise.resolve(HEROES);
    }
    
    getHeroesSlowly() {
        return new Promise<Hero[]>(resolve =>
            setTimeout(()=>resolve(HEROES), 2000)
        );
    }
}