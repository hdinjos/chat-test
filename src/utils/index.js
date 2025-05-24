export const formatDate = (isoDate)=> {
    const date = new Date(isoDate);
    const dateString = date.toLocaleDateString();
    return dateString;
    // console.log(dateString);
}