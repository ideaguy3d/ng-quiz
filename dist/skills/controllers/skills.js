/**
 * Created by Julius Alvarado on 12/29/2016.
 */
///<reference path="skill.types.ts"/>
var JuliusSkillsApp;
(function (JuliusSkillsApp) {
    var jHtml = (function () {
        function jHtml() {
            this.skillName = "HTML / HTML5";
            this.skillLevel = 1;
            this.skillType = new JuliusSkillsApp.FrontEndSkillType();
        }
        return jHtml;
    }());
    JuliusSkillsApp.jHtml = jHtml;
    var jCss = (function () {
        function jCss() {
            this.skillName = "CSS / CSS3";
            this.skillLevel = 3;
            this.skillType = new JuliusSkillsApp.FrontEndSkillType();
        }
        return jCss;
    }());
    JuliusSkillsApp.jCss = jCss;
    //
    var SkillJavascript = (function () {
        //
        function SkillJavascript(jKey) {
            this.jKey = jKey;
            this.skillName = "JavaScript";
            this.skillLevel = 2;
            this.skillType = new JuliusSkillsApp.FrontEndSkillType();
            this.jKey = jKey;
            console.log("jJavascript class constructor called.");
        }
        return SkillJavascript;
    }());
    JuliusSkillsApp.SkillJavascript = SkillJavascript;
})(JuliusSkillsApp || (JuliusSkillsApp = {}));
//\\ 
//# sourceMappingURL=skills.js.map