import { Component, OnInit } from '@angular/core';
import {SKILLS} from "../../data/skills";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skill = SKILLS

  constructor() { }

  ngOnInit(): void {
  }

}
