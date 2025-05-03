{
    // Union Types

    type FrontendDeveloper = "lowQualityDeveloper" | "juniorDeveloper";

    type FullStackDeveloper = "juniorDeveloper" | "expertDeveloper" | "seniorDeveloper";

    type Developer = FrontendDeveloper | FullStackDeveloper; // union type


    const frontendDeveloper: FrontendDeveloper = "juniorDeveloper"; // valid
    const fullStackDeveloper: FullStackDeveloper = "seniorDeveloper"

    const developer: Developer = "expertDeveloper"; // valid




}

{

//  Intersection Types

type FrontendDeveloper = {
    skills: string[],
    designation1: "Frontend Developer",

}

type BackendDeveloper = {
    skills: string[],
    designation2: "Backend Developer",
}

type FullStackDeveloper = FrontendDeveloper & BackendDeveloper; // intersection type


const fullStackDeveloper: FullStackDeveloper = {
    skills: ["HTML", "CSS", "JavaScript", "Node.js"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
}
    



}