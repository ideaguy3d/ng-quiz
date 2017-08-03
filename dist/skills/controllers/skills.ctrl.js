/**
 * Created by Julius Alvarado on 12/29/2016.
 */
///<reference path="../../_all.ts"/>
///<reference path="skills.ts"/>
var JuliusSkillsApp;
(function (JuliusSkillsApp) {
    // skill cell data structure
    var SkillCell = (function () {
        function SkillCell(skill) {
            this.skill = skill;
            this.stock = 3;
            this.selected = false;
        }
        return SkillCell;
    }());
    JuliusSkillsApp.SkillCell = SkillCell;
    var JuliusSkillsCtrl = (function () {
        function JuliusSkillsCtrl() {
            this.sideTitle = "Skills Match Matrix";
            this.skillLevelWanted = 2;
            this.defaultSkill = new JuliusSkillsApp.SkillJavascript("includeFile");
            this.selectedSkillCell = new SkillCell(this.defaultSkill);
            this.skillsArray = ['CSS / CSS3', 'HTML / HTML5',
                'User Interface Development', 'AngularJS', 'TypeScript',
                'CSS3 Animations', 'Data Modeling'
            ];
        }
        return JuliusSkillsCtrl;
    }());
    JuliusSkillsApp.JuliusSkillsCtrl = JuliusSkillsCtrl;
})(JuliusSkillsApp || (JuliusSkillsApp = {}));
//\\ 
//# sourceMappingURL=skills.ctrl.js.map