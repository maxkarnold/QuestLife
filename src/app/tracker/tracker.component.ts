import { Component, DestroyRef, inject } from '@angular/core';
import { AttributeService } from '../attribute.service';
import { Attribute } from '../attribute.model';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrl: './tracker.component.scss'
})
export class TrackerComponent {
  attributeUpgrades = [10, 20, 40]
  allAttributes$ = this.service.allAttributes$;
  allAttributes: Attribute[] = [];
  destroyRef = inject(DestroyRef)

  constructor(private service: AttributeService) {
    this.allAttributes$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(attributes => {
      this.allAttributes = attributes;
    })
  }

  addExp(xp: number, attr: Attribute) {
    // const isConfirmed = window.confirm('Are you sure?');
    // if (!isConfirmed) {
    //   return;
    // }

    const currentAttribute = this.allAttributes.find(a => a.name === attr.name);

    if (!currentAttribute) {
      return;
    }

    const newXp = currentAttribute.currentXP + xp;
    const { level, currentLevelMaxXP } = currentAttribute;
    if (newXp >= currentLevelMaxXP) {
      const newLevel = this.service.calcLevelUp(level, currentLevelMaxXP, newXp);
      currentAttribute.currentXP = newLevel.currentXP;
      currentAttribute.level = newLevel.level;
      currentAttribute.currentLevelMaxXP = newLevel.currentMaxXP;
    } else {
      currentAttribute.currentXP = newXp;
    }


    const updatedAttributes = [...this.allAttributes];
    this.allAttributes$.next(updatedAttributes);
    this.service.calcOverall(currentAttribute, xp);
  }
}
