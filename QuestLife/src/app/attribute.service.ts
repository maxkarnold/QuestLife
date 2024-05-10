import { DestroyRef, Injectable, inject } from '@angular/core';
import * as attributesJson from '../assets/attributes.json';
import { Attribute, BaseAttribute } from './attribute.model';
import { BehaviorSubject } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class AttributeService {
  allAttributes$: BehaviorSubject<Attribute[]> = new BehaviorSubject(this.getAttributes());
  overallLevel$: BehaviorSubject<BaseAttribute> = new BehaviorSubject({
    name: 'Overall',
    level: 1,
    currentXP: 0,
    currentLevelMaxXP: 200,
  });
  overallLevel: BaseAttribute = {} as BaseAttribute;
  destroyRef = inject(DestroyRef);

  constructor() {
    this.overallLevel$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(lvl => this.overallLevel = lvl);
  }

  getAttributes(): Attribute[] {
    const attributes = localStorage.getItem('lifeAttributes');

    if (!attributes) {
      return Array.from(attributesJson).map(a => {
        return {
          ...a,
          level: 1,
          currentXP: 0,
          currentLevelMaxXP: 100
        }
      }) as Attribute[]
    }

    return JSON.parse(attributes) as Attribute[];
  }

  calcLevelUp(level: number, currentMaxXP: number, newXp: number) {
    return {
      level: level + 1,
      currentMaxXP: currentMaxXP * 2.25,
      currentXP: newXp - currentMaxXP
    }
  }

  calcOverall(currentAttribute: Attribute, addedXp: number) {

    let {level, currentLevelMaxXP, currentXP} = this.overallLevel;
    const newXp = Math.round((addedXp / (currentAttribute.level * 0.75)) + currentXP)
    if (newXp >= currentLevelMaxXP) {
      currentXP = newXp - currentLevelMaxXP;
      currentLevelMaxXP = currentLevelMaxXP * 2.25;
      level = level + 1;
    } else {
      currentXP = addedXp + newXp;
    }

    const newOverall: BaseAttribute = {
      ...this.overallLevel,
      level,
      currentLevelMaxXP,
      currentXP,
    };
    console.log(addedXp, newXp, currentLevelMaxXP);
    this.overallLevel$.next(newOverall);
  }
}
