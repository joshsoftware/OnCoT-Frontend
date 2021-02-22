import HeaderIDE from "shared-components/Header/HeaderIDE";

const HeaderIDEConatiner = () => {
    let totalProblems = 3;
    let currentProblem = 2;
    let organisationName = "Josh Inc."

    return (
        <HeaderIDE
            totalProblems = {totalProblems}
            currentProblem = {currentProblem}
            organisationName = {organisationName}
        />
    );
}

export default HeaderIDEConatiner;