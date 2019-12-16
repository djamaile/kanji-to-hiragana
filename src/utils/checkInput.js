export const checkIfInputIsJapanese = input => {
    const regex = /[一-龯]/g;
    if (regex.test(input)) {
        return true;
    }
    return false;
};