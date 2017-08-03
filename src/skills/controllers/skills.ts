/**
 * Created by Julius Alvarado on 12/29/2016.
 */

///<reference path="skill.types.ts"/>


module JuliusSkillsApp {

    export interface Skills {
        skillName: string;
        skillLevel: number;
        skillType?: SkillType;
    }

    export class jHtml implements Skills {
        skillName: string = "HTML / HTML5";
        skillLevel: number = 1;
        skillType: FrontEndSkillType = new FrontEndSkillType();
    }

    export class jCss implements Skills {
        skillName: string = "CSS / CSS3";
        skillLevel: number = 3;
        skillType: FrontEndSkillType = new FrontEndSkillType();
    }

    //
    export class SkillJavascript implements Skills {
        //
        constructor(public jKey: string) {
            this.jKey = jKey;
            console.log("jJavascript class constructor called.");
        }

        skillName: string = "JavaScript";
        skillLevel: number = 2;
        skillType: FrontEndSkillType = new FrontEndSkillType();
    }
}

//\\