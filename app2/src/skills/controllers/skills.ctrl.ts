/**
 * Created by Julius Alvarado on 12/29/2016.
 */

///<reference path="../../_all.ts"/>
///<reference path="skills.ts"/>


module  JuliusSkillsApp {
    // skill cell data structure
    export class SkillCell {
        constructor(public skill: Skills) {}

        public stock: number = 3;
        public selected: boolean = false;
    }

    export class JuliusSkillsCtrl {
        public sideTitle: string = "Skills Match Matrix";
        public skillLevelWanted: number = 2;
        public defaultSkill: SkillJavascript = new SkillJavascript("includeFile");
        public selectedSkillCell = new SkillCell(this.defaultSkill);
        public skillsArray: string[] = ['CSS / CSS3', 'HTML / HTML5',
            'User Interface Development', 'AngularJS', 'TypeScript',
            'CSS3 Animations', 'Data Modeling'
        ];
    }
}


//\\