module.exports = {
    nextPage: (page, totalRecords) => {
        return totalRecords * (page-1)
    }
}
