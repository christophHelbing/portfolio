import { Component, OnInit } from '@angular/core';
import {CAREER} from "../../data/career";
import {DatePipe} from "@angular/common";


@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {

  career = CAREER

  constructor(private datePipe: DatePipe) { }

  ngOnInit(): void {
  }

  public getDateDiffString(from: Date, to: Date): string {
    let monthDiff = this.getDateDiffInMonth(from, to)

    let years = (BigInt(monthDiff) / 12n)
    let months = monthDiff % 12

    let yearString = years == 1n ? " Jahr" : " Jahre"
    let monthString = months == 1 ? " Monat" : " Monate"

    if(years == 0n) {
      return months + monthString
    } else if( months == 0) {
      return years + yearString
    } else {
      return years + yearString + " " + months + monthString
    }
  }

  public getPresentDateString(to: Date): string | null {
    let presentDay = new Date()
    if(to.getFullYear() == presentDay.getFullYear() && to.getMonth() == presentDay.getMonth() && to.getDay() == presentDay.getDay()) {
      return "Heute"
    }
    return this.datePipe.transform(to, "MM/yyyy")
  }

  private getDateDiffInMonth(from: Date, to: Date): number {
    return to.getMonth() - from.getMonth() + (12 * (to.getFullYear() - from.getFullYear()))
  }
}
