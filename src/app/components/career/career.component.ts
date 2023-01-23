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

  public getDateDiffInYears(from: Date, to: Date): number {
    return to.getFullYear() - from.getFullYear()
  }

  public getPresentDateString(to: Date): string | null {
    let presentDay = new Date()
    if(to.getFullYear() == presentDay.getFullYear() && to.getMonth() == presentDay.getMonth() && to.getDay() == presentDay.getDay()) {
      return "Heute"
    }
    return this.datePipe.transform(to, "MM/yyyy")
  }
}
