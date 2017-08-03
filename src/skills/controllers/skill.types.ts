/**
 * Created by Julius Alvarado on 12/29/2016.
 */

module JuliusSkillsApp {
    export abstract class SkillType {
        protected designCategoryType = "Design";
        protected frontendCategoryType = "Front End";
        protected backendCategoryType = "Back End";
        protected databaseCategoryType = "Database";

        abstract specialty: string;

        abstract skillCategoryType(): string;
    }

    export class FrontEndSkillType extends SkillType {
        // maybe make this an array?
        specialty: string = ": html, css, & javascript";
        skillCategoryType(): string {
            return this.frontendCategoryType + this.specialty;
        }
    }
}

//\\